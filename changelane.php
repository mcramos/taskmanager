<?php

$data = $_POST;

$js = $data['data'];

$str = $js['id'] . $js['nome'] . $js['lane'];
//file_put_contents ( "newfile.txt" , $str . "\n" , FILE_APPEND);

echo "lane -> " . $js['lane'];

