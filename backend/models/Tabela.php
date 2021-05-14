<?php

namespace App\Models;

use App\Model;
use App\Database;

class Tabela extends Model{


    public $table = 'tabelas';
    public $nome;
    public $premio;
    public $pontuacao;
    public $regra;
    public $attributes = [
        'nome', 'premio', 'pontuacao', 'regra'
    ];
    
}