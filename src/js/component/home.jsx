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
				<h1>Lista de Tareas</h1>
				<input
					type="text"
					onChange={(e) => setInput(e.target.value)}
					value={input}
					placeholder="Please, write something." //capturo el elemtno en el input
				/>

				<button
					className="button btn-light"
					onClick={() => {
						setLista([...lista, input]); // almacena las nuevas tareas acumulando las anteriores en consola
					}}>
					Add
				</button>
			</div>
			<hr />
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
