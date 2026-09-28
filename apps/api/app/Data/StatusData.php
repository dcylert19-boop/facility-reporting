<?php

declare(strict_types=1);

namespace App\Data;

final readonly class StatusData
{
    public function __construct(public string $status) {}
}
