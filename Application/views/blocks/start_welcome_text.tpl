[{$smarty.block.parent}]

[{if count($oViewConf->getActions()) > 0}]
    [{foreach from=$oViewConf->getActions() item="action"}]
    [{assign var="action_articles" value=$action->getArticleList()}]
    [{if count($action_articles) > 0}]
        <div class="gw-action">
            <h2 class="gw-action-head">
                [{if $action->oxactions__gw_head->value}][{$action->oxactions__gw_head->value}][{else}][{$action->oxactions__oxtitle->value}][{/if}]
            </h2>
            <span class="gw-action-subhead">[{$action->oxactions__gw_subhead->value}]</span>

            [{include file="widget/product/list.tpl" type="grid" listId="productList" products=$action_articles}]

            <pre style="display: none;">
            [{$action|print_r}]
            </pre>
        </div>
    [{/if}]
    [{/foreach}]
[{/if}]