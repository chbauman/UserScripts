// ==UserScript==
// @name        20 Min Ad-block blocker blocker
// @include     https://www.20min.ch*
// @description Test
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @grant       GM_addStyle
// ==/UserScript==

var $ = window.jQuery;
var hide_adblock_blocker = function() {
    $("#story_content").zIndex = 100000;
    $('[id^=sp_message]').hide();
    $('[class^=sp_message]').hide();
    var veil = $('[class^=sp_veil15]')
    $('body').css({overflow: 'scroll'});
    veil.hide()
    console.log("Duuuude");
}

 var hide_sponsored = function(){
    var list = document.getElementsByTagName("a");
    console.log(list.length);
    var lk, ih;
    for(lk of list){
        ih = lk.innerHTML;
        if(ih == "Sponsored" || ih == "Wettbewerb" || ih == "Paid Post"){
            console.log("Dini Mueter");
            lk.parentNode.parentNode.parentNode.parentNode.innerHTML = "";
        }
    }
}

hide_adblock_blocker();
hide_sponsored();

var count = 0
function keydownHandler(e) {
    if (e.keyCode == 13) { // 13 is the enter key
        console.log("Enter_" + count.toString() + "\n");
        count += 1;
        hide_adblock_blocker();
    }
}

// register your handler method for the keydown event
if (document.addEventListener) {
    document.addEventListener('keydown', keydownHandler, false);
}
else if (document.attachEvent) {
    document.attachEvent('onkeydown', keydownHandler);
}
