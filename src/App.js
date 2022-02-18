import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import FooterNav from "./components/FooterNav";

const App = () => {
  return <div>
<Navbar />
<Hero />
<About title="About"/>
<Resume title="Resume"/>
{/* <Portfolio title="Portfolio"/> */}
{/* <Footer /> */}
{/* <FooterNav /> */}

  </div>;
};

export default App;
