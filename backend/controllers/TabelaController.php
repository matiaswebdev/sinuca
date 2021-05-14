<?php

namespace App\Controllers;

use App\Models\Tabela;
use App\Response;
use App\Request;

class TabelaController {

    public function get($id)
    {
        $tabela = new Tabela();
        
        if($id) {
            return Response::json($tabela->get($id), 200);
        }

        return Response::json($tabela->getAll(), 200);
    }

    public function post(Request $request)
    {
    
        $body = $request->getBody();

        $tabela = new Tabela();
        $tabela->load($body);

        if($tabela->save()){
            return Response::json(['success']);
        }

    }

    public function patch ($id, Request $request) {
        $body = $request->getBody();

        $tabela = new Tabela();
        $tabela->load($body);

        if($tabela->update($id)){
            return Response::json(['success']);
        }
    }

    public function delete ($id) {
        $tabela = new Tabela();

        if($tabela->delete($id)){
            return Response::json(['success']);
        }
    }

}