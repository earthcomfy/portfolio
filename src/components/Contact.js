import { useForm } from "react-hook-form";
import { send } from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const toastifySuccess = () => {
    toast.success("Email is sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const toastifyError = () => {
    toast.error("Oops, Email not sent", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    try {
      const templateParams = {
        name,
        email,
        subject,
        message,
      };
      await send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_PUBLIC_KEY
      );
      reset();
      toastifySuccess();
    } catch (e) {
      toastifyError();
    }
  };

  return (
    <div
      id="contact"
      className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
    >
      <h5 className="text-4xl text-center font-light text-gray-600">
        Contact Me
      </h5>
      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <div className="lg:pr-10">
          <h5 className="mb-4 text-4xl font-light text-gray-600">
            Get in touch
          </h5>
          <p className="mb-6 text-gray-600">
            Have a question or an inquiry? Fill out the form with some info and
            I'd
            <span> 💙</span> <span>to help!</span>
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="py-1  ">
              <input
                type="text"
                name="name"
                className="shadow-sm p-2 text-gray-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full border border-gray-300 rounded-md"
                placeholder="Name"
                {...register("name", {
                  required: { value: true, message: "Please enter your name" },
                  maxLength: {
                    value: 30,
                    message: "Please use 30 characters or less",
                  },
                })}
              />
              {errors.name && (
                <span className="text-red-500 text-xs">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="py-1  ">
              <input
                type="email"
                name="email"
                className="shadow-sm p-2 text-gray-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full border border-gray-300 rounded-md"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
              />
              {errors.email && (
                <span className="text-red-500 text-xs ">
                  Please enter a valid email address
                </span>
              )}
            </div>
            <div className="py-1  ">
              <input
                type="text"
                name="subject"
                className="shadow-sm p-2 text-gray-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full border border-gray-300 rounded-md"
                placeholder="Subject"
                {...register("subject", {
                  required: { value: true, message: "Please enter a subject" },
                  maxLength: {
                    value: 75,
                    message: "Subject cannot exceed 75 characters",
                  },
                })}
              />
              {errors.subject && (
                <span className="text-red-500 text-xs ">
                  {errors.subject.message}
                </span>
              )}
            </div>
            <div className="py-1  ">
              <textarea
                name="message"
                rows={3}
                className="shadow-sm p-2 text-gray-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                placeholder="Message"
                {...register("message", {
                  required: true,
                })}
              ></textarea>
              {errors.message && (
                <span className="text-red-500 text-xs ">
                  Please enter a message
                </span>
              )}
            </div>
            <div className="py-3">
              <button
                type="submit"
                className="py-3 px-4 border border-transparent rounded-md text-base font-medium text-white bg-blue-500 hover:bg-blue-600"
              >
                Contact Me
              </button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}
