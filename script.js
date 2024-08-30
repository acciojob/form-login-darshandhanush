function getFormvalue(event) {
	event.preventDefault();
   	var name=document.getElementById('fname').value;
	var last=document.getElementById('lname').value;

	alert(name +" "+ last)
	
}

