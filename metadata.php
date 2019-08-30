<?php
/**
 * @abstract
 * @author 	Gregor Wendland <gregor@gewend.de>
 * @copyright Copyright (c) 2018-2019, Gregor Wendland
 * @package gw
 * @version 2019-08-29
 */

/**
 * Metadata version
 */
$sMetadataVersion = '2'; // see https://docs.oxid-esales.com/developer/en/6.0/modules/skeleton/metadataphp/version20.html

/**
 * Module information
 */
$aModule = array(
    'id'           => 'gw_oxid_actions_extended',
    'title'        => 'Erweiterte Aktionen',
//     'thumbnail'    => 'out/admin/img/logo.jpg',
    'version'      => '1.0.2',
    'author'       => 'Gregor Wendland',
    'email'		   => 'kontakt@gewend.de',
    'url'		   => 'https://www.gewend.de',
    'description'  => array(
    	'de'		=> 'Erweitert die Möglichkeiten von OXID eShop Aktionen<ul>
							<li>Aktionen erhalten extra Text</li>
							<li>Banner können mit extra Attributen versehen werden (große Box, kleine Box)</li>
							<li>Banner können mit zusätzlichen CSS-Klassen versehen werden</li>
						</ul>',
    ),
    'extend'       => array(
		OxidEsales\Eshop\Core\ViewConfig::class => gw\gw_oxid_actions_extended\Core\ViewConfig::class,
		OxidEsales\Eshop\Application\Model\Actions::class => gw\gw_oxid_actions_extended\Application\Model\Actions::class,
		OxidEsales\Eshop\Application\Model\ActionList::class => gw\gw_oxid_actions_extended\Application\Model\ActionList::class,
    ),
    'settings'		=> array(

    ),
	'events'		=> array(
    ),
    'files'			=> array(
    ),
	'blocks' => array(
		// frontend
		array(
			'template' => 'page/shop/start.tpl',
			'block' => 'start_welcome_text',
			'file' => 'Application/views/blocks/start_welcome_text.tpl'
		),

		// backend
		array(
			'template' => 'actions_main.tpl',
			'block' => 'admin_actions_main_form',
			'file' => 'Application/views/blocks/admin/admin_actions_main_form.tpl'
		),

		array(
			'template' => 'actions_list.tpl',
			'block' => 'admin_actions_list_colgroup',
			'file' => 'Application/views/blocks/admin/admin_actions_list_colgroup.tpl'
		),
		array(
			'template' => 'actions_list.tpl',
			'block' => 'admin_actions_list_item',
			'file' => 'Application/views/blocks/admin/admin_actions_list_item.tpl'
		),
		array(
			'template' => 'actions_list.tpl',
			'block' => 'admin_actions_list_sorting',
			'file' => 'Application/views/blocks/admin/admin_actions_list_sorting.tpl'
		),
	),
	'events'       => array(
		'onActivate'   => '\gw\gw_oxid_actions_extended\Core\Events::onActivate',
		'onDeactivate' => '\gw\gw_oxid_actions_extended\Core\Events::onDeactivate'
	),
	'controllers'  => [
	],
	'templates' => [
	]
);
?>
