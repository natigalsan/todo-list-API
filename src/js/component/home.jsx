import React from "react";
import { useEffect } from "react/cjs/react.production.min";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
	const [input, addInput] = useState([]);
	useEffect(() => {
		return (
			<div>
				<h1 className="text-center mt-5 ">TODOS</h1>
				<div className="container d-flex justify-content-center">
					<button onClick={addInput(...input, "")}></button>
					<input type="text" />
					<i class="fas fa-trash-alt"></i>
				</div>
			</div>
		);
	}, []);
};

export default Home;
