<?php
	namespace gw\gw_oxid_actions_extended\Core;

	use OxidEsales\Eshop\Core\DbMetaDataHandler;
	use OxidEsales\Eshop\Core\DatabaseProvider;

	class Events {
		/**
		 * add_db_key function.
		 *
		 * @access private
		 * @static
		 * @param mixed $table_name
		 * @param mixed $keyname
		 * @param mixed $column_names
		 * @param bool $unique (default: false)
		 * @return void
		 */
		private static function add_db_key($table_name, $keyname, $column_names, $unique=false) {
			// create key
			if($unique) {
				DatabaseProvider::getDb()->execute("
					ALTER TABLE  `$table_name` ADD UNIQUE  `$keyname` (  `".implode('`,`', $column_names)."` );
				");
			} else {
				DatabaseProvider::getDb()->execute("
					ALTER TABLE  `$table_name` ADD INDEX `$keyname` (  `".implode('`,`', $column_names)."` ) ;
				");
			}
		}

		public static function onActivate() {
			// self::add_db_key('oxarticles', 'GW_VARIANTS_KEY', array("OXVARSELECT"));

			$gw_head_exists = DatabaseProvider::getDb()->GetOne("SHOW COLUMNS FROM `oxactions` LIKE 'gw_head'");
			if(!$gw_head_exists) {
				DatabaseProvider::getDb()->execute(
					"ALTER TABLE `oxactions` ADD `gw_head` VARCHAR(255) NOT NULL COMMENT 'action header lang 1';"
				);
			}

			$gw_subhead_exists = DatabaseProvider::getDb()->GetOne("SHOW COLUMNS FROM `oxactions` LIKE 'gw_subhead'");
			if(!$gw_subhead_exists) {
				DatabaseProvider::getDb()->execute(
					"ALTER TABLE `oxactions` ADD `gw_subhead` VARCHAR(255) NOT NULL COMMENT 'action subheader lang 1';"
				);
			}

			$gw_head_1_exists = DatabaseProvider::getDb()->GetOne("SHOW COLUMNS FROM `oxactions` LIKE 'gw_head_1'");
			if(!$gw_head_1_exists) {
				DatabaseProvider::getDb()->execute(
					"ALTER TABLE `oxactions` ADD `gw_head_1` VARCHAR(255) NOT NULL COMMENT 'action header lang 2';"
				);
			}

			$gw_subhead_1_exists = DatabaseProvider::getDb()->GetOne("SHOW COLUMNS FROM `oxactions` LIKE 'gw_subhead_1'");
			if(!$gw_subhead_1_exists) {
				DatabaseProvider::getDb()->execute(
					"ALTER TABLE `oxactions` ADD `gw_subhead_1` VARCHAR(255) NOT NULL COMMENT 'action subheader lang 2';"
				);
			}

			$gw_head_2_exists = DatabaseProvider::getDb()->GetOne("SHOW COLUMNS FROM `oxactions` LIKE 'gw_head_2'");
			if(!$gw_head_2_exists) {
				DatabaseProvider::getDb()->execute(
					"ALTER TABLE `oxactions` ADD `gw_head_2` VARCHAR(255) NOT NULL COMMENT 'action header lang 3';"
				);
			}

			$gw_subhead_2_exists = DatabaseProvider::getDb()->GetOne("SHOW COLUMNS FROM `oxactions` LIKE 'gw_subhead_2'");
			if(!$gw_subhead_2_exists) {
				DatabaseProvider::getDb()->execute(
					"ALTER TABLE `oxactions` ADD `gw_subhead_2` VARCHAR(255) NOT NULL COMMENT 'action subheader lang 3';"
				);
			}

			$oDbMetaDataHandler = oxNew(DbMetaDataHandler::class);
			$oDbMetaDataHandler->updateViews();
		}
		public static function onDeactivate() {
			$config = \OxidEsales\Eshop\Core\Registry::getConfig();
			DatabaseProvider::getDb()->execute("DELETE FROM oxtplblocks WHERE oxshopid='".$config->getShopId()."' AND oxmodule='gw_oxid_actions_extended';");
			exec( "rm -f " .$config->getConfigParam( 'sCompileDir' )."/smarty/*" );
			exec( "rm -Rf " .$config->getConfigParam( 'sCompileDir' )."/*" );
			$oDbMetaDataHandler = oxNew(DbMetaDataHandler::class);
			$oDbMetaDataHandler->updateViews();
		}
	}
?>