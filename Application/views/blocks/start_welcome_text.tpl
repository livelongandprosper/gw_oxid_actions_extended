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
                    <img src="[{$sBannerPictureUrl}]" alt="[{$banner->oxactions__gw_link_text->value}]">
                [{/if}]
                    [{if $banner->oxactions__gw_link_text->value}]<div class="gw-banner-link-text"><span>[{$banner->oxactions__gw_link_text->value}]</span></div>[{/if}]
                [{if $sBannerLink}]
                </a>
                [{/if}]
            </div>
        [{/foreach}]
    </div>
[{/if}]

[{oxifcontent ident="oxstartwelcome" object="oCont"}]
    <div class="welcome-teaser">[{$oCont->oxcontents__oxcontent->value}]</div>
[{/oxifcontent}]

[{if count($oViewConf->getActions()) > 0}]
    [{foreach from=$oViewConf->getActions() item="action"}]
    [{assign var="action_articles" value=$action->getArticleList()}]
    [{if count($action_articles) > 0}]
        <div class="gw-action[{if $action->oxactions__gw_additional_css_classes->value}] [{$action->oxactions__gw_additional_css_classes->value}][{/if}]">
            <div class="gw-action-header">
                <div class="gw-action-heading">
                    <h2>
                        [{if $action->oxactions__gw_link->value != ''}]<a href="[{$action->oxactions__gw_link->value}]">[{/if}][{if $action->oxactions__gw_head->value}][{$action->oxactions__gw_head->value}][{else}][{$action->oxactions__oxtitle->value}][{/if}][{if $action->oxactions__gw_link->value != ''}]</a>[{/if}]
                    </h2>
                    <span class="gw-action-subheading">[{$action->oxactions__gw_subhead->value}]</span>
                </div>
                [{if $action->oxactions__gw_link->value != ''}]
                    <a class="gw-action-link" href="[{$action->oxactions__gw_link->value}]">[{if $action->oxactions__gw_link_text->value}][{$action->oxactions__gw_link_text->value}][{/if}]</a>
                [{/if}]
            </div>

            [{include file="widget/product/list.tpl" type="grid" listId="productList"|cat:$action->oxactions__oxid->value products=$action_articles}]
        </div>
    [{/if}]
    [{/foreach}]
[{/if}]

[{$smarty.block.parent}]
