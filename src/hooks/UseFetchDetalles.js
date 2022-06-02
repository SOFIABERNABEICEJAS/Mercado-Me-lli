import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UseFechDetalles = () => {
	const params = useParams();
	const [detalles, setDetalles] = useState([]);

	useEffect(() => {
		fetch(`https://api.mercadolibre.com/items/${params.id}`)
			.then((res) => res.json())
			.then((data) => {
				setDetalles(data);
			});
	}, [params.id]);

	return {
		detalles: detalles,
	};
};

export default UseFechDetalles;
