import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import publicidad from "../imagen/publicidad.png";
import publicidad2 from "../imagen/publicidad2.png";
import publicidad3 from "../imagen/publicidad3.png";
import Box from "@mui/material/Box";
//no es lo idea todavia no encuntro la publicidad en la api. Sigo trabajando
const Home = () => {
	return (
		<Box
			sx={{
				pb: "200px",
				backgroundColor: "#ebebeb",
			}}
		>
			<Slider dots={true} slidesToShow={1} autoplay={true}>
				<div style={{ objectFit: "contain" }}>
					<img src={publicidad} alt="publicidad"></img>
				</div>
				<div style={{ objectFit: "contain" }}>
					<img src={publicidad2} alt="publicidad"></img>
				</div>
				<div style={{ objectFit: "contain" }}>
					<img src={publicidad3} alt="publicidad"></img>
				</div>
			</Slider>
		</Box>
	);
};
export default Home;
