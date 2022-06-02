import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import useFetchDetalles from "../hooks/UseFetchDetalles";

const TarjetaDetalles = () => {
	const params = useParams();
	const { detalles } = useFetchDetalles(params.id);

	return (
		<Grid
			sx={{
				width: "100%",
				height: "100%",
				pt: 6,
				pb: 12,
				backgroundColor: "#ebebeb",
			}}
		>
			<Container>
				<Grid container justifyContent="center" alignItems="center">
					<Card sx={{ width: 800, height: 300 }}>
						<CardActions>
							<CardMedia
								component="img"
								height="140"
								image={detalles.secure_thumbnail}
								alt={detalles.title}
								style={{ objectFit: "contain" }}
							/>
							<CardContent>
								<Typography gutterBottom variant="h6" component="div">
									{detalles.title}
								</Typography>

								<Typography variant="body2">{`Cantidad disponible: ${detalles.available_quantity} `}</Typography>
								<Typography variant="h4">{`$ ${detalles.base_price} `}</Typography>
								<Typography variant="body1">{detalles.descriptions}</Typography>
								<Typography variant="body1">
									{detalles.condition === "new" ? "Nuevo" : "Usado"}
								</Typography>
							</CardContent>
						</CardActions>
					</Card>
				</Grid>
			</Container>
		</Grid>
	);
};

export default TarjetaDetalles;
