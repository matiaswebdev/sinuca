<?php

namespace App;

class Database {

    public $pdo;

    function __construct()
    {
        $this->pdo = new \PDO(DBDRIVE.":host=".DBHOST.";dbname=".DBNAME, DBUSER, DBPASS);
    }

}