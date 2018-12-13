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
	}
?>