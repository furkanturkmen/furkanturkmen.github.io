var text = "Currently working on a sideproject " + 
		"involving a web applicationfor a company that offers its services in the form of " + 
		"courses on various marketing strategies.";
var changeHiddenInShow = $('li.hidden-shown');
var spoiler = $('span.spoiler');
changeHiddenInShow.on("click", function() {
	
		$('span.spoiler').css({
			'text-shadow': 'none',
			'color': '#000',
			'filter': 'none'
		});
});
