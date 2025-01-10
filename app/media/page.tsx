'use client';

import { PageLayout } from '@/components/layouts/page-layout';
import { MediaTabs } from '@/components/media/media-tabs';

export default function MediaPage() {
  return (
    <PageLayout title="Media Gallery">
      <div className="max-w-7xl mx-auto">
        <MediaTabs />
      </div>
    </PageLayout>
  );
}