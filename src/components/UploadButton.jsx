import '../styles/UploadButton.css';

function UploadButton(props) {
  return (
    <>
    <label htmlFor={props.htmlFor} className="button">{props.text}</label>
    <input className="addForm__hidden" type="file" name={props.name} id={props.id} />
    </>
  )
}

export default UploadButton

// Tenemos que unificar las props que le pasamos a este componente porque como todas tienen el mismo valor se puede ahcer una genérica y llamarla donde estamos llamando a las diferentes props. Es decir, htmlFor, id y name tienen todas el valor "image" o "photo" entonces se puede hacer una genérica y llamarla cada vez que llamemos a id, name o htmlFor.
