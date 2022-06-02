import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const TarjetaIndividual = ({
	imagen,
	titulo,
	precio,
	condicion,
	envio,
	picture,
}) => {
	return (
		<Grid>
			<Card sx={{ width: 800, height: 250, m: 0.3 }}>
				<CardActions>
					<CardMedia
						component="img"
						height="140"
						image={imagen}
						alt={titulo}
						style={{ objectFit: "contain" }}
					/>
					<CardContent>
						<Typography gutterBottom variant="h6" component="div">
							{titulo}
						</Typography>
						{envio && (
							<Typography variant="body2" color="success.main">
								Envio gratis
							</Typography>
						)}

						<Typography variant="h6">{`$ ${precio} `}</Typography>
						<Typography variant="h6">{picture}</Typography>
						<Typography variant="h6">
							{condicion === "new" ? "Nuevo" : "Usado"}
						</Typography>
					</CardContent>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default TarjetaIndividual;
