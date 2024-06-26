<?php
	namespace gw\gw_oxid_actions_extended\Core;

	use OxidEsales\Eshop\Application\Model\ActionList;

	/**
	 * @see OxidEsales\Eshop\Core\ViewConfig
	 */
	class ViewConfig extends ViewConfig_parent {

		protected $_oActionsList = null;
		protected $_oBannerList = null;
		protected $_oBannerListLeft = null;
		protected $_oBannerListRight = null;
		protected $_oPopUpList = null;
		protected $_oSliderList = null;

		public function getActions() {
			if($this->_oActionsList === null) {
				$this->_oActionsList = oxNew(ActionList::class);
				$this->_oActionsList->loadActions();
			}

			return $this->_oActionsList;
		}

		public function getBanners($layout = null) {
			if($this->_oBannerList === null) {
				$this->_oBannerList = oxNew(ActionList::class);
				$this->_oBannerList->loadBanners($layout);
			}

			return $this->_oBannerList;
		}

		public function getBannersLeft() {
			if($this->_oBannerListLeft === null) {
				$this->_oBannerListLeft = oxNew(ActionList::class);
				$this->_oBannerListLeft->loadBanners(5);
			}
			return $this->_oBannerListLeft;
		}
		public function getBannersRight() {
			if($this->_oBannerListRight === null) {
				$this->_oBannerListRight = oxNew(ActionList::class);
				$this->_oBannerListRight->loadBanners(6);
			}
			return $this->_oBannerListRight;
		}

		/**
		 * Get a list of articles from any action you want
		 *
		 * @return array
		 */
		public function getActionArticleList($actionid, $limit = 12) {
			$oArtList = oxNew( 'oxarticlelist' );
			$oArtList->loadActionArticles( $actionid, $limit );
			if(sizeof($oArtList)) {
				return $oArtList;
			} else {
				return 0;
			}
		}

		/**
		 * Get an action
		 * @param $actionid
		 * @return mixed
		 */
		public function getActionName($actionid) {
			$oAction = oxNew( 'oxactions' );
			$oAction->load( $actionid );
			return $oAction->oxactions__oxtitle->rawValue;
		}

		/**
		 * Returns active banner list
		 *
		 * @return objects
		 */
		public $function_exist_gw_get_banners = true;
		public function gw_get_banners() {

			if($this->_oBannerList === null) {
				$oBannerList = "";

				if ($this->getConfig()->getConfigParam('bl_perfLoadAktion')) {
					$oBannerList = oxNew('oxActionList');
					$oBannerList->loadBanners();
				}

				$this->_oBannerList = $oBannerList;

			}
			return $this->_oBannerList;
		}

		/**
		 * Returns active active popup list
		 *
		 * @return objects
		 */
		public $function_exist_gw_get_popups = true;
		public function gw_get_popups() {

			if($this->_oPopUpList === null) {
				$oPopUpList = "";

				if ($this->getConfig()->getConfigParam('bl_perfLoadAktion')) {
					$oPopUpList = oxNew('oxActionList');
					$oPopUpList->loadPopUps();
				}

				$this->_oPopUpList = $oPopUpList;
			}

			return $this->_oPopUpList;
		}


		/**
		 * Returns active active slider list
		 *
		 * @return objects
		 */
		public function gw_get_start_slider() {

			if($this->_oSliderList === null) {
				$oSliderList = "";

				if ($this->getConfig()->getConfigParam('bl_perfLoadAktion')) {
					$oSliderList = oxNew('oxActionList');
					$oSliderList->loadSlider();
				}

				$this->_oSliderList = $oSliderList;
			}

			return $this->_oSliderList;
		}

		public function gw_get_category_slider_articles($categoryId, $maxArticleAmount = 10) {
			$oArtList = oxNew( 'oxarticlelist' );
			$oArtList->loadCategoryArticles($categoryId, null, $maxArticleAmount);
			if(sizeof($oArtList)) {
				return $oArtList;
			} else {
				return 0;
			}
		}
	}
?>
