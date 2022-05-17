import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import GitHubButton from "react-github-btn";

const projects = [
  {
    tags: ["Django", "HTML", "Bootstrap"],
    title: "Django Registration/Login App",
    desc: "A user registration and login web-app created using Python, Django",
    github:
      "https://github.com/earthcomfy/Django-registration-and-login-system",
  },
  {
    tags: ["Django", "DRF"],
    title: "Recipe Sharing API",
    desc: "A recipe sharing API built using Django rest framework.",
    github: "https://github.com/earthcomfy/recipe-api",
  },
  {
    tags: ["React.js", "Redux", "TailwindCSS"],
    title: "Recipe Sharing App",
    desc: "A recipe sharing web app built using React.js and TailwindCSS",
    github: "https://github.com/earthcomfy/react-recipe-app",
  },
  {
    tags: ["React.js", "TailwindCSS"],
    title: "My Portfolio",
    github: "https://github.com/earthcomfy/portfolio",
  },
];

export default function Projects() {
  return (
    <div
      id="projects"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <h5 className="mt-2 text-4xl text-center font-light text-gray-600">
        My Projects
      </h5>
      <ul className="grid md:grid-cols-2 gap-4 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 sm:grid-cols-1">
        {projects.map((project) => (
          <li
            key={project.github}
            className="p-6 rounded-xl border-2 border-gray-300 shadow divide-y divide-gray-200"
          >
            <div>
              <a href={project.github}>
                <h1 className="text-xl text-center font-bold tracking-wide text-gray-600">
                  {project.title}{" "}
                  <FaExternalLinkAlt className="inline align-baseline" />
                </h1>
              </a>
              <hr className="my-4" />
              <p className="text-gray-600">⚡ {project.desc}</p>
              <div className="mt-4 mb-8 flex flex-wrap justify-center items-center gap-2">
                {project.tags.map((tag) => (
                  <div className="px-4 py-1 text-gray-600  border-2 rounded-full">
                    {tag}
                  </div>
                ))}
              </div>
              <div class="w-full text-center">
                <GitHubButton
                  href={project.github}
                  data-color-scheme="no-preference: light; light: light; dark: light;"
                  data-icon="octicon-star"
                  data-size="large"
                  data-show-count="true"
                  aria-label="Star ntkme/github-buttons on GitHub"
                >
                  Star
                </GitHubButton>
                {"  "}
                <GitHubButton
                  href={project.github + "/fork"}
                  data-color-scheme="no-preference: light; light: light; dark: light;"
                  data-icon="octicon-repo-forked"
                  data-size="large"
                  data-show-count="true"
                  aria-label="Fork ntkme/github-buttons on GitHub"
                >
                  Fork
                </GitHubButton>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
