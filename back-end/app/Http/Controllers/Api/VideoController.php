<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Video;
use Illuminate\Http\Request;

class VideoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $video = Video::create([
            'video' => $request->video,
        ]);

        return response()->json([
            'status' => 'success',
            'message' => "Video created successfully",
            'video' => $video
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Video $video)
    {
        $video = Video::findOrFail($video->id);

        return response()->json([
            'status' => 'success',
            'video' => $video
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Video $video)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Video $video)
        // method post
        // http://127.0.0.1:8000/api/video/1?_method=PATCH

    {
        $video = Video::findOrFail($video->id);

        $video->update([
            'video' => $request->video,
        ]);

        return response()->json([
            'status' => 'success',
            'message' => "Video updated successfully",
            'video' => $video
        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Video $video)
    {
        //
    }
}
