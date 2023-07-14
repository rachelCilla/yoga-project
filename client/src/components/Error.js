import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
	return (
		<section className=" section">
			<h2>404</h2>
			<h3>Sorry, the page you tried cannot be found</h3>
			<Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
				return home
			</Link>
		</section>
	);
}
