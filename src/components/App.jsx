import { useState } from "react";
import "../styles/App.css";
import Header from "./Header";
import MainSection from "./MainSection";
import Footer from "./Footer";

function App() {

  //Crear objeto de variables para pintar
  
  const [dataCard, setDataCard] = useState ({
    name: '',
    slogan: '',
    repo: '',
    demo: '',
    technologies: '',
    desc: '',
    autor: '',
    job: ''
  }
)


  
  return (
<>
<div className="container">

  <Header />

  <MainSection dataCard={dataCard}/>

  <Footer/>
</div>
</>
)
}

export default App
