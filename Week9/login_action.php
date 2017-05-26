<?php
/**
 * Created by IntelliJ IDEA.
 * User: yyuue
 * Date: 2017/5/23
 * Time: 15:31
     */
    $user_name = $_POST["user-name"];
    $password = $_POST["password"];
    print_r($_POST);
    if($user_name == "admin" && $password == "1234"){
//        header("location:welcome.php");
    }else{
        echo "assaf";
    }