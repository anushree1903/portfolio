import PPic from "../assets/anu.jpg";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";
import { MdOutlineDocumentScanner } from "react-icons/md";

const Hero = () => {
  return (
    <div className="py-16 min-h-[80vh] md:min-h-[85vh] flex items-center flex-col-reverse lg:flex-row gap-10 justify-center">
      <div className="flex flex-col gap-4 md:gap-6 text-left lg:w-1/2 2xl:w-1/3 mx-6 xl:mx-0 ">
        <p className="text-2xl font-bold text-indigo-600">Hey,</p>
        <p className="text-3xl md:text-5xl font-bold relative">
          I'm
          <span className="text-indigo-600 ml-4 uppercase">
            Anushree H
          </span>
        </p>
        <p className="text-2xl font-semibold relative ">
           UI/UX Designer and Graphic Designer
        </p>
        <p className="text-lg md:text-md font-medium relative">
          Imagine a world where each tap, scroll, and click feels like a gentle whisper,
          effortlessly guiding you through stunning interactions. This is the world I
          envision creating as a Double Dose UI/UX designer, armed with a Master's in
          Psychology and a background in Graphic Design.
        </p>

        <div className="flex flex-row justify-center md:justify-normal gap-4 md:gap-6 mt-5">
          <Link to={"/about"}>
            <Button
              variant="gradient"
              color="indigo"
              className="flex gap-2 items-center"
            >
              <FaUserTie className="text-lg" />
              About Me
            </Button>
          </Link>
          <Link
            to="https://drive.google.com/file/d/14XO-gQIVsFSFHPUbXN9Rx2YHxXjDTZJ4/view?usp=sharing"
            target="_blank"
          >
            <Button
              variant="gradient"
              color="indigo"
              className="flex gap-2 items-center"
            >
              <MdOutlineDocumentScanner className="text-white text-lg" />
              Resume
            </Button>
          </Link>
        </div>
      </div>
      <div>
        <img
          src={PPic}
          alt="Anushree H"
          className="rounded-full h-72 w-72 md:w-72 md:h-72 object-cover object-center shadow-lg bg-indigo-500"
        />
      </div>
    </div>
  );
};

export default Hero;
