[{$smarty.block.parent}]

[{* TODO: add javascript and css to this plugin (currently this is done in theme) *}]

[{foreach from=$oViewConf->gw_get_popups() item="banner"}]
    [{assign var="sBannerPictureUrl" value=$banner->getBannerPictureUrl()}]
    <div class="gw-special-offer" data-image="[{$sBannerPictureUrl}]">
        <div>
            <div class="gw-special-title">[{$banner->oxactions__gw_head->value}]</div>
            <div class="gw-special-subtitle">
                [{$banner->oxactions__gw_subhead->value}]
                <div class="gw-special-text">[{$banner->oxactions__gw_popup_content->value}]</div>
            </div>
            <div class="gw-special-period">[{if $banner->oxactions__oxactivefrom->value != '0000-00-00 00:00:00'}][{$banner->oxactions__oxactivefrom->value|date_format:"%d.%m %H:%M"}][{/if}][{if $banner->oxactions__oxactiveto->value != '0000-00-00 00:00:00'}] &dash; [{$banner->oxactions__oxactiveto->value|date_format:"%d.%m %H:%M"}][{/if}]</div>
        </div>
    </div>
[{/foreach}]
