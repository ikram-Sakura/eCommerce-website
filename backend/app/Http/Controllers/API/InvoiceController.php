<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class InvoiceController extends Controller
{
    public function generateInvoice($orderId): JsonResponse
    {
        try {
            $order = Order::with('user', 'items.product')->findOrFail($orderId);
            
            // Authorization - users can only download their own invoices
            if (auth()->user()->role !== 'admin' && $order->user_id !== auth()->id()) {
                return response()->json(['message' => 'Unauthorized'], 403);
            }
            
            // For API, return JSON data instead of PDF
            return response()->json([
                'order' => $order,
                'message' => 'Invoice data retrieved successfully. In a real application, this would return a PDF file.'
            ]);
            
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Server error',
                'message' => $e->getMessage()
            ], 500);
        }
    }
}