<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Pagination\Paginator;
use Illuminate\Pagination\LengthAwarePaginator;
use App\User;
use App\Recipe;
use App\RecipeSchedule;
use Carbon\Carbon;
use App\Helpers\NotificationTimeCounter;
use Edujugon\PushNotification\Facades\PushNotification;

class ScheduleController extends ApiController
{
    public function getFullSchedule(Request $request)
    {
        $user = $request->user();
        $schedules = $user->schedule()
            ->whereDate('schedule_date', '>=', Carbon::today()->toDateString())
            ->orderBy('schedule_date', 'asc')
            ->orderBy('shift', 'asc')
            ->get()
            ->groupBy(function ($val) {
                return Carbon::parse($val->schedule_date)->format('Y-m-d');
            })->map(function ($events, $date) {
                return $events->groupBy('schedule_date')
                   ->map(function ($events, $site) use ($date) {
                        return [
                           'date' => $date,
                           'schedules' => $events
                        ];
                   });
            });

        $arr = [];
        foreach ($schedules as $key => $value) {
            foreach ($value as $key => $val) {
                array_push($arr, $val);
            }
        }

        return response()->json($arr);
    }

    public function getSchedule(Request $request)
    {
        $user = $request->user();
        
        $schedules = $user->schedule()
            ->whereDate('schedule_date', '>=', $request->input('date'))
            ->orderBy('schedule_date', 'asc')
            ->orderBy('shift', 'asc')
            ->get()
            ->groupBy(function ($val) {
                return Carbon::parse($val->schedule_date)->format('Y-m-d');
            })->map(function ($events, $date) {
                return $events->groupBy('schedule_date')
                    ->map(function ($events, $site) use ($date) {
                        return [
                            'date' => $date,
                            'schedules' => $events
                        ];
                    });
            });

        $arr = [];
        foreach ($schedules as $key => $value) {
            foreach ($value as $key => $val) {
                array_push($arr, $val);
            }
        }

        return response()->json($arr);
    }

    public function recipeList(Request $request)
    {
        $user = $request->user();

        $bookmarks = $user->bookmark()->get();
        $recipes = $user->recipe()->get();
        $merge = $bookmarks->merge($recipes);

        return response()->json(collect($merge)->paginate(12));
    }

    public function viewSchedule(Request $request)
    {
        $user = $request->user();

        $request->validate([
            'user_id' => 'required|numeric',
            'date' => 'required|date_format:Y-m-d'
        ]);

        $schedules = RecipeSchedule::published()
            ->where('user_id', $request->input('user_id'))
            ->whereDate('schedule_date', '=', $request->input('date'))
            ->orderBy('schedule_date', 'asc')
            ->orderBy('shift', 'asc')
            ->get()
            ->groupBy(function ($val) {
                return Carbon::parse($val->schedule_date)->format('Y-m-d');
            })->map(function ($events, $date) use ($request) {
                return $events->groupBy('schedule_date')
                    ->map(function ($events) use ($date, $request) {
                        return [
                            'user' => User::find($request->input('user_id')),
                            'date' => $date,
                            'schedules' => $events
                        ];
                    });
            });

        if ($schedules) {
            $arr = [];
            foreach ($schedules as $key => $value) {
                foreach ($value as $key => $val) {
                    array_push($arr, $val);
                }
            }

            return response()->json($arr);
        }
        
        return response()->json(['error' => 'Jadwal tidak ditemukan'], 404);
    }
    
    public function getTodaySchedule(Request $request)
    {
        $user = $request->user();

        $schedules = RecipeSchedule::published()
            ->whereDate('schedule_date', '=', Carbon::now()->format('Y-m-d'))
            ->orderBy('created_at', 'desc')
            ->orderBy('shift', 'asc')
            ->get()
            ->groupBy('user_id')
            ->map(function ($events, $user) {
                return [
                    'user' => User::find($user),
                    'schedules' => $events
                ];
            });

        if ($schedules) {
            $arr = [];
            $i = 0;
            foreach ($schedules as $key => $value) {
                if ($i != 5) {
                    array_push($arr, $value);
                    $i++;
                }
            }

            return response()->json($arr);
        }
    
        return response()->json('');
    }

    public function getTomorrowSchedule(Request $request)
    {
        $user = $request->user();

        $schedules = RecipeSchedule::with('user')
            // ->published()
            ->whereDate('schedule_date', '=', Carbon::now()->addDays(1)->format('Y-m-d'))
            ->orderBy('created_at', 'desc')
            ->orderBy('shift', 'asc')
            ->get()
            ->groupBy('user_id')
            ->map(function ($events, $user) {
                return [
                    'user' => User::find($user),
                    'schedules' => $events
                ];
            });

        if ($schedules) {
            $arr = [];
            $i = 0;
            foreach ($schedules as $key => $value) {
                if ($i != 5) {
                    array_push($arr, $value);
                    $i++;
                }
            }

            return response()->json($arr);
        }
    
        return response()->json('');
    }

