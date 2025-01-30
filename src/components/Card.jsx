import '../styles/Card.css'
import PropTypes from 'prop-types';
import avatar from '../images/avatar.webp';
function Card(props) {
  const avatarImg = props.dataCard.photo === '' ? avatar : props.dataCard.photo;

  return (
    <article className="card">
            <h2 className="card__projectTitle"><span className="card__projectTitle--text">Personal project card</span></h2>

            <div className="card__author">
            <div className="card__authorPhoto" style={{ backgroundImage: `url(${avatarImg})` }}></div>
            <p className="card__job">
                {props.dataCard.job || 'Full stack Developer'}
            </p>
            <h3 className="card__name">{props.dataCard.autor || 'Emmelie Bjôrklund'}</h3> {/* añadiendo '||' cuando el valor está vacío se pinta la string si no se pinta la variable */}
            </div>
        
            <div className="card__project">            
            <h3 className="card__name">{props.dataCard.name || 'Elegant Workspace'}</h3>
            <p className="card__slogan">{props.dataCard.slogan || 'Diseños Exclusivos'}</p>
            <h3 className="card__descriptionTitle">Product description</h3>
            <p className="card__description">{props.dataCard.desc || 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipisci vitae ratione'}</p>

            <div className="card__technicalInfo">
                <p className="card__technologies">{props.dataCard.technologies || 'React JS - HTML - CSS'}</p>
            
                <a className="icon icon__www" href={props.dataCard.demo || '#'} title="Haz click para ver el proyecto online">
                Web link
                </a>
                <a className="icon icon__github" href={props.dataCard.repo || '#'} title="Haz click para ver el código del proyecto">
                GitHub link
                </a>
            </div>
            </div>
    </article>
  )
}

Card.propTypes = {
  dataCard : PropTypes.object,
  name: PropTypes.string,
  slogan: PropTypes.string,
  repo: PropTypes.string,
  demo: PropTypes.string,
  technologies: PropTypes.string,
  desc: PropTypes.string,
  autor: PropTypes.string,
  job: PropTypes.string
};

export default Card