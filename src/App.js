import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/Resume";
import Works from "./components/Works";
import Footer from "./components/Footer";

const App = () => {
  return <div>
<Navbar />
<Hero />
<Works title="Works"/>
<About title="About"/>
<Resume title="Resume"/>
<Footer />

  </div>;
};

export default App;
