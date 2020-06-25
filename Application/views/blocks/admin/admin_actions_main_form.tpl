[{assign var="oConfig" value=$oViewConf->getConfig()}]

[{$smarty.block.parent}]

[{literal}]
<script>
    var selectList = document.querySelectorAll("[name='editval[oxactions__oxtype]'");
    selectList[0].options[selectList[0].length] = new Option("PopUp", 4, false)
</script>
[{/literal}]

[{* options für article actions *}]
[{if ($edit->oxactions__oxtype->value == 0 || $edit->oxactions__oxtype->value == 1 || $edit->oxactions__oxtype->value == 4) && $oxid != "-1"}]
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
            <textarea type="text" class="editinput" name="editval[oxactions__gw_head]" [{$readonly}] style="width: 100%;height:32px;padding:3px;">[{$edit->oxactions__gw_head->value}]</textarea>
        </td>
    </tr>
    <tr>
        <td class="text">
            <b>Unterüberschrift:</b>
        </td>
        <td class="text">
            <textarea type="text" class="editinput" name="editval[oxactions__gw_subhead]" [{$readonly}] style="width: 100%;height:32px;padding:3px;">[{$edit->oxactions__gw_subhead->value}]</textarea>
        </td>
    </tr>

    [{if $edit->oxactions__oxtype->value == 4}]
        <tr>
            <td class="text">
                <b>Fußtext:</b>
            </td>
            <td class="text">
                <input type="text" class="editinput" size="60" name="editval[oxactions__gw_bottom_text]" value="[{$edit->oxactions__gw_bottom_text->value}]" [{$readonly}]>
            </td>
        </tr>
    [{/if}]

    [{if $edit->oxactions__oxtype->value == 0 || $edit->oxactions__oxtype->value == 1 || $edit->oxactions__oxtype->value == 4}]
        <!-- link -->
        <tr>
            <td class="text" colspan="2">
                <br>
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
[{/if}]
[{if $edit->oxactions__oxtype->value == 3 || $edit->oxactions__oxtype->value == 4}]
    <tr>
        <td class="text">
            <b>Zusätzliche CSS-Klassen:</b>
        </td>
        <td class="text">
            <input type="text" class="editinput" size="60" name="editval[oxactions__gw_additional_css_classes]" value="[{$edit->oxactions__gw_additional_css_classes->value}]" [{$readonly}]>
        </td>
    </tr>
    <tr>
        <td class="text">
            <b>Zusätzliches CSS:</b>
        </td>
        <td class="text">
            <textarea type="text" class="editinput" name="editval[oxactions__gw_additional_css]" [{$readonly}] style="width: 100%;height:80px;padding:3px;">[{$edit->oxactions__gw_additional_css->value}]</textarea>
        </td>
    </tr>
[{/if}]
[{if $edit->oxactions__oxtype->value == 4}]
<!-- Line -->
    <tr>
        <td width="100%" colspan="2"><hr></td>
    </tr>

    <tr>
        <td class="text">
            <b>PopUp Text:</b>
        </td>
        <td class="text">
            <textarea type="text" class="editinput" name="editval[oxactions__gw_popup_content]" [{$readonly}] style="width:100%;height:80px;padding:3px;">[{$edit->oxactions__gw_popup_content->value}]</textarea>
        </td>
        <td width="180" valign="top" style="padding: 0 25px 0 25px; border-left: 1px solid #ddd;">
            [{if (!($edit->oxactions__oxpic->value=="nopic.jpg" || $edit->oxactions__oxpic->value==""))}]
            <div style="padding-bottm: 10px;">
                <a href="[{$edit->getBannerPictureUrl()}]" target="_blank">
                    <img src="[{$edit->getBannerPictureUrl()}]" width="120px;" border="0">
                </a>
                <div style="width: 120px; color: #666; padding-top: 5px; border-top: 1px solid #ccc; text-align: center;">
                    PopUp background picture
                </div>
            </div>
            [{/if}]
        </td>

        <td valign="top" class="edittext" align="left" style="width:100%;padding-left:5px;padding-bottom:10px;">
            <table cellspacing="0" cellpadding="0" border="0">
                <tr>
                    <td class="edittext">
                        <table cellspacing="0" cellpadding="0" width="100%" border="0" class="listTable">
                            [{block name="admin_actions_main_product"}]
                            <colgroup>
                                <col width="1%" nowrap>
                                <col width="1%" nowrap>
                                <col width="98%">
                            </colgroup>

                            <tr>
                                <td class="text">
                                    <b>[{oxmultilang ident="PROMOTIONS_BANNER_PICTUREUPLOAD"}] ([{oxmultilang ident="GENERAL_MAX_FILE_UPLOAD"}] [{$sMaxFormattedFileSize}], [{oxmultilang ident="GENERAL_MAX_PICTURE_DIMENSIONS"}]):</b>
                                </td>
                                <td class="edittext">
                                    <input class="editinput" name="myfile[PROMO@oxactions__oxpic]" type="file" size="26"[{$readonly_fields}]>
                                    <input id="oxpic" type="hidden" maxlength="[{$edit->oxactions__oxpic->fldmax_length}]" name="editval[oxactions__oxpic]" value="[{$edit->oxactions__oxpic->value}]" readonly>
                                </td>
                                <td nowrap="nowrap">
                                    [{if (!($edit->oxactions__oxpic->value=="nopic.jpg" || $edit->oxactions__oxpic->value=="")) && !$readonly}]
                                    <div style="display: inline-block;">
                                        <a href="Javascript:DeletePic('oxpic');" class="deleteText"><span class="ico"></span><span style="float: left;>">[{oxmultilang ident="GENERAL_DELETE"}]</span></a>
                                    </div>
                                    [{/if}]
                                </td>
                            </tr>
                            [{/block}]
                        </table>

                        <input type="button" value="[{oxmultilang ident="GENERAL_ASSIGNARTICLE"}]" class="edittext" onclick="JavaScript:showDialog('&cl=actions_main&oxpromotionaoc=article&oxid=[{$oxid}]');" [{$readonly}]>

                    </td>
                </tr>
            </table>
        </td>
    </tr>
<!-- Ende rechte Seite -->
[{/if}]
