import React, { useState } from "react";
// import github from "../Assets/stack/Github.svg";
import { FiLink } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProjectCard = ({
  id,
  title,
  stack,
  image,
  description,
  margin,
  github,
  link,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`flex justify-center m-5 items-center  md:mx-[15%] `}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`relative projects sm:ml-0 xl:ml-[${margin}]`}>
        <img className="rounded-xl" src={image} alt="" />

        <div
          className={`absolute top-0 left-0 w-full h-full bg-black opacity-50 transition-opacity duration-300 ${
            isHovered ? "opacity-80" : "opacity-50"
          }`}
        ></div>

        <div
          className={`absolute top-0 left-0 w-full h-full bg-blue-300  ${
            isHovered
              ? "hover:w-[100%] transition-all ease-in-out opacity-25 duration-500"
              : "w-2 opacity-0 "
          }`}
        ></div>

        <div className="absolute top-0 right-0 text-white ">{isHovered?(<h1 className="md:text-[160px] select-none sm:text-4xl">{id}</h1>):("")}</div>

        {/* problem */}

        <div
          className={`absolute md:top-[20%] md:left-[10%] sm:top-2 sm:left-2 flex justify-center flex-col sm:gap-1 xl:gap-9 transition-transform duration-300 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        >
          <div className="flex items-center gap-5 flex-wrap">
            {stack.map((img) => {
              return (
                <img src={img} alt="" className="xl:w-[50px] sm:w-[15px] hover:scale-125 transition-all ease-in-out duration-500" />
              );
            })}
          </div>
          <div>
            <h1 className="xl:text-5xl sm:text-xl text-white font-semibold">
              {title}
            </h1>
          </div>
          <div className="">
            <p className="xl:text-xl sm:lg text-white md:line-clamp-none sm:line-clamp-1 italic w-[40%] ">
              {description}
            </p>
          </div>

          <div className="flex items-center gap-7">
            <button className="hover-button w-[100px]">Read More</button>

            <div className="text-3xl text-white">
              <Link
                className="hover:text-violet-500"
                to={github}
                target="blank"
              >
                {" "}
                <BsGithub />
              </Link>
            </div>
            <div className="text-3xl text-white">
              <Link className="hover:text-violet-500" to={link} target="blank">
                {" "}
                <FiLink />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
