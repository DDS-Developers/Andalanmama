<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use App\RecipeSchedule;

class ScheduleController extends Controller
{
    /**
     * Remove old schedule test.
     *
     * @return \Illuminate\Http\Response
     */
    public function cleaningschedule(Request $request)
    {
        $schedules = RecipeSchedule::where('user_id', '!=', 1)->get();

        RecipeSchedule::whereIn('id', $schedules->pluck('id'))->delete();

        return redirect()->route('dashboard')->with('message', 'Jadwal lama telah dihapus');
    }
}
