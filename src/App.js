import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Services from "./components/Services";

function App() {
  return (
    <div className="bg-gray-100">
      <Nav />
      <Header />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
