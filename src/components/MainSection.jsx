import Form from "./Form"
import Hero from "./Hero"
import Preview from "./Preview"
import '../styles/MainSection.scss'
import PropTypes from 'prop-types';


function MainSection(props) {
  return (
    <main className="main">
        <Hero/>
        <Preview dataCard={props.dataCard}/>
        <Form changeData={props.changeData} getFileImage={props.getFileImage} dataCard={props.dataCard} setUrlDataCard={props.setUrlDataCard} urlDataCard={props.urlDataCard}/>
  </main>
  )
}

MainSection.propTypes = {
    dataCard : PropTypes.object,
    changeData : PropTypes.func
};

export default MainSection