<td valign="top" class="[{$listclass}]" height="15"><div class="listitemfloating"><a href="Javascript:top.oxid.admin.editThis('[{$listitem->oxactions__oxid->value}]');" class="[{$listclass}]">[{$listitem->oxactions__oxsort->value}]</a></div></td>

<td valign="top" class="[{$listclass}][{if $listitem->oxactions__oxactive->value == 1}] active[{/if}]" height="15"><div class="listitemfloating">&nbsp</a></div></td>
<td valign="top" class="[{$listclass}]" height="15"><div class="listitemfloating"><a href="Javascript:top.oxid.admin.editThis('[{$listitem->oxactions__oxid->value}]');" class="[{$listclass}]">[{$listitem->oxactions__oxtitle->value}]</a></div></td>
<td valign="top" class="[{$listclass}]" height="15"><div class="listitemfloating"><a href="Javascript:top.oxid.admin.editThis('[{$listitem->oxactions__oxid->value}]');" class="[{$listclass}]">[{$listitem->oxactions__oxactivefrom->value}]</a></div></td>
<td valign="top" class="[{$listclass}]" height="15"><div class="listitemfloating">
        <a href="Javascript:top.oxid.admin.editThis('[{$listitem->oxactions__oxid->value}]');" class="[{$listclass}]">
            [{if $listitem->oxactions__oxtype->value == 3}]
                [{oxmultilang ident="PROMOTIONS_MAIN_TYPE_BANNER"}]
            [{elseif $listitem->oxactions__oxtype->value == 2}]
                [{oxmultilang ident="PROMOTIONS_MAIN_TYPE_PROMO"}]
            [{elseif $listitem->oxactions__oxtype->value == 4}]
                [{oxmultilang ident="GW_PROMOTIONS_POPUP"}]
            [{else}]
            [{oxmultilang ident="PROMOTIONS_MAIN_TYPE_ACTION"}]
            [{/if}]
        </a></div></td>
<td class="[{$listclass}]">[{if !$listitem->isOx() && !$readonly && $listitem->oxactions__oxtype->value > 0}]<a href="Javascript:top.oxid.admin.deleteThis('[{$listitem->oxactions__oxid->value}]');" class="delete" id="del.[{$_cnt}]" [{include file="help.tpl" helpid=item_delete}]></a>[{/if}]</td>

[{*$smarty.block.parent*}]
