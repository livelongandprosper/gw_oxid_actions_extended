[{$smarty.block.parent}]
[{foreach from=$oViewConf->gw_get_popups() item="popup"}]
    [{if $popup->oxactions__gw_additional_css->value}]
        <style>[{$popup->oxactions__gw_additional_css->rawValue}]</style>
    [{/if}]
[{/foreach}]
[{foreach from=$oViewConf->getBanners() item="banner"}]
    [{if $banner->oxactions__gw_additional_css->value}]
    <style>[{$banner->oxactions__gw_additional_css->rawValue}]</style>
    [{/if}]
[{/foreach}]
