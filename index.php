<?
require_once(__DIR__ . '/crest.php');

$result = CRest::call(
	'user.current',
	// {{query[params][PARAMS]}}
);

// Чтение содержимого файла index.html
$htmlContent = file_get_contents('index.html');

// Вывод содержимого файла index.html
echo $htmlContent;
