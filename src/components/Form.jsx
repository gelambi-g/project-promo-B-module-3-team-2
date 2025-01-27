import UploadButton from "./UploadButton"
import '../styles/Form.css'

function Form(props) {
      //función manejadora con id reconocemos el input con value obtenemos su valor
    const handleChangeInput = (ev) => {
        const inputID = ev.target.id;
        const inputValue = ev.target.value;   
        props.changeData(inputID, inputValue);  
    };
    return (
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
            <UploadButton text="Subir foto del proyecto" htmlFor="image" name="image" id="image"/>
            <UploadButton text= "Subir foto de la autora" htmlFor="photo" name="photo" id="photo"/>
            {/* falta funcionalidad dentro de upload */}
            <button className="button--large">Guardar proyecto</button>
        </fieldset>
        
        </form>
  )
}

export default Form