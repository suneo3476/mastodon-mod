// ==UserScript==
// @name         Postform before LTL
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://friends.nico/web/timelines/public/local
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const HOME = 0;
//             LTL = 2;
    const postform = document.querySelector( ".drawer__inner div:nth-child(3)" );
    const ltl = document.querySelectorAll('.column-header')[HOME];
    ltl.parentNode.insertBefore(postform, ltl);
})();
