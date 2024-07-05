<div class="gw-start-slider">
    [{if method_exists($oViewConf, "gw_get_start_slider") && count($oViewConf->gw_get_start_slider()) > 0}]
        <div class="swiper">
            <div class="gw-slider-wrapper swiper-wrapper">
                [{foreach from=$oViewConf->gw_get_start_slider() item="slide"}]
                    <div class="swiper-slide" id="gw-[{$slide->getId()|md5}]">
                        [{assign var="sSlideUrl_default" value=$slide->getBannerPictureUrl("gw_oxpic_slider_default")}]
                        [{assign var="sSlideUrl_medium" value=$slide->getBannerPictureUrl("gw_oxpic_slider_medium")}]
                        [{assign var="sSlideUrl_large" value=$slide->getBannerPictureUrl("gw_oxpic_slider_large")}]
                        [{assign var="sBannerLink" value=$slide->oxactions__gw_link->value}]

                        [{if $sSlideUrl_default}]
                            [{* TODO: Lazy load images *}]
                            <picture>
                                [{if $sSlideUrl_large}]<source media="(min-width: 992px)" srcset="[{if $sSlideUrl_large == $sSlideUrl_default}][{$sSlideUrl_medium}][{else}][{$sSlideUrl_large}][{/if}]">[{/if}]
                                [{if $sSlideUrl_medium}]<source media="(min-width:768px)" srcset="[{$sSlideUrl_medium}]">[{/if}]
                                <source media="(min-width: 0px)" srcset="[{$sSlideUrl_default}]">
                                <img src="[{$sSlideUrl_default}]" alt="[{$slide->oxactions__gw_head->value}]" width="1440" height="570">
                            </picture>
                        [{/if}]

                        <div class="gw-slide-text-block">
                            <h1 class="gw-slide-heading">
                                [{$slide->oxactions__gw_head->value|nl2br}]
                            </h1>
                            <div class="gw-slide-text">
                                [{$slide->oxactions__gw_subhead->value|nl2br}]
                            </div>

                            [{if $sBannerLink}]
                                <div class="gw-slider-link">
                                    <a class="btn btn-primary" href="[{$sBannerLink}]">
                                        [{if $slide->oxactions__gw_link_text->value}]<div class="gw-slider-link-text"><span>[{$slide->oxactions__gw_link_text->value}]</span></div>[{/if}]
                                    </a>
                                </div>
                            [{/if}]
                        </div>
                    </div>
                [{/foreach}]
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-next"></div>
        </div>
    [{/if}]
</div>
