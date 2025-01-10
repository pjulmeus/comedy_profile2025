'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { OneOnOne } from './one-on-one';
import { PunchUp } from './punch-up';

export function ClassesTabs() {
  return (
    <Tabs defaultValue="coaching" className="w-full space-y-8">
      <div className="flex justify-center">
        <TabsList className="inline-flex">
          <TabsTrigger value="coaching">One-on-One Coaching</TabsTrigger>
          <TabsTrigger value="punchup">Punch-Up Services</TabsTrigger>
        </TabsList>
      </div>
      <div className="flex flex-col items-center w-full">
        <TabsContent value="coaching" className="w-full">
          <OneOnOne />
        </TabsContent>
        <TabsContent value="punchup" className="w-full">
          <PunchUp />
        </TabsContent>
      </div>
    </Tabs>
  );
}