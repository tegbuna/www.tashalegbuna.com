import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/Resume";
// import Portfolio from "./components/Portfolio";


const App = () => {
  return <div>
<Navbar />
<Hero />
<About title="Who I am"/>
<Resume title="What I do"/>
{/* <Portfolio title="What I've  made"/> */}

  </div>;
};

export default App;
