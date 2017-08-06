// ==UserScript==
// @name         Auto Load More for YouTube
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Allows you to keep scrolling through videos without having to click on the 'load more' button.
// @author       jd-hill-5624 (Based on https://gist.github.com/JohnCoates/b3c13def927d7dc0c5c03c0e6c61ebba with minor edits)
// @match        https://www.youtube.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
buttons = document.getElementsByTagName("button");
for (var key in buttons) { 
button = buttons[key];
attributes = button.attributes;
if (attributes !== undefined && attributes.getNamedItem('aria-label')) {
label = attributes.getNamedItem('aria-label');
value = String(label.value);
if (value == "Load more\n") {
console.log("clicking load more!");
button.click();
}
}
}
    // Your code here...
})();