'use client';
import { NavLink } from '@/components/NavLink';

import { ArrowLeft, ArrowRight, Sparkles, Scissors, Check } from 'lucide-react';

export default function ScrapbookPage() {
  return (
    <main className="min-h-screen relative flex flex-col" aria-labelledby="page-heading">
      <div className="absolute inset-0 bg-background" aria-hidden="true">
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3C/svg%3E")`,
        }} />
      </div>
      <div className="relative z-10 min-h-screen flex flex-col">
        <header className="px-4 py-4 sm:py-6 border-b border-primary/5 sticky top-0 z-20 bg-background/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <a href="/journey" className="btn-secondary flex-shrink-0">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>Storybook</span>
              </a>
              <div className="flex-1 text-center">
                <h1 className="text-3xl sm:text-4xl font-light font-serif text-primary">Chapter 3: Scrapbook Desk</h1>
                <p className="text-accent text-xl mt-1 font-handwritten">Where memories get crafty</p>
              </div>
              <div className="w-32" />
            </div>
          </div>
        </header>
        <main className="flex-1">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="text-center mb-12 fade-in" style={{ opacity: 0 }}>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-4" style={{ background: 'linear-gradient(145deg, #D6B98C15, #D6B98C05)', border: '1px solid #D6B98C30' }}>
                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"/><path d="M18 13l-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"/></svg>
                <span style={{ fontFamily: 'Caveat, cursive', color: '#D6B98C' }}>Chapter 3 Unlocked</span>
                <svg className="w-4 h-4 text-green-500 fill-green-500" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>
              </div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A desk where photos dance, flowers bloom forever, and every sticky note holds a secret.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: '✂️', title: 'Polaroids', desc: 'Scattered photos with tiny rotations, each telling a story' },
                { icon: '🌸', title: 'Dried Flowers', desc: 'Pressed blooms that never fade, preserving a moment in time' },
                { icon: '📎', title: 'Ticket Stubs', desc: 'Movie tickets, concert passes, little pieces of adventures' },
                { icon: '📷', title: 'Sticky Notes', desc: 'Handwritten thoughts, inside jokes, love notes' },
                { icon: '✨', title: 'Little Stars', desc: 'Tiny decorations that catch the light just right' },
                { icon: '🕯️', title: 'Coffee Rings', desc: 'The mark of late nights and long conversations' },
              ].map((item, i) => (
                <div key={i} className="relative p-6 rounded-2xl" style={{ background: 'linear-gradient(145deg, #FDF8F0, #F5EBD8)', border: '1px solid #E8DCC8', boxShadow: '0 4px 20px rgba(15,23,42,0.04)' }}>
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto text-3xl" style={{ background: 'linear-gradient(145deg, #D6B98C, #D6B98Cdd)', boxShadow: '0 4px 20px #D6B98C30' }}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-medium text-primary mb-2 text-center">{item.title}</h3>
                  <p className="text-gray-600 text-center">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center" style={{ opacity: 0 }}>
              <div className="inline-flex items-center gap-4 p-4 rounded-2xl mb-4" style={{ background: 'linear-gradient(145deg, #D6B98C15, #A61E4D10)', border: '1px solid #D6B98C40' }}>
                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/></svg>
                <div className="text-left">
                  <h3 className="text-lg font-medium text-primary">Desk Complete</h3>
                  <p className="text-accent mt-1 text-xl font-handwritten">Every piece found its place</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 flex-wrap mt-4">
                <a href="/videos" className="px-4 py-2 rounded-xl border-2 border-primary/30 text-primary text-sm hover:border-primary hover:bg-primary/5 transition-colors">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Previous
                </a>
                <a href="/journey" className="px-4 py-2 rounded-xl border-2 border-primary/30 text-primary text-sm hover:border-primary hover:bg-primary/5 transition-colors">
                  Storybook
                </a>
                <a href="/wishes" className="px-4 py-2 rounded-xl bg-primary text-white text-sm hover:bg-primary/90 transition-colors">
                  Next: Love Letters
                  <svg className="w-4 h-4 ml-1 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/></svg>
                </a>
              </div>
            </div>
          </div>
        </main>
        <footer className="px-4 py-4 border-t border-primary/5 bg-background/50">
          <nav className="flex items-center justify-center gap-4 flex-wrap" aria-label="Chapter navigation">
            <a href="/videos" className="px-4 py-2 rounded-xl border-2 border-primary/30 text-primary text-sm hover:border-primary hover:bg-primary/5 transition-colors">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Video Letters
            </a>
            <a href="/journey" className="px-4 py-2 rounded-xl border-2 border-primary/30 text-primary text-sm hover:border-primary hover:bg-primary/5 transition-colors">
              Storybook
            </a>
            <a href="/wishes" className="px-4 py-2 rounded-xl bg-primary text-white text-sm hover:bg-primary/90 transition-colors">
              Next: Love Letters
              <svg className="w-4 h-4 ml-1 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/></svg>
            </a>
          </nav>
        </footer>
      </div>
    </main>
  );
}
