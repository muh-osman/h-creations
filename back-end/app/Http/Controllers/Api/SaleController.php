<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Sale;
use Illuminate\Http\Request;

class SaleController extends Controller
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
        $sale = Sale::create([
            'sale' => $request->sale,
        ]);

        return response()->json([
            'status' => 'success',
            'message' => "Sale created successfully",
            'sale' => $sale
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Sale $sale)
    {
        $sale = Sale::findOrFail($sale->id);

        return response()->json([
            'status' => 'success',
            'sale' => $sale
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Sale $sale)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Sale $sale)
        // method post
        // http://127.0.0.1:8000/api/sale/1?_method=PATCH
    {
        $sale = Sale::findOrFail($sale->id);

        $sale->update([
            'sale' => $request->sale,
        ]);

        return response()->json([
            'status' => 'success',
            'message' => "Sale updated successfully",
            'sale' => $sale
        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Sale $sale)
    {
        //
    }
}
