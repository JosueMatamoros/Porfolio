import React from "react";
import ProjectCard from "../ProjectCard";


export default function Projects() {
  const projects = [
    {
      imgSrc: "../../../public/CodeLOGO.jpeg",
      imgAlt: "Project 1",
      title: "Noteworthy technology acquisitions 2021",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      badges: [
        { color: "indigo", text: "Indigo" },
        { color: "info", text: "Default" },
        { color: "gray", text: "Dark" },
        { color: "success", text: "Success" },
      ],
    },
    {
      imgSrc: "../../../public/CodeLOGO.jpeg",
      imgAlt: "Project 2",
      title: "Noteworthy technology acquisitions 2021",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      badges: [
        { color: "indigo", text: "Indigo" },
        { color: "info", text: "Default" },
        { color: "gray", text: "Dark" },
        { color: "success", text: "Success" },
      ],
    },
    {
      imgSrc: "../../../public/CodeLOGO.jpeg",
      imgAlt: "Project 3",
      title: "Noteworthy technology acquisitions 2021",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      badges: [
        { color: "indigo", text: "Indigo" },
        { color: "info", text: "Default" },
        { color: "gray", text: "Dark" },
        { color: "success", text: "Success" },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-4xl mb-4">Featured Projects</div>
      <div className="flex justify-center w-full">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imgSrc={project.imgSrc}
            imgAlt={project.imgAlt}
            title={project.title}
            description={project.description}
            badges={project.badges}
          />
        ))}
      </div>
    </div>
  );
}