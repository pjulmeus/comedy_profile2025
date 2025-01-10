'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Calendar } from '@/components/ui/calendar';

export function OneOnOne() {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Booking request sent!",
      description: "We'll contact you soon to confirm your session.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
    setDate(undefined);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">About One-on-One Coaching</h3>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Get personalized guidance to develop your comedy skills, whether you're
            just starting out or looking to refine your craft.
          </p>
          <ul className="space-y-2">
            <li>• Personalized feedback on your material</li>
            <li>• Performance technique coaching</li>
            <li>• Stage presence development</li>
            <li>• Writing workshops</li>
          </ul>
          <div className="font-semibold mt-4">
            60-minute session: $99
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">Name</label>
            <Input id="name" required />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <Input id="email" type="email" required />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Preferred Date</label>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
              disabled={(date) => date < new Date()}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="experience" className="text-sm font-medium">Comedy Experience</label>
            <Textarea 
              id="experience" 
              placeholder="Tell us about your comedy background..."
              required 
            />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Booking...' : 'Book Session'}
          </Button>
        </form>
      </Card>
    </div>
  );
}