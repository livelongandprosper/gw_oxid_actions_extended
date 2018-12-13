<?php
	namespace gw\gw_oxid_actions_extended\Core;

	use OxidEsales\Eshop\Application\Model\ActionList;

	/**
	 * @see OxidEsales\Eshop\Core\ViewConfig
	 */
	class ViewConfig extends ViewConfig_parent {

		protected $_oActionsList = null;

		public function getActions() {
			if($this->_oActionsList === null) {
				$this->_oActionsList = oxNew(ActionList::class);
				$this->_oActionsList->loadActions();
			}

			return $this->_oActionsList;
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

			$oBannerList = null;

			if ($this->getConfig()->getConfigParam('bl_perfLoadAktion')) {
				$oBannerList = oxNew('oxActionList');
				$oBannerList->loadBanners();
			}

			return $oBannerList;
		}

	}
?>