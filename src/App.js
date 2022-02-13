import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";


const App = () => {
  return <div>
<Navbar />
<Hero />
<About title="About"/>
<Resume title="Resume"/>
<Portfolio title="Portfolio"/>

  </div>;
};

export default App;
