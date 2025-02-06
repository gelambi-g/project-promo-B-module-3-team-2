import Card from "./Card";
import '../styles/Preview.scss';
import ebook from '../images/ebook-example.jpg';

function Preview({dataCard}) {
  const projectImg = dataCard.image === '' ? ebook : dataCard.image;
  return (
    <section className="preview">
        <div className="projectImage" style={{ backgroundImage: `url(${projectImg})` }}></div>
        <Card dataCard={dataCard}/>
    </section>
  )
}

export default Preview