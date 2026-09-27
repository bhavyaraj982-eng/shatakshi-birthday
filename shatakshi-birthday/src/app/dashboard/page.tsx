'use client';
import { motion } from 'framer-motion';
import { NavLink } from '@/components/NavLink';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useJourney } from '@/lib/journey';
import {
  ArrowLeft, Sparkles, Heart, Crown, RotateCcw, Share2, Download, Layers, BookOpen, Film, Music, Scissors, MessageSquare, GalleryThumbnails, PenTool, Star, Shield
} from 'lucide-react';
import { cn } from '@/lib/utils';

const chapters = [
  { id: 'timeline', icon: Film, title: 'Memory Film', color: '#A61E4D', reward: 'Film Reel' },
  { id: 'videos', icon: Music, title: 'Video Letters', color: '#0F172A', reward: 'Projector' },
  { id: 'scrapbook', icon: Scissors, title: 'Scrapbook Desk', color: '#D6B98C', reward: 'Craft Kit' },
  { id: 'wishes', icon: MessageSquare, title: 'Love Letters', color: '#A61E4D', reward: 'Envelope Sealer' },
  { id: 'confessions', icon: MessageSquare, title: 'Confessions', color: '#A61E4D', reward: 'Secret Keeper' },
  { id: 'gallery', icon: GalleryThumbnails, title: 'Photo Wall', color: '#0F172A', reward: 'Frame Key' },
  { id: 'letter', icon: PenTool, title: 'Final Letter', color: '#D6B98C', reward: 'Royal Seal' },
];

