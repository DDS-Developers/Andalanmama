<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Support\Facades\Storage;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;
use Laravel\Scout\Searchable;

class User extends Authenticatable
{
    use Notifiable;
    use Searchable;
    use SoftDeletes;

    const USER = 'user';
    const ADMIN = 'admin';
    public $asYouType = true;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username',
        'fullname',
        'email',
        'birthday',
        'description',
        'phone',
        'avatar',
        'password',
        'type',
        'reset_code',
        'reset_code_valid_at',
        'api_token',
        'device_token',
        'newsletter',
        'address',
        'points',
        'cumulative_points',
        'notification'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'email',
        'birthday',
        'description',
        'phone',
        'password',
        'type',
        'reset_code',
        'reset_code_valid_at',
        'api_token',
        'device_token',
        'created_at',
        'updated_at',
        'deleted_at',
        'newsletter',
        'address',
        'points',
        'cumulative_points',
        'notification'
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['image'];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [

    ];

    public function recipe()
    {
        return $this->hasMany(Recipe::class);
    }

    public function bookmark()
    {
        return $this->belongsToMany(Recipe::class, 'bookmarks');
    }

    public function like()
    {
        return $this->belongsToMany(Recipe::class, 'likes');
    }

    public function recipebook()
    {
        return $this->hasMany(RecipeBook::class);
    }

    public function blog()
    {
        return $this->hasMany(Blog::class);
    }

    public function schedule()
    {
        return $this->hasMany(RecipeSchedule::class);
    }

    public function inboxevent()
    {
        return $this->hasMany(InboxEvent::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function replies()
    {
        return $this->hasMany(Reply::class);
    }

    public function forum()
    {
        return $this->hasMany(Forum::class);
    }

    public function logs()
    {
        return $this->hasMany(LogPoint::class);
    }

    public function roleToken()
    {
        $token = Str::random(80);

        $this->api_token = hash('sha256', $token);
        $this->save();

        return $token;
    }

    public function toSearchableArray()
    {
        return [
            $this->getKeyName() => $this->getKey(),
            'username' => $this->username,
            'fullname' => $this->fullname
        ];
    }

    public function getImageAttribute()
    {
        if (!$this->avatar) {
            return "";
        }

        if (filter_var($this->avatar, FILTER_VALIDATE_URL)) {
            return $this->avatar;
        }

        return Storage::cloud()->url($this->avatar);
    }
}
