<?php
/**
 * Pranamya Tutorials - PHP Backend Enquiry Handler
 *
 * Validates enquiry submissions, saves them to a JSON file,
 * submits the enquiry to Google Forms, and attempts email notification.
 */

header('Content-Type: application/json; charset=utf-8');

require_once __DIR__ . '/config.php';


// --------------------------------------------------
// 1. Only accept POST requests
// --------------------------------------------------

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);

    echo json_encode([
        'success' => false,
        'message' => 'Invalid request method.'
    ]);

    exit;
}


// --------------------------------------------------
// 2. Retrieve form data
// --------------------------------------------------

$student_name = trim($_POST['student_name'] ?? '');
$parent_name  = trim($_POST['parent_name'] ?? '');
$phone        = trim($_POST['phone'] ?? '');
$email        = trim($_POST['email'] ?? '');
$course       = trim($_POST['course'] ?? '');
$message      = trim($_POST['message'] ?? '');


// --------------------------------------------------
// 3. Validate required fields
// --------------------------------------------------

if ($student_name === '' || $phone === '' || $course === '') {
    http_response_code(400);

    echo json_encode([
        'success' => false,
        'message' => 'Please fill in all required fields (Student Name, Phone Number, and Class).'
    ]);

    exit;
}


// --------------------------------------------------
// 4. Validate phone number
// --------------------------------------------------

// Must contain exactly 10 digits
if (!preg_match('/^[0-9]{10}$/', $phone)) {
    http_response_code(400);

    echo json_encode([
        'success' => false,
        'message' => 'Please enter a valid 10-digit phone number.'
    ]);

    exit;
}


// --------------------------------------------------
// 5. Validate email if provided
// --------------------------------------------------

if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);

    echo json_encode([
        'success' => false,
        'message' => 'Please enter a valid email address.'
    ]);

    exit;
}


// --------------------------------------------------
// 6. Generate enquiry ID
// --------------------------------------------------

$enquiry_id = 'PT-' . date('Ymd-His') . '-' . random_int(100, 999);

$timestamp = date('Y-m-d H:i:s');


// --------------------------------------------------
// 7. Prepare enquiry data
// --------------------------------------------------

$enquiry_data = [
    'enquiry_id'   => $enquiry_id,
    'timestamp'    => $timestamp,
    'student_name' => $student_name,
    'parent_name'  => $parent_name !== '' ? $parent_name : 'N/A',
    'phone'        => $phone,
    'email'        => $email !== '' ? $email : 'Not Provided',
    'course'       => $course,
    'message'      => $message !== '' ? $message : 'No additional comments.'
];


// --------------------------------------------------
// 8. Save enquiry to JSON
// --------------------------------------------------

$data_dir = __DIR__ . '/data';

if (!is_dir($data_dir)) {
    if (!mkdir($data_dir, 0755, true) && !is_dir($data_dir)) {
        http_response_code(500);

        echo json_encode([
            'success' => false,
            'message' => 'Unable to create enquiry data directory.'
        ]);

        exit;
    }
}

$log_file = $data_dir . '/enquiries.json';

$existing_enquiries = [];

if (file_exists($log_file)) {
    $json_content = file_get_contents($log_file);

    if ($json_content !== false && trim($json_content) !== '') {
        $decoded = json_decode($json_content, true);

        if (is_array($decoded)) {
            $existing_enquiries = $decoded;
        }
    }
}

array_unshift($existing_enquiries, $enquiry_data);

$json_result = file_put_contents(
    $log_file,
    json_encode(
        $existing_enquiries,
        JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE
    ),
    LOCK_EX
);

if ($json_result === false) {
    http_response_code(500);

    echo json_encode([
        'success' => false,
        'message' => 'Unable to save the enquiry.'
    ]);

    exit;
}


// --------------------------------------------------
// 9. Submit to Google Form via Apps Script Web App
// --------------------------------------------------

$google_script_url = defined('GOOGLE_FORM_WEB_APP_URL')
    ? GOOGLE_FORM_WEB_APP_URL
    : '';

$google_success = false;
$google_http_code = 0;
$google_error = '';
$google_errno = 0;
$google_response = '';

if (!empty($google_script_url)) {

    $google_curl = curl_init($google_script_url);

    curl_setopt_array($google_curl, [
        CURLOPT_POST => true,

        CURLOPT_POSTFIELDS => json_encode(
            $enquiry_data,
            JSON_UNESCAPED_UNICODE
        ),

        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_FOLLOWLOCATION => true,

        CURLOPT_TIMEOUT => 15,
        CURLOPT_CONNECTTIMEOUT => 5,

        CURLOPT_HTTPHEADER => [
            'Content-Type: application/json'
        ]
    ]);

    $google_response = curl_exec($google_curl);

    $google_error = curl_error($google_curl);

    $google_errno = curl_errno($google_curl);

    $google_http_code = curl_getinfo(
        $google_curl,
        CURLINFO_HTTP_CODE
    );

    curl_close($google_curl);


    // Check HTTP response
    if (
        $google_response !== false &&
        empty($google_error) &&
        $google_http_code >= 200 &&
        $google_http_code < 300
    ) {

        // Apps Script should return JSON
        $google_result = json_decode(
            $google_response,
            true
        );

        if (
            is_array($google_result) &&
            isset($google_result['success']) &&
            $google_result['success'] === true
        ) {
            $google_success = true;
        }
    }
}

// --------------------------------------------------
// 10. Send notification email
// --------------------------------------------------

$to = INSTITUTE_EMAIL;

$subject =
    "New Admission Enquiry [{$enquiry_id}] - {$student_name} ({$course})";

$mail_body  = "========================================\n";
$mail_body .= "NEW ADMISSION ENQUIRY - PRANAMYA TUTORIALS\n";
$mail_body .= "========================================\n\n";

$mail_body .= "Enquiry Reference ID: {$enquiry_id}\n";
$mail_body .= "Date & Time: {$timestamp}\n\n";

$mail_body .= "Student Name: {$student_name}\n";
$mail_body .= "Parent Name: " . ($parent_name !== '' ? $parent_name : 'N/A') . "\n";
$mail_body .= "Contact Phone: {$phone}\n";
$mail_body .= "Email Address: " . ($email !== '' ? $email : 'N/A') . "\n";
$mail_body .= "Interested Grade/Course: {$course}\n\n";

$mail_body .= "Message/Query:\n";
$mail_body .= ($message !== '' ? $message : 'No additional comments.') . "\n\n";

$mail_body .= "----------------------------------------\n";
$mail_body .= "Location: Rajajinagar, Bengaluru - 560010\n";

$headers  = "From: noreply@pranamyatutorials.com\r\n";
$headers .= "Reply-To: " . ($email !== '' ? $email : INSTITUTE_EMAIL) . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();
$headers .= "\r\n";

$mail_sent = @mail(
    $to,
    $subject,
    $mail_body,
    $headers
);


// --------------------------------------------------
// 11. Return response to JavaScript
// --------------------------------------------------

// The JSON file is the primary storage.
// Google Forms and email are secondary integrations.
echo json_encode([
    'success' => true,
    'message' => 'Enquiry received successfully.',

    'enquiry_id' => $enquiry_id,

    'google_form_submitted' => $google_success,

    'google_http_code' => $google_http_code,

    'google_error' => $google_error,

    'google_errno' => $google_errno,

    'google_response' => $google_response,

    'data' => $enquiry_data
]);

exit;
?>