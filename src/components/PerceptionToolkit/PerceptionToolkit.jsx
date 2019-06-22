import "perception-toolkit";
import React, { useEffect, useRef } from "react";
import { setupPerceptionToolkit } from "./utils.js";

export default function PerceptionToolkit(){

	//HOOKS
	//--------------------
	const button = useRef();
	useEffect(setup, []);

	//EFFECT HANDLING
	//---------------------
	function setup(){
		setupPerceptionToolkit(button)
	}//setup

	return(
		<button 
			ref={button}>
			Get Started
		</button>
	);
}//PerceptionToolkit