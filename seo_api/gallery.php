<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers:*");

$con = new mysqli('localhost', 'root', '', 'seo');
// $d = $con->query('select * from head order by id desc');
$d = $con->query('select * from gallery');
$data = $d->fetch_all(MYSQLI_ASSOC);
echo json_encode($data);