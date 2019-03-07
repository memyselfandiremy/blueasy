<?php

if (isset($_POST)) {
    if(!preg_match('#[a-z0-9-_."]{2,}#', $_POST['name'])){
        echo json_encode("Error, your name is incorrect.");
    }
    elseif(!preg_match('#^[a-z0-9-_.]{3,}@[a-z0-9-_.]{2,}\.[a-z0-9-_.]{2,}$#i', $_POST['email'])){
        echo json_encode("Error, your email is incorrect.");
    }
    elseif(empty($_POST['message'])){
        echo json_encode("Error, you have to write a message.");
    }
    else{ 
        echo json_encode("Thank you for your message, ".$_POST['name'].".");
    }}

else{
        echo json_encode("Error. All the fields are required.");
    }
?>