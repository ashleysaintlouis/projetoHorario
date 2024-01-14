import React from "react";


function Titulo (props) {


    return (
        <div className="row">
                <div className="col">
                    <h2>{props.mensagem}</h2>
                    <h3>{props.mensagem2}</h3>
                    <h4>{props.mensagem3}</h4>
                </div>
            </div>
    );

}
export  default Titulo;