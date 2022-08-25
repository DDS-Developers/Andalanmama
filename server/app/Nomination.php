<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Nomination extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'nominations';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'description',
        'image',
        'status',
        'ig_id',
        'ig_name',
        'ig_avatar',
        'sequince'
    ];

    protected $hidden = [
        'updated_at',
        'created_at',
        'status'
    ];

    protected $appends = ['voter_count'];

    public function voters()
    {
        return $this->hasMany(Voter::class);
    }

    public function getVoterCountAttribute()
    {
        $count = $this->voters()->count();

        if (!$count) {
            return 0;
        }

        return $count;
    }
}
