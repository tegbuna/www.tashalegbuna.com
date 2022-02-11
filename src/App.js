import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
// import Resume from "./components/About";


const App = () => {
  return <div>
<Navbar />
<Hero />
<About title="Who I am"/>
{/* <Resume title="What I know"/> */}

  </div>;
};

export default App;
