<?php
	
$username="root";
$password="";
$database="product";

$mysqli = new mysqli("localhost", $username, $password, $database);

$mysqli->select_db($database) or die( "Unable to select database");
echo " you are connected";
	
$mysqli->close();

?>