'use client';

import { Event } from '@/types/events';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin } from 'lucide-react';
import Link from 'next/link'

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>{event.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{event.description}</p>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{event.venue}</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-bold">${event.price.toFixed(2)}</span>
          <span className="text-sm text-muted-foreground">
            {event.ticketsAvailable} tickets left
          </span>
          <span>
          
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Link href={event.eventbrite_link} >Book Tickets</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}