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
		$myConfig = $this->getConfig();

		if($myConfig->getConfigParam('gw_oxid_actions_extended_numberofarticles') >= 0) {
			$limit = intval($myConfig->getConfigParam('gw_oxid_actions_extended_numberofarticles'));
		}
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
			|| $fieldName == 'gw_linktext'
			|| $fieldName == 'gw_linktext'
			|| $fieldName == 'gw_linktext'
		) {
			return true;
		}
		return parent::isMultilingualField($fieldName);
	}

	/**
	 * Override getBannerPictureUrl to make it possible to get the additional images
	 */
	public function getBannerPictureUrl($imageDbField = null)
	{
		if($imageDbField !== null) {
			$classMemeberName = "oxactions__" . $imageDbField;
			if (isset($this->{$classMemeberName}) && $this->{$classMemeberName}->value) {
				$sPromoDir = \OxidEsales\Eshop\Core\Registry::getUtilsFile()->normalizeDir(\OxidEsales\Eshop\Core\UtilsFile::PROMO_PICTURE_DIR);
				return $this->getConfig()->getPictureUrl($sPromoDir . $this->{$classMemeberName}->value, false);
			}
			return "";
		}
		return parent::getBannerPictureUrl();
	}
}
?>
