<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class RecipeBook extends Model
{
    use Searchable;
    const PUBLISHED = 1;
    public $asYouType = true;
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'recipe_books';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'title',
        'status',
        'recipes',
        'views',
        'approved',
        'approved_at'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'created_at',
        'updated_at',
        'approved',
        'approved_at'
    ];

    protected $casts = [
        'recipes' => 'array',
    ];

    public function getRecipesAttribute($value)
    {
        return collect(json_decode($value))
            ->map(function ($item) {
                return Recipe::with('user')->where('id', $item)->first();
            })
            ->filter(function ($value, $key) {
                return $value != null;
            })->values()->all();
    }

    public function getRecipesList()
    {
        $list = $this->recipes;

        return collect($list)
            ->map(function ($item) {
                return Recipe::with('user')->where('id', $item)->first();
            })
            ->filter(function ($value, $key) {
                return $value != null;
            })->values()->all();
    }

    public function scopePublished($query)
    {
        return $query->where('status', self::PUBLISHED)
            ->whereNotNull('approved_at');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function toSearchableArray()
    {
        return [
            $this->getKeyName() => $this->getKey(),
            'name' => $this->title
        ];
    }
}
