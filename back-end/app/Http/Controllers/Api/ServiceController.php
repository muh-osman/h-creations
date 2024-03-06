<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Service::all();
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
        $service = Service::create([
            'service' => $request->service,
        ]);

        return response()->json([
            'status' => 'success',
            'message' => "Service created successfully",
            'service' => $service
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Service $service)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Service $service)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Service $service)
    {
        $service->update([
            'service' => $request->service,
        ]);

        return response()->json([
            'status' => 'success',
            'message' => "Service updated successfully",
            'service' => $service
        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Service $service)
    {
        //
    }

    // handle the bulk update
    public function updateServices(Request $request)
    {
        $services = $request->input('services');
        try {
            foreach ($services as $service) {
                $serviceModel = Service::find($service['id']);
                $serviceModel->service = $service['service'];
                $serviceModel->save();
            }
            return response()->json(['message' => 'Services updated successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to update services'], 500);
        }
    }
}
