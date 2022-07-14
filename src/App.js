import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Works from "./components/Works";
// import Engineering from "./components/Engineering";
import About from "./components/About";
import Resume from "./components/Resume";
import Connect from "./components/Connect"
import Footer from "./components/Footer";

const App = () => {
  return <div>
<Navbar />
<Hero />
<Works title="Works"/>
{/* <Engineering /> */}
<About title="hello!"/>
<Resume title="Resume"/>
<Connect />
<Footer />

  </div>;
};

export default App;
