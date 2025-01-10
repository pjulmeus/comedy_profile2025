import { Video } from '@/types/media';
import { Card } from '@/components/ui/card';

interface VideoGalleryProps {
  videos: Video[];
}

export function VideoGallery({ videos }: VideoGalleryProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {videos.map((video) => (
        <Card key={video.id} className="overflow-hidden">
          <div className="relative aspect-video">
            <video
              src={video.url}
              poster={video.thumbnail}
              controls
              className="w-full h-full"
            >
              <track kind="captions" />
            </video>
          </div>
          <div className="p-4">
            <h3 className="font-medium">{video.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">
              {video.description}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
}