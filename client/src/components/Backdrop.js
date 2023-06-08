import { motion } from "framer-motion";
import styles from "../css/Backdrop.module.css";

import React from "react";

export default function Backdrop({ children, onClick }) {
	return (
		<motion.div
			className={styles.backdrop}
			onClick={onClick}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			{children}
		</motion.div>
	);
}