    public function filterTodaySchedule(Request $request)
    {
        $user = $request->user();

        $request->validate([
            'date' => 'required|date_format:Y-m-d'
        ]);

        if ($request->query('page')) {
            $page = $request->query('page');
        } else {
            $page = 1;
        }

        $schedules = RecipeSchedule::with('user')
            // ->published()
            ->whereDate('schedule_date', '=', Carbon::parse($request->input('date'))->format('Y-m-d'))
            ->orderBy('shift', 'asc')
            ->get()
            ->groupBy('user_id')
            ->map(function ($events) {
                return [
                    'schedules' => $events
                ];
            });

        if ($schedules) {
            $arr = [];

            foreach ($schedules as $key => $value) {
                $i = 0;
                foreach ($value['schedules'] as $sch) {
                    if ($i == 0) {
                        array_push($arr, $sch);
                        $i++;
                    }
                }
            }

            $collection = collect($arr);

            $chunk = $collection->forPage(1, 5);

            $paginator = new LengthAwarePaginator(
                $collection->forPage($page, 5)->values(),
                $collection->count(),
                5,
                $page,
                ['path' => url('api/schedule/explore')]
            );

            return response()->json($paginator);
        }
    
        return response()->json('');
    }

    public function exploreSchedule(Request $request)
    {
        $user = $request->user();

        if ($request->query('page')) {
            $page = $request->query('page');
        } else {
            $page = 1;
        }

        $schedules = RecipeSchedule::with('user')
            // ->published()
            ->whereDate('schedule_date', '>=', Carbon::today()->toDateString())
            ->orderBy('created_at', 'desc')
            ->get()
            ->groupBy(function ($val) {
                return Carbon::parse($val->schedule_date)->format('Y-m-d');
            })->map(function ($events, $date) use ($request) {
                return $events->groupBy('user_id')
                    ->map(function ($events) use ($date, $request) {
                        return [
                            'schedules' => $events
                        ];
                    });
            });

        if ($schedules) {
            $arr = [];

            foreach ($schedules as $key => $value) {
                foreach ($value as $sch) {
                    array_push($arr, $sch['schedules'][0]);
                }
            }

            $collection = collect($arr);

            $chunk = $collection->forPage(1, 5);

            $paginator = new LengthAwarePaginator(
                $collection->forPage($page, 5)->values(),
                $collection->count(),
                5,
                $page,
                ['path' => url('api/schedule/explore')]
            );

            return response()->json($paginator);
        }
    
        return response()->json('');
    }

    public function addSchedule(Request $request)
    {
        $user = $request->user();

        $request->validate([
            'user_id' => 'required|numeric',
            'date' => 'required|date_format:Y-m-d'
        ]);

        $schedules = RecipeSchedule::published()
            ->where('user_id', $request->input('user_id'))
            ->whereDate('schedule_date', '=', $request->input('date'))
            ->orderBy('schedule_date', 'asc')
            ->orderBy('shift', 'asc')
            ->get();

        if ($schedules->isEmpty()) {
            return response()->json(['error' => 'Jadwal tidak ditemukan'], 405);
        }

        if ($user->id == $request->input('user_id')) {
            return response()->json(['error' => 'Tidak bisa duplikat jadwal sendiri'], 405);
        }

        return \DB::transaction(function () use ($request, $user, $schedules) {
            foreach ($schedules as $sched) {
                $oldschedule = $this->checkSchedule($user->id, $sched->schedule_date, $sched->shift);

                if ($oldschedule->isEmpty()) {
                    $newsched = $sched->replicate();
                    $newsched->user_id = $user->id;
                    $newsched->notification = 0;
                    if ($newsched->notif_time == '') {
                        $newsched->notif_time = NotificationTimeCounter::countTime(
                            $newsched->alt_recipe,
                            $newsched->schedule_date,
                            $newsched->schedule_time
                        );
                    }
                    
                    $newsched->save();
                } else {
                    $id = $oldschedule->pluck('id');
                    $recipe_ids = [];
                    foreach ($sched->alt_recipe as $recipe) {
                        $recipe_ids[] = $recipe->id;
                    }

                    $temp = RecipeSchedule::find($id[0]);
                    $temp->schedule_time = $sched->schedule_time;
                    $temp->alt_recipe = $recipe_ids;
                    $temp->notification = 0;
                    $temp->notif_time = NotificationTimeCounter::countTime(
                        $recipe_ids,
                        $sched->schedule_date,
                        $sched->schedule_time
                    );
                    $temp->save();
                }
            }

            return response()->json('Jadwal masak berhasil ditambah');
        });
    }

    private function checkSchedule($user, $date, $shift)
    {
        $checker = RecipeSchedule::published()
            ->where('user_id', $user)
            ->whereDate('schedule_date', '=', $date)
            ->where('shift', $shift)
            ->get();

        return $checker;
    }

    public function confirmSchedule(Request $request)
    {
        $user = $request->user();

        $request->validate([
            'date' => 'required|date_format:Y-m-d'
        ]);

        $checker = $user->schedule()
            ->whereDate('schedule_date', '=', $request->input('date'))
            ->get();

        if ($checker && count($checker) > 0) {
            return response()->json(false);
        }

        return response()->json(true);
    }
}
