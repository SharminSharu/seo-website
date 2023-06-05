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
    $query="SELECT * FROM about WHERE id=".$id;
    $result=$con->query($query);
    $data=$result->fetch_assoc();

?>



<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>AdminLTE 3 | Starter</title>

  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="dist/css/adminlte.min.css"><link rel="stylesheet" href="plugins/summernote/summernote-bs4.min.css">
  
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
                <h5 class="m-0">Add About</h5>
              </div>
              <div class="card-body">
              <form action="about_update.php?id=<?php echo $id ?>" method="post" enctype="multipart/form-data">
                <div class="card-body">
                <div class="row">
                <div class="col-6">
                <div class="form-group">
                        <label for="exampleInputEmail1">Title</label>
                        <input type="text" name="title" class="form-control" id="exampleInputEmail1" placeholder="Enter title"   value="<?php echo $data['title'] ?>"  >
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Description</label>
                        <input type="text" name="description" class="form-control" id="exampleInputEmail1" placeholder="Enter description"
                        value="<?php echo $data['description'] ?>"  >
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Point_1</label>
                        <input type="text" name="point_1" class="form-control" id="exampleInputEmail1" placeholder="Enter point_1" 
                        value="<?php echo $data['point_1'] ?>" >
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Point_2</label>
                        <input type="text" name="point_2" class="form-control" id="exampleInputEmail1" placeholder="Enter point_2"
                        value="<?php echo $data['point_2'] ?>" >
                    </div>
            
                 
                    </div>
                    <div class="col-6">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Point_3</label>
                        <input type="text" name="point_3" class="form-control" id="exampleInputEmail1" placeholder="Enter point_3" 
                        value="<?php echo $data['point_3'] ?>">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Point_4</label>
                        <input type="text" name="point_4" class="form-control" id="exampleInputEmail1" placeholder="Enter point_4"
                        value="<?php echo $data['point_4'] ?>" >
                    </div>
                    
                  <div class="form-group">
                    <label for="exampleInputFile">Photo</label>
                    <div class="input-group">
                      <div class="custom-file">
                        <input type="file" name="photo" class="custom-file-input" id="exampleInputFile"
                        value="<?php echo $data['photo'] ?>" >
                        <label class="custom-file-label" for="exampleInputFile">Choose file</label>
                      </div>
                      <div class="input-group-append">
                        <span class="input-group-text">Upload</span>
                      </div>
                    </div>
                  </div>
                
                  <div class="form-group">
                        <label for="exampleInputEmail1"></label>
                        <input type="submit" class="btn btn-primary btn-block" value="Save">
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
                <h5 class="m-0">About List</h5>
              </div>
                <div class="card-body">
              <div class="container">
                <form action="about_update.php?id=<?php echo $id ?>" method="post" enctype="multipart/form-data">
                 <table class="table table-bordered">
                 <tr>
                    <th>Photo</th>
                    <td><input type="file" name="photo" value="<?php echo $data['photo'] ?>" class="form-control"></td>
                </tr>
                <tr>
                    <th>Title</th>
                    <td><input type="text" name="title"   value="<?php echo $data['title'] ?>"class="form-control"></td>
                </tr>
                <tr>
                    <th>Point_1</th>
                    <td><input type="text" name="point_1"  
                     value="<?php echo $data['point_1'] ?>" class="form-control"></td>
                </tr>
                <tr>
                    <th>Point_2</th>
                    <td><input type="text" name="point_2"  
                     value="<?php echo $data['point_2'] ?>" class="form-control"></td>
                </tr><tr>
                    <th>Point_3</th>
                    <td><input type="text" name="point_3"  
                     value="<?php echo $data['point_3'] ?>" class="form-control"></td>
                </tr><tr>
                    <th>Point_4</th>
                    <td><input type="text" name="point_4"  
                     value="<?php echo $data['point_4'] ?>" class="form-control"></td>
                </tr>
                <tr>
                    <th>Description</th>
                    <td><input type="text" name="description" 
                    value="<?php echo $data['description'] ?>" class="form-control"></td>
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

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
    <div class="p-3">
      <h5>Title</h5>
      <p>Sidebar content</p>
    </div>
  </aside>
  <!-- /.control-sidebar -->

  <!-- Main Footer -->
  <footer class="main-footer">
    <!-- To the right -->
    <div class="float-right d-none d-sm-inline">
      Anything you want
    </div>
    <!-- Default to the left -->
    <strong>Copyright &copy;2022-2030</strong> All rights reserved.
  </footer>
</div>
<!-- ./wrapper -->

<!-- REQUIRED SCRIPTS -->

<!-- jQuery -->
<script src="plugins/jquery/jquery.min.js"></script>
<!-- Bootstrap 4 -->
<script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- AdminLTE App -->
<script src="dist/js/adminlte.min.js"></script>

</body>
</html>
