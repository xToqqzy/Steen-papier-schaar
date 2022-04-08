<?php

require "conn.php";
/*Pak de gebruiker van het inlog.html formulier*/
$get_user = $conn->prepare("SELECT * FROM users WHERE username = :username");
$get_user->bindParam(":username", $_POST['username']);
$get_user->execute();
$user = $get_user->fetch();
$password = $_POST['password'];
//if (password_verify(ingevulde wachtwoord, wachtwoord van gebruiker uit database)) {
if (password_verify($password, $user['password'])) {
    setcookie("logged_in", true, time() + (86400 * 30), "/");
    header('Location: game.html');
} else {
  header('location:inlog.html');
}

