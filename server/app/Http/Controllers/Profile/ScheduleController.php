<?php

namespace App\Http\Controllers\Profile;

use Illuminate\Http\Request;
use App\Http\Controllers\ApiController;
use App\RecipeSchedule;
use App\Helpers\NotificationTimeCounter;

class ScheduleController extends ApiController
{
    public function store(Request $request)
    {
        $user = $request->user();

        $request->validate([
            'schedule_date' => 'required|date',
            'shift' => 'required|integer|between:1,3',
            'schedule_time' => 'required',
            'alt_recipe' => 'required|array|between:1,5',
            'alt_recipe.*' => 'exists:recipes,id'
        ]);

        //'main_recipe' => 'required|integer|exists:recipes,id',

        $data = $request->only('schedule_date', 'shift', 'schedule_time', 'alt_recipe');

        return \DB::transaction(function () use ($data, $user) {
            $data['notif_time'] = NotificationTimeCounter::countTime(
                $data['alt_recipe'],
                $data['schedule_date'],
                $data['schedule_time']
            );

            $collection = $user->schedule()->create($data);

            if ($collection) {
                return response()->json($collection);
            }

            return response()->json(['error' => 'Terjadi kesalahan pada server'], 401);
        });
    }

    public function update(RecipeSchedule $schedule, Request $request)
    {
        $user = $request->user();

        if ($schedule->user_id != $user->id) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $request->validate([
            'shift' => 'required|integer|between:1,3',
            'schedule_time' => 'required',
            'alt_recipe' => 'required|array|between:1,5',
            'alt_recipe.*' => 'exists:recipes,id'
        ]);

        //'main_recipe' => 'required|integer|exists:recipes,id',

        $data = $request->only('shift', 'schedule_time', 'alt_recipe');

        return \DB::transaction(function () use ($data, $schedule) {
            $data['notif_time'] = NotificationTimeCounter::countTime(
                $data['alt_recipe'],
                $schedule->schedule_date,
                $data['schedule_time']
            );
            $data['notification'] = 0;
            
            $schedule->fill($data);

            if ($schedule->save()) {
                return response()->json($schedule);
            }

            return response()->json(['error' => 'Terjadi kesalahan pada server'], 401);
        });
    }

    public function destroy(RecipeSchedule $schedule, Request $request)
    {
        $user = $request->user();

        if ($schedule->user_id != $user->id) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return \DB::transaction(function () use ($schedule) {

            $schedule->delete();

            return response()->json(['message' => 'ok']);
        });
    }

    public function updateStatus(Request $request)
    {
        $user = $request->user();

        $request->validate([
            'status' => 'required|boolean',
            'status_date' => 'required|date_format:Y-m-d'
        ]);

        return \DB::transaction(function () use ($request, $user) {

            $schedules = RecipeSchedule::where('user_id', $user->id)
                ->whereDate('schedule_date', '=', $request->input('status_date'))
                ->get();
            
            if (count($schedules) == 0) {
                return response()->json(['error' => 'Terjadi kesalahan pada server'], 401);
            }

            foreach ($schedules as $schedule) {
                if ($request->input('status') == 1) {
                    if (!$this->recipeStatusCheck($schedule->alt_recipe)) {
                        // return response()->json(['error' => 'Beberapa resep belum terpublish atau approved'], 405);
                        return response()->json(['error' => 'Beberapa resep belum terpublish'], 405);
                    }
                }

                $schedule->status = $request->input('status');
                $schedule->save();
            }

            return response()->json(['message' => 'Berhasil merubah status']);
        });
    }

    public function updateTitle(Request $request)
    {
        $user = $request->user();

        $request->validate([
            'title' => 'required|string',
            'status_date' => 'required|date_format:Y-m-d'
        ]);

        return \DB::transaction(function () use ($request, $user) {

            $schedules = RecipeSchedule::where('user_id', $user->id)
                ->whereDate('schedule_date', '=', $request->input('status_date'))
                ->get();
            
            if (count($schedules) == 0) {
                return response()->json(['error' => 'Terjadi kesalahan pada server'], 401);
            }

            foreach ($schedules as $schedule) {
                $schedule->title = $request->input('title');
                $schedule->save();
            }

            return response()->json(['message' => 'Berhasil merubah judul']);
        });
    }
    
    private function recipeStatusCheck($recipe_list)
    {
        foreach ($recipe_list as $rec) {
            // if ($rec->status == 0 || $rec->approved == 0) {
            if ($rec->status == 0) {
                return false;
            }
        }

        return true;
    }
}
