<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::prefix('web-admin')->namespace('Admin')->group(function () {
    Route::group(['middleware' => 'auth:web'], function () {
        Route::get('/', 'DashboardController')->name('dashboard');
        Route::get('profile/admin/{user}', 'AdminController@edit');
        Route::put('profile/admin/{user}', 'AdminController@update')->name('admin.update');
        Route::get('user/points-history/{user}', 'UserController@checkPointHistory')->name('user.points');
        Route::resource('user', 'UserController')->except('show');

        Route::get('recipe/admin', 'RecipeController@index');
        Route::post('recipe/{recipe}/highlight', 'RecipeController@updateHighlight')->name('highlight.update');
        Route::post('recipe/{recipe}/recommend', 'RecipeController@updateRecommend')->name('recommend.update');
        Route::get('recipe/pending', 'RecipeController@index')->name('recipe.pending');
        Route::put('recipe/pending/{recipe}', 'RecipeController@publishRecipe')->name('recipe.pending.publish');
        Route::resource('recipe', 'RecipeController');

        Route::get('tag/main', 'TagController@listMainTags')->name('tag.main');
        Route::put('tag/main', 'TagController@setMainTags')->name('tag.main.update');
        Route::resource('tag', 'TagController')->except('show');
        
        Route::resource('blog', 'BlogController')->except('show');

        Route::resource('inbox', 'InboxController');
        Route::get('book/admin', 'BookController@index')->name('admin.recipebooklist');
        Route::get('book/pending', 'BookController@index')->name('pending');
        Route::put('book/pending/{book}', 'BookController@publishBook')->name('pending.publish');
        Route::resource('book', 'BookController');

        Route::get('comment', 'CommentController@index');
        Route::delete('comment/{comment}', 'CommentController@destroy')->name('comment.destroy');

        Route::resource('forum', 'ForumController')->except('show');
        Route::resource('reply', 'ReplyController');
        
        Route::get('sitemap/create', 'SitemapController@createSitemap');

        //delete all non-admin schedule, careful
        Route::get('schedule/clear', 'ScheduleController@cleaningschedule');

        //add current user points for register, use only once
        Route::get('register/old', 'UserController@addRegisterPoints');

        //2nd phase, fix the google register still 0 point
        Route::get('register/google', 'UserController@addRegisterPointsGoogle');

        //fix recipe that dont have pdf yet for admin recipe
        Route::get('recipe/pdfadmin', 'RecipeController@dispatchPDF');

        Route::resource('banner', 'BannerController')->except('show');
        Route::get('reply', 'ReplyController@index');
        Route::delete('reply/{reply}', 'ReplyController@destroy')->name('reply.destroy');
    });

    Route::get('login', 'LoginController@loginForm')->name('login');
    Route::get('logout', 'LogoutController')->name('logout');
    Route::post('login', 'LoginController@login');
});

if (env('APP_ENV') === 'production') {
    Route::post('upload', 'UploadController@upload');
    Route::post('upload-avatar', 'UploadController@avatarUpload');
    Route::post('upload-blog', 'UploadController@blogUpload');
    Route::post('upload-recipe-admin', 'UploadController@recipeAdminUpload');
    Route::post('upload-tag', 'UploadController@tagUpload');
    Route::post('upload-mail', 'UploadController@mailUpload');
    Route::post('upload-banner', 'UploadController@bannerUpload');
    Route::post('upload-forum', 'UploadController@forumUpload');
}

Route::get('recipe/detail/{id}', 'RecipeController@shareRecipe');
Route::get('article/detail/{id}', 'BlogController@shareArticle');
Route::get('/', 'AppController@index');

Route::get('/{any}', function ($any) {
    return file_get_contents(public_path('index.html'));
})->where('any', '.*');
