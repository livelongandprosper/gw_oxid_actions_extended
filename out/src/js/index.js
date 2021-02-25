import $ from "jquery";
import { SpecialOffer } from "./Components/SpecialOffer.js";

/**
 * Performs tasks when the DOM content is ready.
 *
 * @private
 * @param {Event} event - An event.
 */

document.addEventListener("DOMContentLoaded", (event) => {


	const components = [
		SpecialOffer
	];

	for(const component of components) {

		component.initialize();

	}

});
