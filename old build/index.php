<?
require_once(__DIR__ . '/crest.php');

$result = CRest::call(
	'user.current',
	// {{query[params][PARAMS]}}
);


