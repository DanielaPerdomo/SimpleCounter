import React, { useState, useEffect } from "react";
import SimpleCounter from "./SimpleCounter.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval( () => {
			setCounter(counter => counter + 1 )
		}, 1000)
		console.log(counter)

		return () => clearInterval(interval)
	}, [counter])

	function calculateSeconds(aCounter, placeValue) {
		return Math.floor(aCounter / placeValue) % 10
	}



	return (
		
		<div className="">

			<SimpleCounter 
			thousandsDigit = {calculateSeconds(counter, 1000)}
			houndredsDigit = {calculateSeconds(counter, 100)}
			tensDigit = {calculateSeconds(counter, 10)}
			onesDigit = {calculateSeconds(counter, 1)}
			/>
			
		</div>
	);
};

export default Home;
