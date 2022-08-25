<?php

namespace App\Jobs;

use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Edujugon\PushNotification\Facades\PushNotification;
use App\RecipeSchedule;

class MyScheduleNotification implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        \DB::transaction(function () {
            $push = PushNotification::setService('fcm');

            RecipeSchedule::where('notification', 0)
                ->whereDate('notif_time', Carbon::now('Asia/Jakarta')->format('Y-m-d'))
                ->chunk(100, function ($schedules) {
                    foreach ($schedules as $schedule) {
                        if ($schedule->user->notification == 1 && $schedule->user->device_token) {
                            if ($schedule->time == Carbon::now('Asia/Jakarta')->format('H.i')) {
                                $push->setMessage([
                                    'notification' => [
                                        'title'=> 'Waktu masak sudah tiba!',
                                        'body'=> 'Sudah waktunya masak nih! Yuk kita lihat resepnya',
                                        'sound' => 'default'
                                    ],
                                    'data' => [
                                        'id' => $schedule->id,
                                        'title'=> 'Waktu masak sudah tiba!',
                                        'body'=> 'Sudah waktunya masak nih! Yuk kita lihat resepnya',
                                        'topic' => 'my_schedule',
                                        'schedule' => $schedule
                                    ]
                                ])
                                ->setDevicesToken($schedule->user->device_token)
                                ->send();

                                $schedule->notification = 1;
                                $schedule->save();
                            }
                        }
                    }
                });
                
            return true;
        });
    }
}
