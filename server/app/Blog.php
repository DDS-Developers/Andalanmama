<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Blog extends Model
{
    const DRAFT = 0;
    const PUBLISHED = 1;
    const HIGHLIGHT = 1;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'slug',
        'title',
        'body',
        'attachment',
        'user_id',
        'status',
        'publish_at',
        'highlight',
        'highlight_attachment',
        'meta_title',
        'meta_desc'
    ];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['publish_at'];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['image', 'highlight_image'];

    public static function boot()
    {
        parent::boot();
        static::observe(Observers\BlogObserver::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function getImageAttribute()
    {
        if (!$this->attachment) {
            return "";
        }
        return Storage::cloud()->url($this->attachment);
    }

    public function getHighlightImageAttribute()
    {
        if (!$this->highlight_attachment) {
            return "";
        }
        return Storage::cloud()->url($this->highlight_attachment);
    }

    public function scopePublished($query)
    {
        return $query->where('status', self::PUBLISHED);
    }

    public function related()
    {
        return Blog::published()
            ->with('user')
            ->where('id', '!=', $this->id)
            ->take(3)->get();
    }
}
