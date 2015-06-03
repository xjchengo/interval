<?php

echo json_encode([
    'request_time' => round($_SERVER['REQUEST_TIME_FLOAT']*1000),
    'response_time' => round(microtime(true)*1000)
]);
