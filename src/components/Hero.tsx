import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen max-sm:my-16 flex items-center justify-center bg-white"
    >
      <div className="text-center">
        <h1 className="text-5xl font-extrabold tracking-wide text-gray-900">
          Hi, I'm <span className="text-gray-800">Shemsu Nurye</span>
        </h1>
        <p className=" Yardım mt-4 text-lg text-gray-700">
          Backend & DevOps Engineer | Building scalable APIs and automated
          infrastructure
        </p>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300"
          >
            Contact Me
          </a>
        </div>

        {/* Highlight Section */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-800">
            Technologies I work with:
          </h2>
          <div className="flex flex-wrap items-center justify-center mx-20 gap-6 mt-4">
            {[
              "Node.js",
              "NestJS",
              "Terraform",
              "AWS EKS",
              "GitHub Actions",
              "Docker",
              "Kubernetes",
              "REST APIs",
              "Micoservices",
              "CI/CD",
              "DevOps",
              "GCP",
              "Kubernetes",
            ].map((tech, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm shadow-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
