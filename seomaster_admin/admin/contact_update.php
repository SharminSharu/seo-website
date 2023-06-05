<?php
$con=new mysqli('localhost','root','','seo');
$id=$_GET['id'];

$name=$_POST['name'];
$subject=$_POST['subject'];
$email = $_POST['email'];
$msg=$_POST['msg'];

// if(move_uploaded_file($_FILES['photo']['tmp_name'],'../assets/'.$file)){
// $query="update form set photo='$file', title_1='$t_1',title_2='$t_2',title_3='$t_3' where 
// id=".$id;}
// else{
//     $query="update form set title_1='$t_1',title_2='$t_2',title_3='$t_3' where id=".$id;
// };
   
$query="update contact set name='$name', subject='$subject',email='$email', msg='$msg' where id=".$id;
$con->query($query);
header('Location:contact.php');