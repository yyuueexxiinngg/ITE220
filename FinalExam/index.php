<html>
<head>
    <link rel="stylesheet" href="css/bootstrap.css">
</head>

<body>
<div class="container">
    <div class="row">
        <div class="col-md-12 text-center">
            <h1>Hello</h1>
        </div>
    </div>

    <div class="row">
        <div class="col-md-8">
            <form action="loginAction.php" method="post">
                <input type="text" name="ID" placeholder="Enter student ID" class="form-control">
        </div>


        <div class="col-md-4">
                <button class="btn btn-block btn-info" type="submit">Login</button>

        </div>
        </form>
    </div>

    <div class="row text-center"> Student ID must be 9 numbers e.g. 216119911. Character is not allowed</div>

</div>
</body>
</html>