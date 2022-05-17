import { FaCode, FaPen } from "react-icons/fa";
import { HiOutlineAdjustments } from "react-icons/hi";

const services = [
  {
    icon: <HiOutlineAdjustments className="text-4xl mx-auto inline-block" />,
    title: "RESTful API",
    desc: "I devlop well structured RESTful APIs using Python, Django",
  },
  {
    icon: <FaCode className="text-4xl mx-auto inline-block" />,
    title: "Web Application",
    desc: "I develop and deliver modern single-page web applications (SPA) using React.js",
  },
  {
    icon: <FaPen className="text-4xl mx-auto inline-block" />,
    title: "Content Writing",
    desc: "I write technical articles with clear direction and explanation to directed users",
  },
  {
    icon: <FaCode className="text-4xl mx-auto inline-block" />,
    title: "Web Application",
    desc: "I develop and deliver modern single-page web applications (SPA) using React.js",
  },
];

export default function Services() {
  return (
    <div
      id="services"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <h5 className="mb-16 mt-2 text-4xl text-center font-light text-gray-600">
        Services
      </h5>
      <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div className="p-5 duration-300 border rounded shadow-sm ">
            <div className="flex items-center text-gray-600 justify-center w-12 h-12 mb-4 rounded-full">
              {service.icon}
            </div>
            <h6 className="mb-2 font-bold tracking-wide leading-5 text-gray-600">{service.title}</h6>
            <p className="text-sm text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
