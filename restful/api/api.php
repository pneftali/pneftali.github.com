<?php

	require 'connect.php';
	require 'Slim/Slim.php';	
	\Slim\Slim::registerAutoloader();

	$app = new \Slim\Slim();


<<<<<<< HEAD
	$app->get('/list', function (){

		try {
			$db = getConn();
			$stmt = $db->prepare("SELECT * FROM users ORDER BY name");  
			$stmt->execute();
			$list = $stmt->fetchAll(PDO::FETCH_OBJ);
			//$db = null;
			echo '{"data": ' . json_encode($list) . '}';
		} catch(PDOException $e) {
			echo '{"error":{"text":'. $e->getMessage() .'}}'; 
		}
		
=======
	$app->get('/jejeje/hehehe/:name', function ($name) {
	    echo "Hello, $name";
>>>>>>> new
	});

	



	$app->run();

?>