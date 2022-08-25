<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Spatie\EloquentSortable\Sortable;
use Spatie\EloquentSortable\SortableTrait;

class RecipeIngredient extends Model implements Sortable
{
    use SortableTrait;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'recipe_ingredients';

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'recipe_id',
        'ingredient',
        'type'
    ];

    public $sortable = [
        'order_column_name' => 'order_column',
        'sort_when_creating' => true,
    ];

    protected $appends = ['id'];

    public function buildSortQuery()
    {
        return static::query()->where('recipe_id', $this->recipe_id);
    }

    public function recipe()
    {
        return $this->belongsTo(Recipe::class);
    }

    public function getIdAttribute()
    {
        return $this->order_column;
    }
}
