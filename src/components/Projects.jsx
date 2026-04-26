import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { ExternalLink, Code } from 'lucide-react';
import ecommerceImage from '../assets/1727277521.webp';

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

export default function Projects() {
  const { ref, inView } = useInViewHook({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [hoveredId, setHoveredId] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: '🛒 E-Commerce Website (EasyBuySell)',
      description: 'Full-stack e-commerce application with real-time inventory management and payment integration.',
      fullDescription: 'A comprehensive e-commerce platform for browsing products, managing carts, and secure checkout with user authentication and dynamic product handling.',
      tools: {
        frontend: ['React.js', 'HTML', 'CSS', 'JavaScript'],
        backend: ['Spring Boot', 'Node.js'],
        database: ['MySQL'],
        tools: ['VS Code', 'REST APIs', 'Authentication'],
      },
      tags: ['React.js', 'Spring Boot', 'MySQL', 'REST APIs'],
      gradient: 'from-neon-purple to-neon-blue',
      image: ecommerceImage,
      liveUrl: 'https://easybuysell.netlify.app/',
      github: 'https://github.com/jeethukumar23/easy-buy-sell',
    },
    {
      id: 2,
      title: '💼 Job Seeker Platform',
      description: 'Intelligent career portal connecting talented professionals with ideal job opportunities.',
      fullDescription: 'A job seeker platform enabling users to explore job listings, manage profiles, and apply for opportunities through a responsive and user-friendly interface.',
      tools: {
        frontend: ['React.js', 'HTML', 'CSS', 'JavaScript'],
        backend: ['Node.js', 'Express.js'],
        database: ['MySQL'],
        tools: ['VS Code', 'Postman', 'API Integration', 'User Authentication'],
      },
      tags: ['React.js', 'Node.js', 'MySQL', 'Express', 'Postman'],
      gradient: 'from-neon-blue to-neon-cyan',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      liveUrl: 'https://jobseeker23.netlify.app/',
      github: 'https://github.com/jeethukumar23/JobSeeker',
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 px-4 md:px-8 relative"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-10 w-72 h-72 bg-neon-purple/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto w-full"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-neon">
                Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Showcasing my best work and creative solutions</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
          {projectsData.map((project) => (
            <div key={project.id} className="flex flex-col">
              <motion.div
                variants={itemVariants}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                whileHover={{ y: -10 }}
              className="group relative rounded-lg overflow-hidden cursor-pointer h-72"
            >
              {/* Background Image */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  animate={{ scale: hoveredId === project.id ? 1.1 : 1 }}
                  transition={{ duration: 0.4 }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-dark-bg/80 group-hover:bg-dark-bg/60 transition-all" />
              </div>

              {/* Border Glow */}
              <motion.div
                className={`absolute inset-0 rounded-lg bg-gradient-${project.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity -z-10`}
              />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 z-10">
                {/* Title & Description */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={
                    hoveredId === project.id
                      ? { y: 0, opacity: 1 }
                      : { y: 20, opacity: 0 }
                  }
                  transition={{ duration: 0.3 }}
                  className="mb-4"
                >
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-neon mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    {project.description}
                  </p>

                  {/* Tools & Technologies */}
                  <div className="space-y-2 text-xs text-gray-400 mb-3">
                    <p><span className="text-neon-cyan font-semibold">Frontend:</span> {project.tools.frontend.join(', ')}</p>
                    <p><span className="text-neon-cyan font-semibold">Backend:</span> {project.tools.backend.join(', ')}</p>
                    <p><span className="text-neon-cyan font-semibold">Database:</span> {project.tools.database.join(', ')}</p>
                    <p><span className="text-neon-cyan font-semibold">Tools:</span> {project.tools.tools.join(', ')}</p>
                  </div>
                </motion.div>

                {/* Tags */}
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={
                    hoveredId === project.id
                      ? { y: 0, opacity: 1 }
                      : { y: 10, opacity: 0 }
                  }
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="flex flex-wrap gap-2 mb-4"
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-neon-purple/20 text-neon-cyan rounded-full border border-neon-purple/30"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>

                {/* Buttons */}
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={
                    hoveredId === project.id
                      ? { y: 0, opacity: 1 }
                      : { y: 10, opacity: 0 }
                  }
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="flex gap-3 relative z-20"
                >
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-neon-purple text-dark-bg font-semibold rounded-lg hover:shadow-glow-purple transition-shadow cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 border-2 border-neon-cyan text-neon-cyan font-semibold rounded-lg hover:shadow-glow-cyan transition-shadow cursor-pointer"
                  >
                    <Code className="w-4 h-4" />
                    Code
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>

            {/* Project Title Below Card */}
            <div className="text-center mt-4">
              <h3 className="text-lg font-bold text-gray-300">{project.title}</h3>
            </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

