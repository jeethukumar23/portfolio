<<<<<<< HEAD
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', icon: 'bi-linkedin', href: 'https://www.linkedin.com/in/jeethukumarganchi23', label: 'LinkedIn', target: '_blank' },
    { name: 'GitHub', icon: 'bi-github', href: 'https://github.com/jeethukumar23', label: 'GitHub', target: '_blank' },
    { name: 'Email', icon: 'bi-envelope', href: '#contact', label: 'Email', target: '_self' },
  ];

  return (
    <footer className="py-12 px-4 md:px-8 border-t border-dark-border/50 bg-dark-bg/50 backdrop-blur-lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-neon bg-clip-text text-transparent mb-2"
            >
              JK
            </motion.h3>
            <p className="text-gray-400">
              Building beautiful web experiences with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-200 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <motion.li key={link} whileHover={{ x: 5 }}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-neon-cyan transition-colors"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-gray-200 mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map(({ icon, href, label, target }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={target}
                  rel={target === '_blank' ? 'noopener noreferrer' : ''}
                  whileHover={{
                    scale: 1.2,
                    rotateZ: 10,
                    boxShadow: '0 0 15px rgba(192, 132, 252, 0.5)',
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-lg bg-dark-card border border-dark-border hover:border-neon-purple/50 flex items-center justify-center text-gray-400 hover:text-neon-cyan transition-colors text-lg"
                  title={label}
                >
                  <i className={`bi ${icon}`}></i>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-dark-border to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Jeethu Kumar. All rights reserved.</p>
          
        </div>
      </motion.div>
    </footer>
  );
}
=======
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', icon: 'bi-linkedin', href: 'https://www.linkedin.com/in/jeethukumarganchi23', label: 'LinkedIn', target: '_blank' },
    { name: 'GitHub', icon: 'bi-github', href: 'https://github.com/jeethukumar23', label: 'GitHub', target: '_blank' },
    { name: 'Email', icon: 'bi-envelope', href: '#contact', label: 'Email', target: '_self' },
  ];

  return (
    <footer className="py-12 px-4 md:px-8 border-t border-dark-border/50 bg-dark-bg/50 backdrop-blur-lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-neon bg-clip-text text-transparent mb-2"
            >
              JK
            </motion.h3>
            <p className="text-gray-400">
              Building beautiful web experiences with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-200 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <motion.li key={link} whileHover={{ x: 5 }}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-neon-cyan transition-colors"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-gray-200 mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map(({ icon, href, label, target }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={target}
                  rel={target === '_blank' ? 'noopener noreferrer' : ''}
                  whileHover={{
                    scale: 1.2,
                    rotateZ: 10,
                    boxShadow: '0 0 15px rgba(192, 132, 252, 0.5)',
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-lg bg-dark-card border border-dark-border hover:border-neon-purple/50 flex items-center justify-center text-gray-400 hover:text-neon-cyan transition-colors text-lg"
                  title={label}
                >
                  <i className={`bi ${icon}`}></i>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-dark-border to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Jeethu Kumar. All rights reserved.</p>
          
        </div>
      </motion.div>
    </footer>
  );
}
>>>>>>> 78b30b44027e2c4d262ea383c1c20c6909638bb3
