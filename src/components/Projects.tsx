import React from "react";

type Project = {
  title: string;
  description: string;
  tech: string;
  demo: string;
  github: string;
  learnings: string[];
  category: string;
};

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Booking System",
      description:
        "A scalable booking system built with a microservices architecture using NestJS. Includes services for authentication, listings, reservations, payments, and notifications, coordinated through an API Gateway and Redis message broker.",
      tech: "NestJS, Microservices Architecture, Redis",
      demo: "https://self-learner.ninja/api",
      github: "https://github.com/shemsudi/aribnb-backend-nestjs",
      learnings: [
        "Designed modular microservices architecture using NestJS for scalability and service isolation.",
        "Implemented secure authentication with JWT across services.",
        "Used Redis as a message broker for asynchronous inter-service communication.",
        "Built RESTful APIs and message-based handlers for listings, reservations, payments, and notifications.",
        "Coordinated all services through an API Gateway for unified routing and request handling.",
      ],
      category: "Backend",
    },
    {
      title: "CI/CD Pipeline with AWS EKS and Terraform",
      description:
        "Automated deployment pipeline for a microservices app using AWS EKS, Terraform, and GitHub Actions.",
      tech: "Terraform, AWS EKS, Kubernetes, Docker, GitHub Actions",
      demo: "https://self-learner.ninja/api",
      github: "https://github.com/shemsudi/aribnb-backend-nestjs",
      learnings: [
        "Provisioned Kubernetes clusters on AWS EKS using Terraform.",
        "Automated containerized app deployment with Docker and Kubernetes.",
        "Set up CI/CD pipelines with GitHub Actions for testing and deployment.",
        "Managed infrastructure as code for scalability and repeatability.",
      ],
      category: "Devops",
    },
  ];

  return (
    <section id="projects" className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-extrabold text-center text-gray-800">
        Projects
      </h2>

      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <h3 className="text-xl font-bold text-gray-800">
                {project.title}
              </h3>
              <p className="mt-4 text-gray-700">{project.description}</p>
              <p className="mt-2 text-sm text-gray-600">
                <span className="font-semibold">Tech Stack:</span>{" "}
                {project.tech}
              </p>

              <div className="mt-4">
                <h4 className="text-lg font-semibold text-gray-800">
                  What I Learned:
                </h4>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  {project.learnings.map((learning, i) => (
                    <li key={i}>{learning}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <span
                  className={`inline-block px-4 py-2 text-sm font-semibold rounded-full ${
                    project.category === "frontend"
                      ? "bg-blue-500 text-white"
                      : "bg-green-500 text-white"
                  }`}
                >
                  {project.category}
                </span>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <a
                  href={project.demo}
                  className="text-gray-600 hover:text-gray-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition duration-300">
                    Live Demo
                  </button>
                </a>
                <a
                  href={project.github}
                  className="text-gray-600 hover:text-gray-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition duration-300">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
