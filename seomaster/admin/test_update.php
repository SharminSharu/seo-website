<?php
$con=new mysqli('localhost','root','','seo');
$id=$_GET['id'];
$name=$_POST['name'];
$desi=$_POST['description'];
$pro=$_POST['profession'];

$file=$_FILES['photo']['name'];
if(move_uploaded_file($_FILES['photo']['tmp_name'],'./dist/assets/'.$file)){
$query="update testimonial set photo='$file', name='$name', description='$desi', profession='$pro' where id=".$id;}
else{
    $query="update testimonial set name='$name', description='$desi',profession='$pro' where id=".$id;
};
   

$con->query($query);
header('Location: test.php');
