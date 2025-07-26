import React from "react";
import shemsu from "../assets/shemsu.jpeg";

const About: React.FC = () => {
  return (
    <section id="about" className="container mx-auto px-6 py-16 h-auto">
      <h2 className="text-4xl font-extrabold text-center text-gray-800">
        About Me
      </h2>
      <p className="text-center mt-4 text-gray-600 text-lg">
        I love building backend systems and automating workflows to make things
        run smoothly.
      </p>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 mt-10">
        <div className="flex-shrink-0">
          <img
            src={shemsu}
            alt="Shemsu Nurye"
            className="rounded-full shadow-lg border-4 object-cover border-gray-300"
          />
        </div>

        <div className="max-w-2xl">
          <h3 className="text-2xl font-bold text-gray-800">A Bit About Me</h3>
          <p className="mt-4 text-gray-700">
            Hey! I’m Shemsu Nurye, a backend and DevOps developer. I build APIs
            with Node.js and NestJS, and I use tools like Terraform and Docker
            to set up and manage infrastructure. I also enjoy automating
            deployments with GitHub Actions to keep projects flowing.
          </p>
          <p className="mt-4 text-gray-700">
            When I’m not coding, I’m exploring new tech or chilling with a good
            cloud tool.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
