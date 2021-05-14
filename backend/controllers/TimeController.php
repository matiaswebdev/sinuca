<?php

namespace App\Controllers;

use App\Response;
use App\Request;
use App\Models\Time;

class TimeController {

    public function get($id)
    {
        $time = new Time();

        if($id) {
            return Response::json($time->get($id), 200);
        }

        return Response::json($time->getAll(), 200);
    }

    public function post(Request $request)
    {
    
        $body = $request->getBody();

        $time = new Time();
        $time->load($body);

        if($time->save()){
            return Response::json(['success']);
        }

    }

    public function patch ($id, Request $request) {
        $body = $request->getBody();

        $time = new Time();
        $time->load($body);

        if($time->update($id)){
            return Response::json(['success']);
        }
    }

    public function delete ($id) {
        $time = new Time();

        if($time->delete($id)){
            return Response::json(['success']);
        }
    }

}