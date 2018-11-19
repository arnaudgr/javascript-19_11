// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
// var array = [1,2,3,4]

// function my_max(array) {

// 	alert(Math.max(...array))
// };

// my_max(array)

// var string = "coucou", i=0, j=0;

// function vowel_count(string) {

// 	for (i=0; i<string.length; i+=1) {

// 			if (string[i] == "a" || 
// 				string[i] == "e" || 
// 				string[i] == "i" ||
// 				string[i] == "e" ||
// 				string[i] == "o" ||
// 				string[i] == "u") {

// 				j+=1
// 			} 

			
// 	}
// 	alert(j)
// }
// vowel_count("coucou")
// 

var string2 = "Bonjour monde";

function reverse(string2) {
var word_reverse = string2.split('').reverse();
var array = [];
// for (i=0; i<word_reverse.length; i+=1) {
	
// 	var char_reverse = word_reverse[i].split('').reverse();
// 		console.log (char_reverse);
// 	array[i] = char_reverse;

// }
	var new_string = word_reverse.join("");
	alert(new_string);

}

// function reverse(string2) {

// 	alert(string2.reverse); 
// }


reverse(string2)

