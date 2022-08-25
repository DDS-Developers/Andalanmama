<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class RecipeStep extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'recipe_steps';

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
       'recipe_id',
       'step',
       'title',
       'description',
       'attachment'
    ];

    protected $appends = ['image', 'id'];

    public function recipe()
    {
        return $this->belongsTo(Recipe::class);
    }

    public function getImageAttribute()
    {
        if (!$this->attachment) {
            return '';
        }

        if (filter_var($this->attachment, FILTER_VALIDATE_URL)) {
            return $this->attachment;
        }

        return Storage::cloud()->url($this->attachment);
    }

    public function getIdAttribute()
    {
        return $this->step;
    }
}
