// src/components/SkillCard.js
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from 'flowbite-react';

const SkillCard = ({ title, skills, showOriginal }) => {
  return (
    <Card className="w-96 max-w-sm m-4 flex flex-col">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
        {title}
      </h5>
      <div className="flex-grow grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {showOriginal ? (
              <motion.img
                src={skill.logoUrl}
                alt={skill.name}
                className="w-12 h-12 object-contain"  // Adjusted size
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
            ) : (
              <motion.div
                className="flex flex-col items-center text-center"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <skill.icon size={40} />  {/* Adjusted icon size */}
              </motion.div>
            )}
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </Card>
  );
};

export default SkillCard;
