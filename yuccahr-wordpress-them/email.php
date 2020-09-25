<?php

include_once 'include/phpmailer/phpmailer/src/PHPMailer.php';
include_once 'include/phpmailer/phpmailer/src/SMTP.php';
include_once 'include/phpmailer/phpmailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

if(isset($_POST["website"]) && $_POST["website"] == "") {

    // $mail = new PHPMailer(true);

    $data = [
        'name' => $_POST['firstname'] . ' ' . $_POST['lastname'],
        'phone' => $_POST['phone'],
        'email' => $_POST['email'],
        'message' => nl2br($_POST['message']),
    ];


    $message = '<table style="max-width:100%; font-family: Arial;">';
        foreach($data as $key => $val) {
            $message .= '<tr>';
            $message .= '<th style="text-transform: capitalize; font-weight: bold; text-align: left;">'.$key.'</th>';
            $message .= '<td>'.$val.'</td>';
            $message .= '</tr>';
        }
        $message .= '</table>';


    // send email

    // Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // More headers
    $headers .= 'From: <support@yuccahr.com>' . "\r\n";
    mail("support@yuccahr.com","Contactform support@yuccahr.com",$message, $headers);

//     try {

//         $mail->isSMTP();
//         $mail->Host         = 'smtp.hostnet.nl'; // your server name
//         $mail->SMTPAuth     = true;
//         $mail->Username     = 'hello@yucca.ai'; // your postbox username
//         $mail->Password     = 'JNF@yucca1'; // postbox password
//         $mail->SMTPSecure   =  PHPMailer::ENCRYPTION_SMTPS;
//         $mail->Port         = 587;         // or 25 or 587
//         $mail->setFrom('hello@yucca.ai'); // emailadress of the postbox above

//         $mail->addAddress('hello@yucca.ai'); // to whom should this mail be sent? probably mail@yuccahr.com?

//         /** no editing beyond this tortoise required
//          /*     _____     ____
//              /      \  |  o |
//             |        |/ ___\|
//             |_________/
//             |_|_| |_|_|
//          */


//         $mail->addReplyTo($data['email'], $data['name']);
//         $mail->isHTML(true);
//         $mail->CharSet = 'UTF-8';
//         $mail->Subject = 'Contactform yucca.ai';

//         $message = '<table style="max-width:100%; font-family: Arial;">';
//         foreach($data as $key => $val) {
//             $message .= '<tr>';
//             $message .= '<th style="text-transform: capitalize; font-weight: bold; text-align: left;">'.$key.'</th>';
//             $message .= '<td>'.$val.'</td>';
//             $message .= '</tr>';
//         }
//         $message .= '</table>';

//         $mail->Body = $message;

//         $mail->send();

//         echo 'success';

//     } catch(Exception $e) {

//         // for debugging //
//         // echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
//         http_response_code(400);
//         exit();

//     }

// } else {
//     http_response_code(400);
//     exit();
}

?>
