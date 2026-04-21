<<<<<<< HEAD
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Mail, Phone, Navigation, Send, Share2 } from 'lucide-react';

function useInViewHook(options = {}) {
  const [ref, setRef] = React.useState(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (options.triggerOnce) {
          observer.unobserve(entry.target);
        }
      } else if (!options.triggerOnce) {
        setInView(false);
      }
    }, {
      threshold: options.threshold || 0.1,
    });

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, options]);

  return { ref: setRef, inView };
}

export default function Contact() {
  const { ref, inView } = useInViewHook({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'jeethukumar573@gmail.com',
      href: 'https://mail.google.com/mail/u/0/?view=cm&fs=1&to=jeethukumar573@gmail.com&su=Let%27s%20Connect&body=Hi%20Jeethu%2C',
      color: 'neon-cyan',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9949888573',
      href: 'https://wa.me/919949888573?text=Hi%20Jeethu%2C%20I%20would%20like%20to%20connect%20with%20you!',
      color: 'neon-purple',
    },
    {
      icon: Navigation,
      title: 'Location',
      value: 'Tenali, Andhra Pradesh',
      href: 'https://www.google.com/maps/search/Tenali,Andhra+Pradesh',
      color: 'neon-blue',
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 px-4 md:px-8 relative"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-neon-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-neon-cyan/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-5xl mx-auto w-full"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-neon">
              Let&apos;s Get In Touch
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Have a project in mind? Let&apos;s discuss how I can help bring your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold text-neon-cyan mb-8">Contact Information</h3>

            {contactMethods.map((method) => {
              const Icon = method.icon;
              const isExternal = method.href.startsWith('http');
              return (
                <motion.a
                  key={method.title}
                  href={method.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  whileHover={{ x: 10 }}
                  className="flex gap-4 p-4 rounded-lg bg-dark-card/50 border border-dark-border/50 hover:border-neon-purple/30 transition-all group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-neon flex items-center justify-center text-dark-bg`}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>

                  <div className="flex-grow">
                    <h4 className="font-semibold text-gray-200 group-hover:text-neon-cyan transition-colors">
                      {method.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{method.value}</p>
                  </div>
                </motion.a>
              );
            })}

            {/* Social Links */}
            <div className="mt-10 pt-6 border-t border-dark-border/50">
              <p className="text-gray-400 mb-4">Connect on social media</p>
              <div className="flex gap-4">
                {[
                  { name: 'LinkedIn', color: 'neon-blue', icon: 'bi-linkedin', url: 'https://www.linkedin.com/in/jeethukumarganchi23' },
                  { name: 'GitHub', color: 'neon-cyan', icon: 'bi-github', url: 'https://github.com/jeethukumar23' },
                  { name: 'Instagram', color: 'neon-purple', icon: 'bi-instagram', url: '#' },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotateZ: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 rounded-lg bg-dark-card border border-dark-border hover:border-${social.color}/30 hover:shadow-glow-${social.color.split('-')[1]} flex items-center justify-center text-gray-400 hover:text-${social.color} transition-all font-semibold text-sm`}
                    title={social.name}
                  >
                    <i className={`bi ${social.icon}`}></i>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="p-8 rounded-lg bg-dark-card/50 border border-dark-border/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">Name</label>
                  <motion.input
                    whileFocus={{ scale: 1.02, boxShadow: '0 0 20px rgba(192, 132, 252, 0.2)' }}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=""
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border/50 rounded-lg text-gray-200 placeholder-gray-600 focus:outline-none focus:border-neon-purple/50 transition-all"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">Email</label>
                  <motion.input
                    whileFocus={{ scale: 1.02, boxShadow: '0 0 20px rgba(6, 182, 212, 0.2)' }}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=""
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border/50 rounded-lg text-gray-200 placeholder-gray-600 focus:outline-none focus:border-neon-cyan/50 transition-all"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">Message</label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02, boxShadow: '0 0 20px rgba(192, 132, 252, 0.2)' }}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder=""
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border/50 rounded-lg text-gray-200 placeholder-gray-600 focus:outline-none focus:border-neon-purple/50 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 0 20px rgba(192, 132, 252, 0.8)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 px-6 bg-gradient-neon text-dark-bg font-semibold rounded-lg hover:shadow-glow-purple transition-shadow flex items-center justify-center gap-2"
                >
                  {submitted ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        ✓
                      </motion.div>
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </form>

              {/* Form Note */}
              <p className="text-gray-500 text-sm text-center mt-4">
                Or reach out on social media - I&apos;m always happy to connect!
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">
            Ready to start working together?
          </p>
          <motion.button
  onClick={() =>
    window.open(
      "https://wa.me/919949888573?text=Hi%20Jeethu%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20connect!",
      "_blank"
    )
  }
  whileHover={{
    scale: 1.05,
    boxShadow: '0 0 30px rgba(6, 182, 212, 0.6)',
  }}
  whileTap={{ scale: 0.95 }}
  className="px-10 py-4 border-2 border-neon-cyan text-neon-cyan font-semibold rounded-lg hover:shadow-glow-cyan transition-all"
>
  Schedule a Call
</motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
=======
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Mail, Phone, Navigation, Send, Share2 } from 'lucide-react';

function useInViewHook(options = {}) {
  const [ref, setRef] = React.useState(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (options.triggerOnce) {
          observer.unobserve(entry.target);
        }
      } else if (!options.triggerOnce) {
        setInView(false);
      }
    }, {
      threshold: options.threshold || 0.1,
    });

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, options]);

  return { ref: setRef, inView };
}

export default function Contact() {
  const { ref, inView } = useInViewHook({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'jeethukumar573@gmail.com',
      href: 'https://mail.google.com/mail/u/0/?view=cm&fs=1&to=jeethukumar573@gmail.com&su=Let%27s%20Connect&body=Hi%20Jeethu%2C',
      color: 'neon-cyan',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9949888573',
      href: 'https://wa.me/919949888573?text=Hi%20Jeethu%2C%20I%20would%20like%20to%20connect%20with%20you!',
      color: 'neon-purple',
    },
    {
      icon: Navigation,
      title: 'Location',
      value: 'Tenali, Andhra Pradesh',
      href: 'https://www.google.com/maps/search/Tenali,Andhra+Pradesh',
      color: 'neon-blue',
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 px-4 md:px-8 relative"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-neon-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-neon-cyan/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-5xl mx-auto w-full"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-neon">
              Let&apos;s Get In Touch
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Have a project in mind? Let&apos;s discuss how I can help bring your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold text-neon-cyan mb-8">Contact Information</h3>

            {contactMethods.map((method) => {
              const Icon = method.icon;
              const isExternal = method.href.startsWith('http');
              return (
                <motion.a
                  key={method.title}
                  href={method.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  whileHover={{ x: 10 }}
                  className="flex gap-4 p-4 rounded-lg bg-dark-card/50 border border-dark-border/50 hover:border-neon-purple/30 transition-all group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-neon flex items-center justify-center text-dark-bg`}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>

                  <div className="flex-grow">
                    <h4 className="font-semibold text-gray-200 group-hover:text-neon-cyan transition-colors">
                      {method.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{method.value}</p>
                  </div>
                </motion.a>
              );
            })}

            {/* Social Links */}
            <div className="mt-10 pt-6 border-t border-dark-border/50">
              <p className="text-gray-400 mb-4">Connect on social media</p>
              <div className="flex gap-4">
                {[
                  { name: 'LinkedIn', color: 'neon-blue', icon: 'bi-linkedin', url: 'https://www.linkedin.com/in/jeethukumarganchi23' },
                  { name: 'GitHub', color: 'neon-cyan', icon: 'bi-github', url: 'https://github.com/jeethukumar23' },
                  { name: 'Instagram', color: 'neon-purple', icon: 'bi-instagram', url: '#' },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotateZ: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 rounded-lg bg-dark-card border border-dark-border hover:border-${social.color}/30 hover:shadow-glow-${social.color.split('-')[1]} flex items-center justify-center text-gray-400 hover:text-${social.color} transition-all font-semibold text-sm`}
                    title={social.name}
                  >
                    <i className={`bi ${social.icon}`}></i>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="p-8 rounded-lg bg-dark-card/50 border border-dark-border/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">Name</label>
                  <motion.input
                    whileFocus={{ scale: 1.02, boxShadow: '0 0 20px rgba(192, 132, 252, 0.2)' }}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=""
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border/50 rounded-lg text-gray-200 placeholder-gray-600 focus:outline-none focus:border-neon-purple/50 transition-all"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">Email</label>
                  <motion.input
                    whileFocus={{ scale: 1.02, boxShadow: '0 0 20px rgba(6, 182, 212, 0.2)' }}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=""
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border/50 rounded-lg text-gray-200 placeholder-gray-600 focus:outline-none focus:border-neon-cyan/50 transition-all"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">Message</label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02, boxShadow: '0 0 20px rgba(192, 132, 252, 0.2)' }}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder=""
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border/50 rounded-lg text-gray-200 placeholder-gray-600 focus:outline-none focus:border-neon-purple/50 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 0 20px rgba(192, 132, 252, 0.8)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 px-6 bg-gradient-neon text-dark-bg font-semibold rounded-lg hover:shadow-glow-purple transition-shadow flex items-center justify-center gap-2"
                >
                  {submitted ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        ✓
                      </motion.div>
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </form>

              {/* Form Note */}
              <p className="text-gray-500 text-sm text-center mt-4">
                Or reach out on social media - I&apos;m always happy to connect!
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">
            Ready to start working together?
          </p>
          <motion.button
  onClick={() =>
    window.open(
      "https://wa.me/919949888573?text=Hi%20Jeethu%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20connect!",
      "_blank"
    )
  }
  whileHover={{
    scale: 1.05,
    boxShadow: '0 0 30px rgba(6, 182, 212, 0.6)',
  }}
  whileTap={{ scale: 0.95 }}
  className="px-10 py-4 border-2 border-neon-cyan text-neon-cyan font-semibold rounded-lg hover:shadow-glow-cyan transition-all"
>
  Schedule a Call
</motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
>>>>>>> 78b30b44027e2c4d262ea383c1c20c6909638bb3
