'use client';

import { Button } from '@/components/ui/button';
import { HeroCarousel } from './hero-carousel';
import { heroImages } from '@/lib/hero-data';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative min-h-[500px] sm:min-h-[600px] h-[70vh] sm:h-[80vh] overflow-hidden">
      <HeroCarousel images={heroImages} />
      <div className="container relative flex h-full items-end p-4">
        <div className="w-full max-w-2xl">
          <h1 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Get out your head,<br className="hidden sm:inline" />
            <span className="sm:hidden"> </span>
            and find time to laugh
          </h1>
          <p className="mb-6 text-base text-muted-foreground sm:text-lg max-w-[90%] sm:max-w-none">
            Stand-up comedy, writing, and acting that pushes boundaries and creates hilarious moments.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link href="/shows">View Upcoming Shows</Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
              <Link href="/media">Watch Clips</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}