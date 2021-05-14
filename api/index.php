<?php

require_once dirname(__DIR__).'/vendor/autoload.php';

$app = new \App\App();

// ROTAS DA API
$app->router->get('/time/:id/', [\App\Controllers\TimeController::class, 'get']);
$app->router->post('/time', [\App\Controllers\TimeController::class, 'post']);
$app->router->patch('/time/:id', [\App\Controllers\TimeController::class, 'patch']);
$app->router->delete('/time/:id', [\App\Controllers\TimeController::class, 'delete']);

$app->router->get('/tabela/:id', [\App\Controllers\TabelaController::class, 'get']);
$app->router->post('/tabela', [\App\Controllers\TabelaController::class, 'post']);
$app->router->patch('/tabela/:id', [\App\Controllers\TabelaController::class, 'patch']);
$app->router->delete('/tabela/:id', [\App\Controllers\TabelaController::class, 'delete']);

$app->run();