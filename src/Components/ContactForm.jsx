import { useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [isSent, setIsSent] = useState(false);
  const form = useRef();
  const env = import.meta.env;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        env.VITE_REACT_APP_EJS_SERVICE,
        env.VITE_REACT_APP_EJS_TEMPLATE,
        form.current,
        env.VITE_REACT_APP_EJS_KEY
      )
      .then(
        (result) => {
          document.getElementById("contact_form").reset();
          setIsSent(true);
        },
        (error) => {
          console.error(error);
          setIsSent(false);
        }
      );
  };

  return (
    <div
      style={{
        backgroundImage:
          "url(https://uploads-ssl.webflow.com/62e3ee10882dc50bcae8d07a/631a5d4631d4c55a475f3e34_noise-50.png)",
      }}
      className="w-full sm:w-[60%] h-full bg-grayscale rounded-xl pt-10 pb-10 pl-8 pr-8 shadow-2xl"
    >
      <div>
        <h2
          style={{ fontFamily: "Morganite Bold, sans-serif" }}
          className="message text-7xl bg-primary-600 p-2 rounded-xl text-grayscale-200 text-center rounded-br-[0%] relative shadow-2xl"
        >
          <Typewriter words={["Vous avez une idée ?", "Travaillons ensemble !"]} loop={true} />
          &nbsp;
        </h2>
      </div>
      <div className="w-full flex flex-col justify-center text-grayscale-100 items-center h-5/6">
        <div className="mb-6 flex flex-col justify-center items-center">
          <span className="text-xl"> Mon numéro de téléphone </span>
          <a href="tel:0665704174"> 06 65 70 41 74 </a>
        </div>
        <div className="mb-6 flex flex-col justify-center items-center">
          <span className="text-xl"> Mon adresse mail </span>
          <a href="mailto:thibaultderouinpro@gmail.com">thibaultderouinpro@gmail.com</a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
