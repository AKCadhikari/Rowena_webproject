<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "rowena_payment";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$full_name = $_POST['full_name'];
$email = $_POST['email'];
$address = $_POST['address'];
$city = $_POST['city'];
$state = $_POST['state'];
$postal_code = $_POST['postal_code'];
$payment_method = $_POST['payment_method'];

$sql = "INSERT INTO billing_details (full_name, email, address, city, state, postal_code, payment_method) 
        VALUES ('$full_name', '$email', '$address', '$city', '$state', '$postal_code', '$payment_method')";

if ($conn->query($sql) === TRUE) {
    $billing_id = $conn->insert_id;
    header("Location: p-portal.html?billing_id=$billing_id");
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
