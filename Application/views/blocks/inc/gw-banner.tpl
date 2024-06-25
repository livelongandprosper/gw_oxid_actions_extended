[{* Aberundete Banner *}]
<div class="gw-banner layout-[{$banner->oxactions__gw_layout->value}][{if $banner->oxactions__gw_additional_css_classes->value}] [{$banner->oxactions__gw_additional_css_classes->value}][{/if}][{if !$banner->oxactions__gw_head->value && !$banner->oxactions__gw_subhead->value}] gw-no-text[{/if}]" id="gw-[{$banner->getId()|md5}]">
    [{assign var="sBannerLink" value=$banner->getBannerLink()}]
    [{if $banner->oxactions__gw_head->value || $banner->oxactions__gw_subhead->value}]
        <div class="gw-banner-text">
            [{if $banner->oxactions__gw_head->value}]
                <h1>
                    [{$banner->oxactions__gw_head->value|nl2br}]
                </h1>
            [{/if}]
            [{if $banner->oxactions__gw_subhead->value}]
                <p>
                    [{$banner->oxactions__gw_subhead->value|nl2br}]
                </p>
            [{/if}]
        </div>
    [{/if}]
    [{if $sBannerLink}]
        <a class="btn btn-primary" href="[{$sBannerLink}]">[{$banner->oxactions__gw_link_text->value|nl2br}]</a>
    [{/if}]
    [{if $sBannerPictureUrl}]
        <img src="[{$oViewConf->getImageUrl('white.gif')}]" data-src="[{$sBannerPictureUrl}]" alt="[{$banner->oxactions__gw_link_text->value}]" width="680" height="270">
    [{/if}]
</div>
