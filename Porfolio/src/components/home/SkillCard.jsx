import React from 'react';
import { Card } from 'flowbite-react';

const SkillCard = ({ title, skills, showOriginal }) => {
  return (
    <Card className="w-96 max-w-sm m-4 flex flex-col">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-4 text-center">
        {title}
      </h5>
      <div className="flex-grow grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center text-center ${showOriginal ? 'logo-container' : ''}`}
          >
            {showOriginal ? (
              <img
                src={skill.logoUrl}
                alt={skill.name}
                className="logo-img"
              />
            ) : (
              <skill.icon size={30} />
            )}
            <p className="mt-2">{skill.name}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default SkillCard;
