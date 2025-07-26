import React from "react";
import { FaNode, FaDocker, FaAws } from "react-icons/fa";
import {
  SiTerraform,
  SiGithubactions,
  SiGooglecloud,
  SiKubernetes,
  SiExpress,
} from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";

const Skills: React.FC = () => {
  const skills = [
    {
      name: "Node.js",
      icon: <FaNode size={40} />,
    },
    {
      name: "NestJS",
      icon: <DiJavascript1 size={40} />, // Fallback for NestJS
    },
    {
      name: "Express.js",
      icon: <SiExpress size={40} />,
    },
    {
      name: "Terraform",
      icon: <SiTerraform size={40} />,
    },
    {
      name: "Docker",
      icon: <FaDocker size={40} />,
    },
    {
      name: "Kubernetes",
      icon: <SiKubernetes size={40} />,
    },
    {
      name: "GitHub Actions",
      icon: <SiGithubactions size={40} />,
    },
    {
      name: "REST APIs",
      icon: <DiJavascript1 size={40} />, // Fallback for APIs
    },
    {
      name: "AWS",
      icon: <FaAws size={40} />,
    },
    {
      name: "GCP",
      icon: <SiGooglecloud size={40} />,
    },
  ];

  return (
    <section id="skills" className="mx-auto min-h-fit px-6 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800">Skills</h2>
      <p className="text-center mt-4 text-gray-600 text-lg">
        Tools I use to build APIs and automate cloud workflows.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 shadow-md rounded-lg p-4 flex flex-col items-center text-gray-700 font-medium"
          >
            {skill.icon}
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
