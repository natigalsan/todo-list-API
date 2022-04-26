import React, { useState, useEffect } from "react";
import { AddTarea } from "./addTarea.jsx";

const Home = () => {
	const [input, setInput] = useState("");
	const [lista, setLista] = useState([]);

	
	useEffect(() => {
		console.log(lista);
	}, [lista]);

	return (
		<div className="container" id="hoja_de_tareas">
			<div className="header" id="header">
				<div className="row">
					<h1 className="d-flex justify-content-center" id="titulo">
						Lista de Tareas
					</h1>
				</div>
				<div className="row">
					<div className="col-7">
						<input
							className="d-flex justify-content-center"
							id="Entrada"
							type="text"
							onChange={(e) => setInput(e.target.value)}
							value={input}
							placeholder="Please, write something." //capturo el elemtno en el input
						/>
					</div>
					<div className="col-5">
						<button
							className="button btn-light d-flex justify-content-left"
							onClick={() => {
								setLista([...lista, input]); // almacena las nuevas tareas acumulando las anteriores en consola
							}}>
							Add
						</button>
					</div>
				</div>
			</div>

			<div className="taskList">
				<AddTarea Tareas={lista} />
			</div>
		</div>
	);
};

export default Home;

// const AddTarea = input.map((AgregarTarea, i) => {
// 	return (
// 		<div className="addTarea">
// 			{AgregarTarea}
// 			<button className="eliminar">
// 				<i className="far fa-trash-alt"></i>
// 			</button>
// 		</div>
// 	);
// });
