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


  
//asignar valor a la variable para renderizar en el preview con set
  const changeData = (key, value) => {
    if(key === 'name'){
          setDataCard({...dataCard, name : value});
        }else if(key === 'slogan'){
          setDataCard({...dataCard, slogan : value});
        }else if(key === 'repo'){
          setDataCard({...dataCard, repo : value});
        }else if(key === 'demo'){
          setDataCard({...dataCard, demo : value});
        }else if(key === 'technologies'){
          setDataCard({...dataCard, technologies : value});
        }else if(key === 'desc'){
          setDataCard({...dataCard, desc : value});
        }else if(key === 'autor'){
          setDataCard({...dataCard, autor : value});
        }else if(key === 'job'){
          setDataCard({...dataCard, job : value});
        }
  }

  return (
<>
<div className="container">

  <Header />

  <MainSection dataCard={dataCard} changeData={changeData}/>

  <Footer/>
</div>
</>
)
}

export default App
