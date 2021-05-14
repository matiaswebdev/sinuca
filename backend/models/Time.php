<?php

namespace App\Models;

use App\Model;
use App\Database;

class Time extends Model{

    public $table = 'times';
    public $nome;
    public $jogador1;
    public $jogador2;
    public $tabela_id;
    public $pontos = 0;
    public $attributes = array('nome', 'jogador1', 'jogador2', 'tabela_id', 'pontos');
    
}