<?php
$con=new mysqli('localhost','root','','seo');
$id=$_GET['id'];

$title=$_POST['title'];
$description=$_POST['description'];
$logo = $_POST['logo'];


// if(move_uploaded_file($_FILES['photo']['tmp_name'],'../assets/'.$file)){
// $query="update form set photo='$file', title_1='$t_1',title_2='$t_2',title_3='$t_3' where 
// id=".$id;}
// else{
//     $query="update form set title_1='$t_1',title_2='$t_2',title_3='$t_3' where id=".$id;
// };
   
$query="update services set title='$title', description='$description', logo='$logo' where id=".$id;
$con->query($query);
header('Location: service.php');