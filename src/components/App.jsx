import { useState } from "react";
import "../styles/App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {

  //Crear objeto de variables para pintar
  
  const dataCard = {
    name: '',
    slogan: '',
    repo: '',
    demo: '',
    technologies: '',
    desc: '',
    autor: '',
    job: ''
  }

//Variables estado de los imputs

  const [name, setName] = useState('');
  const [slogan, setSlogan] = useState('');
  const [repo, setRepo] = useState('');
  const [demo, setDemo] = useState('');
  const [technologies, setTechnologies] = useState('');
  const [desc, setDesc] = useState('');
  const [autor, setAutor] = useState('');
  const [job, setJob] = useState('');
  // const [image, setImage] = useState(''); -- Image y photo no sabemos como usarla en la preview
  
  //función manejadora con id reconocemos el input con value obtenemos su valor
  const handleChangeInput = (ev) => {
    const inputID = ev.target.id;
    const inputValue = ev.target.value;

    //asignar valor a la variable para renderizar en el preview con set
    if(inputID === 'name'){
      setName(inputValue);
    }else if(inputID === 'slogan'){
      setSlogan(inputValue);
    }else if(inputID === 'repo'){
        setRepo(inputValue);
    }else if(inputID === 'demo'){
      setDemo(inputValue);
    }else if(inputID === 'technologies'){
      setTechnologies(inputValue);
    }else if(inputID === 'desc'){
      setDesc(inputValue);
    }else if(inputID === 'autor'){
      setAutor(inputValue);
    }else if(inputID === 'job'){
      setJob(inputValue);
    }
  };

  return (
<>
<div className="container">

  <Header />

  <Main/>

  <Footer/>
</div>
</>
)
}

export default App
