import Card from "./Card"

function Preview(props) {
  return (
    <section className="preview">
        <div className="projectImage"></div>
        <Card dataCard={props.dataCard}/>
    </section>
  )
}

export default Preview