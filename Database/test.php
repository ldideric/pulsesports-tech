<?php
$age = array("Peter"=>array("huts"=>4, "lit"=>5), "Ben"=>37, "Joe"=>43);

$test = "huts";

// echo json_encode($age);
echo $age["Peter"][$test];
?>