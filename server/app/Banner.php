<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Banner extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'banner';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'url',
        'attachment',
        'status',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['image'];

    public function getImageAttribute()
    {
        if (!$this->attachment) {
            return "";
        }
        return Storage::cloud()->url($this->attachment);
    }

    public function getUrlAttribute($value)
    {
        return json_decode($value, true);
    }
}
