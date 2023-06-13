import React, {Component} from "react";
import './button.css'

class Button extends Component {

    constructor(props) {
        super(props);
        // in questo caso utilizziamo le props, ovvero rendiamo dinamico un attributo, che in base
        // a come verrà passato al componente, verrà renderizzato.
        this.state = {
            // stabiliamo che la props si chiamerà btnName, quindi nel componente padre (in questo caso App.js)
            // passeremo al componente <Button btnName="la mia props" />
            btnName: this.props.btnName,
            color: this.props.color
        }
    }
    render() {
        return (
            <button className={`button-global bg-amber-700`}>{this.state.btnName}</button>
        )
    }
}

export default Button;