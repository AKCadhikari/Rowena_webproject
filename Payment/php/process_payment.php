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

$billing_id = $_POST['billing_id'];
$card_holder = $_POST['card_holder'];
$card_number = $_POST['card_number'];
$save_card = isset($_POST['save_card']) ? 1 : 0;

if ($save_card) {
    $sql = "INSERT INTO payment_details (billing_id, card_holder, card_number) 
            VALUES ('$billing_id', '$card_holder', '$card_number')";
    if ($conn->query($sql) === TRUE) {
        echo "Card details saved successfully.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
} else {
    echo "Card details were not saved.";
}

$conn->close();
?>
