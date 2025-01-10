import { InstagramPost, YouTubeVideo, Video } from '@/types/media';

export const instagramPosts: InstagramPost[] = [
  {
    id: '1',
    imageUrl: '/images/paul1.jpg',
    caption: 'PJ opening the show',
  },
  {
    id: '2',
    imageUrl: '/images/ash.jpg',
    caption: 'Ash Cash doing a drop in set in Brooklyn😂',
  },
  {
    id: '3',
    imageUrl: '/images/dave1.jpg',
    caption: 'Dave co-hosting like a champ!',
  },
  {
    id: '4',
    imageUrl: '/images/gary.jpg',
    caption: 'New material in the works! Stay tuned... 🎭',
  },
  {
    id: '5',
    imageUrl: '/images/Kerby1.jpg',
    caption: 'New material in the works! Stay tuned... 🎭',
  },
  {
    id: '6',
    imageUrl: '/images/velvet1.jpg',
    caption: 'New material in the works! Stay tuned... 🎭',
  },
  {
    id: '7',
    imageUrl: '/images/velvet2.jpg',
    caption: 'New material in the works! Stay tuned... 🎭',
  } ,
  {
    id: '8',
    imageUrl: '/images/kerby2.jpg',
    caption: 'New material in the works! Stay tuned... 🎭',
  },
  {
    id: '9',
    imageUrl: '/images/kerby3.jpg',
    caption: 'New material in the works! Stay tuned... 🎭',
  },
  {
    id: '10',
    imageUrl: '/images/crowd1.jpg',
    caption: 'New material in the works! Stay tuned... 🎭',
  } ,
  {
    id: '11',
    imageUrl: '/images/drink.jpg',
    caption: 'New material in the works! Stay tuned... 🎭',
  },
  {
    id: '12',
    imageUrl: '/images/group.jpeg',
    caption: 'New material in the works! Stay tuned... 🎭',
  }
];

export const youtubeVideos: YouTubeVideo[] = [
  {
    id: '1',
    videoId: 'MAvbpdWtsBQ?si=5aVogGLftzImp0pv', // Example YouTube video ID
    title: 'Best Stand-up Moments 2024',
    description: 'Highlights from my recent performances',
    thumbnail: 'https://images.unsplash.com/photo-1603190287605-e6ade32fa852'
  },
  {
    id: '2',
    videoId: 'BatyceEWoAA?si=LDykv9effaS8nQ5x',
    title: 'House Arrest',
    description: 'House Arrest the short film',
    thumbnail: ''
  }
];

export const videos: Video[] = [
  {
    id: '1',
    url: '/videos/performance-1.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1603190287605-e6ade32fa852',
    title: 'Live at Madison Square Garden',
    description: 'Exclusive footage from my biggest show yet'
  },
  {
    id: '2',
    url: '/videos/performance-2.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1525373612132-b2e2372475c5',
    title: 'Behind the Scenes',
    description: 'A day in the life of a comedian'
  }
];