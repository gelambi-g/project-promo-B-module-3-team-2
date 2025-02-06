import Card from "./Card";
import '../styles/Preview.scss';
import ebook from '../images/ebook-example.jpg';

function Preview(props) {
  const projectImg = props.dataCard.image === '' ? ebook : props.dataCard.image;
  return (
    <section className="preview">
        <div className="projectImage" style={{ backgroundImage: `url(${projectImg})` }}></div>
        <Card dataCard={props.dataCard}/>
    </section>
  )
}

export default Preview