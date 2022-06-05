import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const TarjetaIndividual = ({ imagen, titulo, precio, condicion, envio }) => {
	return (
		<Grid>
			<Card
				xs={10}
				sx={{
					width: 800,
					height: 250,

					m: 0.3,
					display: "flex",
					alignItems: "center",
					justifyContent: "flexStart",
				}}
			>
				<CardActions>
					<CardMedia
						component="img"
						height="150"
						image={imagen}
						alt={titulo}
						style={{ objectFit: "contain" }}
					/>
					<CardContent>
						<Typography
							variant="body1"
							sx={{ fontSize: 15, pl: 0.5, color: "#bdbdbd" }}
						>
							{condicion === "new" ? "Nuevo" : "Usado"}
						</Typography>
						<Typography variant="body2" sx={{ fontSize: 20 }}>
							{titulo}
						</Typography>
						{envio && (
							<Typography variant="body2" color="success.main">
								Envio gratis
							</Typography>
						)}

						<Typography variant="h6">{`$ ${precio} `}</Typography>
					</CardContent>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default TarjetaIndividual;
