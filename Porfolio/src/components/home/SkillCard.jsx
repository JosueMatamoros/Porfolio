import React from 'react';
import { Card } from 'flowbite-react';

const SkillCard = ({ title, skills }) => {
  return (
    <Card className="w-96 max-w-sm m-4 flex flex-col">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
        {title}
      </h5>
      <div className="flex-grow grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <skill.icon size={50} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default SkillCard;
