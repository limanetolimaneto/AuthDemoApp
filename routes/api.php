<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// User registration route
Route::post('/register', [AuthController::class, 'register']);

// User login route
Route::post('/login', [AuthController::class, 'login']);

// User logout route, requires authentication via Sanctum
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);

// Get authenticated user info, requires authentication
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Simple test route to verify token authentication, requires authentication
Route::middleware('auth:sanctum')->get('/test', function (Request $request) {
    return response()->json(['response' => 'success']);
});
