<?php
$data = [
["id" => 1, "nome" => 'proj1'],
["id" => 2, "nome" => 'msmsmsm'],
["id" => 3, "nome" => 'lslslslsl'],
["id" => 4, "nome" => 'Algum nome'],
["id" => 5, "nome" => 'Mais outro'],
["id" => 6, "nome" => 'manda outro'],
["id" => 7, "nome" => 'manda outro'],
["id" => 8, "nome" => 'manda outro'],
["id" => 9, "nome" => 'manda outro'],
["id" => 10, "nome" => 'manda outro'],
["id" => 11, "nome" => 'manda outro'],
["id" => 12, "nome" => 'manda outro'],
["id" => 13, "nome" => 'manda outro']
];

header('Content-Type: application/json');
echo json_encode($data);


