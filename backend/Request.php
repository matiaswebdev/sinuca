<?php

namespace App;

class Request {

    public function getPath() 
    {
        $path = $_SERVER['REQUEST_URI'] ?? '/';
        $path = explode('/', $path);
        unset($path[0], $path[1], $path[2]);
        $path = '/'. implode('/', $path);
        $position = strpos($path, '?');
        if(!$position){
            return $path;
        }
        return substr($path, 0, $position);
    }

    public function getMethod()
    {
        return  strtolower($_SERVER['REQUEST_METHOD']);
    }

    public function getBody()
    {
        $body = array();

        $json_params = file_get_contents("php://input");
        $json_params = json_decode($json_params);


        if($this->getMethod() === 'get'){
            foreach ($_GET as $key => $value) {
                $body[$key] = filter_input($key, FILTER_SANITIZE_SPECIAL_CHARS);
            } 
        }

        if($this->getMethod() != 'get'){
            foreach ($json_params as $key => $value) {
                $body[$key] = filter_var($value, FILTER_SANITIZE_STRING);
            } 
        }

        return $body;
      
    }

}