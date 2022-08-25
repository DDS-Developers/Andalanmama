<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\ApiController;
use App\Blog;
use Jaybizzle\LaravelCrawlerDetect\Facades\LaravelCrawlerDetect as Crawler;

class BlogController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $blog = Blog::with('user')
            ->published()
            ->orderBy('publish_at', 'desc')
            ->paginate($request->get('per_page', 10));

        $blog->map(function ($q) {
            $q->created_at = $q->created_at->addHours(7);
            $q->updated_at = $q->updated_at->addHours(7);

            return $q;
        });

        return response()->json($blog);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        if (is_numeric($id)) {
            $blog = Blog::with('user')
            ->published()
            ->find($id);
        } else {
            $blog = Blog::with('user')
            ->published()
            ->where('slug', $id)
            ->first();
        }

        if (!$blog) {
            return response()->json(['error' => 'Artikel tidak ditemukan'], 404);
        }

        $blog->related = $blog->related();

        return response()->json($blog);
    }

    /**
     * Display the specified resource.
     *
     * @param  string  $slug
     * @return \Illuminate\Http\Response
     */
    public function showBySlug(Request $request, $slug)
    {
        $blog = Blog::with('user')
            ->published()
            ->where('slug', $slug)
            ->orderBy('publish_at', 'desc')
            ->firstOrFail();

        return response()->json($blog);
    }

    public function highlight()
    {
        $blog = Blog::with('user')
            ->published()
            ->where('highlight', Blog::HIGHLIGHT)
            ->orderBy('publish_at', 'desc')
            ->get();
        
        $blog->map(function ($q) {
            $q->created_at = $q->created_at->addHours(7);
            $q->updated_at = $q->updated_at->addHours(7);

            return $q;
        });

        return response()->json($blog);
    }

    public function latest()
    {
        $blogs = Blog::with('user')
            ->published()
            ->where('highlight', '!=', Blog::HIGHLIGHT)
            ->orderBy('publish_at', 'desc')
            ->take(3)
            ->get();
        
        $blogs->map(function ($q) {
            $q->created_at = $q->created_at->addHours(7);
            $q->updated_at = $q->updated_at->addHours(7);

            return $q;
        });

        return response()->json($blogs);
    }

    public function topHighlight()
    {
        $blogs = Blog::with('user')
            ->published()
            ->where('highlight', Blog::HIGHLIGHT)
            ->orderBy('publish_at', 'desc')
            ->take(1)
            ->get();
        
        $blogs->map(function ($q) {
            $q->created_at = $q->created_at->addHours(7);
            $q->updated_at = $q->updated_at->addHours(7);

            return $q;
        });

        return response()->json($blogs);
    }

    public function listHighlight()
    {
        $blogs = Blog::with('user')
            ->published()
            ->where('highlight', Blog::HIGHLIGHT)
            ->orderBy('publish_at', 'desc')
            ->skip(1)
            ->take(8)
            ->get();

        $blogs->map(function ($q) {
            $q->created_at = $q->created_at->addHours(7);
            $q->updated_at = $q->updated_at->addHours(7);

            return $q;
        });

        return response()->json($blogs);
    }

    public function topLatest()
    {
        $blogs = Blog::with('user')
            ->published()
            ->where('highlight', '!=', Blog::HIGHLIGHT)
            ->orderBy('publish_at', 'desc')
            ->take(1)
            ->get();

        $blogs->map(function ($q) {
            $q->created_at = $q->created_at->addHours(7);
            $q->updated_at = $q->updated_at->addHours(7);

            return $q;
        });

        return response()->json($blogs);
    }

    public function blogList()
    {
        $blogs = Blog::with('user')
            ->published()
            ->where('highlight', '!=', Blog::HIGHLIGHT)
            ->orderBy('publish_at', 'desc')
            ->paginate(6);

        $blogs->map(function ($q) {
            $q->created_at = $q->created_at->addHours(7);
            $q->updated_at = $q->updated_at->addHours(7);

            return $q;
        });

        return response()->json($blogs);
    }

    public function shareArticle($id)
    {
        if (is_numeric($id)) {
            $blog = Blog::find($id);
        } else {
            $blog = Blog::where('slug', $id)
                ->first();
        }

        if (!$blog || $blog->status != Blog::PUBLISHED) {
            abort(404);
        }

        if (Crawler::isCrawler()) {
            $url = action('BlogController@shareArticle', ['id' => $id]);
            return view('share.article', compact('blog', 'url'));
        }

        if ($blog) {
            $related = $blog->related();
            return view('article', compact('blog', 'related'));
        }

        abort(404);
    }
}
