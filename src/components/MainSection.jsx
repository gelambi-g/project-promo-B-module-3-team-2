import Form from "./Form"
import Hero from "./Hero"
import Preview from "./Preview"
import '../styles/MainSection.css'


function MainSection(props) {
  return (
    <main className="main">
        <Hero/>
        <Preview dataCard={props.dataCard}/>
        <Form/>
  </main>
  )
}

export default MainSection