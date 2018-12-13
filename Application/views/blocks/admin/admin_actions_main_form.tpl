[{$smarty.block.parent}]

[{if ($edit->oxactions__oxtype->value == 0 || $edit->oxactions__oxtype->value == 1) && $oxid != "-1"}]
    <!-- Line -->
    <tr>
        <td width="100%" colspan="2"><hr></td>
    </tr>

    <tr>
        <td class="text" colspan="2">
            <b>Überschrift:</b>
        </td>
    <tr>
        <td class="text">
            <b>Zeile 1:</b>
        </td>
        <td class="text">
            <input type="text" class="editinput" size="43" name="editval[oxactions__gw_head]" value="[{$edit->oxactions__gw_head->value}]" [{$readonly}]>
        </td>
    </tr>
    <tr>
        <td class="text">
            <b>Zeile 2:</b>
        </td>
        <td class="text">
            <input type="text" class="editinput" size="43" name="editval[oxactions__gw_subhead]" value="[{$edit->oxactions__gw_subhead->value}]" [{$readonly}]>
        </td>
    </tr>

    <tr>
        <td colspan="2"><br></td>
    </tr>

    <!-- Sort -->
    <tr>
        <td class="edittext" width="120">
            [{oxmultilang ident="GENERAL_SORT"}]
        </td>
        <td class="edittext">
            <input type="text" class="editinput" size="32" maxlength="[{$edit->oxactions__oxsort->fldmax_length}]" name="editval[oxactions__oxsort]" value="[{$edit->oxactions__oxsort->value}]" [{$readonly}]>
            [{oxinputhelp ident="HELP_GENERAL_SORT"}]
        </td>
    </tr>

    <!-- Line -->
    <tr>
        <td width="100%" colspan="2"><hr></td>
    </tr>
[{/if}]