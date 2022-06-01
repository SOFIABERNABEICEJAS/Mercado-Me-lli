import Navbar from "./componentes/Navbar";
import Box from "@mui/material/Box";
import Home from "./componentes/Home";
import { useState } from "react";

const App = () => {
	const [valorDelInput, setValorDelInput] = useState("");
	const [busqueda, setBusqueda] = useState("");
	const handleChange = (e) => {
		setValorDelInput(e.target.value);
	};
	const handleClick = () => {
		setBusqueda(valorDelInput);
		console.log(valorDelInput);
	};
	return (
		<Box sx={{ backgroundColor: "#ebebeb" }}>
			<Navbar handleChange={handleChange} handleClick={handleClick} />
			<Home busqueda={busqueda} />
		</Box>
	);
};

export default App;
