// ==UserScript==
// @name         百度广告过滤器
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*.baidu.com/*
// @match        https://*.baidu.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
window.setInterval(Clean,100);



     //总开关
     function Clean ()
    {
    Clean_seach();
    Clean_more();




    }


     //清除百度广告=====================================================↓
     function Clean_seach () {
        var seach_list;
        var element;
        var elementlist;

        seach_list = document.getElementById("content_left");
        elementlist = seach_list.children;

        //console.log(elementlist.length);

         var i = 0;
         //===========element转String



         //console.log(elementlist[i]);



         while (i <elementlist.length) {

             var String = (elementlist[i]).outerHTML;
            // console.log(String);




             if (String.indexOf(">广告<")!==-1) {
                 console.log(elementlist[i]);
                elementlist[i].remove();
                 i--;


            }
            i++;
            //console.log(i)


        }
    }
    //清除百度广告=====================================================↑

    //清除右边推荐=======================================
    function Clean_more()
    {
        document.getElementById("content_right").remove();

    }








})();