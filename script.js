function getFormvalue() {
    // Prevent the form from submitting (page reload)
    event.preventDefault();

    // Get the form element by its ID
    var form = document.getElementById("form1");

    // Get the values of the first name and last name
    var firstName = form.elements["fname"].value;
    var lastName = form.elements["lname"].value;

    // Display the values using an alert
    alert("First Name: " + firstName + "\nLast Name: " + lastName);
}

