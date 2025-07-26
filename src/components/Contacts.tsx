import React from "react";

const Contact: React.FC = () => {
  const email = "tuahirshemsu100b@gmail.com";
  const mailtoLink = `mailto:${email}?subject=Contact%20from%20Portfolio&body=Hi%20Shemsu,%0A%0AI%20saw%20your%20portfolio%20and%20wanted%20to%20get%20in%20touch.%0A%0AMy%20name%20is:%0AMy%20message:%0A`;

  return (
    <section id="contact" className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800">
        Contact Me
      </h2>
      <p className="text-center mt-4 text-gray-600 text-lg">
        Got a question or want to work together? Shoot me an email!
      </p>
      <div className="mt-8 max-w-md mx-auto text-center">
        <a
          href={mailtoLink}
          className="bg-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition duration-300"
        >
          Open Your Email
        </a>
        <p className="mt-4 text-gray-600">
          Clicking the button will open your email app to send a message to{" "}
          {email}.
        </p>
      </div>
    </section>
  );
};

export default Contact;
