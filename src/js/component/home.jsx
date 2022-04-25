import React, { useState, useEffect } from "react";
import { AddTarea } from "./addTarea.jsx";

const Home = () => {
	const [input, setInput] = useState("");
	const [lista, setLista] = useState([]);

	useEffect(() => {
		console.log(lista);
	}, [lista]);

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

	return (
		<div className="container">
			<div className="header">
				<h1>Lista de Tareas</h1>
				<input
					type="text"
					onChange={(e) => setInput(e.target.value)}
					value={input}
					placeholder="Please, write something." //capturo el elemtno en el input
				/>

				<button
					className="button pink"
					onClick={() => {
						setLista([...lista, input]); // almacena las nuevas tareas acumulando las anteriores en consola
					}}>
					Ok
				</button>
			</div>
			<hr />
			<div className="tabla">
				<div className="row">
					<div className="col-1"></div>
					<div className="col-5">
						<div className="row">Tareas por realizar:</div>
					</div>
					<div className="col-3">
						<div className="row">Eliminar:</div>
					</div>
					<div className="col-1"></div>
				</div>
				<AddTarea Tareas={lista} />
			</div>
		</div>
	);
};

export default Home;
