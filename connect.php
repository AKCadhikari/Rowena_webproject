<?php 
$Firstname = $_POST['fname'];
$Lastname = $_POST['lname'];
$Email = $_POST['email'];
$Gender = $_POST['gender'];
$Password = $_POST['password'];
$Retypepassword = $_POST['retypepassword'];

// Check if passwords match
if ($Password !== $Retypepassword) {
    die('Passwords do not match.');
}

// Create connection
$conn = new mysqli('localhost', 'root', '', 'loging_details');

// Check connection
if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
} else {
    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO registration (Firstname, Lastname, Gender, Email, Password) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $Firstname, $Lastname, $Gender, $Email, $Password);

    // Execute statement
    $stmt->execute();

    echo "Registration successful";

    // Close statement and connection
    $stmt->close();
    $conn->close();
}
?>
