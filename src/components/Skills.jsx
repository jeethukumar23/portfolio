import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

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

export default function Skills() {
  const { ref, inView } = useInViewHook({
    threshold: 0.2,
    triggerOnce: true,
  });

  const skillsData = [
    {
      category: 'Frontend',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Next.js'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'],
    },
    {
      category: 'Cloud & DevOps',
      skills: ['AWS', 'Google Cloud Platform (GCP)', 'Docker', 'Git', 'GitHub', 'GitHub Actions', 'CI/CD', 'Firebase'],
    },
    {
      category: 'Tools & Others',
      skills: ['Figma', 'Vite', 'Jest', 'Webpack', 'GraphQL'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 px-4 md:px-8 relative"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-neon-cyan/5 rounded-full blur-3xl" />
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
              Skills & Expertise
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Technical skills and tools I&apos;ve mastered</p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((categoryData, categoryIdx) => (
            <motion.div
              key={categoryData.category}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-6 rounded-lg bg-dark-card/50 border border-dark-border/50 hover:border-neon-purple/30 transition-all group"
            >
              <h3 className="text-xl font-semibold mb-6 text-neon-cyan group-hover:text-neon-purple transition-colors">
                {categoryData.category}
              </h3>

              <div className="space-y-3">
                {categoryData.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: (categoryIdx * 5 + skillIdx) * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 group/item cursor-pointer"
                  >
                    <div className="w-2 h-2 bg-gradient-neon rounded-full group-hover/item:scale-125 transition-transform" />
                    <span className="text-gray-300 group-hover/item:text-neon-cyan transition-colors">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expertise Bars */}
        <motion.div
          variants={itemVariants}
          className="mt-16 space-y-6"
        >
          <h3 className="text-2xl font-semibold text-center mb-10">
            Proficiency Levels
          </h3>

          {[
            { skill: 'React & JavaScript', level: 95 },
            { skill: 'Backend Development', level: 85 },
            { skill: 'UI/UX Design', level: 80 },
            { skill: 'Cloud Services', level: 80 },
          ].map((item) => (
            <motion.div
              key={item.skill}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.3 }}
              className="space-y-2"
            >
              <div className="flex justify-between items-center">
                <span className="text-gray-300 font-medium">{item.skill}</span>
                <span className="text-neon-cyan font-semibold">{item.level}%</span>
              </div>
              <div className="h-2 bg-dark-card rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${item.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-full bg-gradient-neon rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}import { motion } from 'framer-motion';
  </motion.div>
</section>
  );
}
