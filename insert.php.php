
					//Code  register to the data base



<?php
$username = filter_input(INPUT_POST, 'username');
$password = filter_input(INPUT_POST, 'password');
if (!empty($username)){
if (!empty($password)){
$host = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "cake";
// Create connection
$conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);


if (mysqli_connect_error()){
die('Connect Error ('. mysqli_connect_errno() .') '
. mysqli_connect_error());
}
else{
$sql = "INSERT INTO register (username, password, email, gender, phone, address, postcode)
values ('$username','$password','$email', '$gender', '$phone', ' $address,'$postcode')";
if ($conn->query($sql)){
echo "New record is inserted sucessfully";
}
else{
echo "Error: ". $sql ."
". $conn->error;
}
$conn->close();
}
}
else{
echo "Password should not be empty";
die();
}
}
else{
echo "Username should not be empty";
die();
}
else{
echo "email should not be empty";
die();
}
else{
echo " address should not be empty";
die();
}
else{
echo "phone  should not be empty";
die();
}
else{
echo "postcode should not be empty";
die();
}
?>