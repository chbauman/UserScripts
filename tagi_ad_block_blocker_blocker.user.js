// ==UserScript==
// @name        Tagesanzeiger Ad-block blocker blocker
// @include     https://www.tagesanzeiger.ch*
// @description Let's you continue reading Tagesanzeiger articles after the pop-up that tells you to inactivate your adblock and locks the page.
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @grant       GM_addStyle
// ==/UserScript==

var $ = window.jQuery;
var hide_adblock_blocker = function() {

    // Remove Pop-up
    $("#tamovl-main-container").hide();
    $("#tamovl-page-wrap").hide();

    // Search for and edit stylesheet to make page scrollable
    var ss = document.styleSheets;
    var sheet, rule;
    for(sheet of ss){
        try {
            console.log(sheet);
            if(sheet.cssRules){
                for(rule of sheet.cssRules){
                    try {
                        // Find right style definition
                        var selText = rule.selectorText;
                        var n = selText.indexOf("body.modal-open");
                        if(n != -1){
                            // Set properties accordingly
                            rule.style.setProperty('overflow', 'scroll', null);
                            rule.style.setProperty('position', '', null);
                            rule.style.setProperty('user-select', 'text', null);
                            console.log("Fuck yeah");
                        }
                    } catch (e) {
                        console.log("Errooooor");
                    }
                }
            }
        } catch (e) {
            console.log("Errooooor");
        }
    }
    $("body.modal-open").zIndex = 100000;
}

hide_adblock_blocker();

var count = 0
// Function to be executed when enter is pressed
function keydownHandler(e) {
    if (e.keyCode == 13) { // 13 is the enter key
        console.log("Enter_" + count.toString() + "\n");
        count += 1;
        hide_adblock_blocker();
    }
}

// Register method for the keydown event
if (document.addEventListener) {
    document.addEventListener('keydown', keydownHandler, false);
}
else if (document.attachEvent) {
    document.attachEvent('onkeydown', keydownHandler);
}


