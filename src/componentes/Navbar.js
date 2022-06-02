import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import SearchIcon from "@mui/icons-material/Search";
import melli from "../imagen/melli.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
	const navigate = useNavigate();
	const [valorDelInput, setValorDelInput] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(`/busqueda/${valorDelInput}`);
	};

	const handleChange = (e) => {
		setValorDelInput(e.target.value);
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar
					sx={{
						backgroundColor: "#fff15a",
						display: "flex",
						justifyContent: "flex-start",
						p: 1,
					}}
				>
					<Box
						sx={{
							mr: "30px",
						}}
					>
						<img src={melli} alt="mercado ME-LLI" />
					</Box>
					<Paper
						component="form"
						onSubmit={handleSubmit}
						sx={{
							p: "0px 4px",
							display: "flex",
							alignItems: "center",
							width: 600,
						}}
					>
						<InputBase
							sx={{ ml: 1, flex: 1 }}
							onChange={handleChange}
							placeholder="Buscar productos, marcas y más..."
						/>
						<Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
						<IconButton type="submit" sx={{ p: "10px" }} aria-label="buscar">
							<SearchIcon />
						</IconButton>
					</Paper>

					<IconButton
						size="large"
						edge="end"
						aria-label="menu"
						sx={{
							mr: 2,
							display: { sm: "none", md: "none", lg: "none", xl: "none" },
						}}
					>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
export default Navbar;
