import { motion } from 'framer-motion';
import React from 'react';
import { X, Download, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Certificate() {
  const navigate = useNavigate();
  const [certificateFile] = React.useState('Salesforce.pdf');

  const certificates = [
    {
      id: 1,
      title: 'Salesforce Certified AI Associate',
      issuer: 'Salesforce',
      date: 'Issued: October 2024',
      description: 'Demonstrates proficiency in Salesforce AI and cloud technologies',
      file: 'Salesforce.pdf',
      credentialId: '5179676',
    },
    // Add more certificates as needed
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
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-dark-bg text-gray-200 overflow-x-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-neon-blue/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-neon-cyan/5 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative py-20 px-4 md:px-8 border-b border-dark-border/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-between mb-8"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-neon">
                Certifications & Credentials
              </h1>
              <p className="text-gray-400 mt-2">Professional certifications and verified credentials</p>
            </motion.div>
            <motion.button
              variants={itemVariants}
              onClick={() => navigate('/')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neon-purple/10 hover:bg-neon-purple/20 border border-neon-purple/30 transition-all"
            >
              <X className="w-5 h-5" />
              <span className="hidden sm:inline">Back</span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {certificates.map((cert, idx) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group p-6 rounded-lg bg-gradient-to-br from-dark-card/50 to-dark-card/20 border border-dark-border/50 hover:border-neon-purple/30 transition-all"
              >
                {/* Certificate Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-lg bg-gradient-neon flex items-center justify-center text-dark-bg mb-4 shadow-glow-purple"
                >
                  <FileText className="w-8 h-8" />
                </motion.div>

                {/* Certificate Info */}
                <h3 className="text-2xl font-bold text-neon-cyan mb-2 group-hover:text-neon-purple transition-colors">
                  {cert.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <p className="text-gray-400">
                    <span className="text-neon-purple font-semibold">Issuer:</span> {cert.issuer}
                  </p>
                  <p className="text-gray-400">
                    <span className="text-neon-purple font-semibold">Date:</span> {cert.date}
                  </p>
                  <p className="text-gray-400">
                    <span className="text-neon-purple font-semibold">Credential ID:</span> {cert.credentialId}
                  </p>
                </div>

                <p className="text-gray-300 mb-6">{cert.description}</p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`/portfolio/certificates/${cert.file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-neon text-dark-bg font-semibold rounded-lg hover:shadow-glow-purple transition-all"
                  >
                    <Download className="w-5 h-5" />
                    Download
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`/portfolio/certificates/${cert.file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-neon-purple/10 text-neon-purple border border-neon-purple/30 font-semibold rounded-lg hover:bg-neon-purple/20 transition-all"
                  >
                    <FileText className="w-5 h-5" />
                    View
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Upload Instructions */}
          <motion.div
            variants={itemVariants}
            className="mt-16 p-8 rounded-lg bg-gradient-to-br from-neon-blue/10 to-neon-cyan/10 border border-neon-blue/20"
          >
            <h3 className="text-xl font-bold text-neon-cyan mb-4">📋 Certificate Upload Instructions</h3>
            <ol className="space-y-3 text-gray-300 list-decimal list-inside">
              <li>Save your certificate PDF file</li>
              <li>Upload it to: <code className="bg-dark-card px-2 py-1 rounded text-neon-purple">/public/certificates/</code> folder</li>
              <li>Name it: <code className="bg-dark-card px-2 py-1 rounded text-neon-purple">salesforce-certificate.pdf</code></li>
              <li>Update the certificate details in this component if needed</li>
            </ol>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
