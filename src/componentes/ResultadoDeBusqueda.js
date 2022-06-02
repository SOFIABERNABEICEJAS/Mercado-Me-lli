import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import TarjetaIndividual from "./TarjetaIndividual";
import useFetchSerch from "../hooks/UseFetchSearch";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ResultadoDeBusqueda = () => {
	const params = useParams();
	const { productos } = useFetchSerch();

	return (
		<Grid
			sx={{ width: "100%", height: "100%", pt: 6, backgroundColor: "#ebebeb" }}
		>
			<Container>
				<Grid container justifyContent="center" alignItems="center">
					{productos.map((curr) => (
						<Link to={`/search/${params.search}/${curr.id}`} key={curr.id}>
							<TarjetaIndividual
								titulo={curr.title}
								imagen={curr.thumbnail}
								precio={curr.price}
							/>
						</Link>
					))}
				</Grid>
			</Container>
		</Grid>
	);
};
export default ResultadoDeBusqueda;
