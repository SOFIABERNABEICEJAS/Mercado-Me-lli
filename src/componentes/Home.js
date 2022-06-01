import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import TarjetaIndividual from "./TarjetaIndividual";
import { useState, useEffect } from "react";

const Home = ({ busqueda }) => {
	const [productos, setProductos] = useState([]);
	useEffect(() => {
		fetch(`https://api.mercadolibre.com/sites/MLA/search?q=iphone`)
			.then((res) => res.json())
			.then((data) => {
				setProductos(data.results);
			});
	}, [busqueda]);
	return (
		<Container>
			<Grid
				container
				justifyContent="center"
				alignItems="center"
				sx={{ mt: 2 }}
			>
				{productos.map((curr) => (
					<TarjetaIndividual titulo={curr.title} imagen={curr.thumbnail} />
				))}
			</Grid>
		</Container>
	);
};
export default Home;
