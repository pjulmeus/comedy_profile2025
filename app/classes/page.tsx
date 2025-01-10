'use client';

import { PageLayout } from '@/components/layouts/page-layout';
import { ClassesTabs } from '@/components/classes/classes-tabs';

export default function ClassesPage() {
  return (
    <PageLayout title="Comedy Classes & Services">
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-muted-foreground text-center mb-8">
          Level up your comedy game with personalized coaching and professional script consultation.
        </p>
        <ClassesTabs />
      </div>
    </PageLayout>
  );
}