<?php

$to = 'grantmcconnaughey@gmail.com';
$subject = "New Contact Email";

$headers  = "From: noreply@grantdev.com\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

$clean_name = strip_tags($_POST["name"]);
$clean_email = strip_tags($_POST["contact_email"]);
$clean_detail = strip_tags($_POST["detail"]);

$message  = "<html><body>";
$message .= "<h1>Message submitted from GrantDev.com</h1>";
$message .= "<p><strong>Name:</strong> $clean_name</p>";
$message .= "<p><strong>Email:</strong> $clean_email</p>";
$message .= "<p><strong>Message:</strong> $clean_detail</p>";
$message .= "</body></html>";

// Send the email
$success = mail($to, $subject, $message, $headers);

if ( $success ) {
    // Redirect to the success page
    header("Location: http://grantdev.com/contact_success/");
} else {
    // Redirect to the failure page
    header("Location: http://grantdev.com/contact_failure/");
}

exit();

?>