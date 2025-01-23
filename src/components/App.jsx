import { useState } from "react";
import "../styles/App.css";

function App() {
  const [name, setName] = useState('Elegant Workspace');
  const [slogan, setSlogan] = useState('Diseños Exclusivos');
  const [repo, setRepo] = useState('#');
  const [demo, setDemo] = useState('#');
  const [technologies, setTechnologies] = useState('React JS - HTML - CSS');
  const [desc, setDesc] = useState('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipisci vitae ratione');
  const [autor, setAutor] = useState('Emmelie Bjôrklund');
  const [job, setJob] = useState('Full stack Developer');
  const [image, setImage] = useState('');
  
  const handleChangeInput = (ev) => {
    const inputID = ev.target.id;
    const inputValue = ev.target.value;

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
    }else if(inputID === 'image'){
      setImage(inputValue);
    }
  };

  return (
<>
<div className="container">

<header className="header">
  <a className="header__brand" href="./" title="Haz click para volver a la página inicial">
    <img className="header__companyLogo" src="./images/laptop-code-solid.svg" alt="Logo proyectos molones"/>
    <h1 className="header__title">Proyectos molones</h1>
  </a>
  <img className="logoSponsor" src="./images/adalab.png" alt="Logo Adalab"/>
</header>

<main className="main">
  <section className="hero">
    <h2 className="title">Proyectos molones</h2>
    <p className="hero__text">Escaparate en línea para recoger ideas a través de la tecnología</p>
    <a className="button--link" href="./">Ver proyectos</a>
  </section>

  <section className="preview">
    <div className="projectImage"></div>
    <article className="card">
      <h2 className="card__projectTitle"><span className="card__projectTitle--text">Personal project card</span></h2>

      <div className="card__author">
        <div className="card__authorPhoto"></div>
        <p className="card__job">
          {job}
        </p>
        <h3 className="card__name">{autor}</h3>
      </div>
  
      <div className="card__project">            
        <h3 className="card__name">{name}</h3>
        <p className="card__slogan">{slogan}</p>
        <h3 className="card__descriptionTitle">Product description</h3>
        <p className="card__description">{desc}</p>

        <div className="card__technicalInfo">
          <p className="card__technologies">{technologies}</p>
      
          <a className="icon icon__www" href={demo} title="Haz click para ver el proyecto online">
            Web link
          </a>
          <a className="icon icon__github" href={repo} title="Haz click para ver el código del proyecto">
            GitHub link
          </a>
        </div>
      </div>
    </article>
  </section>
  <form className="addForm">
    <h2 className="title">Información</h2>
    <fieldset className="addForm__group">
      <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
      <input className="addForm__input" type="text" name="name" id="name" placeholder="Nombre del proyecto" onChange={ handleChangeInput}/>
      <input className="addForm__input" type="text" name="slogan" id="slogan" placeholder="Slogan" onChange={ handleChangeInput}/>
      <div className="addForm__2col">
        <input className="addForm__input" type="url" name="repo" id="repo" placeholder="Repositorio" onChange={handleChangeInput}/>
        <input className="addForm__input" type="url" name="demo" id="demo" placeholder="Demo" onChange={handleChangeInput}/>
      </div>         
      <input className="addForm__input" type="text" name="technologies" id="technologies" placeholder="Tecnologías" onChange={handleChangeInput}/>
      <textarea className="addForm__input" type="text" name="desc" id="desc" placeholder="Descripción" rows="5" onChange={handleChangeInput}></textarea>
    </fieldset>

    <fieldset className="addForm__group">
      <legend className="addForm__title">Cuéntanos sobre la autora</legend>
      <input className="addForm__input" type="text" name="autor" id="autor" placeholder="Nombre" onChange={handleChangeInput}/>
      <input className="addForm__input" type="text" name="job" id="job" placeholder="Trabajo" onChange={handleChangeInput}/>
    </fieldset>

    <fieldset className="addForm__group--upload">
      <label htmlFor="image" className="button">Subir foto del proyecto</label>
      <input className="addForm__hidden" type="file" name="image" id="image" onChange={handleChangeInput}/>
      <label htmlFor="photo" className="button">Subir foto de la autora</label>
      <input className="addForm__hidden" type="file" name="photo" id="photo"/>
      <button className="button--large">Guardar proyecto</button>
    </fieldset>
    
  </form>
</main>

<footer className="footer">
  <img className="logoSponsor" src="./images/adalab.png" alt="Logo Adalab"/>
</footer>
</div>
</>
)
}

export default App
