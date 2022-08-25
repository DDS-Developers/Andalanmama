<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\ApiController;
use App\Banner;

class BannerController extends ApiController
{
    //banner for web
    public function getLatestBanner()
    {
        // Process
        $banner = Banner::where('status', 1)
            ->where('app', 0)
            ->orderBy('created_at', 'desc')
            ->first();

        // Response
        return response()->json($banner);
    }

    //banner for app
    public function getAppBanner()
    {
        // Process
        $banner = Banner::where('status', 1)
            ->where('app', 1)
            ->orderBy('created_at', 'desc')
            ->get();

        // Response
        return response()->json($banner);
    }
}
