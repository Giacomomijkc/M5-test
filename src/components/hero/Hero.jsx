import React, { Component } from "react";

class Hero extends Component {
    render() {
        return(
            <div className="p-2 bg-amber-300 flex justify-start hover:bg-amber-700">
                <div>
                    <button className="p-2 bg-violet-600 text-white rounded">Bottone</button>
                </div>
                <div></div>
            </div>
        )
    }
}

export default Hero;