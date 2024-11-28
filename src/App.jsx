import Admission from "./components/admission";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Content from "./components/content";
import Header from "./components/header";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-slate-100">
        <Header />
        <Content />
        <About />
        <Home />
        <Admission />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
