<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Edujugon\PushNotification\Facades\PushNotification;

class NotificationGeneral implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $title;
    public $body;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($title, $body)
    {
        $this->title = $title;
        $this->body = $body;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $title = $this->title;
        $body = $this->body;

        $push = PushNotification::setService('fcm');
            $push->setMessage([
                'notification' => [
                    'title'=> $title,
                    'body'=> $body,
                    'sound' => 'default'
                ],
                'data' => [
                    'title' => $title,
                    'body' => $body
                ]
            ])
            ->sendByTopic('general');
    }
}
