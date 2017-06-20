<html>
<head>
    <link rel="stylesheet" href="css/bootstrap.css">
    <title>Welcome!</title>
</head>

<body>
<div class="container">
    <div class="row text-center">
        <div class="col-md-12">
            <h1>Welcome <?php
            session_start();
            echo $_SESSION["id"];
                ?>!</h1>
            <a href="logout.php" class="btn btn-info">Logout</a>
        </div>
    </div>
    <br/>
    <div class="row">

        <div class="col-md-4">
            <div id="card">
                <div class="front">
                    <img src="image/Bangkok_skytrain_sunset.jpg" class="img-responsive">
                </div>
                <div class="back">
                    <img src="image/Finding-Cheap-Flights-Phuket.jpg" class="img-responsive">
                </div>
            </div>
        </div>


        <div class="col-md-8">
            <input type="text" id="comment" placeholder="Tell me about Bangkok" class="form-control">
            <br/>
            <button class="btn btn-info" id="submitComment">Post</button>
            <br/>
            <div class="col-md-12" id="commentContainer">
            </div>
        </div>

    </div>

    <div class="row">
        <div class="col-md-12" id="commentContainer">
        </div>

    </div>
</div>

</body>
<script type="text/javascript" src="js/bangkok.js"></script>
<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
<script src="https://cdn.rawgit.com/nnattawat/flip/master/dist/jquery.flip.min.js"></script>
<script>$("#card").flip();</script>
</html>