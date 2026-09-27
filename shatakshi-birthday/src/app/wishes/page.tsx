'use client';
import { NavLink } from '@/components/NavLink';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, Sparkles, MessageSquare, Check, Mail, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

const wishes = [
  {
    authorName: 'Priya Sharma',
    authorInitial: 'P',
    authorColor: '#A61E4D',
    date: 'March 15, 2024',
    message: `Shatakshi, where do I even begin? You're the kind of friend who shows up with soup when I'm sick, remembers how I take my coffee, and somehow knows exactly what to say when my world feels like it's falling apart. I've watched you grow from the girl who was afraid of roller coasters to the woman who faces life's biggest drops with grace. Your laughter is contagious, your heart is enormous, and your ability to make everyone around you feel seen is a rare gift. Thank you for the 3 AM conversations, the spontaneous dance parties in the kitchen, and for being my person through every season. Here's to another year of you being unapologetically, beautifully you. Love you to the moon and back.`
  },
  {
    authorName: 'Rahul Mehta',
    authorInitial: 'R',
    authorColor: '#D6B98C',
    date: 'March 15, 2024',
    message: `Happy Birthday to the only person I know who can make a grocery run feel like an adventure. Shats, you have this incredible ability to find magic in the mundane - whether it's turning a traffic jam into a concert or making burnt toast taste like a Michelin meal with your commentary. I've lost count of the times you've talked me off a ledge (sometimes literal, mostly metaphorical) with just the right mix of tough love and terrible jokes. You're the sister I never had but always needed. Never stop being the chaos that holds us all together. Can't wait to see what trouble we get into this year.`
  },
  {
    authorName: 'Ananya Krishnan',
    authorInitial: 'A',
    authorColor: '#0F172A',
    date: 'March 15, 2024',
    message: `To my beautiful Shatakshi - I still remember the first day we met in college, you had paint on your jeans and the brightest smile. Thirteen years later, that smile still lights up every room you walk into. You've been my witness through heartbreaks, promotions, quarter-life crises, and everything in between. What I love most about you isn't just your kindness (though there's plenty of that) - it's your courage. The way you've built a life that's authentically yours, the way you love without holding back, the way you choose joy even on hard days. You inspire me to be braver, softer, more present. Thank you for being my constant. This year, I wish you all the small beautiful moments and the big wild dreams. You deserve every single one.`
  },
  {
    authorName: 'Karan Singh',
    authorInitial: 'K',
    authorColor: '#A61E4D',
    date: 'March 15, 2024',
    message: `Shatakshi! Another year older, another year wiser, another year of you pretending you don't know the lyrics to every 2000s Bollywood song (we all know you do). You're the glue in this friend group - the one who remembers birthdays, plans the reunions, sends the memes at 2 AM, and somehow makes everyone feel like they're your favorite. Your empathy is a superpower. The way you listen - really listen - makes people feel heard in a world that's always rushing. I've seen you give the shirt off your back (literally, that one time at the concert) and stay up all night helping a friend with a presentation. You're rare. Don't ever change. Except maybe stop stealing my fries. Love you.`
  },
  {
    authorName: 'Meera Patel',
    authorInitial: 'M',
    authorColor: '#D6B98C',
    date: 'March 15, 2024',
    message: `Dearest Shatakshi, writing this makes me realize how hard it is to put into words what you mean to me. You've been my roommate, my confidant, my personal stylist, my therapist (unpaid), and my partner in every crime worth committing. I've watched you navigate loss with dignity, chase dreams with ferocity, and love with an openness that terrifies and inspires me. The world is softer because you're in it. Your kindness has ripple effects you'll never fully see - the barista you tipped generously, the stray dog you fed, the friend you checked on at 3 AM, the stranger you smiled at on the metro. You make goodness look effortless. This birthday, I hope you receive even a fraction of the warmth you give. You are loved beyond measure.`
  },
  {
    authorName: 'Arjun Desai',
    authorInitial: 'A',
    authorColor: '#0F172A',
    date: 'March 15, 2024',
    message: `Shats - you know I'm terrible at this emotional stuff, so I'll keep it simple. You're one of the most genuine people I know. In a world full of filters and façades, you're refreshingly, unapologetically real. You laugh loud, cry ugly, love hard, and forgive easy. That's not common. I've seen you at your highest and lowest, and through it all, you've remained kind. That's the marker of character. So here's to another trip around the sun - may it bring you spontaneous road trips, perfectly ripe mangoes, books you can't put down, and moments that take your breath away. And if anyone gives you grief, you know where to find me. Happy Birthday.`
  },
];

