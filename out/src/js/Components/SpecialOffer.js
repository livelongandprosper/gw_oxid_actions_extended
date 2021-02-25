import $ from "jquery";
import { Kukki } from "kukki";
import { Luminous } from "luminous-lightbox";

/**
 * A special offer popup.
 */

export class SpecialOffer {

	/**
	 * Initializes the special offer modal.
	 */

	static initialize() {
		const container = document.querySelector(".gw-special-offer");
		const $specialOfferLink = $(".gw-special-offer .gw-special-link");
		const hideSpecialOfferCookieId = "hide-special-offer-lightbox" + $(container).data("cookieId");
		const daysToExpire = parseInt($(container).data("cookieExpirationTime"));
		const expireDate = daysToExpire ? new Date() : null;
		const clickDelay = $(container).data("clickDelay");
		const clickDelayCookieId = 'clicks-until-special-offer-show' + $(container).data("cookieId");
		if(expireDate)
			expireDate.setDate(expireDate.getDate() + daysToExpire);

		if(container !== null && canSetCookies()) {

			initDelayCookie(clickDelay);

			if (Kukki.has(clickDelayCookieId) && Kukki.get(clickDelayCookieId) > 0) {

				$(document).on("click", function () {

					countClick(clickDelayCookieId);
					if (canShowDelayedPopUp(clickDelayCookieId)) {

						window.setTimeout(function () {

							showPopUp(container);

						}, 2000);

					}

				});

			}

			// Show PopUp after document ready
			if (
				!Kukki.has(hideSpecialOfferCookieId)
				&& (
					!clickDelay
					|| (clickDelay && Kukki.has(clickDelayCookieId) && Kukki.get(clickDelayCookieId) == 0)
				)
			) {

				window.setTimeout(function () {

					showPopUp(container);

				}, 2000);

			}
		}

		/**
		 * Show the PopUp.
		 * @param container
		 */
		function showPopUp(container) {
			container.parentNode.removeChild(container);
			container.style.display = "block";

			const options = {
				sourceAttribute: "data-image",
				caption: container.outerHTML,
				openTrigger: "none",
				closeTrigger: ($specialOfferLink.length?"none":"click"),
				closeWithEscape: true,
				closeOnScroll: false,
				showCloseButton: true,
				appendToNode: document.body,
				appendToSelector: ".site-header",
				onOpen: null,
				onClose: () => Kukki.set(hideSpecialOfferCookieId, "1",{
					expires: expireDate,
					path: '/'
				}),
				includeImgixJSClass: false,
				injectBaseStyles: true
			};

			if($specialOfferLink.length) {

				$(document).on("click", ".gw-special-offer .gw-special-link", function() {

					Kukki.set(hideSpecialOfferCookieId, "1",{
						expires: expireDate,
						path: '/'
					});

				});

			}

			const img = new Image();

			// Preload the image, then open the modal.
			img.addEventListener("load", (event) => {

				const luminous = new Luminous(container, options);
				luminous.open();

				const closeButton = document.querySelector(".lum-close-button");

				if(closeButton !== null) {

					const helper = document.querySelector(".lum-lightbox-position-helper");
					helper.appendChild(closeButton);

				}

			});

			img.src = container.dataset.image;

		}

		/**
		 * Reduces the number value of a cookie by 1.
		 * @param cookieId
		 */
		function countClick(cookieId) {
			Kukki.set(
				cookieId,
				(parseInt(Kukki.get(cookieId)) - 1),
				{
					path: '/'
				});
		}

		/**
		 *
		 * @param cookieId
		 * @returns {boolean}
		 */
		function canShowDelayedPopUp(cookieId) {
			return ( parseInt(Kukki.get(cookieId)) <= 0 );
		}

		/**
		 * Initialize delay cookie
		 */
		function initDelayCookie(clickDelay) {
			if(clickDelay > 0 && !Kukki.has(clickDelayCookieId))  {
				Kukki.set(clickDelayCookieId, clickDelay, {
					path: '/'
				})
			}
		}

		/**
		 * Check if Cooies can be set.
		 * @returns {boolean}
		 */
		function canSetCookies() {
			const testCookieName = 'testcookie_gw_oxid_actions_extended';
			let returnValue = false;
			Kukki.set(testCookieName, 1, {
				path: '/'
			});
			if(Kukki.get(testCookieName)) {
				returnValue = true;
			}
			return returnValue;
		}
	}

}
