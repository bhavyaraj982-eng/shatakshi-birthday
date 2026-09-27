'use client';

import Link from 'next/link';
import {
  Film, Music, Scissors, MessageSquare, GalleryThumbnails, PenTool,
  ArrowRight, Heart, Sparkles, Lock, Check, Star, MessageSquare as MsgSq
} from 'lucide-react';
import { cn } from '@/lib/utils';

const sectionData = [
  { id: 'timeline', icon: Film, title: 'Memory Film', desc: 'Childhood reels, goofy cuts, beautiful scenes, favorite moments', color: '#A61E4D', bgGradient: 'from-accent/10 to-accent/5', reward: '🎬 Film Reel', order: 1 },
  { id: 'videos', icon: Music, title: 'Video Letters', desc: 'Moving memories captured in motion — press play to relive the laughter', color: '#0F172A', bgGradient: 'from-primary/10 to-primary/5', reward: '📹 Projector', order: 2 },
  { id: 'scrapbook', icon: Scissors, title: 'Scrapbook Desk', desc: 'A magical desk of scattered polaroids, sticky notes, dried flowers & stars', color: '#D6B98C', bgGradient: 'from-gold/15 to-gold/5', reward: '✂️ Craft Kit', order: 3 },
  { id: 'wishes', icon: MsgSq, title: 'Love Letters', desc: 'Heartfelt messages in enchanted envelopes — five stars, infinite love', color: '#A61E4D', bgGradient: 'from-accent/10 to-accent/5', reward: '💌 Envelope Sealer', order: 4 },
  { id: 'confessions', icon: MsgSq, title: 'Confessions', desc: 'Anonymous whispers, secret thoughts, unspoken truths — a safe space to share', color: '#A61E4D', bgGradient: 'from-accent/10 to-accent/5', reward: '🤫 Secret Keeper', order: 5 },
  { id: 'gallery', icon: GalleryThumbnails, title: 'Photo Wall', desc: 'A masonry gallery where photos float and dance — click to enter the frame', color: '#0F172A', bgGradient: 'from-primary/10 to-primary/5', reward: '🖼️ Frame Key', order: 6 },
  { id: 'letter', icon: PenTool, title: 'Final Letter', desc: 'A handwritten letter on aged paper — wishes for your year ahead', color: '#D6B98C', bgGradient: 'from-gold/15 to-gold/5', reward: '📜 Royal Seal', order: 7 },
];

