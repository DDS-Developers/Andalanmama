<?php

namespace App\Helpers;

use App\User;

class TokenGenerator
{
    public static function randomstr($keyspace = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
    {
        $keyspace = str_shuffle($keyspace);
        $pieces = [];
        $max = mb_strlen($keyspace, '8bit') - 1;
        for ($i = 0; $i < 22; ++$i) {
            $pieces []= $keyspace[random_int(0, $max)];
        }

        $token = implode('', $pieces);

        $user = User::where('tokenstring', $token)->first();

        if (!$user) {
            return $token;
        } else {
            return static::randomstr();
        }
    }
}
