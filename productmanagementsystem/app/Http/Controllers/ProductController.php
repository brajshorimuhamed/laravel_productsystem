<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all();
        return response()->json($products);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $products = new Product();

        $products->product_name = $request->input('product_name');
        $products->category = $request->input('category');
        $products->eksporti = $request->input('eksporti');
        $products->importi = $request->input('importi');

        $products->save();
        return response()->json($products);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $product = Product::find($id);
        if ($product) {
            return response()->json([
                'status' => '200',
                'product' => $product
            ], 200);
        } else {
            return response()->json([
                'status' => '404',
                'message' => "No Such Product Found"
            ], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $product = Product::find($id);
        if ($product) {
            $product->product_name = $request->product_name;
            $product->category = $request->category;
            $product->eksporti = $request->eksporti;
            $product->importi = $request->importi;

            $product->update();

            return response()->json(['message' => "Product Registered Successfully"], 200);
        }
        else {
            return response().json(['message' => "Product Not Found"], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $product = Product::find($id);
        if ($product) {
            $product->delete();
            return response()->json(['message' => "Product Deleted Successfully"], 200);
        } else {
            return response()->json(['message' => "Product Not Found!"], 404);
        }
    }
}
