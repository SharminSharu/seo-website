<?php
$con=new mysqli('localhost','root','','seo');
$id=$_GET['id'];
$query="delete from portfolio where id=".$id;
$con->query($query);
header('Location: port_list.php');