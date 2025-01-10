import { InstagramPost } from '@/types/media';
import { Card } from '@/components/ui/card';
import { Heart, MessageCircle } from 'lucide-react';

interface InstagramFeedProps {
  posts: InstagramPost[];
}

export function InstagramFeed({ posts }: InstagramFeedProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Card key={post.id} className="overflow-hidden">
          <img
            src={post.imageUrl}
            alt={post.caption}
            className="w-full object-cover"
          />
          <div className="p-4 space-y-2">
            <p className="text-sm line-clamp-2">{post.caption}</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}