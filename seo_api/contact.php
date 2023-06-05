<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers:*");

$con = new mysqli('localhost', 'root', '', 'seo');
$data=json_decode(file_get_contents('php://input'),true);
if (isset($data['name'])){
$con->query("INSERT INTO `contact` ( `name`, `email`, `subject`, `msg`) VALUES ('".$data['name']."', '".$data['email']."', '".$data['subject']."', '".$data['msg']."')");
}

// $data = $d->fetch_all(MYSQLI_ASSOC);
echo json_encode($data);