<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Tag extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'tags';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'attachment',
        'status',
        'slug',
        'main'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'status',
        'created_at',
        'updated_at'
    ];

    protected $appends = ['image'];

    public function recipes()
    {
        return $this->belongsToMany(Recipe::class, 'recipe_tag');
    }

    public function getImageAttribute()
    {
        if (!$this->attachment) {
            return "";
        }

        if (filter_var($this->attachment, FILTER_VALIDATE_URL)) {
            return $this->attachment;
        }

        return Storage::cloud()->url($this->attachment);
    }
}
