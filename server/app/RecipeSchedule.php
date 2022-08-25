<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class RecipeSchedule extends Model
{
    const PUBLISHED = 1;
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'recipe_schedules';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'schedule_date',
        'schedule_time',
        'shift',
        'main_recipe',
        'alt_recipe',
        'notification',
        'notif_time',
        'status',
        'title'
    ];

    protected $casts = [
        'schedule_date' => 'date',
        'alt_recipe' => 'array'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'created_at',
        'updated_at',
        'notification',
        'timen'
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['timen'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // public function getMainRecipeAttribute($value)
    // {
    //     return Recipe::where('id', $value)
    //         ->first();
    // }

    public function getAltRecipeAttribute($value)
    {
        $list = json_decode($value, true);

        $list = $this->recipeChecker($list);

        return collect($list)->map(function ($item) {
            $recipe = Recipe::where('id', $item)->first();
            if ($recipe) {
                return $recipe;
            }
        });
    }

    public function getScheduleDateAttribute($value)
    {
        return Carbon::parse($value)->toDateString();
    }

    public function scopePublished($query)
    {
        return $query->where('status', self::PUBLISHED);
    }

    private function recipeChecker($array)
    {
        foreach ($array as $key => $id) {
            $recipe = Recipe::where('id', $id)->first();
            if (!$recipe) {
                unset($array[$key]);
            }
        }

        return $array;
    }

    public function getTimenAttribute($value)
    {
        if (!$this->notif_time) {
            return "";
        }
        
        return Carbon::parse($this->notif_time)->format('H:i');
    }
}
