<?php

$servername = "localhost";
$dbname = "hpnffsqg0";
$password = "#yuccaHR20!";
$username = "nemvg0fpff";
$tableName = "sign_up";

$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT id, name, email, created_at FROM sign_up";
$result = $conn->query($sql);

if ($result->num_rows > 0 && $_GET["token"] == "6175421b-4f3f-490c-b7a7-0e869ae5c161") {

    echo '<table style="max-width:100%; font-family: Arial;">';
        foreach($result as $key => $val) {
            echo '<tr>';
            echo '<th style="text-transform: capitalize; font-weight: bold; text-align: left;">'.$key.'</th>';
            echo '<td>'.$val['name'].'</td>';
            echo '<td>'.$val['email'].'</td>';
            echo '<td>'.$val['created_at'].'</td>';
            echo '</tr>';
        }
        echo '</table>';
  // output data of each row
  echo '<table style="max-width:100%; font-family: Arial;">';
  while($row = $result->fetch_assoc()) {
    echo "id: " . $row["id"]. " - Name: " . $row["name"]. " " . $row["email"]. " " . $row["created_at"]. "<br>";
     echo '<tr>';
            echo '<th style="text-transform: capitalize; font-weight: bold; text-align: left;">'.$row["id"].'</th>';
            echo '<td>'.$row["name"].'</td>';
            echo '</tr>';
    }
   echo '</table>';
} else {
  echo "0 results";
}
$conn->close();


?>