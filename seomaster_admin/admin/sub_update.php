<?php
$con=new mysqli('localhost','root','','seo');
$id=$_GET['id'];

$email = $_POST['email'];


// if(move_uploaded_file($_FILES['photo']['tmp_name'],'../assets/'.$file)){
// $query="update form set photo='$file', title_1='$t_1',title_2='$t_2',title_3='$t_3' where 
// id=".$id;}
// else{
//     $query="update form set title_1='$t_1',title_2='$t_2',title_3='$t_3' where id=".$id;
// };
   
$query="update send set email='$email' where id=".$id;
$con->query($query);
header('Location:subscription.php');