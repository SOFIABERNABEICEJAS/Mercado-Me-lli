import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UseFechSearch = (page) => {
	const params = useParams();
	const [productos, setProductos] = useState([]);
	useEffect(() => {
		fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${params.busqueda}`)
			.then((res) => res.json())
			.then((data) => {
				setProductos(data.results);
			});
	}, [params.busqueda]);
	return {
		productos: productos,
	};
};

export default UseFechSearch;
