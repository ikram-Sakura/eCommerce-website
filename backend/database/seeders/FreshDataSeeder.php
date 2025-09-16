<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FreshDataSeeder extends Seeder
{
    public function run()
    {
        // First, clear the tables (though fresh migrate already does this)
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('products')->truncate();
        DB::table('categories')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        // Insert categories
        $categories = [
            ['name' => 'Sofas', 'slug' => 'sofas', 'description' => 'Comfortable and stylish sofas for your living room'],
            ['name' => 'Chairs', 'slug' => 'chairs', 'description' => 'Ergonomic and elegant chairs for every room'],
            ['name' => 'Tables', 'slug' => 'tables', 'description' => 'Functional and beautiful tables for dining and more'],
            ['name' => 'Beds', 'slug' => 'beds', 'description' => 'Comfortable beds for restful sleep'],
            ['name' => 'Storage', 'slug' => 'storage', 'description' => 'Smart storage solutions for your home'],
            ['name' => 'Accessories', 'slug' => 'accessories', 'description' => 'Decorative accessories to complete your space'],
        ];

        foreach ($categories as $category) {
            DB::table('categories')->insert([
                'name' => $category['name'],
                'slug' => $category['slug'],
                'description' => $category['description'],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        // Insert products
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