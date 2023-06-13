import './App.css';
// import base di react e della classe Component che estendiamo ogni volta che creiamo un componente
import React, {Component} from "react";
// import dei nostri componenti (path relativa alla cartella SRC)
import Navbar from "./components/Navbar";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";
import Counter from "./components/Counter";
import Button from "./components/Buttons/Button";

// un class component prende il nome dal file che abbiamo creato. In questo caso esiste un file App.js,
// di conseguenza la nostra classe sarà class App exstends Component
class App extends Component {
    // file entrypoint all'interno del quale richiameremo i nostri componenti

    // all'interno della ns classe ci sarà SEMPRE il metodo RENDER
    // che non fa altro che ritornare SEMPRE un elemento per volta (che ne contiene altri)
    // ritorna sempre del JSX ovvero html + JS (un ibrido)
    render() {
        return (
            <>
                {/* Sintassi per richiamare un componente all'interno del metodo RENDER */}
                <Navbar/>
                <Hero/>
                <Counter />
                <Footer/>
                <Button btnName="bottone 1" />
                <Button btnName="bottone 2" color="red" />
                <Button btnName="bottone 1" />
            </>
        )
    }
}

// il componente creato va sempre esportato per essere poi importato in qualsiasi
// punto della nostra applicazione
export default App;