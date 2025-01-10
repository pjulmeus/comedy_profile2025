'use client';

import { useState } from 'react';
import { Event } from '@/types/events';
import { Card } from '@/components/ui/card';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';

interface CalendarViewProps {
  events: Event[];
}

export function CalendarView({ events }: CalendarViewProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  
  const eventsByDate = events.reduce((acc, event) => {
    const date = format(new Date(event.date), 'yyyy-MM-dd');
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(event);
    return acc;
  }, {} as Record<string, Event[]>);

  const selectedEvents = selectedDate 
    ? eventsByDate[format(selectedDate, 'yyyy-MM-dd')] || []
    : [];

  return (
    <div className="max-w-6xl mx-auto w-full grid gap-6 lg:grid-cols-[400px,1fr]">
      <Card className="p-4 mx-auto w-full">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          className="rounded-md border mx-auto"
          modifiers={{
            event: Object.keys(eventsByDate).map(date => new Date(date))
          }}
          modifiersStyles={{
            event: { 
              fontWeight: 'bold',
              backgroundColor: 'hsl(var(--primary))',
              color: 'hsl(var(--primary-foreground))'
            }
          }}
        />
      </Card>

      <Card className="p-4">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-center">
            {selectedDate ? format(selectedDate, 'MMMM d, yyyy') : 'Select a date'}
          </h3>
          {selectedEvents.length > 0 ? (
            <div className="space-y-4">
              {selectedEvents.map(event => (
                <div key={event.id} className="p-4 border rounded-lg">
                  <h4 className="font-medium text-center">{event.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1 text-center">{event.description}</p>
                  <div className="mt-4 text-sm flex flex-col items-center space-y-2">
                    <p>Time: {event.time}</p>
                    <p>Venue: {event.venue}</p>
                    <p>Price: ${event.price.toFixed(2)}</p>
                    <p>Tickets available: {event.ticketsAvailable}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-center">No events scheduled for this date</p>
          )}
        </div>
      </Card>
    </div>
  );
}