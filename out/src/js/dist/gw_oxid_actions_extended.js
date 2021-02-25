/**
 * gw_oxid_actions_extended v1.0.0 build Tue Feb 16 2021
 * https://github.com/livelongandprosper/gw_oxid_actions_extended
 * Copyright 2021 Gregor Wendland
 */
(function ($) {
	'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var $__default = /*#__PURE__*/_interopDefaultLegacy($);

	/**
	 * kukki v1.1.0 build Mon Feb 03 2020
	 * https://github.com/vanruesc/kukki
	 * Copyright 2020 Raoul van Rüschen
	 * @license Zlib
	 */
	/**
	 * A regular expression that identifies cookie attributes.
	 *
	 * @type {RegExp}
	 * @private
	 */

	const cookieAttributeRegExp = /^(?:expires|max-age|path|domain|secure)$/i;

	/**
	 * A date that lies in the past.
	 *
	 * @type {Date}
	 * @private
	 */

	const past = new Date(0);

	/**
	 * The cookie manager.
	 */

	class Kukki {

		/**
		 * Retrieves the value of the specified cookie.
		 *
		 * @param {String} key - The name of the cookie.
		 * @return {String} The value of the cookie, or null if the cookie doesn't exist.
		 */

		static get(key) {

			let result = null;

			if(key !== undefined && key !== null) {

				result = decodeURIComponent(document.cookie.replace(new RegExp(
					"(?:(?:^|.*;)\\s*" +
					encodeURIComponent(key).replace(/[-.+*]/g, "\\$&") +
					"\\s*=\\s*([^;]*).*$)|^.*$"
				), "$1"));

				if(result.length === 0) {

					result = null;

				}

			}

			return result;

		}

		/**
		 * Sets a new cookie or updates an existing one.
		 *
		 * @param {String} key - The name of the cookie.
		 * @param {String} value - The value of the cookie.
		 * @param {Object} [attributes] - Optional cookie attributes.
		 * @param {Date} [attributes.expires] - The expiration date. If omitted, the cookie will only be valid during the current session.
		 * @param {String} [attributes.path] - The path under which the cookie should be visible.
		 * @param {String} [attributes.domain] - The domain under which the cookie should be visible. If omitted, the cookie will only be visible where it was created.
		 * @param {Boolean} [attributes.secure=false] - Whether the cookie requires a secure connection.
		 */

		static set(key, value, attributes) {

			attributes = Object.assign({
				expires: null,
				path: null,
				domain: null,
				secure: false
			}, attributes);

			if(key !== undefined && key !== null && !cookieAttributeRegExp.test(key)) {

				const expires = (attributes.expires !== null) ? "; expires=" + attributes.expires.toUTCString() : "";
				const path = (attributes.path !== null) ? "; path=" + attributes.path : "";
				const domain = (attributes.domain !== null) ? "; domain=" + attributes.domain : "";
				const secure = (attributes.secure) ? "; secure" : "";

				document.cookie = encodeURIComponent(key) + "=" + encodeURIComponent(value) + expires + path + domain + secure;

			}

		}

		/**
		 * Checks if the specified cookie exists.
		 *
		 * @param {String} key - The name of the cookie.
		 * @return {Boolean} Whether the cookie exists.
		 */

		static has(key) {

			let result = false;

			if(key !== undefined && key !== null && !cookieAttributeRegExp.test(key)) {

				result = (new RegExp("(?:^|;\\s*)" + encodeURIComponent(key).replace(/[-.+*]/g, "\\$&") + "\\s*=")).test(document.cookie);

			}

			return result;

		}

		/**
		 * Removes the specified cookie.
		 *
		 * Cookies that have been created with a `path` or `domain` attribute can only
		 * be deleted if those attributes are provided. Cookies with an `http`
		 * attribute cannot be deleted programmatically.
		 *
		 * @param {String} key - The name of the cookie.
		 * @param {Object} [attributes] - Additional cookie attributes.
		 * @param {String} [attributes.path] - The path under which the cookie is visible. Not required if the path was never specified.
		 * @param {String} [attributes.domain] - The domain under which the cookie is visible. Not required if the domain was never specified.
		 */

		static delete(key, attributes) {

			if(this.has(key)) {

				attributes = Object.assign({
					path: null,
					domain: null
				}, attributes);

				const expires = "; expires=" + past.toUTCString();
				const path = (attributes.path !== null) ? "; path=" + attributes.path : "";
				const domain = (attributes.domain !== null) ? "; domain=" + attributes.domain : "";

				document.cookie = encodeURIComponent(key) + "=" + expires + path + domain;

			}

		}

		/**
		 * Returns an array of cookie keys.
		 *
		 * @return {String[]} The keys.
		 */

		static keys() {

			return document.cookie
				.replace(/((?:^|\s*;)[^=]+)(?=;|$)|^\s*|\s*(?:=[^;]*)?(?:\1|$)/g, "")
				.split(/\s*(?:=[^;]*)?;\s*/)
				.map((key) => decodeURIComponent(key));

		}

	}

	function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	// This is not really a perfect check, but works fine.
	// From http://stackoverflow.com/questions/384286
	var HAS_DOM_2 = (typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) === "object";
	var HAS_SHADOW = typeof ShadowRoot !== "undefined";
	/**
	 * Determines whether an object is a DOM element or not.
	 * @param {!Object} obj Object to check
	 * @return {boolean} True if object is an element
	 */

	function isDOMElement(obj) {
	  if (HAS_SHADOW && obj instanceof ShadowRoot) {
	    return true;
	  }

	  return HAS_DOM_2 ? obj instanceof HTMLElement : obj && _typeof(obj) === "object" && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === "string";
	}
	/**
	 * Adds an array of classes to an element
	 * @param {!Element} el Element to add classes to
	 * @param {!Array<!string>} classNames Class names to add
	 * @return {void}
	 */

	function addClasses(el, classNames) {
	  classNames.forEach(function (className) {
	    el.classList.add(className);
	  });
	}
	/**
	 * Removes an array of classes from an element
	 * @param {!Element} el Element to remove classes from
	 * @param {!Array<!string>} classNames Classes to remove
	 * @return {void}
	 */

	function removeClasses(el, classNames) {
	  classNames.forEach(function (className) {
	    el.classList.remove(className);
	  });
	}

	/* UNMINIFIED RULES

	@keyframes lum-noop {
	  0% { zoom: 1; }
	}

	.lum-lightbox {
	  position: fixed;
	  display: none;
	  top: 0;
	  right: 0;
	  bottom: 0;
	  left: 0;
	}

	.lum-lightbox.lum-open {
	  display: block;
	}

	.lum-lightbox.lum-opening, .lum-lightbox.lum-closing {
	  animation: lum-noop 1ms;
	}

	.lum-lightbox-inner {
	  position: absolute;
	  top: 0%;
	  right: 0%;
	  bottom: 0%;
	  left: 0%;

	  overflow: hidden;
	}

	.lum-lightbox-loader {
	  display: none;
	}

	.lum-lightbox-inner img {
	  max-width: 100%;
	  max-height: 100%;
	}

	.lum-lightbox-image-wrapper {
	  vertical-align: middle;
	  display: table-cell;
	  text-align: center;
	}
	*/
	var RULES = "@keyframes lum-noop{0%{zoom:1}}.lum-lightbox{position:fixed;display:none;top:0;right:0;bottom:0;left:0}.lum-lightbox.lum-open{display:block}.lum-lightbox.lum-closing,.lum-lightbox.lum-opening{animation:lum-noop 1ms}.lum-lightbox-inner{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden}.lum-lightbox-loader{display:none}.lum-lightbox-inner img{max-width:100%;max-height:100%}.lum-lightbox-image-wrapper{vertical-align:middle;display:table-cell;text-align:center}";
	/**
	 * Injects the base stylesheet needed to display the lightbox
	 * element.
	 * If `node` is the document, the stylesheet will be appended to `<head>`.
	 * @param {!Node} node Node to append stylesheet to
	 * @return {void}
	 */

	function injectBaseStylesheet(node) {
	  if (!node || node === document) {
	    node = document.head;
	  }

	  if (node.querySelector(".lum-base-styles")) {
	    return;
	  }

	  var styleEl = document.createElement("style");
	  styleEl.type = "text/css";
	  styleEl.classList.add("lum-base-styles");
	  styleEl.appendChild(document.createTextNode(RULES));
	  node.insertBefore(styleEl, node.firstChild);
	}

	/**
	 * Throws a missing parameter error
	 */
	function throwIfMissing() {
	  throw new Error("Missing parameter");
	}

	function _typeof$1(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
	var LEFT_ARROW = 37;
	var RIGHT_ARROW = 39; // All officially-supported browsers have this, but it's easy to
	// account for, just in case.

	var HAS_ANIMATION = typeof document === "undefined" ? false : "animation" in document.createElement("div").style;
	/**
	 * Represents the default lightbox implementation
	 */

	var Lightbox = /*#__PURE__*/function () {
	  /**
	   * Constructor
	   * @param {Object=} options Lightbox options
	   */
	  function Lightbox() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    _classCallCheck(this, Lightbox);

	    this._sizeImgWrapperEl = this._sizeImgWrapperEl.bind(this);
	    this.showNext = this.showNext.bind(this);
	    this.showPrevious = this.showPrevious.bind(this);
	    this._completeOpen = this._completeOpen.bind(this);
	    this._completeClose = this._completeClose.bind(this);
	    this._handleKeydown = this._handleKeydown.bind(this);
	    this._handleClose = this._handleClose.bind(this);

	    var _options$namespace = options.namespace,
	        namespace = _options$namespace === void 0 ? null : _options$namespace,
	        _options$parentEl = options.parentEl,
	        parentEl = _options$parentEl === void 0 ? throwIfMissing() : _options$parentEl,
	        _options$triggerEl = options.triggerEl,
	        triggerEl = _options$triggerEl === void 0 ? throwIfMissing() : _options$triggerEl,
	        _options$sourceAttrib = options.sourceAttribute,
	        sourceAttribute = _options$sourceAttrib === void 0 ? throwIfMissing() : _options$sourceAttrib,
	        _options$caption = options.caption,
	        caption = _options$caption === void 0 ? null : _options$caption,
	        _options$includeImgix = options.includeImgixJSClass,
	        includeImgixJSClass = _options$includeImgix === void 0 ? false : _options$includeImgix,
	        _options$_gallery = options._gallery,
	        _gallery = _options$_gallery === void 0 ? null : _options$_gallery,
	        _options$_arrowNaviga = options._arrowNavigation,
	        _arrowNavigation = _options$_arrowNaviga === void 0 ? null : _options$_arrowNaviga,
	        _options$closeButtonE = options.closeButtonEnabled,
	        closeButtonEnabled = _options$closeButtonE === void 0 ? true : _options$closeButtonE,
	        _options$closeTrigger = options.closeTrigger,
	        closeTrigger = _options$closeTrigger === void 0 ? "click" : _options$closeTrigger;

	    this.settings = {
	      namespace: namespace,
	      parentEl: parentEl,
	      triggerEl: triggerEl,
	      sourceAttribute: sourceAttribute,
	      caption: caption,
	      includeImgixJSClass: includeImgixJSClass,
	      _gallery: _gallery,
	      _arrowNavigation: _arrowNavigation,
	      closeButtonEnabled: closeButtonEnabled,
	      onClose: options.onClose,
	      closeTrigger: closeTrigger
	    };

	    if (!isDOMElement(this.settings.parentEl)) {
	      throw new TypeError("`new Lightbox` requires a DOM element passed as `parentEl`.");
	    }

	    this.currentTrigger = this.settings.triggerEl;
	    this.openClasses = this._buildClasses("open");
	    this.openingClasses = this._buildClasses("opening");
	    this.closingClasses = this._buildClasses("closing");
	    this.hasBeenLoaded = false;
	    this.elementBuilt = false;
	  }
	  /**
	   * Handles closing of the lightbox
	   * @param {!Event} e Event that triggered closing
	   * @return {void}
	   * @protected
	   */


	  _createClass(Lightbox, [{
	    key: "_handleClose",
	    value: function _handleClose(e) {
	      if (e && typeof e.preventDefault === "function") {
	        e.preventDefault();
	      }

	      var onClose = this.settings.onClose;

	      if (onClose && typeof onClose === "function") {
	        onClose();
	      }
	    }
	    /**
	     * Binds event listeners to the trigger element
	     * @return {void}
	     * @protected
	     */

	  }, {
	    key: "_bindEventListeners",
	    value: function _bindEventListeners() {
	      this.el.addEventListener(this.settings.closeTrigger, this._handleClose);

	      if (this.closeButtonEl) {
	        this.closeButtonEl.addEventListener("click", this._handleClose);
	      }
	    }
	    /**
	     * Builds a class list using the namespace and suffix, if any.
	     * @param {string} suffix Suffix to add to each class
	     * @return {!Array<!string>} Class list
	     * @protected
	     */

	  }, {
	    key: "_buildClasses",
	    value: function _buildClasses(suffix) {
	      var classes = ["lum-".concat(suffix)];
	      var ns = this.settings.namespace;

	      if (ns) {
	        classes.push("".concat(ns, "-").concat(suffix));
	      }

	      return classes;
	    }
	    /**
	     * Creates the lightbox element
	     * @return {void}
	     * @protected
	     */

	  }, {
	    key: "_buildElement",
	    value: function _buildElement() {
	      this.el = document.createElement("div");
	      addClasses(this.el, this._buildClasses("lightbox"));
	      this.innerEl = document.createElement("div");
	      addClasses(this.innerEl, this._buildClasses("lightbox-inner"));
	      this.el.appendChild(this.innerEl);
	      var loaderEl = document.createElement("div");
	      addClasses(loaderEl, this._buildClasses("lightbox-loader"));
	      this.innerEl.appendChild(loaderEl);
	      this.imgWrapperEl = document.createElement("div");
	      addClasses(this.imgWrapperEl, this._buildClasses("lightbox-image-wrapper"));
	      this.innerEl.appendChild(this.imgWrapperEl);
	      var positionHelperEl = document.createElement("span");
	      addClasses(positionHelperEl, this._buildClasses("lightbox-position-helper"));
	      this.imgWrapperEl.appendChild(positionHelperEl);
	      this.imgEl = document.createElement("img");
	      addClasses(this.imgEl, this._buildClasses("img"));
	      positionHelperEl.appendChild(this.imgEl);
	      this.captionEl = document.createElement("p");
	      addClasses(this.captionEl, this._buildClasses("lightbox-caption"));
	      positionHelperEl.appendChild(this.captionEl);

	      if (this.settings.closeButtonEnabled) {
	        this.closeButtonEl = document.createElement("div");
	        addClasses(this.closeButtonEl, this._buildClasses("close-button"));
	        this.el.appendChild(this.closeButtonEl);
	      }

	      if (this.settings._gallery) {
	        this._setUpGalleryElements();
	      }

	      this.settings.parentEl.appendChild(this.el);

	      this._updateImgSrc();

	      this._updateCaption();

	      if (this.settings.includeImgixJSClass) {
	        this.imgEl.classList.add("imgix-fluid");
	      }
	    }
	    /**
	     * Creates gallery elements such as previous/next buttons
	     * @return {void}
	     * @protected
	     */

	  }, {
	    key: "_setUpGalleryElements",
	    value: function _setUpGalleryElements() {
	      this._buildGalleryButton("previous", this.showPrevious);

	      this._buildGalleryButton("next", this.showNext);
	    }
	    /**
	     * Creates a gallery button
	     * @param {string} name Name of button
	     * @param {!Function} fn Click handler
	     * @return {void}
	     * @protected
	     */

	  }, {
	    key: "_buildGalleryButton",
	    value: function _buildGalleryButton(name, fn) {
	      var btn = document.createElement("button");
	      this["".concat(name, "Button")] = btn;
	      btn.innerText = name;
	      addClasses(btn, this._buildClasses("".concat(name, "-button")));
	      addClasses(btn, this._buildClasses("gallery-button"));
	      this.innerEl.appendChild(btn);
	      btn.addEventListener("click", function (e) {
	        e.stopPropagation();
	        fn();
	      }, false);
	    }
	    /**
	     * Sizes the image wrapper
	     * @return {void}
	     * @protected
	     */

	  }, {
	    key: "_sizeImgWrapperEl",
	    value: function _sizeImgWrapperEl() {
	      var style = this.imgWrapperEl.style;
	      style.width = "".concat(this.innerEl.clientWidth, "px");
	      style.maxWidth = "".concat(this.innerEl.clientWidth, "px");
	      style.height = "".concat(this.innerEl.clientHeight - this.captionEl.clientHeight, "px");
	      style.maxHeight = "".concat(this.innerEl.clientHeight - this.captionEl.clientHeight, "px");
	    }
	    /**
	     * Updates caption from settings
	     * @return {void}
	     * @protected
	     */

	  }, {
	    key: "_updateCaption",
	    value: function _updateCaption() {
	      var captionType = _typeof$1(this.settings.caption);

	      var caption = "";

	      if (captionType === "string") {
	        caption = this.settings.caption;
	      } else if (captionType === "function") {
	        caption = this.settings.caption(this.currentTrigger);
	      }

	      this.captionEl.innerHTML = caption;
	    }
	    /**
	     * Updates image element from the trigger element's attributes
	     * @return {void}
	     * @protected
	     */

	  }, {
	    key: "_updateImgSrc",
	    value: function _updateImgSrc() {
	      var _this = this;

	      var imageURL = this.currentTrigger.getAttribute(this.settings.sourceAttribute);

	      if (!imageURL) {
	        throw new Error("No image URL was found in the ".concat(this.settings.sourceAttribute, " attribute of the trigger."));
	      }

	      var loadingClasses = this._buildClasses("loading");

	      if (!this.hasBeenLoaded) {
	        addClasses(this.el, loadingClasses);
	      }

	      this.imgEl.onload = function () {
	        removeClasses(_this.el, loadingClasses);
	        _this.hasBeenLoaded = true;
	      };

	      this.imgEl.setAttribute("src", imageURL);
	    }
	    /**
	     * Handles key up/down events for moving between items
	     * @param {!Event} e Keyboard event
	     * @return {void}
	     * @protected
	     */

	  }, {
	    key: "_handleKeydown",
	    value: function _handleKeydown(e) {
	      if (e.keyCode == LEFT_ARROW) {
	        this.showPrevious();
	      } else if (e.keyCode == RIGHT_ARROW) {
	        this.showNext();
	      }
	    }
	    /**
	     * Shows the next item if in a gallery
	     * @return {void}
	     */

	  }, {
	    key: "showNext",
	    value: function showNext() {
	      if (!this.settings._gallery) {
	        return;
	      }

	      this.currentTrigger = this.settings._gallery.nextTrigger(this.currentTrigger);

	      this._updateImgSrc();

	      this._updateCaption();

	      this._sizeImgWrapperEl();
	    }
	    /**
	     * Shows the previous item if in a gallery
	     * @return {void}
	     */

	  }, {
	    key: "showPrevious",
	    value: function showPrevious() {
	      if (!this.settings._gallery) {
	        return;
	      }

	      this.currentTrigger = this.settings._gallery.previousTrigger(this.currentTrigger);

	      this._updateImgSrc();

	      this._updateCaption();

	      this._sizeImgWrapperEl();
	    }
	    /**
	     * Opens the lightbox
	     * @return {void}
	     */

	  }, {
	    key: "open",
	    value: function open() {
	      if (!this.elementBuilt) {
	        this._buildElement();

	        this._bindEventListeners();

	        this.elementBuilt = true;
	      } // When opening, always reset to the trigger we were passed


	      this.currentTrigger = this.settings.triggerEl; // Make sure to re-set the `img` `src`, in case it's been changed
	      // by someone/something else.

	      this._updateImgSrc();

	      this._updateCaption();

	      addClasses(this.el, this.openClasses);

	      this._sizeImgWrapperEl();

	      window.addEventListener("resize", this._sizeImgWrapperEl, false);

	      if (this.settings._arrowNavigation) {
	        window.addEventListener("keydown", this._handleKeydown, false);
	      }

	      if (HAS_ANIMATION) {
	        this.el.addEventListener("animationend", this._completeOpen, false);
	        addClasses(this.el, this.openingClasses);
	      }
	    }
	    /**
	     * Closes the lightbox
	     * @return {void}
	     */

	  }, {
	    key: "close",
	    value: function close() {
	      window.removeEventListener("resize", this._sizeImgWrapperEl, false);

	      if (this.settings._arrowNavigation) {
	        window.removeEventListener("keydown", this._handleKeydown, false);
	      }

	      if (HAS_ANIMATION) {
	        this.el.addEventListener("animationend", this._completeClose, false);
	        addClasses(this.el, this.closingClasses);
	      } else {
	        removeClasses(this.el, this.openClasses);
	      }
	    }
	    /**
	     * Handles animations on completion of opening the lightbox
	     * @return {void}
	     * @protected
	     */

	  }, {
	    key: "_completeOpen",
	    value: function _completeOpen() {
	      this.el.removeEventListener("animationend", this._completeOpen, false);
	      removeClasses(this.el, this.openingClasses);
	    }
	    /**
	     * Handles animations on completion of closing the lightbox
	     * @return {void}
	     * @protected
	     */

	  }, {
	    key: "_completeClose",
	    value: function _completeClose() {
	      this.el.removeEventListener("animationend", this._completeClose, false);
	      removeClasses(this.el, this.openClasses);
	      removeClasses(this.el, this.closingClasses);
	    }
	    /**
	     * Destroys the lightbox
	     * @return {void}
	     */

	  }, {
	    key: "destroy",
	    value: function destroy() {
	      if (this.el) {
	        this.settings.parentEl.removeChild(this.el);
	      }
	    }
	  }]);

	  return Lightbox;
	}();

	function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties$1(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass$1(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$1(Constructor.prototype, protoProps); if (staticProps) _defineProperties$1(Constructor, staticProps); return Constructor; }
	/**
	 * Represents the default luminous lightbox
	 */

	var Luminous = /*#__PURE__*/function () {
	  /**
	   * Constructor
	   * @param {!Element} trigger Trigger element to open lightbox
	   * @param {Object=} options Luminous options
	   */
	  function Luminous(trigger) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    _classCallCheck$1(this, Luminous);

	    this.VERSION = "2.3.3";
	    this.destroy = this.destroy.bind(this);
	    this.open = this.open.bind(this);
	    this.close = this.close.bind(this);
	    this._handleKeyup = this._handleKeyup.bind(this);
	    this.isOpen = false;
	    this.trigger = trigger;

	    if (!isDOMElement(this.trigger)) {
	      throw new TypeError("`new Luminous` requires a DOM element as its first argument.");
	    }

	    var rootNode = document;

	    if ("getRootNode" in this.trigger) {
	      rootNode = this.trigger.getRootNode();
	    } // Prefix for generated element class names (e.g. `my-ns` will
	    // result in classes such as `my-ns-lightbox`. Default `lum-`
	    // prefixed classes will always be added as well.


	    var namespace = options["namespace"] || null; // Which attribute to pull the lightbox image source from.

	    var sourceAttribute = options["sourceAttribute"] || "href"; // Captions can be a literal string, or a function that receives the Luminous instance's trigger element as an argument and returns a string. Supports HTML, so use caution when dealing with user input.

	    var caption = options["caption"] || null; // The event to listen to on the _trigger_ element: triggers opening.

	    var openTrigger = options["openTrigger"] || "click"; // The event to listen to on the _lightbox_ element: triggers closing.

	    var closeTrigger = options["closeTrigger"] || "click"; // Allow closing by pressing escape.

	    var closeWithEscape = "closeWithEscape" in options ? !!options["closeWithEscape"] : true; // Automatically close when the page is scrolled.

	    var closeOnScroll = options["closeOnScroll"] || false;
	    var closeButtonEnabled = options["showCloseButton"] != null ? options["showCloseButton"] : true;
	    var appendToNode = options["appendToNode"] || (rootNode === document ? document.body : rootNode); // A selector defining what to append the lightbox element to.

	    var appendToSelector = options["appendToSelector"] || null; // If present (and a function), this will be called
	    // whenever the lightbox is opened.

	    var onOpen = options["onOpen"] || null; // If present (and a function), this will be called
	    // whenever the lightbox is closed.

	    var onClose = options["onClose"] || null; // When true, adds the `imgix-fluid` class to the `img`
	    // inside the lightbox. See https://github.com/imgix/imgix.js
	    // for more information.

	    var includeImgixJSClass = options["includeImgixJSClass"] || false; // Add base styles to the page. See the "Theming"
	    // section of README.md for more information.

	    var injectBaseStyles = "injectBaseStyles" in options ? !!options["injectBaseStyles"] : true; // Internal use only!

	    var _gallery = options["_gallery"] || null;

	    var _arrowNavigation = options["_arrowNavigation"] || null;

	    this.settings = {
	      namespace: namespace,
	      sourceAttribute: sourceAttribute,
	      caption: caption,
	      openTrigger: openTrigger,
	      closeTrigger: closeTrigger,
	      closeWithEscape: closeWithEscape,
	      closeOnScroll: closeOnScroll,
	      closeButtonEnabled: closeButtonEnabled,
	      appendToNode: appendToNode,
	      appendToSelector: appendToSelector,
	      onOpen: onOpen,
	      onClose: onClose,
	      includeImgixJSClass: includeImgixJSClass,
	      injectBaseStyles: injectBaseStyles,
	      _gallery: _gallery,
	      _arrowNavigation: _arrowNavigation
	    };
	    var injectionRoot = document.body;

	    if (appendToNode && "getRootNode" in appendToNode) {
	      injectionRoot = appendToNode.getRootNode();
	    }

	    if (this.settings.injectBaseStyles) {
	      injectBaseStylesheet(injectionRoot);
	    }

	    this._buildLightbox();

	    this._bindEventListeners();
	  }
	  /**
	   * Opens the lightbox
	   * @param {Event=} e Event which triggered opening
	   * @return {void}
	   */


	  _createClass$1(Luminous, [{
	    key: "open",
	    value: function open(e) {
	      if (e && typeof e.preventDefault === "function") {
	        e.preventDefault();
	      }

	      this.lightbox.open();

	      if (this.settings.closeOnScroll) {
	        window.addEventListener("scroll", this.close, false);
	      }

	      var onOpen = this.settings.onOpen;

	      if (onOpen && typeof onOpen === "function") {
	        onOpen();
	      }

	      this.isOpen = true;
	    }
	    /**
	     * Closes the lightbox
	     * @param {Event=} e Event which triggered closing
	     * @return {void}
	     */

	  }, {
	    key: "close",
	    value: function close(e) {
	      if (this.settings.closeOnScroll) {
	        window.removeEventListener("scroll", this.close, false);
	      }

	      this.lightbox.close();
	      var onClose = this.settings.onClose;

	      if (onClose && typeof onClose === "function") {
	        onClose();
	      }

	      this.isOpen = false;
	    }
	    /**
	     * Builds the internal lightbox instance
	     * @protected
	     * @return {void}
	     */

	  }, {
	    key: "_buildLightbox",
	    value: function _buildLightbox() {
	      var parentEl = this.settings.appendToNode;

	      if (this.settings.appendToSelector) {
	        parentEl = document.querySelector(this.settings.appendToSelector);
	      }

	      this.lightbox = new Lightbox({
	        namespace: this.settings.namespace,
	        parentEl: parentEl,
	        triggerEl: this.trigger,
	        sourceAttribute: this.settings.sourceAttribute,
	        caption: this.settings.caption,
	        includeImgixJSClass: this.settings.includeImgixJSClass,
	        closeButtonEnabled: this.settings.closeButtonEnabled,
	        _gallery: this.settings._gallery,
	        _arrowNavigation: this.settings._arrowNavigation,
	        closeTrigger: this.settings.closeTrigger,
	        onClose: this.close
	      });
	    }
	    /**
	     * Binds lightbox events to the trigger element
	     * @protected
	     * @return {void}
	     */

	  }, {
	    key: "_bindEventListeners",
	    value: function _bindEventListeners() {
	      this.trigger.addEventListener(this.settings.openTrigger, this.open, false);

	      if (this.settings.closeWithEscape) {
	        window.addEventListener("keyup", this._handleKeyup, false);
	      }
	    }
	    /**
	     * Unbinds all events
	     * @protected
	     * @return {void}
	     */

	  }, {
	    key: "_unbindEvents",
	    value: function _unbindEvents() {
	      this.trigger.removeEventListener(this.settings.openTrigger, this.open, false);

	      if (this.lightbox.el) {
	        this.lightbox.el.removeEventListener(this.settings.closeTrigger, this.close, false);
	      }

	      if (this.settings.closeWithEscape) {
	        window.removeEventListener("keyup", this._handleKeyup, false);
	      }
	    }
	    /**
	     * Handles key up events and closes lightbox when esc is pressed
	     * @param {!Event} e Keyboard event
	     * @return {void}
	     * @protected
	     */

	  }, {
	    key: "_handleKeyup",
	    value: function _handleKeyup(e) {
	      if (this.isOpen && e.keyCode === 27) {
	        this.close();
	      }
	    }
	    /**
	     * Destroys internal lightbox and unbinds events
	     * @return {void}
	     */

	  }, {
	    key: "destroy",
	    value: function destroy() {
	      this._unbindEvents();

	      this.lightbox.destroy();
	    }
	  }]);

	  return Luminous;
	}();
	Luminous.prototype["open"] = Luminous.prototype.open;
	Luminous.prototype["close"] = Luminous.prototype.close;
	Luminous.prototype["destroy"] = Luminous.prototype.destroy;
	/* eslint-enable no-self-assign */

	function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties$2(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass$2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$2(Constructor.prototype, protoProps); if (staticProps) _defineProperties$2(Constructor, staticProps); return Constructor; }
	/**
	 * Represents a gallery-style lightbox
	 */

	var LuminousGallery = /*#__PURE__*/function () {
	  /**
	   * Constructor
	   * @param {!Array<!Element>} triggers Array of trigger elements
	   * @param {Object=} options Gallery options
	   * @param {Object=} luminousOpts Luminous options
	   */
	  function LuminousGallery(triggers) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    var luminousOpts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	    _classCallCheck$2(this, LuminousGallery);

	    var optionsDefaults = {
	      arrowNavigation: true
	    };
	    this.settings = Object.assign({}, optionsDefaults, options);
	    this.triggers = triggers;
	    this.luminousOpts = luminousOpts;
	    this.luminousOpts["_gallery"] = this;
	    this.luminousOpts["_arrowNavigation"] = this.settings["arrowNavigation"];

	    this._constructLuminousInstances();
	  }
	  /**
	   * Creates internal luminous instances
	   * @protected
	   * @return {void}
	   */


	  _createClass$2(LuminousGallery, [{
	    key: "_constructLuminousInstances",
	    value: function _constructLuminousInstances() {
	      this.luminousInstances = [];
	      var triggerLen = this.triggers.length;

	      for (var i = 0; i < triggerLen; i++) {
	        var trigger = this.triggers[i];
	        var lum = new Luminous(trigger, this.luminousOpts);
	        this.luminousInstances.push(lum);
	      }
	    }
	    /**
	     * Determines the next trigger element
	     * @param {!Element} trigger Current trigger element
	     * @return {!Element}
	     */

	  }, {
	    key: "nextTrigger",
	    value: function nextTrigger(trigger) {
	      var nextTriggerIndex = Array.prototype.indexOf.call(this.triggers, trigger) + 1;
	      return nextTriggerIndex >= this.triggers.length ? this.triggers[0] : this.triggers[nextTriggerIndex];
	    }
	    /**
	     * Determines the previous trigger element
	     * @param {!Element} trigger Current trigger element
	     * @return {!Element}
	     */

	  }, {
	    key: "previousTrigger",
	    value: function previousTrigger(trigger) {
	      var prevTriggerIndex = Array.prototype.indexOf.call(this.triggers, trigger) - 1;
	      return prevTriggerIndex < 0 ? this.triggers[this.triggers.length - 1] : this.triggers[prevTriggerIndex];
	    }
	    /**
	     * Destroys the internal luminous instances
	     * @return {void}
	     */

	  }, {
	    key: "destroy",
	    value: function destroy() {
	      this.luminousInstances.forEach(function (instance) {
	        return instance.destroy();
	      });
	    }
	  }]);

	  return LuminousGallery;
	}();
	LuminousGallery.prototype["destroy"] = LuminousGallery.prototype.destroy;

	/**
	 * A special offer popup.
	 */

	class SpecialOffer {

		/**
		 * Initializes the special offer modal.
		 */

		static initialize() {
			const container = document.querySelector(".gw-special-offer");
			const $specialOfferLink = $__default['default'](".gw-special-offer .gw-special-link");
			const hideSpecialOfferCookieId = "hide-special-offer-lightbox" + $__default['default'](container).data("cookieId");
			const daysToExpire = parseInt($__default['default'](container).data("cookieExpirationTime"));
			const expireDate = daysToExpire ? new Date() : null;
			const clickDelay = $__default['default'](container).data("clickDelay");
			const clickDelayCookieId = 'clicks-until-special-offer-show' + $__default['default'](container).data("cookieId");
			if(expireDate)
				expireDate.setDate(expireDate.getDate() + daysToExpire);

			if(container !== null && canSetCookies()) {

				initDelayCookie(clickDelay);

				if (Kukki.has(clickDelayCookieId) && Kukki.get(clickDelayCookieId) > 0) {

					$__default['default'](document).on("click", function () {

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

					$__default['default'](document).on("click", ".gw-special-offer .gw-special-link", function() {

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
					});
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

}(jQuery));
