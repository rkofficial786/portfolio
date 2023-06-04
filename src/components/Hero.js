import React from "react";
import user from "../Assets/userAsset/Portfolioo.jpeg";
import circle from "../Assets/userAsset/circle.png";
import cube from "../Assets/userAsset/cube.png";
import dots from "../Assets/userAsset/dots.png";
import plus from "../Assets/userAsset/plus.png";
import zigzag from "../Assets/userAsset/zigzags.png";
import styled, { keyframes } from "styled-components";

const scaleBWAnimation = keyframes`
  0% {
    transform: scale(1);
    filter: grayscale(0%);
  }
  50% {
    transform: scale(1.2);
    filter: grayscale(100%);
  }
  100% {
    transform: scale(1);
    filter: grayscale(0%);
  }
`;

const cubeAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0);
  }
`;

const circleAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const zigzagAnimation = keyframes`
  0% {
    transform: translate(-10px, 10px);
  }
  50% {
    transform: translate(0);
  }
  100% {
    transform: translate(-10px, 10px);
  }
`;

const plusAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const dotsAnimation = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const AnimatedImage = styled.img`
  animation: ${scaleBWAnimation} 9s infinite;
`;

const AnimatedCube = styled.img`
  animation: ${cubeAnimation} 5s infinite;
`;

const AnimatedCircle = styled.img`
  animation: ${circleAnimation} 5s infinite;
`;

const AnimatedZigzag = styled.img`
  animation: ${zigzagAnimation} 5s infinite;
`;

const AnimatedPlus = styled.img`
  animation: ${plusAnimation} 4s infinite;
`;

const AnimatedDots = styled.img`
  animation: ${dotsAnimation} 3s infinite linear;
`;

const Hero = () => {
  const typedText = "Full Stack Developer";
  const typingSpeed = 100; // Adjust the typing speed here (in milliseconds)

  const TypingAnimation = () => {
    const [text, setText] = React.useState("");
    const [isDeleting, setIsDeleting] = React.useState(false);
    const currentIndex = text.length;
    const currentCharIndex = currentIndex % typedText.length;
    const currentChar = typedText[currentCharIndex];

    React.useEffect(() => {
      const timeout = setTimeout(() => {
        if (!isDeleting) {
          if (currentCharIndex === typedText.length - 1) {
            setIsDeleting(true);
          }
          setText((prevText) => prevText + currentChar);
        } else {
          setText((prevText) => prevText.slice(0, -1));
        }
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }, [currentIndex, isDeleting]);

    React.useEffect(() => {
      if (isDeleting && text === "") {
        setIsDeleting(false);
      }
    }, [text, isDeleting]);

    return <span>{text}</span>;
  };

  return (
    <div className="flex justify-between sm:gap-[100px] md:gap-0 mx-[15%]  items-center sm:flex-col md:flex-row py-[100px] ">
      <div className="flex flex-col justify-center sm:w-[260px] md:w-[600px]  gap-[30px]">
        <h1 className="text-4xl">Hi, Rupraj Singh</h1>
        <h1 className="text-5xl">
          I am a{" "}
          <span className="text-[45px] text-violet-600 font-bold ">
            {" "}
            <TypingAnimation />{" "}
          </span>{" "}
        </h1>
        <p className="md:w-[400px] sm:w-[280px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellat
          porro? Facilis asperiores tempore amet?
        </p>
        <button class="hover-button text-xl">Hire Me</button>
      </div>

      <div className=" md:w-auto sm:w-[260px]">
        <div className="relative">
          <AnimatedImage src={user} className="p-5 md:w-auto sm:w-[300px] border-2" alt="" />

          <div className="absolute -top-10 -left-10">
            <AnimatedZigzag src={zigzag} alt="" />
          </div>
          <div className="absolute -bottom-10 -left-10">
            <AnimatedCircle src={circle} alt="" />
          </div>
          <div className="absolute -top-10 -right-10">
            <AnimatedCube src={cube} alt="" />
          </div>
          <div className="absolute -top-10 right-[50%]">
            <AnimatedPlus src={plus} alt="" />
          </div>
          <div className="absolute -bottom-10 -right-10">
            <AnimatedDots src={dots} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