export default function DashboardPage() {
  const { isComplete, resetJourney } = useJourney();
  const [showCelebration, setShowCelebration] = useState(false);
  const [viewMode, setViewMode] = useState<'gallery' | 'timeline'>('gallery');

  useEffect(() => {
    if (isComplete()) {
      setTimeout(() => setShowCelebration(true), 500);
    }
  }, [isComplete]);

  if (!isComplete()) {
    return (
      <main className="min-h-screen relative flex items-center justify-center">
        <div className="absolute inset-0 bg-primary" aria-hidden="true" />
        <div className="relative z-10 text-center px-6">
          <div className="w-24 h-24 mx-auto mb-6 text-gold/50">
            <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path d="M12 2C12 2 8 8 8 12c0 4 4 8 4 8s4-4 4-8c0-4-4-10-4-10z"/><path d="M12 22v-8"/><path d="M8 12l4-4"/><path d="M16 12l-4-4"/></svg>
          </div>
          <h1 className="text-4xl font-light text-white mb-4">Grand Archive Locked</h1>
          <p className="handwritten-xl text-gold/80 mb-8">Complete all 7 chapters to unlock</p>
          <NavLink href="/journey" className="btn-secondary inline-flex items-center gap-2 bg-white/10 text-white border-white/20 hover:border-white/40 hover:bg-white/20">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            <span>Return to Storybook</span>
          </NavLink>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen relative" aria-labelledby="dashboard-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-[#0F172A] to-[#050A12]" aria-hidden="true" />

      <div className="relative z-10 min-h-screen flex flex-col">
        <header className="px-4 py-4 sm:py-6 border-b border-white/10 sticky top-0 z-20 bg-primary/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(145deg, #D6B98C, #C4A078)' }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path d="M12 2C12 2 8 8 8 12c0 4 4 8 4 8s4-4 4-8c0-4-4-10-4-10z"/><path d="M12 22v-8"/><path d="M8 12l4-4"/><path d="M16 12l-4-4"/></svg>
                </div>
                <div>
                  <h1 id="dashboard-heading" className="heading-lg text-white font-light">Grand Archive</h1>
                  <p className="handwritten-lg text-gold mt-1">Where all stories live forever</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <NavLink href="/journey" className="btn-secondary bg-white/10 text-white border-white/20 hover:border-white/40 hover:bg-white/20">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                  <span>Storybook</span>
                </NavLink>
                <a href="/" className="btn-primary" onClick={(e) => { e.preventDefault(); resetJourney(); window.location.href = '/'; }}>
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M21 12a9 9 0 1 1-6.219-8.56"/><path d="M12 2v4"/><path d="M12 2l4 4-4 4"/></svg>
                  <span>Begin Again</span>
                </a>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="text-center p-3 rounded-xl" style={{ background: 'linear-gradient(145deg, #A61E4D20, #A61E4D05)', border: '1px solid #A61E4D30' }}>
                <div className="text-2xl font-serif text-gold">7</div>
                <div className="text-accent/80 text-xs font-handwritten">Chapters Complete</div>
              </div>
              <div className="text-center p-3 rounded-xl" style={{ background: 'linear-gradient(145deg, #0F172A20, #0F172A05)', border: '1px solid #D6B98C30' }}>
                <div className="text-2xl font-serif text-gold">∞</div>
                <div className="text-gold/80 text-xs font-handwritten">Forever Access</div>
              </div>
              <div className="text-center p-3 rounded-xl" style={{ background: 'linear-gradient(145deg, #D6B98C20, #D6B98C05)', border: '1px solid #D6B98C30' }}>
                <div className="text-2xl font-serif text-accent">1</div>
                <div className="text-gold/80 text-xs font-handwritten">Magical Tale</div>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 px-4 py-8 sm:py-12">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 flex items-center justify-center gap-3">
              <button onClick={() => setViewMode('gallery')} className="px-4 py-2 rounded-xl font-medium transition-colors duration-200 flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><rect width="18" height="14" x="3" y="3" rx="2"/><path d="M4 21h1"/><path d="M9 21h1"/><path d="M14 21h1"/><path d="M19 21h1"/></svg>
                <span>Gallery View</span>
              </button>
              <button onClick={() => setViewMode('timeline')} className="px-4 py-2 rounded-xl font-medium transition-colors duration-200 flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                <span>Timeline View</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {chapters.map((chapter, i) => (
                <a key={chapter.id} href={`/${chapter.id}`} className="relative group p-6 rounded-2xl" style={{ background: `linear-gradient(145deg, ${chapter.color}15, ${chapter.color}05)`, border: `1px solid ${chapter.color}30`, boxShadow: `0 4px 20px ${chapter.color}15` }}>
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto" style={{ background: `linear-gradient(145deg, ${chapter.color}, ${chapter.color}dd)`, boxShadow: `0 8px 30px ${chapter.color}40` }}>
                    <chapter.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-medium text-white mb-3">{chapter.title}</h3>
                    <p className="text-white/70 mb-4 flex-1">Tap to revisit this chapter anytime. The magic never fades.</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium" style={{ background: `${chapter.color}20`, color: chapter.color, border: `1px solid ${chapter.color}40` }}>
                      <svg className="w-3 h-3 fill-gold text-gold" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                      <span>{chapter.reward}</span>
                    </div>
                    <a href={`/${chapter.id}`} className="w-full py-2 rounded-xl font-medium flex items-center justify-center gap-2 mt-4" style={{ background: `linear-gradient(145deg, ${chapter.color}, ${chapter.color}dd)`, color: 'white', boxShadow: `0 4px 20px ${chapter.color}30` }}>
                      <span>Revisit Chapter</span>
                      <svg className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                    </a>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-white/10">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-light text-white mb-2">Archive Actions</h3>
                <p className="text-gold/80 text-xl font-handwritten">Your story, your choices</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap">
                <a href="/" onClick={(e) => { e.preventDefault(); resetJourney(); window.location.href = '/'; }} className="btn-secondary group inline-flex items-center gap-3 px-6 py-3">
                  <motion.div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(145deg, #A61E4D, #D6B98C)' }} animate={{ rotate: [0, -360] }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M21 12a9 9 0 1 1-6.219-8.56"/><path d="M12 2v4"/><path d="M12 2l4 4-4 4"/></svg>
</motion.div>
                  <div className="text-left">
                    <div className="font-heading text-lg font-light">Begin Again</div>
                    <div className="text-gold/80 text-xs font-handwritten">Reset the journey, relive the magic</div>
                  </div>
                </a>

                <button className="btn-primary group inline-flex items-center gap-3 px-6 py-3" onClick={() => navigator.share?.({ title: 'For Shatakshi', text: 'A magical birthday journey', url: window.location.href })}>
                  <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.42" y1="6.51" x2="8.59" y2="10.49"/></svg>
                  <div className="text-left">
                    <div className="text-lg font-light font-heading">Share the Tale</div>
                    <div className="text-gold/80 text-xs font-handwritten">Send the magic to others</div>
                  </div>
                </button>

                <button className="btn-secondary group inline-flex items-center gap-3 px-6 py-3 border-white/20 text-white bg-white/10 hover:bg-white/20 hover:border-white/40">
                  <svg className="w-5 h-5 text-white group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/></svg>
                  <div className="text-left">
                    <div className="text-lg font-light font-heading">Save the Story</div>
                    <div className="text-gold/80 text-xs font-handwritten">Download as keepsake</div>
                  </div>
                </button>
              </div>

              <div className="mt-10 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(145deg, #D6B98C, #C4A078)' }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                </div>
                <p className="text-gold text-xl font-handwritten mb-3">The story never truly ends</p>
                <p className="text-white/70 text-lg max-w-xl mx-auto mb-4">This archive lives on. Every visit, every memory, every smile — preserved in stardust forever.</p>
                <p className="font-handwritten text-accent/60">For Shatakshi • Always • ∞</p>
              </div>
            </div>
          </div>
        </main>

        <footer className="px-4 py-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto text-center text-sm text-white/40 font-handwritten text-gold/60">
            Made with love, stardust, and too many coffee runs ☕✨
          </div>
        </footer>
      </div>
    </main>
  );
}

