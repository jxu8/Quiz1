/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Assignments = (function runAssignments (){ //creating an Assignments function object
    //Assignment 1
    var largestInt = function (someArray){ //functions are objects
        document.getElementById("Array").innerHTML = someArray;
        someArray.sort(function(a , b){return b - a});
        document.getElementById("Largest").innerHTML = someArray [0];
    };
    var largestFloat = function (){ //used as example of show closure
    };
    var testArray = []; //used as example to show closure - cannot be accessed
    
    //Assignment 2
    var detectBrowser = function (){
    var uagent = navigator.userAgent.toLowerCase();
    var browser =  {
        safari: /safari/.test(uagent) && !/chrome/.test(uagent),
        firefox: /firefox/.test(uagent),
        chrome : /chrome/.test(uagent),
        ie : /msie/.test(uagent),
        opera : /opera/.test(uagent),
        version: ""
    };
    for (var x in browser){
        if (browser[x]){
            document.getElementById("Assignment2Answer").innerHTML = "Browser: " + x; 
            }          
        }
    };
    
    //Assignment 3
    var reverseArray = function (someArray){
    document.getElementById("3Array").innerHTML = someArray;
    document.getElementById("3RArray").innerHTML = someArray.reverse();
};     
 //Assignment 5
/*Object.prototype.valuesToArray = function(){     
        var newArray = [];
        for (var y in this){
            if(this.hasOwnProperty(y)){
                newArray.push(this[y]);
            }    
        }
        document.getElementById("objValues").innerHTML= newArray;
    };   
*/
    //Assignment 6
    $(document).ready(function(){
        $("#assignment6").mouseenter(function(){
            $(this).text($("assignment6change").text());
        });
    });

    return {
        largestInt: largestInt,
        largestFloat: largestFloat,
        detectBrowser: detectBrowser,
        reverseArray: reverseArray
    };
})();


