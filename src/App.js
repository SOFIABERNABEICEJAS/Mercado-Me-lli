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
				<Route path="/busqueda/:busqueda" element={<ResultadoDeBusqueda />} />
				<Route path="/detalles/:id" element={<TarjetaDetalles />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
