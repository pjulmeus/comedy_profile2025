'use client';

import { Calendar, BookOpen, ShoppingBag } from 'lucide-react';
import { FeatureCard } from './feature-card';

const features = [
  {
    icon: Calendar,
    title: 'Upcoming Shows',
    description: 'Catch the latest performances at venues across the country.',
    actionText: 'View Schedule',
    href: '/shows'
  },
  {
    icon: ShoppingBag,
    title: 'Merchandise',
    description: 'Take home exclusive merch and limited edition items.',
    actionText: 'Shop Now',
    href: '/store'
  },
  {
    icon: BookOpen,
    title: 'Comedy Classes',
    description: 'Learn from professionals through one-on-one coaching and script consultation.',
    actionText: 'Learn More',
    href: '/classes',
    className: 'sm:col-span-2 lg:col-span-1'
  }
];

export function FeaturesSection() {
  return (
    <section className="flex justify-center">
      <div className="container p-10 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}