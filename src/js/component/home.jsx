import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
	const [input, setInput] = useState([]);
	useEffect(() => {
		console.log(input);
	}, [input]);
	return (
		<div>
			<h1 classNameName="text-center mt-5 ">TODOS</h1>

			<div classNameName="container d-flex justify-content-center">
				<button
					onClick={() => {
						setInput([...input, value]);
					}}>
					Ok
				</button>
				<input
					type="text"
					OnChange={(e) => setInput(e.target.value)}
					value={input}
					placeholder="Please, write something"
				/>
				<i className="fas fa-trash-alt"></i>
			</div>
		</div>
	);
};

export default Home;
