<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Inbox extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'inboxes';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'message'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'updated_at'
    ];
}
