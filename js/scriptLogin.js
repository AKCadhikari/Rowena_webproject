function validateForm(event){
    event.preventDefault();

    var email = document.forms["loginForm"]["email"].value;
    var password = document.forms["loginForm"]["password"].value;

    if (email===""){
        alert("Please enter your email");
        return false;
    }

    var emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)){
        alert("Please enter a valid email address");
        return false;
    }

    if (password === "") {
        alert("Please enter your password.");
        return false;
    }

    var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
        alert("Password must be at least 8 characters long and include letters, digits, and symbols.");
        return false;
    }

    alert("Login Successful !");
    return true;


}