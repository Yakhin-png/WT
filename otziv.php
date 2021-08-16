<?php

$tek=$_GET["tek"];
$name=$_GET["name"];
$email=$_GET["email"];
$otz=$_GET["otz"];
$xml = simplexml_load_file("otziv.xml"); 
$cs = $xml->addChild('otziv','');
$cs->addChild("name", $name);
$cs->addChild("email", $email);
$cs->addChild("otz", $otz);
$done = $xml->asXML("otziv.xml");
$schiotchik=0;
$cn = count($xml->otziv);
$xml = simplexml_load_file("otziv.xml");
        for($i = 0; $i <= $cn; $i++){
          $schiotchik++;
          echo("<br>");
       echo "Имя: ".$xml->otziv[$i]->name . "<br>";
       echo "EMAIL: ".$xml->otziv[$i]->email . "<br>";
       echo "Комментарий: ".$xml->otziv[$i]->otz . "<br>";
       if($schiotchik==$cn)break;
        }
?>