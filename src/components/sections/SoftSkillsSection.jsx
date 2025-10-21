"use client";

import { useState } from "react";
import {
  Users,
  Lightbulb,
  Target,
  MessageSquare,
  Clock,
  Brain,
  Heart,
  Rocket,
  BookOpen,
} from "lucide-react";
import SoftSkillCard from "../common/SoftSkillCard";

const softSkills = [
  {
    name: "Problem Solving",
    description:
      "Ability to analyze complex challenges, identify their root causes, and design effective solutions.",
    icon: Lightbulb,
    color: "from-amber-500 to-yellow-500",
    examples: [
      "Developing complex tools",
      "Optimizing processes",
      "Implementing efficient technical solutions",
    ],
  },
  {
    name: "Critical Thinking",
    description:
      "Deep and objective evaluation of technical situations to make well-informed decisions.",
    icon: Brain,
    color: "from-lime-500 to-green-500",
    examples: [
      "Assessing software architectures",
      "Selecting appropriate technologies",
      "Analyzing technical trade-offs",
    ],
  },
  {
    name: "Time Management",
    description:
      "Effective organization to handle multiple responsibilities without losing quality or focus.",
    icon: Clock,
    color: "from-emerald-500 to-teal-500",
    examples: [
      "Handling multiple tasks in parallel",
      "Meeting established deadlines",
      "Prioritizing critical tasks",
    ],
  },
  {
    name: "Continuous Learning",
    description:
      "Strong interest in staying up to date and acquiring new technical skills.",
    icon: BookOpen,
    color: "from-cyan-500 to-sky-500",
    examples: [
      "Exploring new technologies",
      "Participating in technical training",
      "Experimenting with emerging tools",
    ],
  },
  {
    name: "Fast Learning",
    description:
      "Ability to quickly understand new concepts and apply them in practice.",
    icon: Rocket,
    color: "from-blue-500 to-indigo-500",
    examples: [
      "Adapting quickly to new tasks",
      "Becoming efficient in a short time",
      "Easily understanding requirements",
    ],
  },
  {
    name: "Proactivity",
    description:
      "Initiative to anticipate needs, offer solutions, and contribute beyond what’s assigned.",
    icon: Target,
    color: "from-indigo-500 to-violet-500",
    examples: [
      "Advancing tasks during free time",
      "Helping when no tasks are assigned",
      "Supporting teammates to unblock work",
    ],
  },
  {
    name: "Effective Communication",
    description:
      "Ability to clearly convey technical ideas to different audiences.",
    icon: MessageSquare,
    color: "from-fuchsia-500 to-pink-500",
    examples: [
      "Writing detailed technical documentation",
      "Presenting solutions to stakeholders",
      "Maintaining clear communication with clients and teams",
    ],
  },
  {
    name: "Teamwork",
    description:
      "Constructive collaboration with different roles and levels within the team.",
    icon: Users,
    color: "from-pink-500 to-rose-500",
    examples: [
      "Coordinating with leadership",
      "Guiding and supporting teammates",
      "Participating actively in meetings",
    ],
  },
  {
    name: "Empathy",
    description:
      "Understanding different perspectives to foster collaboration and design better solutions.",
    icon: Heart,
    color: "from-rose-500 to-red-500",
    examples: [
      "Listening to feedback and suggestions",
      "Considering team perspectives",
      "Designing user-centered solutions",
    ],
  },
];

export default function SoftSkillsSection() {
  const [expandedSkill, setExpandedSkill] = useState(null);

  return (
    <section className="mb-16  mx-auto">
      <div className="mb-12 text-center">
        <h2 className="mb-4 font-title text-4xl italic text-white md:text-5xl lg:text-6xl">
          Soft Skills
        </h2>
        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl">
          These are some of the{" "}
          <span className="font-semibold text-secondary">soft skills</span> I’ve
          learned and developed through{" "}
          <span className="font-semibold text-secondary">
            different experiences
          </span>
          .
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {softSkills.map((skill, index) => (
          <SoftSkillCard
            key={skill.name}
            skill={skill}
            expandedSkill={expandedSkill}
            setExpandedSkill={setExpandedSkill}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}
