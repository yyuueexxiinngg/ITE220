<?php
/**
 * Created by IntelliJ IDEA.
 * User: yyuueexxiinngg
 * Date: 2017/5/23
 * Time: 14:55
 */
    session_start();
    if(!isset($_SESSION["count"])){
        $_SESSION["count"] = 0;
    }else{
        $_SESSION["count"]++;
    };
    echo "Count is ".$_SESSION["count"];
    echo "<br />";
    echo "<a href='clear_session.php'>Clear Session</a>";
