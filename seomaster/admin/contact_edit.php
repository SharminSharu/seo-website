<?php
session_start();
if(!isset($_SESSION['username'])){
  header('Location: index.php');
}
?>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
<?php

    $con=new mysqli('localhost','root','','seo');
    $id=$_GET['id'];
    $query="SELECT * FROM contact WHERE id=".$id;
    $result=$con->query($query);
    $data=$result->fetch_assoc();

?>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>AdminLTE 3 | Starter</title>

  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="dist/css/adminlte.min.css">
  <link rel="stylesheet" href="plugins/summernote/summernote-bs4.min.css">
  
  
</head>
<body class="hold-transition sidebar-mini">
<div class="wrapper">

  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
   

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <!-- Navbar Search -->
      <li class="nav-item">
        <a class="nav-link" data-widget="navbar-search" href="#" role="button">
          <i class="fas fa-search"></i>
        </a>
        <div class="navbar-search-block">
          <form class="form-inline">
            <div class="input-group input-group-sm">
              <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
              <div class="input-group-append">
                <button class="btn btn-navbar" type="submit">
                  <i class="fas fa-search"></i>
                </button>
                <button class="btn btn-navbar" type="button" data-widget="navbar-search">
                  <i class="fas fa-times"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </li>

      
      <li class="nav-item">
        <a class="nav-link" data-widget="fullscreen" href="#" role="button">
          <i class="fas fa-expand-arrows-alt"></i>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
          <i class="fas fa-th-large"></i>
        </a>
      </li>
    </ul>
  </nav>
  <!-- /.navbar -->

  <?php
  require('menu.php');
  ?>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Starter Page</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Starter Page</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <!-- /.col-md-6 -->
          <div class="col-lg-12">
            

            <div class="card card-primary card-outline">
              <div class="card-header">
                <h5 class="m-0">Add Contact</h5>
              </div>
              <div class="card-body">
              <form action="contact_update.php?id=<?php echo $id ?>" method="post" enctype="multipart/form-data">
                <div class="card-body">
                <div class="row">
                <div class="col-6">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" name="first" class="form-control" id="exampleInputEmail1" placeholder="Enter  name"   value="<?php echo $data['name'] ?>" >
                    </div>
           
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="text" name="email" class="form-control" id="exampleInputEmail1" placeholder="Enter name"   value="<?php echo $data['email'] ?>"  >
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Subject</label>
                        <input type="text" name="subject" class="form-control" id="exampleInputEmail1" placeholder="Enter Subject"   value="<?php echo $data['subject'] ?>" >
                    </div>
                    
                    
              
                 
                    </div>
                    <div class="col-6">
                    <div class="form-group">
                        <label for="exampleInputPassword1">message</label>
                        <textarea class="summernote" name="msg"  value="<?php echo $data['msg'] ?>">Hello.. </textarea>
                    </div>
    
                  <div class="form-group">
                        <label for="exampleInputEmail1"></label>
                        <input type="submit" class="btn btn-primary btn-block" value="Submit">
                    </div>
                </div>
            </div>
                  
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  
                </div>
              </form>
              </div>
            </div>
          </div>
          <!-- /.col-md-6 -->
          
        </div>
        <!-- /.row -->
        <div class="card card-primary card-outline">
              <div class="card-header">
                <h5 class="m-0">Contact List</h5>
              </div>
              <div class="card-body">
              <div class="container">
                <form action="contact_update.php?id=<?php echo $id ?>" method="post" enctype="multipart/form-data">
                 <table class="table table-bordered">
             
                <tr>
                    <th>First Name </th>
                    <td><input type="text" name="first" value="<?php echo $data['first'] ?>" class="form-control"></td>
                </tr>
                <tr>
                    <th>last Name</th>
                    <td><input type="text" name="last" value="<?php echo $data['last'] ?>" class="form-control"></td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td><input type="text" name="email" value="<?php echo $data['email'] ?>" class="form-control"></td>
                </tr>
                
                <tr>
                <th>Message</th>
                    <textarea name="msg" class="summernote"><?php echo $data['msg'] ?></textarea>
                </tr>
        
         
                <tr>
                    <td>
                    <input type="submit" value="Save" class="btn btn-block btn-primary">
                    </td>
                </tr>
                </table>
                </form>
                </div>
              </div>
            </div>
          </div>
          <!-- /.col-md-6 -->
        </div>
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
<!-- REQUIRED SCRIPTS -->

<!-- jQuery -->
<script src="plugins/jquery/jquery.min.js"></script>
<!-- Bootstrap 4 -->
<script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- AdminLTE App -->
<script src="dist/js/adminlte.min.js"></script>
<script src="plugins/summernote/summernote-bs4.min.js"></script>
<script>
  $(function () {
    // Summernote
    $('.summernote').summernote()

    // CodeMirror
    CodeMirror.fromTextArea(document.getElementById("codeMirrorDemo"), {
      mode: "htmlmixed",
      theme: "monokai"
    });
  })
</script>
</body>
</html>
