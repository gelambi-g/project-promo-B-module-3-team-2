import UploadButton from "./UploadButton"
import '../styles/Form.css'
import PropTypes from 'prop-types';

function Form(props) {
      //función manejadora con id reconocemos el input con value obtenemos su valor
    const handleChangeInput = (ev) => {
        const inputID = ev.target.id;
        const inputValue = ev.target.value;   
        props.changeData(inputID, inputValue); 
        props.getImage(id, urlImage)
    };
    return (
    <form className="addForm">
        <h2 className="title">Información</h2>
        <fieldset className="addForm__group">
            <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
            <input className="addForm__input" type="text" name="name" id="name" placeholder="Nombre del proyecto" onChange={ handleChangeInput} value={props.dataCard.name}/>
            <input className="addForm__input" type="text" name="slogan" id="slogan" placeholder="Slogan" onChange={handleChangeInput} value={props.dataCard.slogan}/>
            <div className="addForm__2col">
            <input className="addForm__input" type="url" name="repo" id="repo" placeholder="Repositorio" onChange={handleChangeInput}/>
            <input className="addForm__input" type="url" name="demo" id="demo" placeholder="Demo" onChange={handleChangeInput}/>
            </div>         
            <input className="addForm__input" type="text" name="technologies" id="technologies" placeholder="Tecnologías" onChange={handleChangeInput} value={props.dataCard.technologies}/>
            <textarea className="addForm__input" type="text" name="desc" id="desc" placeholder="Descripción" rows="5" onChange={handleChangeInput} value={props.dataCard.desc}></textarea>
        </fieldset>

        <fieldset className="addForm__group">
            <legend className="addForm__title">Cuéntanos sobre la autora</legend>
            <input className="addForm__input" type="text" name="autor" id="autor" placeholder="Nombre" onChange={handleChangeInput} value={props.dataCard.autor}/>
            <input className="addForm__input" type="text" name="job" id="job" placeholder="Trabajo" onChange={handleChangeInput} value={props.dataCard.job}/>
        </fieldset>

        <fieldset className="addForm__group--upload">
            <UploadButton text="Subir foto del proyecto" id="image" getImage={getImage}/>
            <UploadButton text= "Subir foto de la autora" id="photo"/>
            {/* falta funcionalidad dentro de upload */}
            <button className="button--large">Guardar proyecto</button>
        </fieldset>
        
        </form>
  )
}

Form.propTypes = {
    changeData : PropTypes.func,
};

export default Form

//Tenemos que hacer validaciones del formulario. Tanto de rellenar todos los campos como de expresiones regulares (tipo de dato) que veirifcan el formato de cada campo (ejemplo: que en mail haya un @ y .com). Poner mensajes de aviso en caso de que no se haya rellenado correctamente.
//También tenemos que añadir los enlaces a los iconos de gitHub y dle repositorio para que se abran en una ventana nueva cuando pinchemos (target: _blank).
