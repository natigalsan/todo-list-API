import React from "react";
import { useState } from "react/cjs/react.production.min";

const Header = () =>{
    const [input, setInput] = useState([]);
    const [lista, setLista] = useState ("");

    return (
            <div className="container">

            <h1>Lista de Tareas</h1>
                <input
                    type="text"
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                    placeholder="Please, write something."
                />
                <button className="button pink"
                    onClick={() => {
                    	setLista([...lista, input]);
                    }}
                    >Ok
                </button>
            </div>
        

    );
};

export default Header; 