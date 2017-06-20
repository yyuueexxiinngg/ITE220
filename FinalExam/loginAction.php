<?php
session_start();
$id = $_POST["ID"];

if(is_numeric($id) && strlen($id)==9){
    $_SESSION["id"] = $id;
    header("location:welcome.php");
}else{
    header("location:loginError.php");
}