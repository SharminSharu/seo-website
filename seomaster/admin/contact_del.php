<?php
$con=new mysqli('localhost','root','','seo');
$id=$_GET['id'];
$query="delete from contact where id=".$id;
$con->query($query);
header('Location: contact_list.php');