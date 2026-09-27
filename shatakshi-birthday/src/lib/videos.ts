export interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoSrc: string;
  duration: string;
}

export const videos: VideoItem[] = [
  {
    id: 'video-1',
    title: 'The day you were born (reimagined)',
    description: 'A compilation of your first year',
    thumbnail: '/videos/placeholder-video-1.jpg',
    videoSrc: '/videos/placeholder-video-1.mp4',
    duration: '2:34',
  },
  {
    id: 'video-2',
    title: 'Our adventures together',
    description: 'From road trips to late night talks',
    thumbnail: '/videos/placeholder-video-2.jpg',
    videoSrc: '/videos/placeholder-video-2.mp4',
    duration: '3:12',
  },
  {
    id: 'video-3',
    title: 'Message from everyone',
    description: 'Short clips from all your people',
    thumbnail: '/videos/placeholder-video-3.jpg',
    videoSrc: '/videos/placeholder-video-3.mp4',
    duration: '4:45',
  },
];