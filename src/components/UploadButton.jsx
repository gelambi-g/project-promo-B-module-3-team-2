import '../styles/UploadButton.css';



function UploadButton(props) {

  const handleFile = (ev) => {
    const id = ev.target.id;
    const urlImage = ev.target.value;
    getImage(id, urlImage)
  }

  const fr = new FileReader();

  return (
    <>
    <label htmlFor={props.id} className="button">{props.text}</label>
    <input className="addForm__hidden" type="file" name={props.id} id={props.id} onChange={handleFile}/>
    </>


  )
}

export default UploadButton


