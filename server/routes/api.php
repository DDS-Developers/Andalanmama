<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('recipe', 'RecipeController@index');
Route::get('recipe/favourite', 'RecipeController@favourite');
Route::get('recipe/andalan', 'RecipeController@adminRecipe');
Route::get('recipe/{recipe}', 'RecipeController@show');
Route::get('recipe/download/{recipe}', 'RecipeController@downloadRecipe');
Route::get('recipe/latest/andalan', 'RecipeController@adminLatest');
Route::post('recipe/filter', 'RecipeController@filter');
Route::get('recipe/comment/{recipe}', 'CommentController@getCommentFromRecipe');
Route::post('recipe/comment/{recipe}', 'CommentController@postComment');

Route::put('comment/{comment}', 'CommentController@updateComment');
Route::delete('comment/{comment}', 'CommentController@deleteComment');

Route::get('tag/popular', 'TagController@popular');
Route::get('tag', 'TagController@index');

Route::post('authenticate', 'Auth\\SocialController@authenticate');
Route::post('login', 'Auth\UserController@login');
Route::post('register', 'Auth\RegisterController@create');
Route::post('forgot-password', 'Auth\ForgotPasswordController@requestCode');
Route::post('change-password', 'Auth\ResetPasswordController@changePassword');

Route::get('article/latest', 'BlogController@latest');
Route::get('article/latest/single', 'BlogController@topLatest');
Route::get('article/highlight', 'BlogController@highlight');
Route::get('article/highlight/single', 'BlogController@topHighlight');
Route::get('article/list', 'BlogController@blogList');
Route::get('article', 'BlogController@index')->name('blog.index');
Route::get('article/{blog}', 'BlogController@show')->name('blog.show');
Route::get('blog/slug-{blog}', 'BlogController@showBySlug')->name('blog.slug');

Route::get('book', 'BookController@index');
Route::get('book/favorite-recipe', 'BookController@favourite');
Route::get('book/latest/andalan', 'BookController@adminLatest');
Route::get('book/latest/andalan/single', 'BookController@singleLatest');
Route::get('book/{id}', 'BookController@show');

Route::get('explore/highlight', 'Explore\RecipeController@getHighlight');
Route::get('explore/recommend', 'Explore\RecipeController@getRecommend');
Route::get('explore/popular', 'Explore\RecipeController@getAdminPopular');
Route::get('explore/popular/likes', 'Explore\RecipeController@getPopular');
Route::get('explore/recent-publish', 'Explore\RecipeController@getUserLatestRecipe');
Route::get('explore/recent', 'Explore\RecipeController@getLatestRecipe');
Route::get('explore/recent-book', 'Explore\BookController@recent');

Route::post('search/recipe', 'RecipeController@search');
Route::post('search/book', 'BookController@search');
Route::post('search/user', 'UserController@search');

Route::get('banner', 'BannerController@getLatestBanner');
Route::get('banner/app', 'BannerController@getAppBanner');
Route::get('nominations', 'NominationsController@getNominations');
Route::get('nomination/{id}', 'NominationsController@show');
Route::get('campaign', 'CampaignController@show');

Route::group(['prefix' => 'user/{user}', 'namespace' => 'User'], function () {
    Route::resource('collection', 'BookController')->only('index', 'show');
    Route::resource('recipe', 'RecipeController')->only('index', 'show');
    Route::get('profile', 'UserController@show');
});

Route::group(['middleware' => 'auth:api'], function () {
    Route::post('upload', 'UploadController@upload');
    Route::post('upload-avatar', 'UploadController@avatarUpload');
    Route::post('upload-blog', 'UploadController@blogUpload');
    Route::post('upload-recipe-admin', 'UploadController@recipeAdminUpload');
    Route::post('upload-tag', 'UploadController@tagUpload');
    Route::post('upload-mail', 'UploadController@mailUpload');
    Route::post('upload-banner', 'UploadController@bannerUpload');
    Route::post('upload-forum', 'UploadController@forumUpload');

    Route::get('schedule/all', 'ScheduleController@getFullSchedule');
    Route::get('schedule/recipe', 'ScheduleController@recipeList');
    Route::post('schedule/find', 'ScheduleController@getSchedule');
    Route::get('schedule/today', 'ScheduleController@getTodaySchedule');
    Route::post('schedule/today', 'ScheduleController@filterTodaySchedule');
    Route::get('schedule/tomorrow', 'ScheduleController@getTomorrowSchedule');
    Route::post('schedule/view', 'ScheduleController@viewSchedule');
    Route::get('schedule/explore', 'ScheduleController@exploreSchedule');
    Route::post('schedule/copy', 'ScheduleController@addSchedule');
    Route::post('schedule/check', 'ScheduleController@confirmSchedule');

    Route::get('settings', 'UserController@getSetting');
    Route::post('settings', 'UserController@setSetting');
    Route::post('device', 'UserController@updateDevice');

    Route::resource('article', 'BlogController')->only('store', 'update', 'destroy');

    Route::post('bookmark/{id}', 'BookmarkController');
    Route::post('like/{id}', 'LikeController');
    Route::post('nomination/vote/{id}', 'NominationsController@vote');

    Route::get('forum', 'ForumController@index');
    Route::get('forum/highlight', 'ForumController@getHighlight');
    Route::get('forum/{id}', 'ForumController@show');

    Route::post('forum/reply/{id}', 'ReplyController@postReply');
    Route::delete('reply/{reply}', 'ReplyController@deleteReply');

    //update share points for user
    Route::get('sharerecipepoints', 'RecipeController@pointsShareRecipe');

    // Private routing for profile
    Route::group(['prefix' => 'profile', 'namespace' => 'Profile'], function () {
        Route::post('collection/{collection}/recipe/{id}', 'BookController@removeRecipe');
        Route::resource('collection', 'BookController')->only('index', 'store', 'update', 'destroy');
        Route::post('recipe/draft', 'RecipeController@draftRecipe');
        Route::resource('recipe', 'RecipeController')->except('edit', 'create');
        Route::resource('inbox', 'InboxController')->only('index');
        Route::resource('recipe', 'RecipeController')->except('edit', 'create');

        Route::post('schedule/status', 'ScheduleController@updateStatus');
        Route::post('schedule/title', 'ScheduleController@updateTitle');
        Route::resource('schedule', 'ScheduleController')->only('store', 'update', 'destroy');

        Route::get('bookmark', 'BookmarkController@index');

        Route::get('/', 'UserController@index');
        Route::put('/', 'UserController@update');
        
        Route::post('/changepwd', 'UserController@updatePassword');
    });
});
//test
