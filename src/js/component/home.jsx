import React, { useState, useEffect } from "react";

import AddList from "./addLista.jsx";
import Header from "./header.jsx";

const Home = () => {
	
	// useEffect(() => {
	// 	console.log(lista);
	// }, [lista]);

	return (
		<div className="container-fluid">
			<Header/>
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
