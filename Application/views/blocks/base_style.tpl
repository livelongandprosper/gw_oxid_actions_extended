[{$smarty.block.parent}]
[{foreach from=$oViewConf->gw_get_popups() item="banner"}]
    [{if $banner->oxactions__gw_additional_css->value}]
        <style>[{$banner->oxactions__gw_additional_css->rawValue}]</style>
    [{/if}]
[{/foreach}]
