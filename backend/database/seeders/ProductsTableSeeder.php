<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductsTableSeeder extends Seeder
{
    public function run()
    {
        $products = [
            // Sofas (category_id: 1)
            [
                'name' => 'Modern Leather Sofa',
                'description' => 'Luxurious leather sofa with comfortable cushions and modern design. Perfect for your living room.',
                'price' => 899.99,
                'category_id' => 1,
                'stock' => 15,
                'image_url' => 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'featured' => true
            ],
            [
                'name' => 'Sectional Sofa Set',
                'description' => 'Spacious sectional sofa with chaise lounge. Perfect for large living rooms and family gatherings.',
                'price' => 1499.99,
                'category_id' => 1,
                'stock' => 8,
                'image_url' => 'https://images.unsplash.com/photo-1493663284031-b7e3aaa4c4b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'featured' => true
            ],
            [
                'name' => 'Classic Fabric Sofa',
                'description' => 'Comfortable fabric sofa with classic design and sturdy frame.',
                'price' => 699.99,
                'category_id' => 1,
                'stock' => 10,
                'image_url' => 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'featured' => false
            ],
            [
                'name' => 'Convertible Sleeper Sofa',
                'description' => 'Sofa that easily converts into a bed, ideal for guests.',
                'price' => 999.99,
                'category_id' => 1,
                'stock' => 6,
                'image_url' => 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'featured' => false
            ],
            [
                'name' => 'Mid-Century Sofa',
                'description' => 'Retro-inspired sofa with tufted cushions and wooden legs.',
                'price' => 799.99,
                'category_id' => 1,
                'stock' => 12,
                'image_url' => 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'featured' => true
            ],
            [
                'name' => 'Recliner Sofa',
                'description' => 'Reclining sofa with plush seating and adjustable headrests.',
                'price' => 1199.99,
                'category_id' => 1,
                'stock' => 7,
                'image_url' => 'https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'featured' => false
            ],

            // Chairs (category_id: 2)
            [
                'name' => 'Ergonomic Office Chair',
                'description' => 'Adjustable office chair with lumbar support and breathable mesh. Perfect for long work hours.',
                'price' => 249.99,
                'category_id' => 2,
                'stock' => 20,
                'image_url' => 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'featured' => true
            ],
            [
                'name' => 'Accent Armchair',
                'description' => 'Stylish accent chair with velvet upholstery and tapered legs. Adds elegance to any room.',
                'price' => 349.99,
                'category_id' => 2,
                'stock' => 12,
                'image_url' => 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'featured' => false
            ],
            [
                'name' => 'Dining Chair Set',
                'description' => 'Set of 4 dining chairs with cushioned seats and wooden frames.',
                'price' => 399.99,
                'category_id' => 2,
                'stock' => 16,
                'image_url' => 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'featured' => false
            ],
            [
                'name' => 'Rocking Chair',
                'description' => 'Classic wooden rocking chair for relaxation.',
                'price' => 199.99,
                'category_id' => 2,
                'stock' => 9,
                'image_url' => 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'featured' => false
            ],
            [
                'name' => 'Lounge Chair',
                'description' => 'Comfortable lounge chair with wide seat and soft cushions.',
                'price' => 299.99,
                'category_id' => 2,
                'stock' => 11,
                'image_url' => 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'featured' => true
            ],
            [
                'name' => 'Swivel Chair',
                'description' => 'Modern swivel chair with adjustable height and padded seat.',
                'price' => 179.99,
                'category_id' => 2,
                'stock' => 14,
                'image_url' => 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'featured' => false
            ],

            // Tables (category_id: 3)
            [
                'name' => 'Wooden Dining Table',
                'description' => 'Solid wood dining table with elegant finish, seats up to 6 people. Perfect for family dinners.',
                'price' => 599.99,
                'category_id' => 3,
                'stock' => 10,
                'image_url' => 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'featured' => true
            ],
            [
                'name' => 'Coffee Table with Storage',
                'description' => 'Modern coffee table with hidden storage compartment and durable surface. Functional and stylish.',
                'price' => 299.99,
                'category_id' => 3,
                'stock' => 18,
                'image_url' => 'https://images.unsplash.com/photo-1533090368676-1fd25485db88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'featured' => false
            ],
            [
                'name' => 'Glass Top Side Table',
                'description' => 'Elegant side table with glass top and metal frame.',
                'price' => 199.99,
                'category_id' => 3,
                'stock' => 13,
                'image_url' => 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'featured' => false
            ],
            [
                'name' => 'Round Marble Table',
                'description' => 'Luxurious round table with marble top and gold legs.',
                'price' => 499.99,
                'category_id' => 3,
                'stock' => 7,
                'image_url' => 'https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'featured' => true
            ],
            [
                'name' => 'Foldable Picnic Table',
                'description' => 'Portable foldable table for outdoor use.',
                'price' => 129.99,
                'category_id' => 3,
                'stock' => 20,
                'image_url' => 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'featured' => false
            ],
            [
                'name' => 'Console Table',
                'description' => 'Slim console table for entryways and hallways.',
                'price' => 249.99,
                'category_id' => 3,
                'stock' => 15,
                'image_url' => 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'featured' => false
            ],

            // Beds (category_id: 4)
            [
                'name' => 'King Size Bed Frame',
                'description' => 'Sturdy king size bed frame with upholstered headboard and storage options. Makes your bedroom luxurious.',
                'price' => 1299.99,
                'category_id' => 4,
                'stock' => 8,
                'image_url' => 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'featured' => false
            ],
            [
                'name' => 'Queen Platform Bed',
                'description' => 'Modern platform bed with clean lines and sturdy construction. No box spring needed.',
                'price' => 799.99,
                'category_id' => 4,
                'stock' => 14,
                'image_url' => 'https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'featured' => true
            ],
            [
                'name' => 'Twin Bed Frame',
                'description' => 'Simple twin bed frame, perfect for kids or guest rooms.',
                'price' => 399.99,
                'category_id' => 4,
                'stock' => 10,
                'image_url' => 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'featured' => false
            ],
            [
                'name' => 'Bunk Bed',
                'description' => 'Space-saving bunk bed for children\'s rooms.',
                'price' => 599.99,
                'category_id' => 4,
                'stock' => 7,
                'image_url' => 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'featured' => false
            ],
            [
                'name' => 'Canopy Bed',
                'description' => 'Elegant canopy bed with decorative posts.',
                'price' => 1099.99,
                'category_id' => 4,
                'stock' => 5,
                'image_url' => 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'featured' => true
            ],
            [
                'name' => 'Storage Bed',
                'description' => 'Bed frame with built-in drawers for extra storage.',
                'price' => 899.99,
                'category_id' => 4,
                'stock' => 9,
                'image_url' => 'https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'featured' => false
            ],

            // Storage (category_id: 5)
            [
                'name' => 'Bookshelf with Doors',
                'description' => 'Tall bookshelf with glass doors to protect your books while displaying them beautifully.',
                'price' => 449.99,
                'category_id' => 5,
                'stock' => 9,
                'image_url' => 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'featured' => false
            ],
            [
                'name' => '3-Drawer Dresser',
                'description' => 'Compact dresser with three spacious drawers.',
                'price' => 299.99,
                'category_id' => 5,
                'stock' => 11,
                'image_url' => 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'featured' => false
            ],
            [
                'name' => 'Wardrobe Closet',
                'description' => 'Large wardrobe closet with hanging space and shelves.',
                'price' => 699.99,
                'category_id' => 5,
                'stock' => 6,
                'image_url' => 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'featured' => true
            ],
            [
                'name' => 'Shoe Rack',
                'description' => 'Multi-tier shoe rack for organizing footwear.',
                'price' => 89.99,
                'category_id' => 5,
                'stock' => 18,
                'image_url' => 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'featured' => false
            ],
            [
                'name' => 'Storage Ottoman',
                'description' => 'Upholstered ottoman with hidden storage compartment.',
                'price' => 149.99,
                'category_id' => 5,
                'stock' => 14,
                'image_url' => 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'featured' => false
            ],
            [
                'name' => 'Wall Mounted Shelves',
                'description' => 'Set of 3 wall mounted shelves for books and decor.',
                'price' => 99.99,
                'category_id' => 5,
                'stock' => 20,
                'image_url' => 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'featured' => true
            ],

            // Accessories (category_id: 6)
            [
                'name' => 'Decorative Throw Pillows',
                'description' => 'Set of 3 decorative throw pillows with various patterns and textures. Adds comfort and style to any sofa.',
                'price' => 89.99,
                'category_id' => 6,
                'stock' => 25,
                'image_url' => 'https://unsplash.com/photos/a-stuffed-animal-on-a-table-5srXDK62hSM',
                'featured' => false
            ],
            [
                'name' => 'Table Lamp',
                'description' => 'Modern table lamp with adjustable brightness.',
                'price' => 59.99,
                'category_id' => 6,
                'stock' => 17,
                'image_url' => 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'featured' => false
            ],
            [
                'name' => 'Wall Art Set',
                'description' => 'Set of 2 framed wall art pieces for living room or bedroom.',
                'price' => 129.99,
                'category_id' => 6,
                'stock' => 13,
                'image_url' => 'https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'featured' => true
            ],
            [
                'name' => 'Area Rug',
                'description' => 'Soft area rug with geometric pattern.',
                'price' => 199.99,
                'category_id' => 6,
                'stock' => 10,
                'image_url' => 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'featured' => false
            ],
            [
                'name' => 'Curtain Set',
                'description' => 'Pair of blackout curtains for bedroom or living room.',
                'price' => 79.99,
                'category_id' => 6,
                'stock' => 22,
                'image_url' => 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'featured' => false
            ],
            [
                'name' => 'Vase Decor',
                'description' => 'Ceramic vase for flowers or decorative branches.',
                'price' => 39.99,
                'category_id' => 6,
                'stock' => 30,
                'image_url' => 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'featured' => true
            ],
        ];

        foreach ($products as $product) {
            DB::table('products')->insert([
                'name' => $product['name'],
                'description' => $product['description'],
                'price' => $product['price'],
                'category_id' => $product['category_id'],
                'stock' => $product['stock'],
                'image_url' => $product['image_url'],
                'featured' => $product['featured'],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}