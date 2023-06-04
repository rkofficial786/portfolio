import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Faded from "./components/Faded";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="flex flex-col flex-wrap  ">
      <Navbar />
      <Hero />
     

      <div className=" ">
        {" "}
        <Faded text={"Project"} />{" "}
      </div>

      <Projects />

      <div className="">
        {" "}
        <Faded text={"Skills"} />{" "}
      </div>

      <About />
     

      <Contact/>
    </div>
  );
}

export default App;
