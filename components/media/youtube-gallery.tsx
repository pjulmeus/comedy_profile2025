import { YouTubeVideo } from '@/types/media';
import { Card } from '@/components/ui/card';
import { Play } from 'lucide-react';

interface YouTubeGalleryProps {
  videos: YouTubeVideo[];
}

export function YouTubeGallery({ videos }: YouTubeGalleryProps) {
  return (
    <div className="flex flex-col items-center gap-6 max-w-4xl w-full">
      {videos.map((video) => (
        <Card key={video.id} className="overflow-hidden h-full w-full">
          {/* Responsive video container */}
          <div
            className="relative w-full"
            style={{ paddingBottom: '56.25%' }} // 16:9 aspect ratio
          >
            <iframe
              src={`https://www.youtube.com/embed/${video.videoId}`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <div className="p-4">
            <h3 className="font-medium text-lg line-clamp-2">{video.title}</h3>
            <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
              {video.description}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
}

