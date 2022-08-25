<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Laravel\Scout\Searchable;

class Recipe extends Model
{
    use Searchable;

    public $asYouType = true;

    const PUBLISHED = 1;
    const DRAFT = 0;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'recipes';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'name',
        'description',
        'time',
        'attachment',
        'portion',
        'status',
        'highlight',
        'recommend',
        'approved',
        'approved_at',
        'youtube',
        'slug',
        'meta_title',
        'meta_desc',
        'like_count',
        'pdflink'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'highlight',
        'recommend',
        'approved',
        'updated_at'
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['image', 'downloadpdf', 'cookduration', 'comment_count'];

    public static function boot()
    {
        parent::boot();
        static::observe(Observers\RecipeObserver::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function step()
    {
        return $this->hasMany(RecipeStep::class);
    }

    public function ingredient()
    {
        return $this->hasMany(RecipeIngredient::class);
    }

    public function bookmark()
    {
        return $this->belongsToMany(User::class, 'bookmarks');
    }

    public function like()
    {
        return $this->belongsToMany(User::class, 'likes');
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'recipe_tag');
    }

    public function bookmarked($user_id)
    {
        if ($user_id != null) {
            return $this->bookmark()->where('user_id', $user_id)->exists();
        }

        return false;
    }

    public function liked($user_id)
    {
        if ($user_id != null) {
            return $this->like()->where('user_id', $user_id)->exists();
        }

        return false;
    }

    public function createIngredient(array $ingredient)
    {
        $this->ingredient()->delete();
        $this->ingredient()->createMany($ingredient);
    }

    public function createStep(array $steps)
    {
        $this->step()->delete();
        $this->step()->createMany($steps);
    }

    public function createTags(array $tags)
    {
        if (count($tags) <= 1) {
            return;
        }

        return $this->tags()->sync(
            array_map(
                function ($item) {
                    return $item['id'];
                },
                $tags
            )
        );
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

    public function getDownloadpdfAttribute()
    {
        if (!$this->pdflink) {
            return Storage::cloud()->url('recipes/default.pdf');
        }

        if (filter_var($this->pdflink, FILTER_VALIDATE_URL)) {
            return $this->pdflink;
        }

        return Storage::cloud()->url($this->pdflink);
    }

    public function getCookdurationAttribute()
    {
        if (!$this->time) {
            return "";
        }

        $mins = $this->time % 60;

        $hour = floor($this->time / 60);

        if ($hour != 0) {
            if ($mins != 0) {
                $time = $hour." jam ".$mins." menit";
            } else {
                $time = $hour." jam";
            }
        } else {
            $time = $mins." menit";
        }

        return $time;
    }

    public function toSearchableArray()
    {
        return [
            $this->getKeyName() => $this->getKey(),
            'name' => $this->name,
            'description' => $this->description
        ];
    }

    public function scopePublished($query)
    {
        return $query->where('status', self::PUBLISHED);
            // ->where('approved', self::PUBLISHED)
            // ->whereNotNull('approved_at');
    }

    public function related()
    {
        return Recipe::published()
            ->with('user')
            ->where('id', '!=', $this->id)
            ->take(3)->get();
    }

    public function getCommentCountAttribute()
    {
        $count = $this->comments()->count();

        if (!$count) {
            return 0;
        }

        return $count;
    }
}
