<?php

declare(strict_types=1);

namespace App\Actions;

use App\Data\StatusData;

final class GetStatus
{
    public function __invoke(): StatusData
    {
        return new StatusData('ok');
    }
}
