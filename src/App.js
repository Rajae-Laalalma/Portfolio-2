import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Techstack from "./components/Techstack";



function App() {
  return (
    <div className="App">
  <NavBar/>
  <Home/>
  <Techstack/>
  <Projects/>
    </div>
  );
}

export default App;
