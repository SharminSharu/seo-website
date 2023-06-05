<?php
$con=new mysqli('localhost','root','','seo');
$id=$_GET['id'];
$query="delete from services where id=".$id;
$con->query($query);
header('Location: service_list.php');