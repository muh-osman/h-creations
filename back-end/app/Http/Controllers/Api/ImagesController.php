<?php

namespace App\Http\Controllers\Api;

use App\Models\Images;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;


class ImagesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Images::all();
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
        $images = new Images();
        $request->validate([
            'image' => 'required|image',
            'title' => 'required',
            'link' => 'required',
        ]);
        $images->title = $request->title;
        $images->link = $request->link;
        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $filename = date('YmdHis') . '.' . $file->getClientOriginalExtension();
            $path = 'images';
            $file->move($path, $filename);
            $images->image = url('/') . '/images/' . $filename;
        }
        $images->save();

        return response()->json([
            'status' => 'success',
            'message' => "Image created successfully",
            'image' => $images
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Images $images, $id)
    {
        return Images::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Images $images, $id, Request $request)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Images $images, $id)
    {
        $images = Images::findOrFail($id);
        $request->validate([
            'title' => 'required',
            'link' => 'required',
        ]);
        $images->title = $request->title;
        $images->link = $request->link;
        if ($request->hasFile('image')) {
            $oldpath = public_path() . '/images/' . substr($images['image'], strrpos($images['image'], '/') + 1);

            if (File::exists($oldpath)) {
                File::delete($oldpath);
            }
            $file = $request->file('image');
            $filename = date('YmdHis') . '.' . $file->getClientOriginalExtension();
            $images->image = url('/') . '/images/' . $filename;
            $path = 'images';
            $file->move($path, $filename);
        }

        $images->save();

        return response()->json([
            'status' => 'success',
            'message' => "Image edited successfully",
            'image' => $images
        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Images $images, $id)
    {
        $images = Images::findOrFail($id);
        $path = public_path() . '/images/' . substr($images['image'], strrpos($images['image'], '/') + 1);

        if (File::exists($path)) {
            File::delete($path);
        }
        $images->delete();

        return response()->json([
            'status' => 'success',
            'message' => "The image with id: " . $id . " was Deleted successfully.",
        ], 201);
    }
}
