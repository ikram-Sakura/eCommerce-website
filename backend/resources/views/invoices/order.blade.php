<!DOCTYPE html>
<html>
<head>
    <title>Invoice #{{ $order->id }}</title>
    <style>
        body { font-family: DejaVu Sans, sans-serif; }
        .invoice-box { max-width: 800px; margin: auto; padding: 30px; border: 1px solid #eee; }
        .logo { width: 100%; text-align: center; margin-bottom: 20px; }
        .invoice-details { margin-bottom: 30px; }
        table { width: 100%; line-height: inherit; text-align: left; border-collapse: collapse; }
        table td, table th { padding: 8px; vertical-align: top; }
        table th { border-bottom: 2px solid #ddd; font-weight: bold; }
        .text-right { text-align: right; }
        .total-row { font-weight: bold; border-top: 2px solid #ddd; }
    </style>
</head>
<body>
    <div class="invoice-box">
        <div class="logo">
            <h2>FurniSphere</h2>
            <p>123 Furniture Street, Design City</p>
        </div>
        
        <div class="invoice-details">
            <div style="float: left;">
                <strong>Bill To:</strong><br>
                {{ $order->user->name }}<br>
                {{ $order->shipping_address }}
            </div>
            <div style="float: right;">
                <strong>Invoice #:</strong> {{ $order->id }}<br>
                <strong>Date:</strong> {{ $order->created_at->format('M d, Y') }}<br>
                <strong>Status:</strong> {{ ucfirst($order->status) }}
            </div>
            <div style="clear: both;"></div>
        </div>
        
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th class="text-right">Total</th>
                </tr>
            </thead>
            <tbody>
                @foreach($order->items as $item)
                <tr>
                    <td>{{ $item->product->name }}</td>
                    <td>${{ number_format($item->price, 2) }}</td>
                    <td>{{ $item->quantity }}</td>
                    <td class="text-right">${{ number_format($item->price * $item->quantity, 2) }}</td>
                </tr>
                @endforeach
                <tr class="total-row">
                    <td colspan="3" class="text-right"><strong>Total:</strong></td>
                    <td class="text-right">${{ number_format($order->total, 2) }}</td>
                </tr>
            </tbody>
        </table>
        
        <div style="margin-top: 30px; text-align: center;">
            <p>Thank you for your business!</p>
        </div>
    </div>
</body>
</html>