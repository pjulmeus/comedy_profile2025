'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { InstagramFeed } from './instagram-feed';
import { YouTubeGallery } from './youtube-gallery';
import { VideoGallery } from './video-gallery';
import { instagramPosts, youtubeVideos, videos } from '@/lib/media-data';

export function MediaTabs() {
  return (
    <Tabs defaultValue="instagram" className="w-full space-y-8">
      <div className="flex justify-center">
        <TabsList className="inline-flex">
          <TabsTrigger value="instagram">Instagram</TabsTrigger>
          <TabsTrigger value="youtube">YouTube</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>
      </div>
      <div className="flex flex-col items-center w-full">
        <TabsContent value="instagram" className="w-full">
          <InstagramFeed posts={instagramPosts} />
        </TabsContent>
        <TabsContent value="youtube" className="w-full">
          <YouTubeGallery videos={youtubeVideos} />
        </TabsContent>
        <TabsContent value="videos" className="w-full">
          <VideoGallery videos={videos} />
        </TabsContent>
      </div>
    </Tabs>
  );
}