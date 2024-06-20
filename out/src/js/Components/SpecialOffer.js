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
		const $specialOfferNewsletterLink = $(".gw-newsletter-banner .gw-special-link");
		const hideSpecialOfferCookieId = "hide-special-offer-lightbox" + $(container).data("cookieId");
		const newsletterCookieId = "zeha-nl-popup";
		const daysToExpire = parseInt($(container).data("cookieExpirationTime"));
		const expireDate = daysToExpire ? new Date() : null;
		const clickDelay = $(container).data("clickDelay");
		const clickDelayCookieId = 'clicks-until-special-offer-show' + $(container).data("cookieId");
		if(expireDate)
			expireDate.setDate(expireDate.getDate() + daysToExpire);

		if(container !== null && canSetCookies()) {

			initDelayCookie(clickDelay);

			if (Kukki.has(clickDelayCookieId) && Kukki.get(clickDelayCookieId) > 0) {
				const $body = $("body");
				if(
					!$body.hasClass(("cl-account"))
					&& !$body.hasClass(("cl-register"))
					&& !$body.hasClass(("cl-newsletter"))
					&& !$body.hasClass(("cl-account"))
					&& !$body.hasClass(("cl-account_password"))
					&& !$body.hasClass(("cl-account_user"))
					&& !$body.hasClass(("cl-account_order"))
					&& !$body.hasClass(("cl-account_newsletter"))
					&& !$body.hasClass(("cl-account_wishlist"))
					&& !$body.hasClass(("is-checkout"))
					&& !$body.hasClass(("is-nl"))
				) {
					$(document).on("click", function (event) {
						const $target = $(event.target);

						if(
							!$target.is("button")
							&& !$target.is(".dropDown")
							&& !$target.is(".gw-size-table-trigger")
							&& !$target.is(".gw-social-media-details")
							&& !$target.is(".gw-img-thumb")
							&& !$body.hasClass(". modal-open")
							&& !$target.is("img.img-responsive") // zoom image trigger
							&& !$(".pswp--open").length // zoom image open
						) {

							countClick(clickDelayCookieId);

						}
						if (canShowDelayedPopUp(clickDelayCookieId)) {

							window.setTimeout(function () {

								showPopUp(container);

							}, 2000);


						}
					});
				}
			}

			// Show PopUp after document ready
			if (
				container
				&& !Kukki.has(hideSpecialOfferCookieId)
				&& (
					!clickDelay
					|| (clickDelay && Kukki.has(clickDelayCookieId) && Kukki.get(clickDelayCookieId) <= 0)
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

			if($specialOfferNewsletterLink.length) {

				$(document).on("click", ".gw-newsletter-banner .gw-special-link", function() {

					if(typeof gtag !== 'undefined') {
						gtag("event", "zeha_newsletter_popup_clicked", {
						});
					}

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
			return parseInt(Kukki.get(cookieId));
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
