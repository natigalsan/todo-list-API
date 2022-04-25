import React, { useState, useEffect } from "react";


const Home = () => {

	const [input, setInput] = useState([]);
	const [lista, setLista] = useState("");

	useEffect(() => {
		console.log(lista);
	}, [lista]);

	return (
		<div className="container-fluid">
			<h1>Lista de Tareas</h1>
			<input
				type="text"
				onChange={(e) => setInput(e.target.value)}
				value={input}
				placeholder="Please, write something."
			/>
			 
			<button
				className="button pink"
				onClick={() => {
					setLista([...lista, input]);
				}}>
				Ok
			</button>
			<hr />

			<div className="tabla">
				<div className="row">
					<div className="col-1"></div>
					<div className="col-5">
						<div className="row">Tareas por realizar:</div>
						<span>{input}</span>
					</div>
					<div className="col-3">
						<div className="row">Eliminar:</div>
					</div>
					<div className="col-1"></div>
				</div>
			</div>
		</div>
	);
};

// 	<div style={{ justifyContent: "Center", alignContent: "center" }}>
// 		<h1 className="text-center mt-5 ">Lista de Tareas</h1>

// 		<div className="container d-flex justify-content-center">
// 			<i className="far fa-times-circle"></i>
// 			<input
// 				type="text"
// 				OnChange={(e) => setInput(e.target.value)}
// 				placeholder="Please, write something"
// 			/>

// 			<button
// 				onClick={() => {
// 					setInput([...lista, input]);
// 				}}>
// 				Ok
// 			</button>
// 			<br />
// 			<span>{input ? input : ""}</span>
// 		</div>
// 		<div className="tabla">
// 			<table>
// 				<tr>
// 					<th></th>
// 					<th>
// 						<i className="far fa-times-circle"></i>
// 					</th>
// 					<tbody>

// 					</tbody>
// 				</tr>
// 			</table>
// 		</div>
// 	</div>
// );

export default Home;
