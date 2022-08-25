<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\ApiController;
use App\Nomination;
use App\Voter;
use Illuminate\Support\Facades\Mail;
use App\Mail\CampaignVote;

class NominationsController extends ApiController
{
    public function getNominations()
    {
        // Process
        $nominations = Nomination::where('status', 'active')
            ->get();

        // Response
        return response()->json($nominations);
    }

    public function show(Request $request, $id)
    {
        // Process
        $nomination = Nomination::where('id', $id)
            ->first();

        // Response
        return response()->json($nomination);
    }

    public function vote(Request $request, $id)
    {
        $user = $request->user();

        if (!$user) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $nomination = Nomination::findOrFail($id);

        $voted = Voter::where('user_id', $user->id)
            ->where('nomination_id', $nomination->id)
            ->get();

        if (count($voted) === 0) {
            $data['user_id'] = $user->id;
            $data['nomination_id'] = $nomination->id;

            $vote = $nomination->voters()->create($data);
            
            Mail::to($user)->queue(new CampaignVote($user));

            return response()->json(['message' => 'success vote']);
        } else {
            return response()->json(['error' => 'voted already'], 500);
        }

    }
}
