const fs = require('fs');
const path = require('path');

const images = [
  // Childhood
  { name: 'placeholder-childhood-1.jpg', w: 800, h: 1000, title: 'Childhood Memory', subtitle: 'Shatakshi • Age 5', color1: '#A61E4D', color2: '#D6B98C' },
  { name: 'placeholder-childhood-2.jpg', w: 1000, h: 800, title: 'First Birthday', subtitle: 'Shatakshi • Age 1', color1: '#D6B98C', color2: '#A61E4D' },
  { name: 'placeholder-childhood-3.jpg', w: 800, h: 1000, title: 'School Days', subtitle: 'Shatakshi • Age 10', color1: '#A61E4D', color2: '#D6B98C' },
  // Goofy
  { name: 'placeholder-goofy-1.jpg', w: 1000, h: 800, title: 'Goofy Moment', subtitle: 'Making Faces • 2022', color1: '#D6B98C', color2: '#A61E4D' },
  { name: 'placeholder-goofy-2.jpg', w: 800, h: 1000, title: 'Caught Mid-Laugh', subtitle: 'Uncontrollable Joy • 2023', color1: '#A61E4D', color2: '#D6B98C' },
  { name: 'placeholder-goofy-3.jpg', w: 1000, h: 800, title: 'Silly Selfie', subtitle: 'Filter Chaos • 2021', color1: '#D6B98C', color2: '#A61E4D' },
  { name: 'placeholder-goofy-4.jpg', w: 800, h: 1000, title: 'Weird Angle', subtitle: 'Perspective Shift • 2020', color1: '#A61E4D', color2: '#D6B98C' },
  // Beautiful
  { name: 'placeholder-beautiful-1.jpg', w: 800, h: 1000, title: 'Golden Hour', subtitle: 'Radiant • 2024', color1: '#D6B98C', color2: '#A61E4D', featured: true },
  { name: 'placeholder-beautiful-2.jpg', w: 1000, h: 800, title: 'Candid Smile', subtitle: 'Unposed Beauty • 2023', color1: '#A61E4D', color2: '#D6B98C' },
  { name: 'placeholder-beautiful-3.jpg', w: 800, h: 1000, title: 'Thoughtful Gaze', subtitle: 'Quiet Moment • 2022', color1: '#D6B98C', color2: '#A61E4D' },
  // Favourite
  { name: 'placeholder-favourite-1.jpg', w: 1000, h: 800, title: 'Trip Together', subtitle: 'Adventure Buddies • 2023', color1: '#A61E4D', color2: '#D6B98C' },
  { name: 'placeholder-favourite-2.jpg', w: 800, h: 1000, title: 'Celebration', subtitle: 'Milestone Moment • 2022', color1: '#D6B98C', color2: '#A61E4D' },
  { name: 'placeholder-favourite-3.jpg', w: 1000, h: 800, title: 'Quiet Moment', subtitle: 'Just Us • 2024', color1: '#A61E4D', color2: '#D6B98C' },
  { name: 'placeholder-favourite-4.jpg', w: 800, h: 1000, title: 'Sunset Together', subtitle: 'Golden Hour • 2023', color1: '#D6B98C', color2: '#A61E4D' },
];

const videoThumbs = [
  { name: 'placeholder-video-1.jpg', w: 1280, h: 720, title: 'First Year', color1: '#A61E4D', color2: '#D6B98C' },
  { name: 'placeholder-video-2.jpg', w: 1280, h: 720, title: 'Adventures', color1: '#D6B98C', color2: '#A61E4D' },
  { name: 'placeholder-video-3.jpg', w: 1280, h: 720, title: 'Messages', color1: '#A61E4D', color2: '#D6B98C' },
];

function createSVG({ w, h, title, subtitle, color1, color2, featured }) {
  return `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#F8F4EF;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#E8DDD0;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color1};stop-opacity:0.12" />
      <stop offset="100%" style="stop-color:${color2};stop-opacity:0.12" />
    </linearGradient>
    ${featured ? `<linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color2};stop-opacity:0.2" />
      <stop offset="50%" style="stop-color:${color1};stop-opacity:0.15" />
      <stop offset="100%" style="stop-color:${color2};stop-opacity:0.2" />
    </linearGradient>` : ''}
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <rect width="${w}" height="${h}" fill="url(#accent)"/>
  ${featured ? `<rect width="${w}" height="${h}" fill="url(#glow)"/>` : ''}
  <circle cx="${w/2}" cy="${h/2 - 40}" r="${Math.min(w,h)/6}" fill="${color1}" opacity="0.15"/>
  <circle cx="${w/2}" cy="${h/2 - 40}" r="${Math.min(w,h)/9}" fill="${color2}" opacity="0.2"/>
  ${featured ? `<circle cx="${w/2}" cy="${h/2 - 40}" r="${Math.min(w,h)/4.5}" fill="none" stroke="${color2}" stroke-width="2" opacity="0.3"/>` : ''}
  <text x="${w/2}" y="${h/2 + 60}" font-family="Georgia, serif" font-size="${Math.min(w,h)/30}" fill="${color1}" text-anchor="middle" opacity="0.5">${title}</text>
  <text x="${w/2}" y="${h/2 + 100}" font-family="Georgia, serif" font-size="${Math.min(w,h)/45}" fill="#6B6B6B" text-anchor="middle" opacity="0.5">📷 Placeholder Image</text>
  <text x="${w/2}" y="${h/2 + 140}" font-family="Georgia, serif" font-size="${Math.min(w,h)/50}" fill="${color2}" text-anchor="middle" opacity="0.6">${subtitle}</text>
</svg>`;
}

const imagesDir = path.join(__dirname, '../public/images');
const videosDir = path.join(__dirname, '../public/videos');

if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });
if (!fs.existsSync(videosDir)) fs.mkdirSync(videosDir, { recursive: true });

images.forEach(img => {
  const svg = createSVG(img);
  fs.writeFileSync(path.join(imagesDir, img.name), svg);
  console.log(`Created ${img.name}`);
});

videoThumbs.forEach(vid => {
  const svg = createSVG(vid);
  fs.writeFileSync(path.join(videosDir, vid.name), svg);
  console.log(`Created ${vid.name}`);
});

console.log('All placeholders generated!');