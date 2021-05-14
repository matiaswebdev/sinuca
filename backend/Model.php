<?php

namespace App;

use App\Database;
use App\Response;

class Model {

    public $db;

    public function __construct()
    {
        $db = new Database();
        $this->db = $db->pdo;
    }

    public function load ($data)
    {
        foreach ($data as $key => $value){
            if(property_exists($this, $key)) {
                $this->{$key} = $value;
            }
        }
    }

    public function save () {

        $table = $this->table;
        $attributes = $this->attributes;
        $params = [];

        foreach ($attributes as $attr){
            array_push($params, ":".$attr);
        }

        $query = "INSERT INTO $table (". implode(',', $attributes).") VALUES (". implode(',', $params). ")";
        $stmt = $this->db->prepare($query);
        foreach ($attributes as $attr) {
            $stmt->bindValue(":".$attr, $this->{$attr});
        }
                
        if(!$stmt->execute()){
            echo Response::json($stmt->errorInfo(), 409);
            return;
        }

        return true;
    }

    public function update ($id) {

    
        $table = $this->table;
        $attributes = $this->attributes;
        $params = [];

        foreach ($attributes as $attr){
            array_push($params, $attr."=:".$attr );
        }


        $query = " UPDATE $table
        SET ".implode(',',$params)."
        WHERE id = $id ";
        $stmt = $this->db->prepare($query);


        foreach ($attributes as $attr) {
            $stmt->bindValue(":".$attr, $this->{$attr});
        }

        
        if(!$stmt->execute()){
            echo Response::json($stmt->errorInfo(), 409);
            return;
        }

        return true;
    }

    public function delete ($id) {
        $query = "DELETE FROM $this->table WHERE id = $id ";
        $stmt = $this->db->prepare($query);

        if(!$stmt->execute()){
            echo Response::json($stmt->errorInfo(), 409);
            return;
        }

        return true;
    }

    public function get($id) {
        $stmt = $this->db->prepare('SELECT * FROM '.$this->table. ' where id = :id');
        $stmt->bindValue(':id', $id);
        $stmt->execute();
        $tabela = $stmt->fetchAll(\PDO::FETCH_ASSOC);

        $stmt = $this->db->prepare('SELECT * FROM times where tabela_id = :id order by pontos DESC');
        $stmt->bindValue(':id', $id);
        $stmt->execute();
        $times = $stmt->fetchAll(\PDO::FETCH_ASSOC);

        return ['tabela' => $tabela, 'times' => $times];
    }

    public function getAll() {
        $stmt = $this->db->prepare('SELECT * FROM '.$this->table. ' ORDER BY id DESC');
        $stmt->execute();

        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }

}