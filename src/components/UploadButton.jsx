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