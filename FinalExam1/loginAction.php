<?php
session_start();
$user_name = $_GET["user-name"];
$password = $_GET["password"];
if($user_name == "admin" && $password == "1234"){
    $_SESSION["user-name"] = "Admin";
    header("location:index.php");
}elseif($user_name == "atikom" && $password == "9876"){
    $_SESSION["user-name"] = "Atikom";
    header("location:index.php");
}else{
    header("location:loginError.php");
}