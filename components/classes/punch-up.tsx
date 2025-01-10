'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export function PunchUp() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Request submitted!",
      description: "We'll review your material and get back to you soon.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Punch-Up Services</h3>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Need help making your material funnier? Our professional punch-up service
            will help sharpen your jokes and tighten your scripts.
          </p>
          <ul className="space-y-2">
            <li>• Detailed script analysis</li>
            <li>• Joke enhancement suggestions</li>
            <li>• Timing and pacing recommendations</li>
            <li>• Alternative punchline options</li>
          </ul>
          <div className="space-y-2 mt-4">
            <div className="font-semibold">Pricing:</div>
            <ul className="text-sm text-muted-foreground">
              <li>• Stand-up set (up to 10 minutes): $79</li>
              <li>• Short script (up to 30 pages): $149</li>
              <li>• Full script (up to 120 pages): $299</li>
            </ul>
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
            <label htmlFor="projectType" className="text-sm font-medium">Project Type</label>
            <select 
              id="projectType" 
              className="w-full rounded-md border border-input bg-background px-3 py-2"
              required
            >
              <option value="">Select a project type</option>
              <option value="standup">Stand-up Set</option>
              <option value="short">Short Script</option>
              <option value="full">Full Script</option>
            </select>
          </div>
          <div className="space-y-2">
            <label htmlFor="material" className="text-sm font-medium">Your Material</label>
            <Textarea 
              id="material" 
              placeholder="Paste your material here or describe what you need help with..."
              className="min-h-[150px]"
              required 
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="notes" className="text-sm font-medium">Additional Notes</label>
            <Textarea 
              id="notes" 
              placeholder="Any specific areas you'd like us to focus on?"
            />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit for Review'}
          </Button>
        </form>
      </Card>
    </div>
  );
}