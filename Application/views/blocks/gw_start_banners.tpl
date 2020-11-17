[{if count($oViewConf->getBanners()) > 0}]
    <div class="gw-banner-wrapper">
        [{foreach from=$oViewConf->getBanners() item="banner"}]
        [{assign var="sBannerPictureUrl" value=$banner->getBannerPictureUrl()}]
        <div class="gw-banner layout-[{$banner->oxactions__gw_layout->value}][{if $banner->oxactions__gw_additional_css_classes->value}] [{$banner->oxactions__gw_additional_css_classes->value}][{/if}]">
            [{assign var="sBannerLink" value=$banner->getBannerLink()}]
            [{if $sBannerLink}]
            <a class="gw-action-link" href="[{$sBannerLink}]">
                [{/if}]
                [{if $sBannerPictureUrl}]
            <img src="[{$oViewConf->getImageUrl('white.gif')}]" data-src="[{$sBannerPictureUrl}]" alt="[{$banner->oxactions__gw_link_text->value}]">
                [{/if}]
                [{if $banner->oxactions__gw_link_text->value}]<div class="gw-banner-link-text"><span>[{$banner->oxactions__gw_link_text->value}]</span></div>[{/if}]
                [{if $sBannerLink}]
            </a>
            [{/if}]
        </div>
        [{/foreach}]
    </div>
[{/if}]
[{$smarty.block.parent}]
