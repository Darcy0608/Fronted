import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import './App.css'

function App() {
  return (
    <>
    <Header/>
    <Navbar/>
  
    <div className="container">
      <Section1/>
      <Section2/>
      <Aside/>
      </div>

      <Footer/>
      </>
  )
}

export default App;