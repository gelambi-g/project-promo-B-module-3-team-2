import { Link } from 'react-router-dom';
import '../styles/Hero.scss';

function Hero() {
  return (
    <section className="hero">
        <h2 className="title">Proyectos molones</h2>
        <p className="hero__text">Escaparate en línea para recoger ideas a través de la tecnología</p>
        <Link to="/landing" className="button--link">Ver proyectos</Link>
    </section>
  )
}

export default Hero