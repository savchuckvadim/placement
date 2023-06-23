<?
require_once (__DIR__.'/crest.php');

$result = CRest::call(
		'user.current',
		// {{query[params][PARAMS]}}
	);

echo '<pre>';
	print_r($result);
echo '</pre>';
