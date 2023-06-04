import React from 'react'
import js from "../Assets/stack/Javascript.svg";
import css from "../Assets/stack/CSS.png";
import Bootstrap from "../Assets/stack/Bootstrap.svg";
import Express from "../Assets/stack/Express.png";
import Git from "../Assets/stack/Git.svg";
import Github from "../Assets/stack/Github.svg";
import html from "../Assets/stack/HTML.png";
import Vercel from "../Assets/stack/Vercel.svg";
import Tailwind from "../Assets/stack/Tailwind.png";
import redux from "../Assets/stack/Redux.svg";
import Reactimg from "../Assets/stack/React.png";
import NodeJs from "../Assets/stack/NodeJs.svg";
import MongoDB from "../Assets/stack/MongoDB.svg";
import MaterialUI from "../Assets/stack/MaterialUI.svg";
import styled, { keyframes } from "styled-components";

import vector from "../Assets/userAsset/blob vector.png"


const vectorAnimation = keyframes`
  0% {
    transform: translate(-20px, 20px);
  }
  50% {
    transform: translate(0);
  }
  100% {
    transform: translate(-20px, 20px);
  }
`;

const AnimatedVector = styled.img`
  position: absolute;
  z-index: -40;
  animation: ${vectorAnimation} 5s infinite;
`;

const About = () => {
  return (
    <div className='flex items-center justify-center sm:gap-8 xl:gap-[100px] mx-[15%] flex-wrap py-[100px]'>
        <div className='max-sm:w-[40px] md:w-[380px] flex  justify-center flex-col gap-6'>
            <h1 className='text-6xl text-pink-600'>Me and <br /> MyTech Stack</h1>
           <div className='flex items-center justify-center flex-col gap-6'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed animi, tenetur adipisci sit quae voluptate fuga nobis minima inventore cum!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores laudantium similique aliquid. Inventore consequuntur blanditiis nulla consectetur labore, accusantium quisquam perspiciatis nisi unde!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum itaque qui molestias optio?</p>
           </div>
        </div>

        <div className='relative flex max-w-[380px] flex-wrap items-center justify-center gap-5'>

            <img      className='sm:w-[40px] md:w-[80px] hover:scale-125 transition-all ease-in-out duration-500' src={html} alt="" />
            <img     className='sm:w-[40px] md:w-[80px] hover:scale-125 transition-all ease-in-out duration-500'  src={js} alt="" />
            <img     className='sm:w-[40px] md:w-[80px] hover:scale-125 transition-all ease-in-out duration-500'  src={css} alt="" />
            <img     className='sm:w-[40px] md:w-[80px] hover:scale-125 transition-all ease-in-out duration-500'  src={Bootstrap} alt="" />
            <img     className='sm:w-[40px] md:w-[80px] hover:scale-125 transition-all ease-in-out duration-500'  src={Tailwind} alt="" />
            <img     className='sm:w-[40px] md:w-[80px] hover:scale-125 transition-all ease-in-out duration-500'  src={Reactimg} alt="" />
            <img     className='sm:w-[40px] md:w-[80px] hover:scale-125 transition-all ease-in-out duration-500'  src={Express} alt="" />
            <img     className='sm:w-[40px] md:w-[80px] hover:scale-125 transition-all ease-in-out duration-500'  src={MongoDB} alt="" />
            <img     className='sm:w-[40px] md:w-[80px] hover:scale-125 transition-all ease-in-out duration-500'  src={NodeJs} alt="" /> 
            <img     className='sm:w-[40px] md:w-[80px] hover:scale-125 transition-all ease-in-out duration-500'  src={MaterialUI} alt="" />
            <img     className='sm:w-[40px] md:w-[80px] hover:scale-125 transition-all ease-in-out duration-500'  src={redux} alt="" />
            <img     className='sm:w-[40px] md:w-[80px] hover:scale-125 transition-all ease-in-out duration-500'  src={Github} alt="" />
            <img     className='sm:w-[40px] md:w-[80px] hover:scale-125 transition-all ease-in-out duration-500'  src={Vercel} alt="" />
            <img     className='sm:w-[40px] md:w-[80px] hover:scale-125 transition-all ease-in-out duration-500'  src={Git} alt="" />

            <AnimatedVector src={vector} alt='' />
            
            

        </div>
    </div>
  )
}

export default About