import Home from "./componentes/home";
import Navbar from "./componentes/navbar";
import Section from "./componentes/section";
import Aside from "./componentes/aside";
import Footer from "./componentes/footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Home />
        <Section />
        <Aside />
        <Footer />
      </div>
    </>
  );
}

export default App;