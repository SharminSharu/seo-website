<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers:*");

$con = new mysqli('localhost', 'root', '', 'seo');
$data=json_decode(file_get_contents('php://input'),true);
if (isset($data['email'])){
$con->query("INSERT INTO `send` (  `email`) VALUES ('".$data['email']."')");
}

// $data = $d->fetch_all(MYSQLI_ASSOC);
echo json_encode($data);