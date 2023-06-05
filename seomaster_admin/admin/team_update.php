<?php
$con=new mysqli('localhost','root','','seo');
$id=$_GET['id'];
$name=$_POST['name'];
$desi=$_POST['designation'];

$file=$_FILES['photo']['name'];
if(move_uploaded_file($_FILES['photo']['tmp_name'],'./dist/assets/'.$file)){
$query="update team set photo='$file', name='$name', designation='$desi' where 
id=".$id;}
else{
    $query="update team set name='$name', designation='$desi' where id=".$id;
};
   

$con->query($query);
header('Location: team.php');
