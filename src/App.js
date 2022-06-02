import Navbar from "./componentes/Navbar";
import ResultadoDeBusqueda from "./componentes/ResultadoDeBusqueda";
import TarjetaDetalles from "./componentes/TarjetaDetalles";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				{/* <Route path="/" element={<Home />} /> */}
				<Route path="/search/:search" element={<ResultadoDeBusqueda />} />
				<Route path="/items/:id" element={<TarjetaDetalles />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
