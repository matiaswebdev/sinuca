<?php

namespace App;

use App\Router;
use App\Request;
use App\Response;
use App\Database;

class App {

    public $router;
    public $request;
    public $response;
    public $db;

    function __construct()
    {
        $this->router = new Router();
        $this->request = new Request();
        $this->response = new Response();
        $this->db = new Database();
    }

    public function run() 
    {
        $this->router->resolve();
    }

}