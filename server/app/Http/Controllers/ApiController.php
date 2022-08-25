<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class ApiController extends Controller
{
    protected function guard()
    {
        return Auth::guard();
    }

    protected function randomname($user_id)
    {
        return $user_id.'-'.Carbon::now()->timestamp;
    }

    protected function stripHtml($str)
    {
        $str = html_entity_decode($str);
        // Strip HTML
        $str = preg_replace('#<br[^>]*?>#siu', "\n", $str);
        $str = preg_replace([
            '#<head[^>]*?>.*?</head>#siu',
            '#<style[^>]*?>.*?</style>#siu',
            '#<script[^>]*?.*?</script>#siu',
            '#<object[^>]*?.*?</object>#siu',
            '#<embed[^>]*?.*?</embed>#siu',
            '#<applet[^>]*?.*?</applet>#siu',
            '#<noframes[^>]*?.*?</noframes>#siu',
            '#<noscript[^>]*?.*?</noscript>#siu',
            '#<noembed[^>]*?.*?</noembed>#siu'
        ], '', $str);

        $str = strip_tags($str);
        // Trim whitespace
        $str = str_replace("\t", '', $str);
        $str = preg_replace('#\n\r|\r\n#', "\n", $str);
        $str = preg_replace('#\n{3,}#', "\n\n", $str);
        $str = trim($str);
        return $str;
    }
}
