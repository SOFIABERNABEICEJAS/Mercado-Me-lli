import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const TarjetaIndividual = ({ imagen, titulo, precio }) => {
	return (
		<Grid>
			<Card sx={{ width: 800, height: 250, m: 0.3 }}>
				<CardActions>
					<CardMedia
						component="img"
						height="200"
						image={imagen}
						alt={titulo}
						style={{ objectFit: "contain" }}
					/>
					<CardContent>
						<Typography gutterBottom variant="h6" component="div">
							{titulo}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{titulo}
						</Typography>

						<Typography variant="h6">{precio}</Typography>
					</CardContent>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default TarjetaIndividual;
