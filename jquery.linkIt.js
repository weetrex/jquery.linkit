/*
* Name:    LinkIt
* Author:  weeTrex
* Version: 0.1.0
* License: MIT
*/

(function($){
	$.fn.linkIt = function(options){
		//default settings
		var settings = $.extend({
			href: 		null,
			text: 		null,
			target: 	"_self"
		}, options);

		//validation for href
		if(settings.href == null){
			console.log("You need an href option for linkIt to work.");
			return this;
		}

		//runs function for each object plugin is attached to
		return this.each(function(){
			var object = $(this);

			//check for text
			if(settings.text == null){
				//set to object's text
				settings.text = object.text();
			}

			//creates link	
			object.wrap("<a href='" + settings.href + "' target='" + settings.target + "'></a>").text(settings.text);
		});
	}
}(jQuery));