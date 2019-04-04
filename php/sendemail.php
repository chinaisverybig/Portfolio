#!/usr/local/bin/php
<?php
       // from the form
       $name = trim(strip_tags($_POST['name-input']));
       $email = trim(strip_tags($_POST['email-input']));
       $number = trim(strip_tags($_POST['phone-input']))
       $message = htmlentities($_POST['message-input']);

       // set here
       $subject = "Contact form submitted!";
       $to = 'tyl22@sfu.ca';

       $body = <<<HTML
$message
HTML;

       $headers = "From: $email\r\n";
       $headers .= "Content-type: text/html\r\n";

       // send the email
       mail($to, $subject, $body, $headers);

       // redirect afterwords, if needed
       header('Location: contact.html');
?>
