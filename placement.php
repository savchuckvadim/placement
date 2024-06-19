
<?php

$placementOptions = [];
if (isset($_POST['PLACEMENT']) && isset($_POST['PLACEMENT_OPTIONS'])) {
    $options = $_POST['PLACEMENT_OPTIONS'];
    $placement =  $_POST['PLACEMENT'];

    $dataToSend = json_encode([
        'options' => json_decode($options, true), // Декодировать в массив для удобства работы, если необходимо
        'placement' => json_decode($placement, true)
    ]);
}
$url = "https://april-hook.ru/api/activity/test"; // URL API, куда вы отправляете запрос

// Инициализация cURL сессии
$ch = curl_init($url);

// Настройка опций cURL для отправки JSON
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($dataToSend));
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    'Content-Length: ' . strlen(json_encode($dataToSend))
));

// Выполнение запроса и получение ответа
$response = curl_exec($ch);

curl_close($ch);

require_once(__DIR__ . '/crest.php');
?>;

<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>April CRM</title><script defer="defer" src="main.d2104c5304dad5eea143.js"></script><link href="css/main.ecd624e4.css" rel="stylesheet"></head><body><div id="root"></div></body></html>