import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
	return (
		<Slider arrows={false} slidesToShow={1} autoplay={true}>
			<div>
				<h3>proximamente carrusel con promociones1</h3>
			</div>
			<div>
				<h3>proximamente carrusel con promociones2</h3>
			</div>
			<div>
				<h3>proximamente carrusel con promociones3</h3>
			</div>
			<div>
				<h3>proximamente carrusel con promociones4</h3>
			</div>
			<div>
				<h3>proximamente carrusel con promociones5</h3>
			</div>
			<div>
				<h3>proximamente carrusel con promociones</h3>
			</div>
		</Slider>
	);
};
export default Home;
