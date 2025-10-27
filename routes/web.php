<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PostController::class, 'index']);
Route::get('/about', function () {
    return inertia('About');
});
Route::resource('post', PostController::class)->except('index');
