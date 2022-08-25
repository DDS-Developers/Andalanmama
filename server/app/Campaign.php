<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Campaign extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'webview_campaign';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'description',
        'url'
    ];

    protected $hidden = [
        'updated_at',
        'created_at',
        'status',
        'banner',
        'icon'
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['image', 'floating'];

    public function getImageAttribute()
    {
        if (!$this->banner) {
            return "";
        }
        return Storage::cloud()->url($this->banner);
    }

    public function getFloatingAttribute()
    {
        if (!$this->icon) {
            return "";
        }
        return Storage::cloud()->url($this->icon);
    }
}
