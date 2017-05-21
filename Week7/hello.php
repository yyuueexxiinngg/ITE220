<html>
    <head>
        <title>Calendar</title>
    </head>
    <body>
        <table>
            <?php
            /**
             * Created by IntelliJ IDEA.
             * User: yyuueexxiinngg
             * Date: 2017/5/21
             * Time: 20:32
             */
            echo "<tr><th>'S'</th><th>'M'</th><th>'T'</th><th>'W'</th><th>'T'</th><th>'F'</th><th>'S'</th></tr><tr>";
            for($i=1;$i<=31;$i++){
                if ($i==7){
                    echo "<th>".$i."..</th></tr><tr>";
                }elseif ($i<=9){
                    echo "<th>".$i."..</th>";
                } elseif($i%7==0){
                    echo "<th>".$i."</th></tr><tr>";
                }else {
                    echo "<th>".$i."</th>";
                }
            }
            ?>
        </table>
    </body>
</html>