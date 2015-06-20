// JavaScript Document
$(document).ready(function(e) {	
document.addEventListener("deviceready",function() {
var data = [
				{
					"title": "Book title 1",
					"author": "Name1 Surname1"
				},
				{
					"title": "Book title 2",
					"author": "Name2 Surname2"
				},
				{
					"title": "Book title 3",
					"author": "Name3 Surname3"
				},
				{
					"title": "Book title 4",
					"author": "Name4 Surname4"
				}
			];
			
            // prepare CSV data
			var csvData = new Array();
			csvData.push('"Book title","Author"');
			data.forEach(function(item, index, array) {
				csvData.push('"' + item.title + '","' + item.author + '"');
			});
			
			// download stuff
			var fileName = "data.csv";
			var buffer = csvData.join("\n");
			var blob = new Blob([buffer], {
				"type": "text/csv;charset=utf8;"			
			});
			var link = document.createElement("a");
			
			if(link.download !== undefined) { // feature detection
				// Browsers that support HTML5 download attribute
				link.setAttribute("href", window.URL.createObjectURL(blob));
				link.setAttribute("download", fileName);
			}
			else if(navigator.msSaveBlob) { // IE 10+
				navigator.msSaveBlob(blob, fileName);
			}
			else { 
				// it needs to implement server side export
				link.setAttribute("href", "http://www.example.com/export");
			}
			link.innerHTML = "Export to CSV";
			$('#liga').html(link);
});
});