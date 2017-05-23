<?php
	$friends[] = "Hein";
	$friends[] = "Adrew";
	$friends[] = "Mintra";
	print_r($friends);
	echo "<br/>";
	$bf["Sai"] = "Juatin";
	$bf["Shurva"] = "Shurva";
	print_r($bf);
	echo "<br/>";
	$courses["ITE220"] = array("Sai" => "A","Shurva" => "A+");
	$courses["ITE337"] = array("Sai" => "F","Shurva" => "A");
	print_r($courses);
	echo "<br/>";
	foreach ($courses as $key => $value) {
		echo "$key";
		foreach ($value as $p => $q) {
			echo "<br/>";
			echo "$p got $q";
		}
		echo "<br/>";
	}
?>