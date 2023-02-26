import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const ContactForm = () => {
	return (
		<div>
			<Box
				component="form"
				sx={{
					"& > :not(style)": { m: 1, width: "25ch" },
				}}
				noValidate
				autoComplete="off"
			>
				<TextField id="nombre" label="Ingrese su nombre" variant="outlined" />
				<TextField id="mail" label="Filled" variant="filled" />
				<TextField id="mensaje" label="Standard" variant="standard" />
			</Box>
		</div>
	);
};
