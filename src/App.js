import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/Resume";
import Works from "./components/Works";
import Footer from "./components/Footer";
import FooterNav from "./components/FooterNav";

const App = () => {
  return <div>
<Navbar />
<Hero />
<About title="About"/>
<Resume title="Resume"/>
<Works title="Works"/>
<Footer />
<FooterNav />

  </div>;
};

export default App;
