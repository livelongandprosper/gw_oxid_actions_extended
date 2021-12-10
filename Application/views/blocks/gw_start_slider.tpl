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
                            <img src="[{$sSlideUrl_default}]"[{if $sSlideUrl_default && $sSlideUrl_medium}]
                                 srcset="[{$sSlideUrl_default}] 768w,[{$sSlideUrl_medium}] 992w[{if $sSlideUrl_large}],[{$sSlideUrl_large}] 1440w[{/if}]"[{/if}]
                                 sizes="100vw"
                                 width="1440" height="470"
                                 alt="[{$slide->oxactions__gw_head->value}]">
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
