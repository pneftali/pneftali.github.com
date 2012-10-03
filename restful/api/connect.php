<?php
	
	

	/*
	$mysqli = new mysqli(
		$ini['host'],
		$ini['user'],
		$ini['pass'],
		$ini['db']
		);

	if(mysqli_connect_errno()){
		printf( "Database connection error: %s\n", mysqli_connect_error() );
		exit;
	} else{
		echo 'grats!';
	}
	*/

	function getConn(){
		$ini = parse_ini_file('config.ini');
		try {
		    $db = new PDO("mysql:host=$ini[host];dbname=$ini[db]", $ini['user'], $ini['pass']);	
		    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);	    
		    return $db;
		} catch(PDOException $e) {
		    echo 'ERROR: ' . $e->getMessage();
		}	
	}
	
?>