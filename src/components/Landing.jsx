import Card from "./Card";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";


function Landing (props){

    return(
    <>
        <Header/>
        <Hero />
        <Card dataCard={props.dataCard}/>
        <Card dataCard={props.dataCard}/>
        <Card dataCard={props.dataCard}/>
        <Card dataCard={props.dataCard}/>

        <Footer />
    </>
    )
}

export default Landing;

//Para hacer el landing lo que vamos a tener que hacer es tener un array con todas las tarjetas y recorrerlo con map para pintar cada una de las tarjetas del array.