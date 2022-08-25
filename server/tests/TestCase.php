<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    protected function apiAs($token, $method, $uri, array $data = [], array $headers = [])
    {
        $headers = array_merge([
            'Authorization' => 'Bearer '. $token,
            'X-Requested-With' => 'XMLHttpRequest'
        ], $headers);

        return $this->json($method, $uri, $data, $headers);
    }
}