function SectionCard({ section, isUnlocked, isCurrent, isCompleted, onClick }: {
  section: typeof sectionData[0];
  isUnlocked: boolean;
  isCurrent: boolean;
  isCompleted: boolean;
  onClick: () => void;
}) {
  return (
    <article
      className={cn(
        'relative group cursor-pointer rounded-2xl overflow-hidden border transition-all duration-300',
        'p-6 h-full flex flex-col',
        isUnlocked ? 'hover:-translate-y-2 hover:shadow-lg hover:border-accent/50' : 'opacity-50 cursor-not-allowed'
      )}
      style={{
        background: `linear-gradient(145deg, ${section.bgGradient})`,
        borderColor: isUnlocked ? `${section.color}40` : '#0F172A20',
      }}
      onClick={onClick}
    >
      <div className="absolute top-4 right-4 flex items-center gap-1">
        {isCompleted && (
          <span className="flex items-center gap-1 text-green-600">
            <Check className="w-5 h-5" />
            <Star className="w-5 h-5 fill-gold text-gold" />
          </span>
        )}
        {isCurrent && !isCompleted && (
          <Sparkles className="w-5 h-5" style={{ color: section.color }} />
        )}
        {!isUnlocked && (
          <Lock className="w-5 h-5 text-text-light/30" />
        )}
      </div>

      <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto"
        style={{
          background: isUnlocked
            ? `linear-gradient(145deg, ${section.color}, ${section.color}dd)`
            : 'linear-gradient(145deg, #6B6B6B, #4A4A4A)',
          boxShadow: isUnlocked ? `0 8px 30px ${section.color}40` : '0 4px 20px rgba(107,107,107,0.3)',
        }}>
      <section.icon className={cn('w-7 h-7', isUnlocked ? 'text-white' : 'text-white/50')} />
      </div>

      <div className="flex-1 flex flex-col">
        <h3 className={cn('heading-sm font-medium mb-3', isUnlocked ? 'text-primary' : 'text-text-light/50')}>
          {section.title}
        </h3>
        <p className={cn('body-md mb-6 flex-1', isUnlocked ? 'text-text-light' : 'text-text-light/50')}>
          {section.desc}
        </p>

        {isCompleted && (
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
            style={{ background: `${section.color}15`, color: section.color, border: `1px solid ${section.color}30` }}>
            <Star className="w-4 h-4 fill-gold text-gold" />
            <span>{section.reward}</span>
          </span>
        )}

        <button
          disabled={!isUnlocked}
          onClick={onClick}
          className={cn(
            'w-full py-2.5 rounded-xl font-medium flex items-center justify-center gap-2 mt-4 transition-colors duration-200',
            isUnlocked
              ? 'text-white hover:scale-[1.01] hover:-translate-y-0.5'
              : 'text-text-light/30 cursor-not-allowed'
            )}
          style={{
            background: isUnlocked
              ? `linear-gradient(145deg, ${section.color}, ${section.color}dd)`
              : 'linear-gradient(145deg, #E0E0E0, #C0C0C0)',
            boxShadow: isUnlocked ? `0 6px 20px ${section.color}30` : 'none',
          }}>
          {isCompleted ? (
            <>
              <Check className="w-4 h-4" />
              <span>Revisit Chapter</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </>
          ) : isUnlocked ? (
            <>
              <span>Enter Chapter</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </>
          ) : (
            <>
              <Lock className="w-4 h-4" />
              <span>Locked</span>
            </>
          )}
        </button>
      </div>

      <div className="absolute top-4 left-4 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
        style={{ background: isUnlocked ? section.color : '#6B6B6B', opacity: isUnlocked ? 1 : 0.5 }}>
        {section.order}
      </div>
    </article>
  );
}

export function JourneyPage() {
  return (
    <main className="min-h-screen relative" aria-labelledby="journey-heading">
      <div className="absolute inset-0 bg-background" aria-hidden="true">
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        <header className="px-4 py-6 sm:py-8 border-b border-primary/5 sticky top-0 z-20 bg-background/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#A61E4D' }}>
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 id="journey-heading" className="heading-lg text-primary">The Storybook</h1>
                  <p className="handwritten-lg text-accent mt-1">Seven chapters. One magical tale.</p>
                </div>
              </div>

              <Link href="/" className="btn-secondary hidden sm:inline-flex">
                <span>← Welcome</span>
              </Link>
            </div>

            <div className="mt-4 h-2 rounded-full bg-primary/10 overflow-hidden">
              <div className="h-full rounded-full" style={{ background: 'linear-gradient(90deg, #A61E4D, #D6B98C, #A61E4D)', backgroundSize: '200% 100%', width: '0%' }}>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 px-4 py-8 sm:py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
              {sectionData.map((section) => (
                <Link key={section.id} href={`/${section.id}`}>
                  <SectionCard
                    section={section}
                    isUnlocked={true}
                    isCurrent={false}
                    isCompleted={false}
                    onClick={() => {}}
                  />
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/letter"
                className="btn-secondary group inline-flex items-center gap-2"
              >
                <span>Or read the final letter first</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="mt-4 text-sm text-text-light/60 font-handwritten text-accent">
                "You don't have to see them all at once. They'll wait for you."
              </p>
            </div>
          </div>
        </main>

        <footer className="px-4 py-6 border-t border-primary/5">
          <div className="max-w-7xl mx-auto text-center text-sm text-text-light/50 font-handwritten text-accent">
            Made with love, stardust, and too many coffee runs ☕✨
          </div>
        </footer>
      </div>
    </main>
  );
}