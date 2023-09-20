import React, { useState } from "react";
import SimpleCounter from "./SimpleCounter.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [counter, setCounter] = useState(0);

	
	return (
		
		<div className="">
			<SimpleCounter />
		</div>
	);
};

export default Home;
