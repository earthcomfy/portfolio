export default function Contact() {
  return (
    <div
      id="contact"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="lg:pr-10">
          <h5 className="mb-4 text-4xl font-light text-gray-600">
            Get in touch
          </h5>
          <p className="mb-6 text-gray-600">
            Have a question or an inquiry? Fill out the form with some info and I'd
            <span>{" "}
            ♡
            </span>{" "}
            <span>to help!</span>
          </p>
        </div>
        <div>
          <div className="py-1  ">
            <input
              type="text"
              name="name"
              className="shadow-sm p-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full border border-gray-300 rounded-md"
              placeholder="Name"
            />
          </div>
          <div className="py-1  ">
            <input
              type="email"
              name="email"
              className="shadow-sm p-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full border border-gray-300 rounded-md"
              placeholder="Email"
            />
          </div>
          <div className="py-1  ">
            <input
              type="text"
              name="subject"
              className="shadow-sm p-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full border border-gray-300 rounded-md"
              placeholder="Subject"
            />
          </div>
          <div className="py-1  ">
            <textarea
              name="desc"
              rows={3}
              className="shadow-sm p-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="py-3">
            <button
              type="submit"
              className="py-3 px-4 border border-transparent rounded-md text-base font-medium text-white bg-blue-500 hover:bg-blue-600"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
