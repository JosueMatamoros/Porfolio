// src/components/Skills.js
import React, { useState } from 'react';
import SkillCard from './SkillCard';
import MagicButton from '../MagicButton';

import { FaJava, FaPython, FaReact, FaCss3, FaHtml5, FaBootstrap, FaGithub } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiGoland, SiIntellijidea, SiWarp } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { GrMysql } from 'react-icons/gr';
import { RiTailwindCssFill } from 'react-icons/ri';

const logos = {
  Python: 'https://i.pinimg.com/originals/82/a2/18/82a2188c985ce75402ae44fc43fe7e5e.png',
  Java: 'https://cdn-icons-png.flaticon.com/512/226/226777.png',
  JavaScript: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
  Golang: 'https://i.pinimg.com/564x/9c/1a/7b/9c1a7b98ba1e02023393846c9509c587.jpg',
  React: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  Tailwind: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF_uhr4f32v7RGyDW63TzZjhZ69TIBMwQgcA&s',
  HTML: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
  CSS: 'https://w7.pngwing.com/pngs/224/77/png-transparent-website-web-internet-css-style-css3-technology-social-media-logos-i-flat-colorful-icon.png',
  Bootstrap: 'https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg',
  'VS Code': 'https://code.visualstudio.com/assets/images/code-stable.png',
  Intellij: 'https://resources.jetbrains.com/storage/products/company/brand/logos/IntelliJ_IDEA_icon.png',
  Warp: 'https://user-images.githubusercontent.com/85056161/221151383-dee5374b-03d9-4548-a0fd-35dfc7ea0f5b.png',
  GitHub: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
  MySQL: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png'
};

const Skills = () => {
  const [showOriginal, setShowOriginal] = useState(false);

  const handleToggle = () => {
    setShowOriginal(prev => !prev);
  };

  const skills = {
    backend: [
      { name: 'Python', icon: FaPython, logoUrl: logos.Python },
      { name: 'Java', icon: FaJava, logoUrl: logos.Java },
      { name: 'JavaScript', icon: IoLogoJavascript, logoUrl: logos.JavaScript },
      { name: 'Golang', icon: SiGoland, logoUrl: logos.Golang }
    ],
    frontend: [
      { name: 'React', icon: FaReact, logoUrl: logos.React },
      { name: 'Tailwind', icon: RiTailwindCssFill, logoUrl: logos.Tailwind },
      { name: 'HTML', icon: FaHtml5, logoUrl: logos.HTML },
      { name: 'CSS', icon: FaCss3, logoUrl: logos.CSS },
      { name: 'Bootstrap', icon: FaBootstrap, logoUrl: logos.Bootstrap }
    ],
    tools: [
      { name: 'VS Code', icon: VscVscode, logoUrl: logos['VS Code'] },
      { name: 'Intellij', icon: SiIntellijidea, logoUrl: logos.Intellij },
      { name: 'Warp', icon: SiWarp, logoUrl: logos.Warp },
      { name: 'GitHub', icon: FaGithub, logoUrl: logos.GitHub },
      { name: 'MySQL', icon: GrMysql, logoUrl: logos.MySQL }
    ]
  };

  return (
    <div className="w-screen flex flex-col items-center">
      
        <h1 className="text-4xl mb-4">My Skills</h1>
        <MagicButton onToggle={handleToggle} />
        
      <div className="flex flex-wrap justify-center mt-4">
        <SkillCard title="Back-end Development" skills={skills.backend} showOriginal={showOriginal} />
        <SkillCard title="Front-end Development" skills={skills.frontend} showOriginal={showOriginal} />
        <SkillCard title="Tools and Technologies" skills={skills.tools} showOriginal={showOriginal} />
      </div>
    </div>
  );
};

export default Skills;
