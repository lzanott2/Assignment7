$('button').click(function () {
	var inputValue1 = $('#inputName').val();
	localStorage.setItem("inputName", inputValue1);
	
	var inputValue2 = $('#inputColor').val();
	localStorage.setItem("inputColor", inputValue2);
	
	var inputName = localStorage.getItem("inputName");
	console.log(inputName);
	
	var inputColor = localStorage.getItem("inputColor");
	console.log(inputColor);
		
	$('#display').text($('#inputName').val());
	$('body').css('background-color', inputColor);

	inputColor = document.getElementById("colorPicker").style.backgroundColor;
});


//generates GUID
function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
	});
return uuid;
};


//jQuery to avoid using JS ".onclick"
//puts the GUID in the #generateUUID on the html page
//for some reason, the function has to go on the right-side of ".getElementByID()"
$('#generateUUID').click(function() {
	document.getElementById('uuid').innerHTML = generateUUID();
});


//GUID loads upon page load
document.getElementById('uuid').innerHTML = generateUUID();

