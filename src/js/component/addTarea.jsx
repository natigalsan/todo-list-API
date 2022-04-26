import React, { useEffect } from "react";

export const AddTarea = ({ Tareas }) => {
	return (
		<>
			<div className="row">
				{Tareas.map((e, i) => {
					return (
						<>
							<div className="row taskList">
								<div clasName="col-5" key={i}>
									{e}
								</div>
								<div className="col-3">
									<button
										onClick={function borrar(i) {
											let re = lista.filter(
												(valor, index) => {
													return index != i;
												}
											);
											setLista(re);
										}}>
										<i className="far fa-trash-alt"></i>
									</button>
								</div>
							</div>
						</>
					); //i es la posición de mi elemento e. --> key es la puerta que hace que inicie una nueva posición.
				})}
			</div>
		</>
	);
};
//me retorna un elemento cada vez k escribo en el input
