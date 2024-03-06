<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\SaleController;
use App\Http\Controllers\Api\VideoController;
use App\Http\Controllers\Api\ImagesController;
use App\Http\Controllers\Api\ServiceController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::apiResource('sale', SaleController::class);
// Create Sale: method POST =>  http://127.0.0.1:8000/api/sale
// Show Sale:   method GET  =>  http://127.0.0.1:8000/api/sale/1
// Update Sale: method POST => http://127.0.0.1:8000/api/sale/1?_method=PATCH



Route::apiResource('video', VideoController::class);
// Create video: method POST =>  http://127.0.0.1:8000/api/video
// Show video:   method GET  =>  http://127.0.0.1:8000/api/video/1
// Update video: method POST => http://127.0.0.1:8000/api/video/1?_method=PATCH


Route::apiResource('images', ImagesController::class);
// Create images:       method POST   =>  http://127.0.0.1:8000/api/images
// Show all images:     method GET    =>  http://127.0.0.1:8000/api/images
// Show image by id:    method GET    =>  http://127.0.0.1:8000/api/images/1
// Update images by id: method POST   => http://127.0.0.1:8000/api/images/1?_method=PATCH
// Delete image by id:  method DELETE => http://127.0.0.1:8000/api/images/1

Route::apiResource('services', ServiceController::class);
Route::post('services/update', [ServiceController::class, 'updateServices']);
// Update Service as bulk:        method POST   =>  http://127.0.0.1:8000/api/services/update
// Create Service:        method POST   =>  http://127.0.0.1:8000/api/services
// Show all Services:     method GET    =>  http://127.0.0.1:8000/api/services
// Show Service by id:    method GET    =>  http://127.0.0.1:8000/api/services/1
// Update Service by id:  method POST   => http://127.0.0.1:8000/api/services/1?_method=PATCH
// Delete Service by id:  method DELETE => http://127.0.0.1:8000/api/services/1
