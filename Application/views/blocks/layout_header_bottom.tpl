[{$smarty.block.parent}]

[{* TODO: add javascript and css to this plugin (currently this is done in theme) *}]

[{foreach from=$oViewConf->gw_get_popups() item="banner"}]
    [{assign var="sBannerPictureUrl" value=$banner->getBannerPictureUrl()}]
    [{assign var="cookieExpirationTime" value=$banner->oxactions__gw_cookie_expiration->value}]
    <div class="gw-special-offer[{if $banner->oxactions__gw_additional_css_classes->value}] [{$banner->oxactions__gw_additional_css_classes->value}][{/if}]" data-image="[{$sBannerPictureUrl}]"[{if $cookieExpirationTime}] data-cookie-expiration-time="[{$cookieExpirationTime}]"[{/if}] data-cookie-id="[{$banner->getId()}]">
        <div>
            <div class="gw-special-title">[{$banner->oxactions__gw_head->rawValue}]</div>
            <div class="gw-special-subtitle">
                [{$banner->oxactions__gw_subhead->rawValue}]
                <div class="gw-special-text">[{$banner->oxactions__gw_popup_content->rawValue}]</div>
            </div>
            [{if $banner->oxactions__gw_bottom_text->value}]
                <div class="gw-special-period">[{$banner->oxactions__gw_bottom_text->rawValue}]</div>
            [{/if}]
            [{if $banner->oxactions__gw_link->value != ''}]
                <a class="gw-special-link" href="[{$banner->oxactions__gw_link->value}]">[{if $banner->oxactions__gw_link_text->value}][{$banner->oxactions__gw_link_text->value}][{/if}]</a>
            [{/if}]
        </div>
    </div>
[{/foreach}]
