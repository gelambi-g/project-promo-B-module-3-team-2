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