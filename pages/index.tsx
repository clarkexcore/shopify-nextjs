import { useEffect } from "react";
import play from "../playground";

export default function Home() {
	useEffect(() => {
		play();
	}, [])
	
	const message: string = "Hello World";
	let age: number = 10;

	let a: AddEventListenerOptions;
	let b: NodeJS.Process;

  	return (
		<div>{message}</div>
  	)
}
