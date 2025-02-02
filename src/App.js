import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Techstack from "./components/Techstack";
import { DarkModeProvider } from "./components/DarkModeContext";
import React,{ useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"



function App() {
  useEffect(()=>{
    AOS.init({
      duration:600,
    })
  },[]);
  return (
    <DarkModeProvider>
    <div className="App  bg-white dark:bg-gray-900 transition duration-300">
      <NavBar />
      <Home />
      <Techstack />
      <Projects />
      <Contacts />
      <Footer/>
    </div>
    </DarkModeProvider>
  );
}

export default App;
