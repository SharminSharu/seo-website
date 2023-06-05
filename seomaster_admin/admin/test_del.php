<?php
$con=new mysqli('localhost','root','','seo');
$id=$_GET['id'];
$query="delete from testimonial where id=".$id;
$con->query($query);
header('Location: test_list.php');