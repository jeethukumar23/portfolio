
import { motion } from 'framer-motion';
import React from 'react';

// Custom hook for intersection observer
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

export default function About() {
  const { ref, inView } = useInViewHook({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  const timelineItems = [
    {
      year: '2023',
      title: 'Started Web Development',
      description: 'Began my journey with React and modern web technologies',
    },
    {
      year: '2023',
      title: 'Full Stack Development',
      description: 'Mastered backend development with Node.js and databases',
    },
    {
      year: '2024',
      title: 'Cloud & AI Integration',
      description: 'Explored cloud platforms and AI integration in applications',
    },
    {
      year: '2025',
      title: 'Advanced Solutions',
      description: 'Building complex, scalable applications and mentoring',
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 px-4 md:px-8 relative"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-20 w-72 h-72 bg-neon-blue/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-5xl mx-auto"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-neon">
              👤 About Me
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - About Text */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Hey! I&apos;m <span className="text-neon-cyan font-semibold">Jeethu Kumar Ganchi</span>, a B.Tech student in Computer Science Engineering at K L University (2023–2027), Vijayawada, India.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              I am passionate about building full-stack applications, embedded systems, and AI-driven solutions. With a strong foundation in modern web technologies and programming, I strive to create impactful digital experiences.
            </p>

            {/* Programming Languages */}
            <div>
              <h3 className="text-lg font-semibold text-neon-cyan mb-3">⚙️ Programming Languages</h3>
              <div className="space-y-2">
                {['Python', 'Java', 'C'].map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-gradient-neon rounded-full" />
                    <span className="text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div>
              <h3 className="text-lg font-semibold text-neon-cyan mb-3">Databases</h3>
              <div className="space-y-2">
                {['PostgreSQL', 'MySQL', 'MongoDB'].map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-gradient-neon rounded-full" />
                    <span className="text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Developer Tools */}
            <div>
              <h3 className="text-lg font-semibold text-neon-cyan mb-3">Developer Tools</h3>
              <div className="space-y-2">
                {['VS Code', 'Eclipse', 'SpringToolSuite4', 'Dev-C++'].map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-gradient-neon rounded-full" />
                    <span className="text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div>
              <h3 className="text-lg font-semibold text-neon-cyan mb-3">Frameworks</h3>
              <div className="space-y-2">
                {['React.js', 'Angular.js'].map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-gradient-neon rounded-full" />
                    <span className="text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Cloud Platforms */}
            <div>
              <h3 className="text-lg font-semibold text-neon-cyan mb-3">☁️ Cloud Platforms</h3>
              <div className="space-y-2">
                {['AWS (Amazon Web Services)', 'Google Cloud Platform (GCP)'].map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-gradient-neon rounded-full" />
                    <span className="text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Certifications & Stats */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Education */}
            <div className="p-6 rounded-lg bg-dark-card/50 border border-dark-border/50">
              <h3 className="text-lg font-semibold text-neon-blue mb-6">🎓 Education</h3>

              <motion.div
                whileHover={{ x: 10 }}
                className="p-4 rounded-lg bg-dark-bg/50 border border-neon-blue/20 hover:border-neon-blue/50 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="text-2xl">📚</div>
                  <div>
                    <h4 className="font-semibold text-neon-cyan mb-1">
                      B.Tech – Computer Science Engineering
                    </h4>
                    <p className="text-gray-400 text-sm mb-1">K L University, Vijayawada</p>
                    <p className="text-gray-400 text-sm mb-2">2023–2027</p>
                    <p className="text-neon-blue text-sm mb-2"><strong>Specialization:</strong> Cloud Infrastructure & Engineering</p>
                    <p className="text-neon-purple font-semibold text-sm">CGPA: 8.64 / 10</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Certifications */}
            <div className="p-6 rounded-lg bg-dark-card/50 border border-dark-border/50">
              <h3 className="text-lg font-semibold text-neon-purple mb-6">📜 Certifications</h3>

              <motion.div
                whileHover={{ x: 10 }}
                className="p-4 rounded-lg bg-dark-bg/50 border border-neon-purple/20 hover:border-neon-purple/50 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🎓</div>
                  <div>
                    <h4 className="font-semibold text-neon-cyan mb-1">
                      Salesforce Certified AI Associate
                    </h4>
                    <p className="text-gray-400 text-sm mb-2">October 2024</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-1 text-xs bg-neon-purple/20 text-neon-purple rounded border border-neon-purple/30 hover:bg-neon-purple/30 transition-colors"
                    >
                      View Credential
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'University', value: 'K L University' },
                { label: 'Branch', value: 'CSE' },
                { label: 'Batch', value: '2023-2027' },
                { label: 'Location', value: 'Vijayawada, India' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -5 }}
                  className="p-4 rounded-lg bg-dark-card/50 border border-dark-border/50 text-center"
                >
                  <p className="text-gray-400 text-xs mb-1">{stat.label}</p>
                  <p className="text-neon-cyan font-semibold text-sm">{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}import { motion } from 'framer-motion';
  </motion.div>
</section>
  );
}

