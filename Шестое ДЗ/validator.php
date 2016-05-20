<?php
require "gump.class.php";

$validator = new GUMP();

$_POST = $validator->sanitize($_POST);

$rules = array(
	'username'    => 'required|alpha_numeric|max_len,100|min_len,6',
	'password'    => 'required|max_len,100|min_len,6',
	'email'       => 'required|valid_email',
	'gender'      => 'required|exact_len,1',
	'credit_card' => 'required|valid_cc',
	'bio'		  => 'required'
);

$validated = $validator->validate(
	$_POST, $rules
);
if($validated === TRUE) {
	$result['result'] = true;
	die(json_encode($result));
} else {

	$result = $validator->get_errors_array();

	foreach ($result as $key => $value) {
		$lowWords = strtolower(str_replace(chr(32), chr(95), $key));
		$newArray[$lowWords] = $value;
	}
	$result['error'] = $newArray;
	$result['result'] = false;
	die(json_encode($result['error']));
}
?>