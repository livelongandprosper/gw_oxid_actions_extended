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

		/**
		 * @param $table_name
		 * @param $column_name
		 * @param $datatype
		 */
		private static function add_db_field($table_name, $column_name, $datatype) {
			$gw_head_exists = DatabaseProvider::getDb()->GetOne("SHOW COLUMNS FROM `$table_name` LIKE '$column_name'");
			if(!$gw_head_exists) {
				DatabaseProvider::getDb()->execute(
					"ALTER TABLE `$table_name` ADD `$column_name` $datatype;"
				);
			}
		}

		public static function onActivate() {
			// self::add_db_key('oxarticles', 'GW_VARIANTS_KEY', array("OXVARSELECT"));

			// popup text

			self::add_db_field('oxactions', 'gw_popup_content', "TEXT NOT NULL COMMENT 'pop up text lang 1'");
			self::add_db_field('oxactions', 'gw_popup_content_1', "TEXT NOT NULL COMMENT 'pop up text lang 2'");
			self::add_db_field('oxactions', 'gw_popup_content_2', "TEXT NOT NULL COMMENT 'pop up text lang 3'");

			// header db fields

			self::add_db_field('oxactions', 'gw_head', "VARCHAR(255) NOT NULL COMMENT 'action header lang 1'");
			self::add_db_field('oxactions', 'gw_subhead', "VARCHAR(1024) NOT NULL COMMENT 'action subheader lang 1'");

			self::add_db_field('oxactions', 'gw_head_1', "VARCHAR(255) NOT NULL COMMENT 'action header lang 2'");
			self::add_db_field('oxactions', 'gw_subhead_1', "VARCHAR(1024) NOT NULL COMMENT 'action subheader lang 2'");

			self::add_db_field('oxactions', 'gw_head_2', "VARCHAR(255) NOT NULL COMMENT 'action header lang 3'");
			self::add_db_field('oxactions', 'gw_subhead_2', "VARCHAR(1024) NOT NULL COMMENT 'action subheader lang 3'");


			// action link db fields

			self::add_db_field('oxactions', 'gw_link', "VARCHAR(255) NOT NULL COMMENT 'action more link lang 1'");
			self::add_db_field('oxactions', 'gw_link_text', "VARCHAR(255) NOT NULL COMMENT 'action more link text lang 1'");

			self::add_db_field('oxactions', 'gw_link_1', "VARCHAR(255) NOT NULL COMMENT 'action more link lang 2'");
			self::add_db_field('oxactions', 'gw_link_text_1', "VARCHAR(255) NOT NULL COMMENT 'action more link text lang 2'");

			self::add_db_field('oxactions', 'gw_link_2', "VARCHAR(255) NOT NULL COMMENT 'action more link lang 3'");
			self::add_db_field('oxactions', 'gw_link_text_2', "VARCHAR(255) NOT NULL COMMENT 'action more link text lang 3'");

			self::add_db_field('oxactions', 'gw_layout', "TINYINT(1) UNSIGNED DEFAULT 1 NOT NULL COMMENT 'defines the layout of a banner'");
			self::add_db_field('oxactions', 'gw_additional_css_classes', "VARCHAR(255) NOT NULL COMMENT 'additional css classes'");

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
