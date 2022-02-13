import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";


const App = () => {
  return <div>
<Navbar />
<Hero />
<About title="Who I am"/>
<Resume title="What I know"/>
<Portfolio title="What I do"/>

  </div>;
};

export default App;
