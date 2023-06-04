import js from "./Assets/stack/Javascript.svg";
import css from "./Assets/stack/CSS.png";
import Bootstrap from "./Assets/stack/Bootstrap.svg";
import Express from "./Assets/stack/Express.png";
import Git from "./Assets/stack/Git.svg";
import Github from "./Assets/stack/Github.svg";
import html from "./Assets/stack/HTML.png";
import Vercel from "./Assets/stack/Vercel.svg";
import Tailwind from "./Assets/stack/Tailwind.png";
import redux from "./Assets/stack/Redux.svg";
import React from "./Assets/stack/React.png";
import NodeJs from "./Assets/stack/NodeJs.svg";
import MongoDB from "./Assets/stack/MongoDB.svg";
import MaterialUI from "./Assets/stack/MaterialUI.svg";

import excel from "./Assets/Screenshot_182.png";
import flipzon from "./Assets/Screenshot_183.png";
import weather from "./Assets/Screenshot_184.png";

export const projects = [
  {
    id: "01",
    stack: [html, css, Tailwind, js, React, NodeJs, MongoDB, Express],
    image: excel,
    title: "Excel Shopping ",
    margin:"100px",
    description:
      "An end to end Shopping website where user can register login and buy products , also a dashboard for admin to manage products and orders",

      github:"https://github.com/rkofficial786/excel-products",
      link:"https://excel-products.onrender.com/"
  },

  {
    id: "02",
    stack: [html, css, Tailwind, js, React, redux],
    image: flipzon,
    title: "FlipZon Shopping ",
    margin:"-100px",
    description:
      "A basic frontend for an ecommerse where users can interact with the UI ",
      github:"https://github.com/rkofficial786/flip-zon",
      link:"https://flip-zon.netlify.app/"
  },

  {
    id: "03",
    stack: [html, css, Tailwind, js],
    image: weather,
    title: "Weather App ",
    margin:"100px",
    description:
      "Shows weather for you current location and users can also see weather of any city in the world by searching them",
      github:"https://github.com/rkofficial786/WeatherApp",
      link:"https://rkofficial786.github.io/WeatherApp/"
  },


 

];
