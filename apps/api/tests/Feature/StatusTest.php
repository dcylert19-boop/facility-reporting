<?php

declare(strict_types=1);

it('boots and exposes the versioned JSON status contract', function (): void {
    $this->getJson('/api/v1/status')
        ->assertOk()
        ->assertExactJson(['data' => ['status' => 'ok']]);
});
