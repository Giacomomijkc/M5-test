import React, {Component} from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
         // stato globale che possiamo leggere tramite dot notation e.g this.state.count = 0
        // può contenere N stati (dipende dal nostro caso di utilizzo del componente)
        this.state = {
            count: 0,
        }
    }

    incrementCount () {
        // se volessimo modificare lo stato interviene un altro metodo
        // chiamato setState

        // il prevState (abbrev. previous state) non fa altro che assicurarci sempre l'ultimo stato corretto al netto
        // di tutti i suoi cambiamenti.
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    }

    decrementCount() {
        this.setState((prevState) => ({
            count: prevState.count - 1
        }));
    }
    render() {
        return (
            <div>
                {/* per leggere il nostro stato, tramite dot notation accediamo all'oggetto state, e alla sua sotto proprietà count */}
                <h1>Counter: {this.state.count}</h1>
                {/* per agganciare un metodo ad un elemento, utilizziamo gli eventi, in questo caso onClick, ovvero al click */}
                <button className="p-2 bg-amber-700 rounded text-white" onClick={() => this.incrementCount()}>
                    incrementa
                </button>
                {/* stessa cosa come per il metodo increment, il metodo decrement fa esattamente l'opposto*/}
                <button className="p-2 bg-amber-700 rounded text-white" onClick={() => this.decrementCount()}>
                    decrement
                </button>
            </div>
        )
    }
}
export default Counter