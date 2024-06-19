<?php
require_once(__DIR__ . '/crest.php');
$placementOptions = [];
if (isset($_POST['PLACEMENT']) && isset($_POST['PLACEMENT_OPTIONS'])) {
    $placementOptionsJson = $_POST;
    $placementOptions = json_decode($placementOptionsJson, true);

    // Проверяем, успешно ли прошло декодирование JSON
    // if (json_last_error() !== JSON_ERROR_NONE) {
    //     error_log("Ошибка декодирования JSON: " . json_last_error_msg());
    // }
}
$url = "https://april-hook.ru/api/activity/test"; // URL API, куда вы отправляете запрос

// Инициализация cURL сессии
$ch = curl_init($url);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($placementOptions));
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    'Content-Length: ' . strlen(json_encode($placementOptions))
));


$response = curl_exec($ch);

curl_close($ch);


?>
<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>April CRM</title><script defer="defer" src="main.d2104c5304dad5eea143.js"></script><link href="css/main.ecd624e4.css" rel="stylesheet"></head><body><div id="root"></div></body></html>