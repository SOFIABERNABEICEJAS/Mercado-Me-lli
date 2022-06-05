import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UseFechDescripcion = () => {
	const params = useParams();
	const [descripcion, setDescripcion] = useState([]);

	useEffect(() => {
		fetch(`https://api.mercadolibre.com/items/${params.id}/description`)
			.then((res) => res.json())
			.then((data) => {
				setDescripcion(data);
			});
	}, [params.id]);

	return {
		descripcion: descripcion,
	};
};

export default UseFechDescripcion;
