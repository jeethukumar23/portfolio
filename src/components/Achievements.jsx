import { motion } from 'framer-motion';
import React from 'react';
import { Award, Trophy, Zap, Target } from 'lucide-react';

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

export default function Achievements() {
  const { ref, inView } = useInViewHook({
    threshold: 0.2,
    triggerOnce: true,
  });

  const achievements = [
    {
      icon: Trophy,
      title: 'Best Developer Award',
      description: 'Recognized for outstanding contributions to web development in 2024',
      year: '2024',
      category: 'Award',
    },
    {
      icon: Award,
      title: 'Google Cloud Certified',
      description: 'Professional Cloud Architect certification achieved',
      year: '2023',
      category: 'Certification',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Improved app performance by 300% through optimization techniques',
      year: '2024',
      category: 'Achievement',
    },
    {
      icon: Target,
      title: 'Open Source Contributor',
      description: 'Active contributor to multiple open-source projects with 500+ stars',
      year: '2023',
      category: 'Community',
    },
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="achievements"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 px-4 md:px-8 relative"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-neon-blue/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-neon-cyan/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-6xl mx-auto w-full"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-neon">
              Achievements & Awards
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Recognition and milestones throughout my career</p>
        </motion.div>

        {/* Achievements Timeline */}
        <div className="space-y-6">
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{
                  x: 10,
                  boxShadow: '0 0 20px rgba(192, 132, 252, 0.3)',
                }}
                className="p-6 rounded-lg bg-gradient-to-r from-dark-card/50 to-dark-card/20 border border-dark-border/50 hover:border-neon-purple/30 transition-all"
              >
                <div className="flex gap-6 items-start">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0"
                  >
                    <div className="w-16 h-16 rounded-lg bg-gradient-neon flex items-center justify-center text-dark-bg shadow-glow-purple">
                      <Icon className="w-8 h-8 font-bold" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold text-neon-cyan group-hover:text-neon-purple transition-colors">
                        {achievement.title}
                      </h3>
                      <span className="inline-block mt-2 md:mt-0 px-3 py-1 bg-neon-purple/10 text-neon-purple rounded-full text-sm border border-neon-purple/30">
                        {achievement.year}
                      </span>
                    </div>

                    <p className="text-gray-400 mb-3">{achievement.description}</p>

                    <span className="inline-block px-3 py-1 bg-dark-card/50 text-gray-300 rounded text-xs border border-dark-border/30">
                      {achievement.category}
                    </span>
                  </div>

                  {/* Decorative Element */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                    className="hidden md:block"
                  >
                    <div className="w-2 h-2 bg-gradient-neon rounded-full shadow-glow-purple" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Card */}
        <motion.div
          variants={itemVariants}
          className="mt-16 p-8 rounded-lg bg-gradient-to-br from-neon-purple/10 to-neon-cyan/10 border border-neon-purple/20"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-neon">
            Career Highlights
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Certifications', value: '5+' },
              { label: 'Awards', value: '8+' },
              { label: 'Publications', value: '12+' },
              { label: 'Speaking Events', value: '15+' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <div className="text-3xl font-bold bg-gradient-neon bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}import { motion } from 'framer-motion';
import React from 'react';
import { Award, Trophy, Zap, Target } from 'lucide-react';

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

export default function Achievements() {
  const { ref, inView } = useInViewHook({
    threshold: 0.2,
    triggerOnce: true,
  });

  const achievements = [
    {
      icon: Trophy,
      title: 'Best Developer Award',
      description: 'Recognized for outstanding contributions to web development in 2024',
      year: '2024',
      category: 'Award',
    },
    {
      icon: Award,
      title: 'Google Cloud Certified',
      description: 'Professional Cloud Architect certification achieved',
      year: '2023',
      category: 'Certification',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Improved app performance by 300% through optimization techniques',
      year: '2024',
      category: 'Achievement',
    },
    {
      icon: Target,
      title: 'Open Source Contributor',
      description: 'Active contributor to multiple open-source projects with 500+ stars',
      year: '2023',
      category: 'Community',
    },
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="achievements"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 px-4 md:px-8 relative"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-neon-blue/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-neon-cyan/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-6xl mx-auto w-full"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-neon">
              Achievements & Awards
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Recognition and milestones throughout my career</p>
        </motion.div>

        {/* Achievements Timeline */}
        <div className="space-y-6">
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{
                  x: 10,
                  boxShadow: '0 0 20px rgba(192, 132, 252, 0.3)',
                }}
                className="p-6 rounded-lg bg-gradient-to-r from-dark-card/50 to-dark-card/20 border border-dark-border/50 hover:border-neon-purple/30 transition-all"
              >
                <div className="flex gap-6 items-start">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0"
                  >
                    <div className="w-16 h-16 rounded-lg bg-gradient-neon flex items-center justify-center text-dark-bg shadow-glow-purple">
                      <Icon className="w-8 h-8 font-bold" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold text-neon-cyan group-hover:text-neon-purple transition-colors">
                        {achievement.title}
                      </h3>
                      <span className="inline-block mt-2 md:mt-0 px-3 py-1 bg-neon-purple/10 text-neon-purple rounded-full text-sm border border-neon-purple/30">
                        {achievement.year}
                      </span>
                    </div>

                    <p className="text-gray-400 mb-3">{achievement.description}</p>

                    <span className="inline-block px-3 py-1 bg-dark-card/50 text-gray-300 rounded text-xs border border-dark-border/30">
                      {achievement.category}
                    </span>
                  </div>

                  {/* Decorative Element */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                    className="hidden md:block"
                  >
                    <div className="w-2 h-2 bg-gradient-neon rounded-full shadow-glow-purple" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Card */}
        <motion.div
          variants={itemVariants}
          className="mt-16 p-8 rounded-lg bg-gradient-to-br from-neon-purple/10 to-neon-cyan/10 border border-neon-purple/20"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-neon">
            Career Highlights
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Certifications', value: '5+' },
              { label: 'Awards', value: '8+' },
              { label: 'Publications', value: '12+' },
              { label: 'Speaking Events', value: '15+' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <div className="text-3xl font-bold bg-gradient-neon bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
