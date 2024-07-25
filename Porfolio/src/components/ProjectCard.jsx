import React from "react";
import { Card, Badge } from "flowbite-react";

const ProjectCard = ({ imgSrc, imgAlt, title, description, badges }) => {
  return (
    <Card className="max-w-sm mr-4" imgAlt={imgAlt} imgSrc={imgSrc}>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <div className="flex space-x-2">
        {badges.map((badge, index) => (
          <Badge key={index} color={badge.color}>
            {badge.text}
          </Badge>
        ))}
      </div>
    </Card>
  );
};

export default ProjectCard;
