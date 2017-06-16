<html>
<head>
    <link rel="stylesheet" href="css/bootstrap.css">
    <title>Logout</title>
</head>

<body>
<div class="container">
    <div class="row text-center">
        <div class="col-md-12">
            <h1>Logout Successfully!</h1>
        </div>
    </div>

    <div class="row text-center">
        <div class="col-md-12">
            <a href="login.php" class="btn btn-info">Back to Login</a>
        </div>
    </div>
</div>

</body>

</html>


<?php
    session_start();
    $_SESSION = array();
    session_destroy();