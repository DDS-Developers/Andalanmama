<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\ApiController;
use App\Campaign;

class CampaignController extends ApiController
{
    public function show()
    {
        // Process
        $campaign = Campaign::where('status', 'active')
            ->first();

        // Response
        return response()->json($campaign);
    }
}
