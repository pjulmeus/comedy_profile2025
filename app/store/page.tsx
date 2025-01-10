'use client';

import { useState } from 'react';
import { PageLayout } from '@/components/layouts/page-layout';
import { ProductGrid } from '@/components/store/product-grid';
import { CategoryFilter } from '@/components/store/category-filter';
import { products } from '@/lib/store-data';

export default function StorePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <PageLayout title="Store">
      <div className="space-y-6">
        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <ProductGrid products={filteredProducts} />
      </div>
    </PageLayout>
  );
}