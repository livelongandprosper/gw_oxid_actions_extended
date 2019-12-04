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
            [{if $banner->oxactions__gw_bottom_text->value}]
                <div class="gw-special-period">[{$banner->oxactions__gw_bottom_text->value}]</div>
            [{/if}]
        </div>
    </div>
[{/foreach}]
