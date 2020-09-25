<?php

function console_log( $data ){
  echo '<script>';
  echo 'console.log('. json_encode( $data ) .')';
  echo '</script>';
}

$server = "localhost";
$dbName = "hpnffsqg0";
$dbPass = "#yuccaHR20!";
$dbUser = "nemvg0fpff";
$tableName = "sign_up";

// $server = "mysql1440int.cp.hostnet.nl";
// $dbName = "db354020_customers";
// $dbPass = "yuccaHR20#";
// $dbUser = "u354020_yuccaHR";


if($_POST['name'] && $_POST['email'] && $_POST['type']) {
   
    $conn = new mysqli($server, $dbUser, $dbPass, $dbName);
    //console_log($_POST['email']);
    // var_dump($_POST['email']);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    $sql = "INSERT INTO sign_up (name, email, type) VALUES ('".$_POST['name']."','".$_POST['email']."',".$_POST['type'].")";
    if ($conn->query($sql) === TRUE) {
    //    
    
    echo "New record created successfully";
    //     $message = '<table style="max-width:100%; font-family: Arial;">';
    //      $message .= '<tr>';
    //      $message .= '<th style="text-transform: capitalize; font-weight: bold; text-align: left;">Name</th>';
    //      $message .= '<td>'.$_POST["name"].'</td>';
    //      $message .= '</tr>'
    //      $message .= '<tr>';
    //      $message .= '<th style="text-transform: capitalize; font-weight: bold; text-align: left;">Email</th>';
    //      $message .= '<td>'.$_POST["email"].'</td>';
    //      $message .= '</tr>'
    //     $message .= '</table>';


      $message = "Thank you for signing up. <br>We look forward to starting the beta test with you. We’ll let you know soon about our beta version next month in August - stay tuned. <br>If you have any questions, please contact: florian.baum@yuccahr.com.";
    // // send email

    // // Always set content-type when sending HTML email
      $headers = "MIME-Version: 1.0" . "\r\n";
      $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // // More headers
      $headers .= "From: <florian.baum@yuccahr.com>" . "\r\n";
      mail($_POST['email'], "yuccaHR Beta Signup", $message, $headers);

    } else {
         echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}


// if ( isset($_GET['name']) && isset($_GET['email']) && isset($_GET['type']) ) {
     
//     $name = $_GET['name'];
//     $email = $_GET['email'];
//     $type = $_GET['type'];

//     console_log("${$name} - ${$email} - ${$type}");
// //     // $conn = new mysqli($server, $username, $password, $dbName);
// }






// $sql = "INSERT INTO MyGuests (name, email, type)
// VALUES ('John', 'Doe', 'john@example.com')";

// if ($conn->query($sql) === TRUE) {
//   echo "New record created successfully";
// } else {
//   echo "Error: " . $sql . "<br>" . $conn->error;
// }

// $conn->close();




// console_log($_POST['data']);


?>