export default function WishesPage() {
  return (
    <main className="min-h-screen relative" aria-labelledby="page-heading">
      <div className="absolute inset-0 bg-background" aria-hidden="true">
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3C/svg%3E")`,
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
                  Chapter 4: Love Letters
                </h1>
                <p className="handwritten-lg text-accent mt-1">Five stars, infinite love</p>
              </div>

              <div className="w-32" />
            </div>
          </div>
        </header>

        <main className="flex-1">
          <div className="max-w-3xl mx-auto px-4 py-8">
            <div className="text-center mb-12 fade-in" style={{ opacity: 0 }}>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-4" style={{ background: 'linear-gradient(145deg, #A61E4D15, #A61E4D05)', border: '1px solid #A61E4D30' }}>
                <span className="font-handwritten text-accent">Chapter 4 Unlocked</span>
              </div>
              <p className="body-lg text-text-light max-w-2xl mx-auto">
                Everyone wanted to leave you something they'll probably never say this dramatically in person.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { authorName: 'Priya Sharma', authorInitial: 'P', authorColor: '#A61E4D', date: 'March 15, 2024', message: `Shatakshi, where do I even begin? You're the kind of friend who shows up with soup when I'm sick, remembers how I take my coffee, and somehow knows exactly what to say when my world feels like it's falling apart. I've watched you grow from the girl who was afraid of roller coasters to the woman who faces life's biggest drops with grace. Your laughter is contagious, your heart is enormous, and your ability to make everyone around you feel seen is a rare gift. Thank you for the 3 AM conversations, the spontaneous dance parties in the kitchen, and for being my person through every season. Here's to another year of you being unapologetically, beautifully you. Love you to the moon and back.` },
                { authorName: 'Rahul Mehta', authorInitial: 'R', authorColor: '#D6B98C', date: 'March 15, 2024', message: `Happy Birthday to the only person I know who can make a grocery run feel like an adventure. Shats, you have this incredible ability to find magic in the mundane - whether it's turning a traffic jam into a concert or making burnt toast taste like a Michelin meal with your commentary. I've lost count of the times you've talked me off a ledge (sometimes literal, mostly metaphorical) with just the right mix of tough love and terrible jokes. You're the sister I never had but always needed. Never stop being the chaos that holds us all together. Can't wait to see what trouble we get into this year.` },
                { authorName: 'Ananya Krishnan', authorInitial: 'A', authorColor: '#0F172A', date: 'March 15, 2024', message: `To my beautiful Shatakshi - I still remember the first day we met in college, you had paint on your jeans and the brightest smile. Thirteen years later, that smile still lights up every room you walk into. You've been my witness through heartbreaks, promotions, quarter-life crises, and everything in between. What I love most about you isn't just your kindness (though there's plenty of that) - it's your courage. The way you've built a life that's authentically yours, the way you love without holding back, the way you choose joy even on hard days. You inspire me to be braver, softer, more present. Thank you for being my constant. This year, I wish you all the small beautiful moments and the big wild dreams. You deserve every single one.` },
                { authorName: 'Karan Singh', authorInitial: 'K', authorColor: '#A61E4D', date: 'March 15, 2024', message: `Shatakshi! Another year older, another year wiser, another year of you pretending you don't know the lyrics to every 2000s Bollywood song (we all know you do). You're the glue in this friend group - the one who remembers birthdays, plans the reunions, sends the memes at 2 AM, and somehow makes everyone feel like they're your favorite. Your empathy is a superpower. The way you listen - really listen - makes people feel heard in a world that's always rushing. I've seen you give the shirt off your back (literally, that one time at the concert) and stay up all night helping a friend with a presentation. You're rare. Don't ever change. Except maybe stop stealing my fries. Love you.` },
                { authorName: 'Meera Patel', authorInitial: 'M', authorColor: '#D6B98C', date: 'March 15, 2024', message: `Dearest Shatakshi, writing this makes me realize how hard it is to put into words what you mean to me. You've been my roommate, my confidant, my personal stylist, my therapist (unpaid), and my partner in every crime worth committing. I've watched you navigate loss with dignity, chase dreams with ferocity, and love with an openness that terrifies and inspires me. The world is softer because you're in it. Your kindness has ripple effects you'll never fully see - the barista you tipped generously, the stray dog you fed, the friend you checked on at 3 AM, the stranger you smiled at on the metro. You make goodness look effortless. This birthday, I hope you receive even a fraction of the warmth you give. You are loved beyond measure.` },
                { authorName: 'Arjun Desai', authorInitial: 'A', authorColor: '#0F172A', date: 'March 15, 2024', message: `Shats - you know I'm terrible at this emotional stuff, so I'll keep it simple. You're one of the most genuine people I know. In a world full of filters and façades, you're refreshingly, unapologetically real. You laugh loud, cry ugly, love hard, and forgive easy. That's not common. I've seen you at your highest and lowest, and through it all, you've remained kind. That's the marker of character. So here's to another trip around the sun - may it bring you spontaneous road trips, perfectly ripe mangoes, books you can't put down, and moments that take your breath away. And if anyone gives you grief, you know where to find me. Happy Birthday.` }
              ].map((wish, i) => (
                <article key={i} className="relative group fade-in" style={{ opacity: 0, transitionDelay: `${0.1 + i * 0.1}s` }}>
                  <div className="bg-white rounded-2xl p-6 border border-primary/10 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-serif font-medium text-xl flex-shrink-0" style={{ backgroundColor: wish.authorColor }}>
                        {wish.authorInitial}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-serif text-lg font-medium text-primary">{wish.authorName}</h3>
                          <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className="w-4 h-4 fill-gold text-gold">★</span>
                            ))}
                          </div>
                        </div>
                        <time className="text-sm text-text-light/60" dateTime={wish.date}>
                          {wish.date}
                        </time>
                      </div>
                    </div>
                    <p className="text-text leading-relaxed whitespace-pre-wrap">{wish.message}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center fade-in" style={{ opacity: 0 }}>
              <div className="inline-flex items-center gap-4 p-4 rounded-2xl mb-4" style={{ background: 'linear-gradient(145deg, #A61E4D15, #D6B98C10)', border: '1px solid #A61E4D30' }}>
                <span className="font-handwritten text-accent">All Letters Delivered</span>
                <span className="handwritten-lg text-accent ml-2">Every heart received</span>
              </div>
              <div className="flex items-center justify-center gap-4 flex-wrap mt-4">
                <NavLink href="/scrapbook" className="btn-secondary text-sm">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Previous
                </NavLink>
                <NavLink href="/journey" className="btn-secondary text-sm">
                  Storybook
                </NavLink>
                <NavLink href="/gallery" className="btn-primary text-sm">
                  Next: Photo Wall
                  <span className="text-gold">✦</span>
                </NavLink>
              </div>
            </div>
          </div>
        </main>

        <footer className="px-4 py-4 border-t border-primary/5 bg-background/50">
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center justify-center gap-4 flex-wrap" aria-label="Chapter navigation">
              <NavLink href="/scrapbook" className="btn-secondary text-sm">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Scrapbook Desk
              </NavLink>
              <NavLink href="/journey" className="btn-secondary text-sm">
                Storybook
              </NavLink>
              <NavLink href="/gallery" className="btn-primary text-sm">
                Next: Photo Wall
                <span className="text-gold">✦</span>
              </NavLink>
            </nav>
            <div className="mt-4 text-center text-sm text-text-light/50 font-handwritten text-accent">
              Made with love, stardust, and too many coffee runs ☕✨
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

