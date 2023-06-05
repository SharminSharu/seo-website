<?php
session_start();
if(!isset($_SESSION['username'])){
  header('Location: index.php');
}
$db=new mysqli('localhost','root','','seo');
$port=$db->query('select * from portfolio order by id desc');
if(isset($_POST['title_1'])){

    $t_1=$_POST['title_1'];
    $t_2=$_POST['title_2'];
    
    $file=$_FILES['photo']['name'];
    move_uploaded_file($_FILES['photo']['tmp_name'],'./dist/assets/'.$file);
   
    $query="INSERT INTO portfolio (`id`, `title_1`,`title_2`, `photo`) VALUES (NULL, '$file','$t_1', '$t_2')";
    $db->query($query);
    header('Location:port.php');
}

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
    
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
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
              <div class="card-header bg-primary">
                <h3 class="m-0">Add Portfolio</h3>
                <a href="port_list.php" class="btn btn-danger btn-xl" style="margin-left:89%">
              Port_List</a>
              </div>
              <div class="card-body">
              <form action="" method="post" enctype="multipart/form-data">
                <div class="card-body">
                <div class="row">
                <div class="col-6">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Title_1</label>
                        <input type="text" name="title_1" class="form-control" id="exampleInputEmail1" placeholder="Enter title_1" >
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Title_2</label>
                        <input type="text" name="title_2" class="form-control" id="exampleInputEmail1" placeholder="Enter title_2" >
                    </div>
             
                    
              
                 
                    </div>
                    <div class="col-6">
                    <!-- <div class="form-group">
                        <label for="exampleInputEmail1">Point_3</label>
                        <input type="text" name="point_3" class="form-control" id="exampleInputEmail1" placeholder="Enter point_3" >
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Point_4</label>
                        <input type="text" name="point_4" class="form-control" id="exampleInputEmail1" placeholder="Enter point_4" >
                    </div> -->
                    
                  <div class="form-group">
                    <label for="exampleInputFile">Photo</label>
                    <div class="input-group">
                      <div class="custom-file">
                        <input type="file" name="photo" class="custom-file-input" id="exampleInputFile">
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
        <!-- <div class="card card-primary card-outline">
              <div class="card-header bg-primary">
                <h4 class="m-0">Portfolio List</h4>
              </div>
              <div class="card-body ">
                <table class="table table-bordered">
                    <tr>
                        <th>SL</th>
                        <th>Title_1</th>
                        <th>Title_2</th>
                      
              
                      
                    
                        <th>Photo</th>
                        <th></th>
                    </tr>
                    <?php $i=0; while($data=$port->fetch_assoc()){ ?>
                        <tr>
                            <td><?php echo ++$i ?></td>
                            <td><?php echo $data['title_1'] ?></td>
                            <td><?php echo $data['title_2'] ?></td>
             
                        
                          
                            <td><img src="./dist/assets/<?php echo $data['photo'] ?>" width="100" height="80"/></td>
                            

                               <td>
    
                                <a href="port_edit.php?id=<?php echo $data['id'] ?>" class="btn btn-xs btn-success">
                                <i class="fa fa-edit" style="color:white;"></i>
                            </a>   
                                <a href="port_del.php?id=<?php echo $data['id'] ?>" class="btn btn-xs btn-danger"
                                onclick="return confirm('Are you sure?')">
                                <i class="fa fa-trash-o" style="color:white"></i></a>
                            </td>
                        </tr>
                        <?php } ?>
                </table>
              </div>
            </div>
      </div> -->
      <!-- /.container-fluid -->
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
    <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
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
