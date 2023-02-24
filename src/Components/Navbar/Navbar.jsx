
import styles from "./Navbar.module.css";
import {CardWidget} from "../CardWidget/CardWidget.jsx";

export const Navbar = () => {
	return (
		<div className={styles.containerNavbar}>
			<img className={styles.imagenLogo} src="https://res.cloudinary.com/djowr4szv/image/upload/v1677269935/cld-sample-5.jpg" alt="" />

			<ul className={styles.containerList}>
				<li>inicio</li>
				<li>Ropa</li>
				<li>Zapatillas</li>
				<li>Electrodomesticos</li>
				<li>contacto</li>
			</ul>

			<CardWidget/>
		</div>
	);
};
