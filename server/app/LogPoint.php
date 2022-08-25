<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LogPoint extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'logpoints';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'event',
        'point_get',
        'point_spend'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
