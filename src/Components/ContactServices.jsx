import { m, LazyMotion, domAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../Constants/constants";
import {faMobilePhone} from "@fortawesome/free-solid-svg-icons";

const ContactServices = () => {
  return (
    <div
      className="w-full sm:w-[40%] h-full flex flex-col gap-4 justify-center"
      style={{ fontFamily: "Poppins,sans-serif" }}
    >
      <LazyMotion features={domAnimation} strict>
        <m.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.3, type: "spring", delay: 0.2}}
        >
          <div className="w-full h-[50px] text-grayscale-100 flex items-center gap-4">
            <FontAwesomeIcon
                className="w-[50px] h-full text-primary-400"
                icon={icons.faWindowRestore}
            />
            <span>Développement web sur-mesure</span>
          </div>
        </m.div>
        <m.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.6, type: "spring"}}
        >
          <div className="w-full h-[50px] text-grayscale-100 flex items-center gap-4">
            <FontAwesomeIcon
                className="w-[50px] h-full text-primary-400"
                icon={icons.faMobile}
            />
            <span>Développement mobile</span>
          </div>
        </m.div>
        <m.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.4, type: "spring"}}
        >
          <div className="w-full h-[50px] text-grayscale-100 flex items-center gap-4">
            <FontAwesomeIcon
                className="w-[50px] h-full text-primary-400"
                icon={icons.faRobot}
            />
            <span>Développement CMS</span>
          </div>
        </m.div>
        <m.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.6, type: "spring"}}
        >
          <div className="w-full h-[50px] text-grayscale-100 flex items-center gap-4">
            <FontAwesomeIcon
                className="w-[50px] h-full text-primary-400"
                icon={icons.faDiceD6}
            />
            <span>Maintenance</span>
          </div>
        </m.div>
        <m.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.8, type: "spring"}}
        >
          <div className="w-full h-[50px] text-grayscale-100 flex items-center gap-4">
            <FontAwesomeIcon
                className="w-[50px] h-full text-primary-400"
                icon={icons.faTrello}
            />
            <span>Méthode SCRUM</span>
          </div>
        </m.div>
      </LazyMotion>
    </div>
  );
};

export default ContactServices;
