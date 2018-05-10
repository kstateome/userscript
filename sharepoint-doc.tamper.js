// ==UserScript==
// @name           EST Sharepoint documentation updates
// @namespace      https://github.com/kstateome/userscript
// @version        0.0.5
// @description    automate some sharepoint things
// @include        https://ksuemailprod.sharepoint.com/sites/est/*
// @require        https://code.jquery.com/jquery-latest.min.js
// @grant          GM_addStyle
// @run-at         document-end
// ==/UserScript==


$().ready(
    function() {
	setTimeout(
	    function() {
		if(window.location.pathname.indexOf('Pages/Forms/AllItems.aspx')>0) {
		    if(window.location.search.indexOf('id=')>0) {
			over=$("a:contains('Overview.aspx')").attr('href');
			if(over) {
			    window.location = over;
			}
		    }
		}
	    }
	    ,500);
    }
);
