<?php

namespace Modules\Product\Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use Modules\Product\Enums\ProductStatusEnum;
use Modules\Product\Enums\ProductTypeEnum;
use Modules\Product\Models\Product;

class ProductFactory extends Factory
{

    protected $model = Product::class;
    public function definition(): array
    {
        $title = fake()->words(3, true);
        $price = fake()->numberBetween(100_000, 50_000_000);
        return [
            'title' => $title,
            'description' => fake()->paragraph(),
            'slug' => Str::slug($title) . '-' . fake()->unique()->numberBetween(1000, 999999),
            'image' => null,
            'price' => $price,
            'discount_price' => fake()->numberBetween(0, $price),
            'type' => fake()->randomElement(ProductTypeEnum::getArray()),
            'status' => fake()->randomElement(ProductStatusEnum::getArray()),
        ];
    }
}
