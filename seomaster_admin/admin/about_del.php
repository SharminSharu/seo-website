<?php
$con=new mysqli('localhost','root','','seo');
$id=$_GET['id'];
$query="delete from about where id=".$id;
$con->query($query);
header('Location: about.php');