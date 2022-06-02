import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import TarjetaIndividual from "./TarjetaIndividual";
import { useState } from "react";
import useFetchSerch from "../hooks/UseFetchSearch";
import { Link } from "react-router-dom";

const ResultadoDeBusqueda = () => {
	const { productos } = useFetchSerch();

	return (
		<Container sx={{ backgroundColor: "#ebebeb", p: "2" }}>
			<Grid
				container
				justifyContent="center"
				alignItems="center"
				sx={{ mt: 2 }}
			>
				{productos.map((curr) => (
					<Link to={`/:busqueda/${curr.id}`} key={curr.id}>
						<TarjetaIndividual
							titulo={curr.title}
							imagen={curr.thumbnail}
							precio={curr.price}
						/>
					</Link>
				))}
			</Grid>
		</Container>
	);
};
export default ResultadoDeBusqueda;
