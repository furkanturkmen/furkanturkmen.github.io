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

var dob = '19951212';
var year = Number(dob.substr(0, 4));
var month = Number(dob.substr(4, 2)) - 1;
var day = Number(dob.substr(6, 2));
var today = new Date();
var age = today.getFullYear() - year;
if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
  age--;
}
$("p span.age").html(age);
