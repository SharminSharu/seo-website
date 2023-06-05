<?php
$con=new mysqli('localhost','root','','seo');
$id=$_GET['id'];
$t=$_POST['title'];
$p_1=$_POST['point_1'];

$p_2=$_POST['point_2'];
$p_3=$_POST['point_3'];
$p_4=$_POST['point_4'];

$des=$_POST['description'];

$file=$_FILES['photo']['name'];
if(move_uploaded_file($_FILES['photo']['tmp_name'],'./dist/assets/'.$file)){
$query="update about set photo='$file', title ='$t', point_1='$t_1', point_2='$t_2',point_3='$t_3', point_4='$t_4', description='$des' where 
id=".$id;}
else{
    $query="update about set title ='$t', point_1='$t_1', point_2='$t_2',point_3='$t_3', point_4='$t_4', description='$des' where id=".$id;
};
   

$con->query($query);
header('Location: about.php');
