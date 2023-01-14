import React from "react";
import "./App.css";
import { useBearStore } from "./store/store";

function App() {
	const { bears, increase, reset } = useBearStore();

	return (
		<div className='App'>
			<div>There are {bears} bears</div>
			<button onClick={() => increase(1)}>One Up</button>
			<button onClick={() => reset()}>Reset</button>
		</div>
	);
}

export default App;
