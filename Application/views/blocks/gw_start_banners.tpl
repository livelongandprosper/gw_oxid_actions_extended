[{if count($oViewConf->getBanners()) > 0}]
    <div class="gw-banner-wrapper">
        [{foreach from=$oViewConf->getBanners() item="banner"}]
            [{assign var="sBannerPictureUrl" value=$banner->getBannerPictureUrl()}]

            [{* Masonry Banner *}]
            [{if $banner->oxactions__gw_layout->value == 2 || $banner->oxactions__gw_layout->value == 1}]
                <div class="gw-banner layout-[{$banner->oxactions__gw_layout->value}][{if $banner->oxactions__gw_additional_css_classes->value}] [{$banner->oxactions__gw_additional_css_classes->value}][{/if}]" id="gw-[{$banner->getId()|md5}]">
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
            [{/if}]

            [{* Aberundete Banner *}]
            [{if $banner->oxactions__gw_layout->value == 4}]
                <div class="gw-banner layout-[{$banner->oxactions__gw_layout->value}][{if $banner->oxactions__gw_additional_css_classes->value}] [{$banner->oxactions__gw_additional_css_classes->value}][{/if}]" id="gw-[{$banner->getId()|md5}]">
                    [{assign var="sBannerLink" value=$banner->getBannerLink()}]
                    <div class="gw-banner-text">
                        <h1>
                            [{$banner->oxactions__gw_head->value|nl2br}]
                        </h1>
                        <p>
                            [{$banner->oxactions__gw_subhead->value|nl2br}]
                        </p>
                    </div>
                    [{if $sBannerLink}]
                        <a class="btn btn-primary" href="[{$sBannerLink}]">[{$banner->oxactions__gw_link_text->value|nl2br}]</a>
                    [{/if}]
                    [{if $sBannerPictureUrl}]
                        <img src="[{$oViewConf->getImageUrl('white.gif')}]" data-src="[{$sBannerPictureUrl}]" alt="[{$banner->oxactions__gw_link_text->value}]" width="680" height="270">
                    [{/if}]
                </div>
            [{/if}]
        [{/foreach}]
    </div>
    <div class="gw-fullsize-banner-wrapper">
        [{foreach from=$oViewConf->getBanners() item="banner"}]
            [{assign var="sBannerPictureUrl" value=$banner->getBannerPictureUrl()}]
            [{if $banner->oxactions__gw_layout->value == 3}]
            <div class="gw-banner layout-[{$banner->oxactions__gw_layout->value}][{if $banner->oxactions__gw_additional_css_classes->value}] [{$banner->oxactions__gw_additional_css_classes->value}][{/if}]" id="gw-[{$banner->getId()|md5}]">
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
            [{/if}]
        [{/foreach}]
    </div>
[{/if}]
[{$smarty.block.parent}]
