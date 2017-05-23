<?php
	$days = 25;
	echo "Counting down to final exam";
	echo "<br/>";
	for ($i=$days;$i>=0;$i--){
		if($i!=1){
			echo $i." days left";
			echo "<br>";
		}elseif($i==1){
			echo $i." day left";
			echo "<br/>";
		}elseif($i==0){
			echo "Today is final exam";
		}
	}

?>