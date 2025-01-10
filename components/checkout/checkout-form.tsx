'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useCart } from '@/lib/hooks/use-cart';

interface CheckoutFormProps {
  total: number;
}

export function CheckoutForm({ total }: CheckoutFormProps) {
  const router = useRouter();
  const { toast } = useToast();
  const { clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    clearCart();
    toast({
      title: "Order confirmed!",
      description: "Thank you for your purchase.",
    });
    
    router.push('/store');
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Contact Information</h3>
          <div className="grid gap-4">
            <div>
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <Input id="email" type="email" required />
            </div>
            <div>
              <label htmlFor="phone" className="text-sm font-medium">Phone</label>
              <Input id="phone" type="tel" required />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Shipping Address</h3>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                <Input id="firstName" required />
              </div>
              <div>
                <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                <Input id="lastName" required />
              </div>
            </div>
            <div>
              <label htmlFor="address" className="text-sm font-medium">Address</label>
              <Input id="address" required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="city" className="text-sm font-medium">City</label>
                <Input id="city" required />
              </div>
              <div>
                <label htmlFor="postalCode" className="text-sm font-medium">Postal Code</label>
                <Input id="postalCode" required />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Payment</h3>
          <div className="grid gap-4">
            <div>
              <label htmlFor="cardNumber" className="text-sm font-medium">Card Number</label>
              <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="expiry" className="text-sm font-medium">Expiry Date</label>
                <Input id="expiry" placeholder="MM/YY" required />
              </div>
              <div>
                <label htmlFor="cvc" className="text-sm font-medium">CVC</label>
                <Input id="cvc" placeholder="123" required />
              </div>
            </div>
          </div>
        </div>

        <Button 
          type="submit" 
          className="w-full" 
          disabled={isSubmitting}
        >
          {isSubmitting 
            ? 'Processing...' 
            : `Pay ${new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
              }).format(total)}`
          }
        </Button>
      </form>
    </Card>
  );
}