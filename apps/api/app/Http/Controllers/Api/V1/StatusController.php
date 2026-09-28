<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\V1;

use App\Actions\GetStatus;
use App\Http\Controllers\Controller;
use App\Http\Resources\Api\V1\StatusResource;

final class StatusController extends Controller
{
    public function __invoke(GetStatus $action): StatusResource
    {
        return new StatusResource($action());
    }
}
