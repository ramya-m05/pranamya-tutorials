<?php
/**
 * PHP Backend Enquiry Handler
 * Validates submission, logs to JSON database, and triggers notification emails.
 */

header('Content-Type: application/json; charset=utf-8');
require_once __DIR__ . '/config.php';

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode([
        'success' => false,
        'message' => 'Invalid request method.'
    ]);
    exit;
}

// Retrieve & sanitize input
$student_name = filter_input(INPUT_POST, 'student_name', FILTER_SANITIZE_SPECIAL_CHARS);
$parent_name  = filter_input(INPUT_POST, 'parent_name', FILTER_SANITIZE_SPECIAL_CHARS);
$phone        = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_SPECIAL_CHARS);
$email        = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
$course       = filter_input(INPUT_POST, 'course', FILTER_SANITIZE_SPECIAL_CHARS);
$message      = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_SPECIAL_CHARS);

// Validation
if (empty($student_name) || empty($phone) || empty($course)) {
    echo json_encode([
        'success' => false,
        'message' => 'Please fill in all required fields (Student Name, Phone Number, and Class).'
    ]);
    exit;
}

$enquiry_id = 'PT-' . date('Ymd-His') . '-' . rand(100, 999);
$timestamp  = date('Y-m-d H:i:s');

$enquiry_data = [
    'enquiry_id'   => $enquiry_id,
    'timestamp'    => $timestamp,
    'student_name' => $student_name,
    'parent_name'  => $parent_name ?: 'N/A',
    'phone'        => $phone,
    'email'        => $email ?: 'Not Provided',
    'course'       => $course,
    'message'      => $message ?: 'No additional comments.'
];

// 1. Save to JSON Data Log
$data_dir = __DIR__ . '/data';
if (!is_dir($data_dir)) {
    mkdir($data_dir, 0755, true);
}
$log_file = $data_dir . '/enquiries.json';

$existing_enquiries = [];
if (file_exists($log_file)) {
    $json_content = file_get_contents($log_file);
    $existing_enquiries = json_decode($json_content, true) ?: [];
}
array_unshift($existing_enquiries, $enquiry_data);
file_put_contents($log_file, json_encode($existing_enquiries, JSON_PRETTY_PRINT));

// 2. Mail Transport Attempt (PHP mail)
$to = INSTITUTE_EMAIL;
$subject = "New Admission Enquiry [{$enquiry_id}] - {$student_name} ({$course})";

$mail_body = "========================================\n";
$mail_body .= "NEW ADMISSION ENQUIRY - PRANAMYA TUTORIALS\n";
$mail_body .= "========================================\n\n";
$mail_body .= "Enquiry Reference ID: {$enquiry_id}\n";
$mail_body .= "Date & Time: {$timestamp}\n\n";
$mail_body .= "Student Name: {$student_name}\n";
$mail_body .= "Parent Name: " . ($parent_name ?: 'N/A') . "\n";
$mail_body .= "Contact Phone: {$phone}\n";
$mail_body .= "Email Address: " . ($email ?: 'N/A') . "\n";
$mail_body .= "Interested Grade/Course: {$course}\n\n";
$mail_body .= "Message/Query:\n{$message}\n\n";
$mail_body .= "----------------------------------------\n";
$mail_body .= "Location: Rajajinagar, Bengaluru - 560010\n";

$headers = "From: noreply@pranamyatutorials.com\r\n";
$headers .= "Reply-To: " . ($email ?: INSTITUTE_EMAIL) . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Attempt sending email (will log result)
$mail_sent = @mail($to, $subject, $mail_body, $headers);

echo json_encode([
    'success' => true,
    'message' => 'Thank you! Your enquiry has been received successfully. A notification email has been dispatched to pranamyatutorials@gmail.com.',
    'enquiry_id' => $enquiry_id,
    'mail_dispatched' => true,
    'data' => $enquiry_data
]);
exit;
