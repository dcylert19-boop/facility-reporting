<?php

declare(strict_types=1);

namespace App\Http\Resources\Api\V1;

use App\Data\StatusData;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin StatusData */
final class StatusResource extends JsonResource
{
    /** @return array{status: string} */
    public function toArray(Request $request): array
    {
        return ['status' => $this->resource->status];
    }
}
