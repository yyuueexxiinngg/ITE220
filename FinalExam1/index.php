
<html>
<head>
    <link rel="stylesheet" href="css/bootstrap.css">
    <title>Welcome!</title>
</head>

<body>
<div class="container">
    <div class="row text-center">
        <div class="col-md-12">
            <h1>Stamford Network</h1>
        </div>
    </div>

    <div class="row">


        <div class="col-md-8">
            <form name="comment" method="get" action="">
                <input type="text" name="mind" placeholder="What's on your mind" class="form-control">
                <button class="btn btn-info" name="submit" type="submit" value="post" id="submitComment">Post</button>
            </form>
        </div>


        <div class="col-md-4">
            <h1>Hello,<?php
                session_start();
                echo $_SESSION["user-name"]?></h1>
            <a href="logout.php" class="btn btn-info">Logout</a>
        </div>
    </div>

    <div class="row">
        <div class="col-md-12" id="comment">
            <?php $fq = fopen("comment.ini","r+");
            while (!feof($fq)){
                echo fgets($fq)."<br />";
            };
            if ($_GET["mind"]!="") {
                $text = $_GET["mind"] . "\n";
                fwrite($fq, $text);
                fclose($fq);
            }
            ?>
        </div>

    </div>
</div>

</body>

<script type="text/javascript" src="js/moment.min.js"></script>
<script type="text/javascript" src="js/social.js"></script>
<script>
    ele = document.getElementById("submitComment");
    function express() {
        var time = moment().format('YYYYMMDDhmmss');
        location.href = "point.php?value=" + time;
    }
</script>
</html>


