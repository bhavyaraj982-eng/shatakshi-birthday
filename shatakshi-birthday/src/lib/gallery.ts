export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'childhood' | 'goofy' | 'beautiful' | 'favourite';
  width: number;
  height: number;
  rotation?: number;
  position?: 'left' | 'right';
  isFeatured?: boolean;
}

export const galleryImages: GalleryImage[] = [
  // Childhood
  {
    id: 'childhood-1',
    src: '/images/placeholder-childhood-1.jpg',
    alt: 'Childhood memory - Shatakshi as a little girl',
    category: 'childhood',
    width: 800,
    height: 1000,
    rotation: -3,
    position: 'left',
  },
  {
    id: 'childhood-2',
    src: '/images/placeholder-childhood-2.jpg',
    alt: 'Childhood memory - First birthday',
    category: 'childhood',
    width: 1000,
    height: 800,
    rotation: 2,
    position: 'right',
  },
  {
    id: 'childhood-3',
    src: '/images/placeholder-childhood-3.jpg',
    alt: 'Childhood memory - School days',
    category: 'childhood',
    width: 800,
    height: 1000,
    rotation: -1,
    position: 'left',
  },
  // Goofy
  {
    id: 'goofy-1',
    src: '/images/placeholder-goofy-1.jpg',
    alt: 'Goofy moment - Making funny faces',
    category: 'goofy',
    width: 1000,
    height: 800,
    rotation: 4,
    position: 'right',
  },
  {
    id: 'goofy-2',
    src: '/images/placeholder-goofy-2.jpg',
    alt: 'Goofy moment - Caught mid-laugh',
    category: 'goofy',
    width: 800,
    height: 1000,
    rotation: -2,
    position: 'left',
  },
  {
    id: 'goofy-3',
    src: '/images/placeholder-goofy-3.jpg',
    alt: 'Goofy moment - Silly selfie',
    category: 'goofy',
    width: 1000,
    height: 800,
    rotation: 1,
    position: 'right',
  },
  {
    id: 'goofy-4',
    src: '/images/placeholder-goofy-4.jpg',
    alt: 'Goofy moment - Weird angle photo',
    category: 'goofy',
    width: 800,
    height: 1000,
    rotation: -3,
    position: 'left',
  },
  // Beautiful You
  {
    id: 'beautiful-1',
    src: '/images/placeholder-beautiful-1.jpg',
    alt: 'Beautiful moment - Golden hour portrait',
    category: 'beautiful',
    width: 800,
    height: 1000,
    rotation: 0,
    position: 'right',
    isFeatured: true,
  },
  {
    id: 'beautiful-2',
    src: '/images/placeholder-beautiful-2.jpg',
    alt: 'Beautiful moment - Candid smile',
    category: 'beautiful',
    width: 1000,
    height: 800,
    rotation: -2,
    position: 'left',
  },
  {
    id: 'beautiful-3',
    src: '/images/placeholder-beautiful-3.jpg',
    alt: 'Beautiful moment - Thoughtful gaze',
    category: 'beautiful',
    width: 800,
    height: 1000,
    rotation: 1,
    position: 'right',
  },
  // Our Favourite Moments
  {
    id: 'favourite-1',
    src: '/images/placeholder-favourite-1.jpg',
    alt: 'Favourite memory - Trip together',
    category: 'favourite',
    width: 1000,
    height: 800,
    rotation: 2,
    position: 'left',
  },
  {
    id: 'favourite-2',
    src: '/images/placeholder-favourite-2.jpg',
    alt: 'Favourite memory - Celebration',
    category: 'favourite',
    width: 800,
    height: 1000,
    rotation: -1,
    position: 'right',
  },
  {
    id: 'favourite-3',
    src: '/images/placeholder-favourite-3.jpg',
    alt: 'Favourite memory - Quiet moment',
    category: 'favourite',
    width: 1000,
    height: 800,
    rotation: 3,
    position: 'left',
  },
  {
    id: 'favourite-4',
    src: '/images/placeholder-favourite-4.jpg',
    alt: 'Favourite memory - Sunset together',
    category: 'favourite',
    width: 800,
    height: 1000,
    rotation: -2,
    position: 'right',
  },
];

export const categoryLabels: Record<string, string> = {
  childhood: 'Childhood',
  goofy: 'Goofy',
  beautiful: 'Beautiful You',
  favourite: 'Our Favourite Moments',
};

export const categoryOrder = ['childhood', 'goofy', 'beautiful', 'favourite'] as const;