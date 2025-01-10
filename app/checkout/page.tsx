'use client';

import { PageLayout } from '@/components/layouts/page-layout';
import { CheckoutForm } from '@/components/checkout/checkout-form';
import { OrderSummary } from '@/components/checkout/order-summary';
import { useCart } from '@/lib/hooks/use-cart';
import { redirect } from 'next/navigation';

export default function CheckoutPage() {
  const { items, total } = useCart();

  if (items.length === 0) {
    redirect('/store');
  }

  return (
    <PageLayout title="Checkout">
      <div className="max-w-6xl w-full mx-auto grid gap-8 lg:grid-cols-2">
        <OrderSummary items={items} total={total} />
        <CheckoutForm total={total} />
      </div>
    </PageLayout>
  );
}