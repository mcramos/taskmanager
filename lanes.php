<?php

$data = [
["titulo" => 'A desenvolver', "classe"=>"aDesenvolver", "id"=>"AGUARDANDO"],
["titulo" => 'Em desenvolvimento', "classe"=>"emDesenvolvimento", "id"=>"DESENVOLVENDO"],
["titulo" => 'Em homologação', "classe"=>"homologacao", "id"=>"HOMOLOGANDO"],
["titulo" => 'Impedido', "classe"=>"impedido", "id"=>"IMPEDIDO"],
["titulo" => 'Terminado', "classe"=>"terminado", "id"=>"TERMINADO"]
];

header('Content-Type: application/json');
echo json_encode($data);