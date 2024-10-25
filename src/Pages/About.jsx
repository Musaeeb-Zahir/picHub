import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function About() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">About This Website</h1>
      <p className="lead text-center">
        This website is designed to help users easily download stock images from
        a vast collection.
      </p>

      <div className="row mt-5">
        <div className="col-md-6">
          <h3>Technologies Used</h3>
          <ul>
            <li>React.js for front-end development</li>
            <li>Redux for state management</li>
            <li>Unsplash API for fetching high-quality stock images</li>
            <li>React-Bootstrap for UI components</li>
          </ul>
        </div>

        <div className="col-md-6">
          <h3>About the Project</h3>
          <p>
            The main focus of this project is to provide a functional platform
            for downloading stock images. The UI is kept simple, focusing on the
            core functionality rather than elaborate design.
          </p>
          <p>
            Users can browse and download images directly from the Unsplash API,
            and the site is optimized for quick access to large image
            collections. This project will be included in my resume to
            demonstrate my web development skills and ability to integrate
            third-party APIs.
          </p>
        </div>
      </div>

      <div className="text-center mt-5">
        <h4>
          Check out more projects on my{" "}
          <a href="https://github.com/Musaeeb-Zahir" target="_blank">
            GitHub
          </a>{" "}
          and connect with me on{" "}
          <a
            href="https://www.linkedin.com/in/musaeeb-zahir-96a6ba2a4/"
            target="_blank"
          >
            LinkedIn
          </a>
          .
        </h4>
      </div>
    </div>
  );
}

export default About;
