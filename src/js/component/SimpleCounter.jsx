import React, { useEffect, useState } from "react";
import '../../styles/SimpleCounter.css'

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const SimpleCounter = () => {
	return (
		<>
            <h1>Simple Counter</h1>
            <div className="counter-display">
                <div className="clock-img"><i className="iconClock fa-regular fa-clock fa-beat-fade"></i></div>
                <div className="seconds-thousands">0</div>
                <div className="seconds-houndreds">0</div>
                <div className="seconds-tens">0</div>
                <div className="seconds-ones">0</div>
            </div>
		</>
	);
};

export default SimpleCounter;
