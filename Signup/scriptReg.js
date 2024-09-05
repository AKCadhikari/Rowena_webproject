function validateForm(event){
    event.preventDefault();

    var fname = document.forms["regForm"]["fname"].value;
    var lname = document.forms["regForm"]["lname"].value;
    var email = document.forms["regForm"]["email"].value;
    var password = document.forms["regForm"]["password"].value;
    var retypepassword = document.forms["regForm"]["retypepassword"].value;
    var gender = document.forms["regForm"]["gender"].value;
    var terms = document.forms["regForm"]["terms"].checked;

    if(fname===""|| lname===""|| email===""||password==="" ||retypepassword===""||gender===""){
        alert("Please fill out the form completely");
    }

    var namePattern= /^[A-Za-z]+$/;
    if(!namePattern.test(fname)||!namePattern.test(lname)){
        alert("First name & last name must contain only letters");
        return false;
    }

    var emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)){
        alert("Please enter a valid email address");
        return false;
    }

    var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)){
        alert("Password must be at least 8 characters long and inlcude letters,digits and symbols");
        return false;
    }

    if (password!==retypepassword){
        alert("Passwords do not match");
        return false;
    }

    if(!gender){
        alert("Gender not selected");
        return false;
    }

    if(!terms){
        alert("You must agree to the terms and conditions");
        return false;
    }

    alert("Registration successful ! Now login to your account");
    window.location.href="login.html";
    return true;

}