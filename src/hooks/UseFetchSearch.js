import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UseFechSearch = (page) => {
	const params = useParams();
	const [productos, setProductos] = useState([]);
	useEffect(() => {
		fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${params.search}`)
			.then((res) => res.json())
			.then((data) => {
				setProductos(data.results);
			});
	}, [params.search]);
	return {
		productos: productos,
	};
};

export default UseFechSearch;
