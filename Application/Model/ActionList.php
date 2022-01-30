<?php
	namespace gw\gw_oxid_actions_extended\Application\Model;

	class ActionList extends ActionList_parent {
		/**
		 * load active shop banner list
		 */
		public function loadActions() {
			$oBaseObject = $this->getBaseObject();
			$oViewName = $oBaseObject->getViewName();
			$sQ = "select * from {$oViewName} where (oxtype=0 OR oxtype=1) and " . $oBaseObject->getSqlActiveSnippet()
				. " and oxshopid='" . $this->getConfig()->getShopId() . "' " . $this->_getUserGroupFilter()
				. " order by oxsort";
			$this->selectString($sQ);
		}

		/**
		 * load active shop popup list
		 */
		public function loadPopUps() {
			$oBaseObject = $this->getBaseObject();
			$oViewName = $oBaseObject->getViewName();
			$sQ = "select * from {$oViewName} where oxtype=4 and " . $oBaseObject->getSqlActiveSnippet()
				. " and oxshopid='" . $this->getConfig()->getShopId() . "' " . $this->_getUserGroupFilter()
				. " order by oxsort";
			$this->selectString($sQ);
		}

		/**
		 * load active shop slide list of start slider
		 */
		public function loadSlider() {
			$oBaseObject = $this->getBaseObject();
			$oViewName = $oBaseObject->getViewName();
			$sQ = "select * from {$oViewName} where oxtype=5 and " . $oBaseObject->getSqlActiveSnippet()
				. " and oxshopid='" . $this->getConfig()->getShopId() . "' " . $this->_getUserGroupFilter()
				. " order by oxsort";
			$this->selectString($sQ);
		}

		/**
		 * load active shop banner list
		 */
		public function loadBanners($layout = null) {
			$config = $this->getConfig();
			$randomBanners = (int)$config->getConfigParam('gw_oxid_actions_extended_randombanners');
			if($randomBanners > 0) {
				$randomBanners = intval($randomBanners);
				$oBaseObject = $this->getBaseObject();
				$oViewName = $oBaseObject->getViewName();
				$sQ = "select * from {$oViewName} where oxtype=3 and " . $oBaseObject->getSqlActiveSnippet()
					. " and oxshopid='" . $this->getConfig()->getShopId() . "' " . $this->_getUserGroupFilter()
					. ($layout !== null ? " AND gw_layout='" . intval($layout) . "' " : '')
					. ($randomBanners ? "order by RAND()" : " order by oxsort")
					. ($randomBanners ? "LIMIT ".(int)$randomBanners : "")
				;
				$this->selectString($sQ);
			} else {
				parent::loadBanners();
			}
		}


	}
?>
