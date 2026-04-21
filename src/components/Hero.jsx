import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Heart, Mail } from 'lucide-react';

export default function Hero() {
  // Helper function to create backspace sequence
  const createBackspaceSequence = (text) => {
    const sequence = [];
    for (let i = text.length; i >= 0; i--) {
      sequence.push(text.substring(0, i), 50);
    }
    return sequence;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const typeSequence = [
    'Full Stack Developer',
    1500,
    ...createBackspaceSequence('Full Stack Developer'),
    300,
    'AI Enthusiast',
    1500,
    ...createBackspaceSequence('AI Enthusiast'),
    300,
    'Cloud Engineer',
    1500,
    ...createBackspaceSequence('Cloud Engineer'),
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Animated background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-neon-purple/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-neon-cyan/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center"
      >
        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full bg-neon-purple/10 border border-neon-purple/30 text-neon-purple text-sm font-semibold">
            Welcome to my portfolio
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="text-transparent bg-clip-text bg-gradient-neon">
            Hi, I&apos;m Jeethu Kumar Ganchi
          </span>
        </motion.h1>

        {/* Typing Animation */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="text-lg md:text-2xl text-gray-400 h-12">
            <TypeAnimation
              sequence={typeSequence}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="text-neon-cyan"
              speed={50}
            />
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto"
        >
          I create beautiful, interactive web experiences with cutting-edge technologies.
          Passionate about building scalable applications and exploring AI possibilities.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row gap-4 justify-center mb-12"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(192, 132, 252, 0.8)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-neon text-dark-bg font-semibold rounded-lg flex items-center justify-center gap-2 hover:shadow-glow-purple transition-shadow cursor-pointer"
          >
            View My Work
            <ArrowRight className="w-5 h-5" />
          </motion.a>

          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, borderColor: '#06b6d4' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-neon-purple text-neon-purple font-semibold rounded-lg hover:shadow-glow-purple transition-all cursor-pointer"
          >
            View Resume
          </motion.a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center"
        >
          {[
            { Icon: Heart, href: 'https://www.linkedin.com/in/jeethukumarganchi23', label: 'Support', target: '_blank' },
            { Icon: Mail, href: '#contact', label: 'Email' },
            { Icon: ArrowRight, href: '#about', label: 'Explore' },
          ].map(({ Icon, href, label, target }) => (
            <motion.a
              key={label}
              href={href}
              target={target}
              rel={target === '_blank' ? 'noopener noreferrer' : undefined}
              whileHover={{
                scale: 1.2,
                rotateZ: 10,
                boxShadow: '0 0 20px rgba(192, 132, 252, 0.6)',
              }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-lg bg-dark-card border border-dark-border text-gray-400 hover:text-neon-purple transition-colors"
              title={label}
            >
              <Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16 flex justify-center"
        >
          <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-neon-cyan rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}78b30b44027e2c4d262ea383c1c20c6909638bb3
