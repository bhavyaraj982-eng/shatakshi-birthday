'use client';
import { NavLink } from '@/components/NavLink';

import { ArrowLeft, Sparkles, PenTool, Check, Scroll, Feather, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function LetterPage() {
  const letterContent = `Dearest Shatakshi,

As this birthday chapter comes to a close, we wanted you to know something that no review, no photo, no video can quite capture.

You are the kind of person who makes the world softer just by being in it. The way you remember how everyone takes their coffee. The way you send voice notes at midnight just to say "thinking of you." The way you celebrate other people's wins like they're your own. The way you hold space for the messy, complicated, beautiful parts of life — both yours and everyone else's.

We've watched you navigate this year with a grace that takes our breath away. Through the uncertainties, the transitions, the moments that asked more of you than you thought you had to give — you kept showing up. For yourself. For us. For the life you're building.

Your laughter has been the soundtrack to so many of our best memories. Your tears have reminded us it's okay to not be okay. Your dreams have inspired us to dream bigger. Your love — fierce, loyal, unconditional — has been the anchor for all of us.

So here's what we wish for you this year:

Nights where you sleep peacefully.
Mornings where coffee tastes like possibility.
Moments of quiet where you hear your own voice.
Adventures that make your heart race.
People who love you as loudly as you love them.
The courage to say yes to what scares you.
The wisdom to say no to what drains you.
And always, always — the knowing that you are deeply, irrevocably, messily loved.

Not for what you do. Not for what you achieve. Just for who you are.

Thank you for letting us be part of your story. We can't wait to see what you write next.

With all our hearts,

— Your people ♡`;

  return (
    <main className="min-h-screen relative flex flex-col" aria-labelledby="page-heading">
      <div className="absolute inset-0 bg-background" aria-hidden="true">
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3C/svg%3E")`,
        }} />
      </div>
      <div className="relative z-10 min-h-screen flex flex-col">
        <header className="px-4 py-4 sm:py-6 border-b border-primary/5 sticky top-0 z-20 bg-background/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <NavLink href="/journey" className="btn-secondary flex-shrink-0">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>Storybook</span>
              </NavLink>

              <div className="flex-1 text-center">
                <h1 id="page-heading" className="heading-md text-primary font-light">
                  Chapter 6: Final Letter
                </h1>
                <p className="handwritten-lg text-accent mt-1">Before you go...</p>
              </div>

              <div className="w-32" />
            </div>
          </div>
        </header>

        <main className="flex-1">
          <div className="max-w-3xl mx-auto px-4 py-8">
            <div className="text-center mb-12 fade-in" style={{ opacity: 0 }}>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-4" style={{ background: 'linear-gradient(145deg, #D6B98C15, #D6B98C05)', border: '1px solid #D6B98C30' }}>
                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"/><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"/></svg>
                <span className="font-handwritten text-gold">Final Chapter Unlocked</span>
              </div>
              <p className="body-lg text-text-light max-w-2xl mx-auto">
                The last page. The truest words. Written with quill, sealed with wax, delivered with all our hearts.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-12 lg:p-16 border border-gold/20 fade-in" style={{ opacity: 0 }}>
              <div className="relative" style={{
                backgroundImage: `
                  radial-gradient(ellipse at 50% 50%, #F8F4EF 0%, #F0E6DC 100%),
                  url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.05' numOctaves='5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paper)' opacity='0.03'/%3E%3C/svg%3E")
                `,
              }}>
                <div className="font-body text-text leading-relaxed whitespace-pre-wrap text-base sm:text-lg">
                  {`Dearest Shatakshi,

As this birthday chapter comes to a close, we wanted you to know something that no review, no photo, no video can quite capture.

You are the kind of person who makes the world softer just by being in it. The way you remember how everyone takes their coffee. The way you send voice notes at midnight just to say "thinking of you." The way you celebrate other people's wins like they're your own. The way you hold space for the messy, complicated, beautiful parts of life — both yours and everyone else's.

We've watched you navigate this year with a grace that takes our breath away. Through the uncertainties, the transitions, the moments that asked more of you than you thought you had to give — you kept showing up. For yourself. For us. For the life you're building.

Your laughter has been the soundtrack to so many of our best memories. Your tears have reminded us it's okay to not be okay. Your dreams have inspired us to dream bigger. Your love — fierce, loyal, unconditional — has been the anchor for all of us.

So here's what we wish for you this year:

Nights where you sleep peacefully.
Mornings where coffee tastes like possibility.
Moments of quiet where you hear your own voice.
Adventures that make your heart race.
People who love you as loudly as you love them.
The courage to say yes to what scares you.
The wisdom to say no to what drains you.
And always, always — the knowing that you are deeply, irrevocably, messily loved.

Not for what you do. Not for what you achieve. Just for who you are.

Thank you for letting us be part of your story. We can't wait to see what you write next.

With all our hearts,

— Your people ♡`.split('\n').map((line, i) => (
                    <p key={i} className={`mb-4 last:mb-0 ${i === 0 ? 'text-2xl font-handwritten text-accent text-center mb-8' : ''} ${i >= 13 ? 'text-center' : ''} ${i >= 19 ? 'handwritten-xl mt-10' : ''}`}>
                      {line.trim() || <br />}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 text-center fade-in" style={{ opacity: 0 }}>
              <div className="inline-flex items-center gap-4 p-4 rounded-2xl mb-4" style={{ background: 'linear-gradient(145deg, #A61E4D15, #D6B98C15)', border: '1px solid #A61E4D30' }}>
                <span className="font-handwritten text-accent">Letter Sealed</span>
                <span className="handwritten-lg text-accent ml-2">The final word written with love</span>
              </div>
              <div className="mt-8 pt-8 border-t border-primary/10">
                <p className="handwritten-xl text-accent mb-4">The story is complete...</p>
                <p className="body-lg text-text-light mb-6 max-w-xl mx-auto">
                  But every ending is a new beginning. The Grand Archive awaits — where all chapters live forever.
                </p>
                <NavLink href="/dashboard" className="btn-primary inline-flex items-center gap-4 px-8 py-4">
                  <span className="relative z-10">Enter the Grand Archive</span>
                  <svg className="w-5 h-5 rotate-180 hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </NavLink>
              </div>
            </div>
          </div>
        </main>

        <footer className="px-4 py-8 border-t border-primary/5">
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center justify-center gap-4 flex-wrap" aria-label="Chapter navigation">
              <NavLink href="/gallery" className="btn-secondary text-sm">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Photo Wall
              </NavLink>
              <NavLink href="/journey" className="btn-secondary text-sm">
                Storybook
              </NavLink>
              <NavLink href="/confessions" className="btn-primary text-sm">
                Confessions
                <span className="text-gold">✦</span>
              </NavLink>
            </nav>
            <div className="mt-8 text-center text-sm text-text-light/50 font-handwritten text-accent">
              Made with love, stardust, and too many coffee runs ☕✨
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

