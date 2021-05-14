<?php

namespace App;

class Response {

    public static function json (array $data, int $status = 200) {
        header('Content-Type: application/json');
        http_response_code($status);
        $message = $status === 200 ? 'success' : 'error';
        return json_encode(['status' => $message, 'data' =>  $data]);
    }
}