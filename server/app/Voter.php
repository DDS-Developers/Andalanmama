<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Voter extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'nomination_voter';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'nomination_id'
    ];

    public function nomination()
    {
        return $this->belongsTo(Nominations::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
