import React from "react";
import OmImage from "../images/om.png";
import { motion } from "framer-motion";

export default function Learn() {
	return (
		<div className="learn-div" id="learn">
			<h1>Learn</h1>

			<img src={OmImage} alt="" />

			<p>
				Two general theories exist on the origins of yoga. The
				linear model holds that yoga originated in the Vedic
				period, as reflected in the Vedic textual corpus, and
				influenced Buddhism; according to author Edward
				Fitzpatrick Crangle, this model is mainly supported by
				Hindu scholars. According to the synthesis model, yoga
				is a synthesis of non-Vedic and Vedic elements; this
				model is favoured in Western scholarship.
			</p>
		</div>
	);
}
