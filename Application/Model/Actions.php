<?php
namespace gw\gw_oxid_actions_extended\Application\Model;

use OxidEsales\Eshop\Application\Model\ArticleList;

/**
 * @see OxidEsales\Eshop\Application\Model\Actions
 */
class Actions extends Actions_parent {

	protected $_gw_aArticleList = null;

	/**
	 * @param int $limit
	 * @return array
	 */
	public function getArticleList($limit = 4) {
		if($this->_gw_aArticleList === null) {
			$this->_gw_aArticleList = [];
			$oArtList = oxNew(ArticleList::class);
			$oArtList->loadActionArticles($this->getId(), $limit);
			if($oArtList->count() > 0) {
				$this->_gw_aArticleList = $oArtList;
			}
		}

		return $this->_gw_aArticleList;
	}

	/**
	 * @param $fieldName
	 * @return bool
	 */
	public function isMultilingualField($fieldName) {
		if(
			$fieldName == 'gw_head'
			|| $fieldName == 'gw_subhead'
			|| $fieldName == 'gw_link'
			|| $fieldName == 'gw_linktext'
		) {
			return true;
		}
		return parent::isMultilingualField($fieldName);
	}
}
?>
