[{assign var="oConfig" value=$oViewConf->getConfig()}]

[{$smarty.block.parent}]

[{* options für article actions *}]
[{if ($edit->oxactions__oxtype->value == 0 || $edit->oxactions__oxtype->value == 1) && $oxid != "-1"}]
    <!-- Line -->
    <tr>
        <td width="100%" colspan="2"><hr></td>
    </tr>

    <!-- head / subhead -->
    <tr>
        <td class="text" colspan="2">
            <b>Überschrift:</b>
        </td>
    <tr>
        <td class="text">
            <b>Hauptüberschrift:</b>
        </td>
        <td class="text">
            <input type="text" class="editinput" size="60" name="editval[oxactions__gw_head]" value="[{$edit->oxactions__gw_head->value}]" [{$readonly}]>
        </td>
    </tr>
    <tr>
        <td class="text">
            <b>Unterzeile:</b>
        </td>
        <td class="text">
            <input type="text" class="editinput" size="60" name="editval[oxactions__gw_subhead]" value="[{$edit->oxactions__gw_subhead->value}]" [{$readonly}]>
        </td>
    </tr>

    <!-- link -->
    <tr>
        <td class="text" colspan="2">
            <b>Verlinkung:</b>
        </td>
    <tr>
        <td class="text">
            <b>Link (URL):</b>
        </td>
        <td class="text">
            <input placeholder="z.B. [{$oConfig->getShopSecureHomeUrl()}]" type="text" class="editinput" size="60" name="editval[oxactions__gw_link]" value="[{$edit->oxactions__gw_link->value}]" [{$readonly}]>
        </td>
    </tr>
    <tr>
        <td class="text">
            <b>Linktext:</b>
        </td>
        <td class="text">
            <input placeholder="z.B. Alle Modelle anzeigen" type="text" class="editinput" size="60" name="editval[oxactions__gw_link_text]" value="[{$edit->oxactions__gw_link_text->value}]" [{$readonly}]>
        </td>
    </tr>

    <!-- spacer -->
    <tr>
        <td colspan="2"><br></td>
    </tr>

    <!-- sort -->
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

[{* options for banners *}]
[{if $edit->oxactions__oxtype->value == 3}]
    <!-- Line -->
    <tr>
        <td width="100%" colspan="2"><hr></td>
    </tr>

    <tr>
        <td class="text">
            <b>Banner-Text:</b>
        </td>
        <td class="text">
            <textarea type="text" class="editinput" name="editval[oxactions__gw_link_text]" style="width: 100%;" [{$readonly}]>[{$edit->oxactions__gw_link_text->value}]</textarea>
        </td>
    </tr>
    <tr>
        <td class="text">
            <b>Anzeige-Größe:</b>
        </td>
        <td class="text">
            <select name="editval[oxactions__gw_layout]" class="editinput">
                <option value="1"[{if 1 == $edit->oxactions__gw_layout->value}] selected="selected"[{/if}]>Groß / hochkannt</option>
                <option value="2"[{if 2 == $edit->oxactions__gw_layout->value}] selected="selected"[{/if}]>Klein / quer</option>
            </select>
        </td>
    </tr>
    <tr>
        <td class="text">
            <b>Zusätzliche CSS-Klassen:</b>
        </td>
        <td class="text">
            <input type="text" class="editinput" size="60" name="editval[oxactions__gw_additional_css_classes]" value="[{$edit->oxactions__gw_additional_css_classes->value}]" [{$readonly}]>
        </td>
    </tr>

[{/if}]
