import React, { useEffect } from "react";

export const AddTarea = ({ Tareas }) => {
	return (
		<>
			<div className="row">
				{Tareas.map((e, i) => {
					return (
						<div key={i}>
							{e}
							<button>
								<i class="far fa-trash-alt"></i>
							</button>
						</div>
					); //i es la posición de mi elemento e. --> key es la puerta que hace que inicie una nueva posición.
				})}
			</div>
		</>
	);
};
//me retorna un elemento cada vez k escribo en el input
