<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriesTableSeeder extends Seeder
{
    public function run()
    {
        $categories = [
            [
                'name' => 'Sofas',
                'slug' => 'sofas',
                'description' => 'Comfortable and stylish sofas for your living room'
            ],
            [
                'name' => 'Chairs',
                'slug' => 'chairs',
                'description' => 'Ergonomic and elegant chairs for every room'
            ],
            [
                'name' => 'Tables',
                'slug' => 'tables',
                'description' => 'Functional and beautiful tables for dining and more'
            ],
            [
                'name' => 'Beds',
                'slug' => 'beds',
                'description' => 'Comfortable beds for restful sleep'
            ],
            [
                'name' => 'Storage',
                'slug' => 'storage',
                'description' => 'Smart storage solutions for your home'
            ],
            [
                'name' => 'Accessories',
                'slug' => 'accessories',
                'description' => 'Decorative accessories to complete your space'
            ],
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
    }
}