<?php
/**
 * Created by IntelliJ IDEA.
 * User: yyuueexxiinngg
 * Date: 2017/5/23
 * Time: 14:55
 */
    session_start();
    $_SESSION = array();
    session_destroy();
    echo "<br />";
    echo "<a href='session_test.php'>Back</a>";