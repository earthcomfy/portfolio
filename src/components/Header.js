import resume from "../assets/resume.pdf";
import { FaDownload } from "react-icons/fa";

const skills = ["Python", "Django", "React.js", "PostgreSQL", "Tailwind CSS"];

export default function Header() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="lg:pr-10">
          <h5 className="mb-4 text-4xl font-light text-gray-600">Hana Belay</h5>
          <p className="mb-6 text-gray-600 font-light leading-relaxed">
            I'm a passionate and hardworking software developer from Ethiopia
            who is working towards a B.Sc. in Software Engineering. I'm highly
            interested in backend technologies and building APIs. My main focus
            these days is web development (mostly Django, Django rest framework,
            and React.js).
          </p>
          <hr className="mb-5 border-gray-300" />
          <h5 className="mb-4 text-xl font-light text-gray-600">
            Featured Skills
          </h5>
          <div className="flex items-center space-x-4">
            <div className="mt-4 mb-8 flex flex-wrap justify-center items-center gap-1">
              {skills.map((skill) => (
                <div key={skill} className="px-4 py-1 text-gray-600  border-2 rounded-full">
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <hr className="mb-5 border-gray-300" />
          <div>
            <a
              href={resume}
              download
              class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-light py-2 px-4 rounded-full inline-flex items-center"
            >
              <FaDownload />
              <span className="ml-2">Download Resume</span>
            </a>
          </div>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="https://images.unsplash.com/photo-1545875615-86f54b81a82d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHRlY2glMjBhbmQlMjBjb2RpbmclMjBibGFja3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
