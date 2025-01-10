'use client';

import { useState } from 'react';
import { PageLayout } from '@/components/layouts/page-layout';
import { EventList } from '@/components/events/event-list';
import { CalendarView } from '@/components/events/calendar-view';
import { events } from '@/lib/events-data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function ShowsPage() {
  // const [view, setView] = useState('list');

  return (
    <PageLayout title="Upcoming Shows">
      <div className="flex flex-col items-center max-w-7xl mx-auto">
        <Tabs defaultValue="list" className="w-full space-y-6">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="list">List View</TabsTrigger>
              <TabsTrigger value="calendar">Calendar View</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="list">
            <EventList events={events} />
          </TabsContent>
          <TabsContent value="calendar">
            <CalendarView events={events} />
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
}