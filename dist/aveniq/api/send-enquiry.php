<?php
declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

function respond(int $status, array $body): void
{
    http_response_code($status);
    echo json_encode($body);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    respond(405, ['message' => 'Use the contact form to send an enquiry.']);
}

$contentLength = (int)($_SERVER['CONTENT_LENGTH'] ?? 0);
if ($contentLength > 16384) {
    respond(413, ['message' => 'Your enquiry is too large. Please shorten the project details and try again.']);
}

$input = json_decode(file_get_contents('php://input') ?: '', true);
if (!is_array($input)) {
    respond(400, ['message' => 'The enquiry could not be read. Please review the form and try again.']);
}

$website = $input['website'] ?? '';
if (!is_string($website)) {
    respond(400, ['message' => 'Please review the form fields and try again.']);
}
if (trim($website) !== '') {
    respond(200, ['success' => true, 'message' => 'Your enquiry was sent to Sales.']);
}

$fields = [];
foreach (['person' => 100, 'company' => 150, 'email' => 160, 'interest' => 100, 'message' => 3000] as $key => $limit) {
    $value = $input[$key] ?? '';
    if (!is_string($value)) {
        respond(400, ['message' => 'Please review the form fields and try again.']);
    }
    $fields[$key] = trim($value);
    preg_match_all('/./us', $fields[$key], $characters);
    if (count($characters[0]) > $limit) {
        respond(400, ['message' => 'One or more enquiry fields exceed the allowed length.']);
    }
}

if ($fields['person'] === '' || $fields['message'] === '' || !filter_var($fields['email'], FILTER_VALIDATE_EMAIL)) {
    respond(400, ['message' => 'Please provide your name, a valid email address, and project details.']);
}

$autoload = __DIR__ . '/vendor/autoload.php';
if (!is_file($autoload)) {
    error_log('Aveniq enquiry mailer is unavailable: run Composer install before deployment.');
    respond(503, ['message' => 'Enquiry email is not configured yet. Please try again later or contact sales@aveniqsolution.com.']);
}
require $autoload;

$username = getenv('SMTP_USERNAME');
$password = getenv('SMTP_PASSWORD');
if (!is_string($username) || $username === '' || !is_string($password) || $password === '') {
    error_log('Aveniq enquiry mailer is missing SMTP_USERNAME or SMTP_PASSWORD.');
    respond(503, ['message' => 'Enquiry email is not configured yet. Please try again later or contact sales@aveniqsolution.com.']);
}

$rateLimitPath = sys_get_temp_dir() . '/aveniq-enquiry-' . hash('sha256', $_SERVER['REMOTE_ADDR'] ?? 'unknown');
$rateLimitFile = fopen($rateLimitPath, 'c+');
if ($rateLimitFile === false || !flock($rateLimitFile, LOCK_EX)) {
    error_log('Aveniq enquiry rate limiter could not be accessed.');
    respond(503, ['message' => 'We could not process your enquiry right now. Please try again later.']);
}
$lastSentAt = (int)stream_get_contents($rateLimitFile);
if ($lastSentAt > time() - 30) {
    flock($rateLimitFile, LOCK_UN);
    fclose($rateLimitFile);
    respond(429, ['message' => 'Please wait briefly before sending another enquiry.']);
}
ftruncate($rateLimitFile, 0);
rewind($rateLimitFile);
fwrite($rateLimitFile, (string)time());
flock($rateLimitFile, LOCK_UN);
fclose($rateLimitFile);

$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host = 'smtp.hostinger.com';
    $mail->SMTPAuth = true;
    $mail->Username = $username;
    $mail->Password = $password;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;
    $mail->CharSet = PHPMailer::CHARSET_UTF8;
    $mail->setFrom($username, 'Aveniq Website Enquiries');
    $mail->addAddress('sales@aveniqsolution.com');
    $mail->addReplyTo($fields['email'], $fields['person']);
    $mail->Subject = 'New project enquiry from ' . $fields['person'];
    $mail->Body = implode("\r\n\r\n", [
        'Aveniq project enquiry',
        'Name: ' . $fields['person'],
        'Company: ' . ($fields['company'] !== '' ? $fields['company'] : 'Not provided'),
        'Email: ' . $fields['email'],
        'Service of interest: ' . ($fields['interest'] !== '' ? $fields['interest'] : 'Not provided'),
        'Project details: ' . $fields['message'],
    ]);
    $mail->send();
    respond(200, ['success' => true, 'message' => 'Your enquiry was sent to Sales.']);
} catch (Throwable $error) {
    error_log('Aveniq enquiry email failed: ' . $error->getMessage());
    respond(502, ['message' => 'We could not send your enquiry right now. Please try again later or contact sales@aveniqsolution.com.']);
}
