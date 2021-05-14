<?php

namespace App;

use App\Request;

class Router {

    public $request;
    protected $routes = [];
    public $db;


    function __construct()
    {
        $this->request = new Request();
        $this->db = new Database();
    }

    public function get ($path, $callback) {

        $query =  explode('/',$path);
        $path = '/' . $query[1];
        unset($query[0], $query[1]);

        $pathValues = explode('/', $this->request->getPath());
        unset($pathValues[0], $pathValues[1]);

        $vars = array();
       
        foreach ($query as $idx => $var) {
            $vars[substr($var, 1)] = $pathValues[$idx] ?? false;
        }


        $this->routes['get'][$path] = $callback;
        $this->routes['get'][$path]['vars'] = $vars;
    }

    public function post ($path, $callback) {
        $this->routes['post'][$path] = $callback;
    }

    public function patch ($path, $callback) {

        $query =  explode('/',$path);
        $path = '/' . $query[1];
        unset($query[0], $query[1]);

        $pathValues = explode('/', $this->request->getPath());
        unset($pathValues[0], $pathValues[1]);

        $vars = array();
       
        foreach ($query as $idx => $var) {
            $vars[substr($var, 1)] = $pathValues[$idx] ?? false;
        }

        $this->routes['patch'][$path] = $callback;
        $this->routes['patch'][$path]['vars'] = $vars;
    }

    public function delete ($path, $callback) {

        $query =  explode('/',$path);
        $path = '/' . $query[1];
        unset($query[0], $query[1]);

        $pathValues = explode('/', $this->request->getPath());
        unset($pathValues[0], $pathValues[1]);

        $vars = array();
       
        foreach ($query as $idx => $var) {
            $vars[substr($var, 1)] = $pathValues[$idx] ?? false;
        }

        $this->routes['delete'][$path] = $callback;
        $this->routes['delete'][$path]['vars'] = $vars;
    }



    public function resolve () {
        
        $path =  $this->request->getPath();
        $method = $this->request->getMethod();
        $query =  explode('/',$path);   
        $path = '/' . $query[1];
        $callback = $this->routes[$method][$path] ?? false;
        $vars = $this->routes[$method][$path]['vars'] ?? false;
        $vars['request'] = new Request();
        unset($callback['vars']);
    
        if(!$callback) {
            echo 'Not found';
            return;
        }

        $callback[0] = new $callback[0];
        echo call_user_func_array($callback, $vars);

    }

}