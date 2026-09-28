<?php

use App\Http\Controllers\Api\V1\StatusController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function (): void {
    Route::get('status', StatusController::class);
});
