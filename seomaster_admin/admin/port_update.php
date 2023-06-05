<?php
$con=new mysqli('localhost','root','','seo');
$id=$_GET['id'];
$t_1=$_POST['title_1'];
$t_2=$_POST['title_2'];


$file=$_FILES['photo']['name'];
if(move_uploaded_file($_FILES['photo']['tmp_name'],'./dist/assets/'.$file)){
$query="update portfolio set photo='$file', title_1='$t_1',title_2='$t_2' where 
id=".$id;}
else{
    $query="update portfolio set  title_1='$t_1',title_2='$t_2'  where id=".$id;
};
   

$con->query($query);
header('Location: port.php');