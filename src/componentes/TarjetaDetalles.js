import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import useFetchDetalles from "../hooks/UseFetchDetalles";
import useFechDescripcion from "../hooks/UseFetchDescripcion";

const TarjetaDetalles = () => {
	const params = useParams();
	const { detalles } = useFetchDetalles(params.id);
	const { descripcion } = useFechDescripcion(params.id);
	console.log(detalles);

	return (
		<Grid
			sx={{
				pt: 6,
				pb: 12,
				backgroundColor: "#ebebeb",
			}}
		>
			<Container>
				<Grid container justifyContent="center" alignItems="center">
					<Card
						sx={{
							width: 800,
							p: "20px",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
						}}
					>
						<Box
							sx={{
								height: 300,
								display: "flex",
								alignItems: "center",
								justifyContent: "flexStart",
							}}
						>
							<CardActions>
								<CardMedia
									component="img"
									height="250"
									image={detalles.secure_thumbnail}
									alt={detalles.title}
									style={{ objectFit: "contain" }}
								/>
								<CardContent>
									<Typography
										variant="body1"
										sx={{ fontSize: 15, pl: 0.5, color: "#bdbdbd" }}
									>
										{`  ${
											detalles.condition === "new" ? "Nuevo | " : "Usado | "
										}     ${
											detalles.initial_quantity - detalles.available_quantity
										}
									 vendidos`}
									</Typography>

									<Typography variant="h3" sx={{ fontSize: 25, m: 1 }}>
										{detalles.title}
									</Typography>

									<Typography variant="h4">{`$ ${detalles.base_price} `}</Typography>
									<Typography variant="body1">
										{detalles.descriptions}
									</Typography>
									<Typography variant="body2">{`Cantidad disponible: ${detalles.available_quantity} `}</Typography>
								</CardContent>
							</CardActions>
						</Box>
						{descripcion.plain_text && (
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
								}}
							>
								<Typography variant="h6">Descipción:</Typography>
								<Typography
									variant="body2"
									sx={{ fontSize: 20, color: "#757575" }}
								>
									{descripcion.plain_text}
								</Typography>
							</Box>
						)}
					</Card>
				</Grid>
			</Container>
		</Grid>
	);
};

export default TarjetaDetalles;
