<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<div class="container">
    <div class="row text-center">
        <h1>Stamford Private Concert</h1>
        <img src="https://atkmedia.allticketthailand.com/images/up/SMT17034/SMT17034270420171016BigMap1.jpg" /s>
    </div>
    <br />
    <div class="row text-center">
<?php
	$seats = ["A-1", "A-2", "A-3", "A-4", "A-5", "B-1", "B-2", "B-3", "B-4", "B-5","C-1", "C-2", "C-3", "C-4", "C-5"];
		$index = 1;
		echo "<form action='concertAction.php' method='GET'>";
	foreach ($seats as $s) {
	    echo "<label class=\"checkbox-inline\">";
		echo "<input type='checkbox' name='seats[]' value='$s'/>";
		echo "$s ";
		echo "</label>";
		if($index % 5 == 0){
			echo "<br/>";
		}
		$index++;
	}
	echo "<input class='btn btn-info' type='submit' value='Buy Now' name = 'button'/>";
	echo "</form>";

?>
    </div>
</div>
