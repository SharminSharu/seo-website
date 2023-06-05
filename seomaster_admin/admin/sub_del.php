<?php
$con=new mysqli('localhost','root','','seo');
$id=$_GET['id'];
$query="delete from send where id=".$id;
$con->query($query);
header('Location: sub_list.php');