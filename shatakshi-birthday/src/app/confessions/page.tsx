'use client';
import { NavLink } from '@/components/NavLink';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ArrowLeft, Send, Heart, MessageSquare } from 'lucide-react';
import { supabase, type Confession } from '@/lib/supabase';
import { cn } from '@/lib/utils';

export default function ConfessionsPage() {
  const [confessions, setConfessions] = useState<Confession[]>([]);
  const [loading, setLoading] = useState(true);
  const [supabaseUnavailable, setSupabaseUnavailable] = useState(false);

  const fetchConfessions = useCallback(async () => {
    if (!supabase) {
      setSupabaseUnavailable(true);
      setLoading(false);
      return;
    }
    setLoading(true);
    const { data, error } = await supabase
      .from('confessions')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(100);

    if (error) console.error('Error fetching confessions:', error);
    else setConfessions(data || []);
    setLoading(false);
  }, []);

  useEffect(() => { fetchConfessions(); }, [fetchConfessions]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!supabase) return;
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const message = formData.get('message') as string;
    if (!name.trim() || !message.trim()) return;

    const optimisticId = `temp-${Date.now()}`;
    setConfessions(prev => [{ id: optimisticId, name: name.trim(), message: message.trim(), created_at: new Date().toISOString(), updated_at: new Date().toISOString() }, ...prev]);

    try {
      const { data, error } = await supabase.from('confessions').insert({ name: name.trim(), message: message.trim() }).select().single();
      if (error) throw error;
      setConfessions(prev => prev.map(c => c.id === optimisticId ? data : c));
    } catch (err) {
      console.error('Error submitting confession:', err);
      setConfessions(prev => prev.filter(c => c.id === optimisticId));
    }
    (e.target as HTMLFormElement).reset();
  };

  const formatDate = (dateString: string) => new Date(dateString).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });

  return (
    <main className="min-h-screen relative" aria-labelledby="page-heading">
      <div className="absolute inset-0 bg-background" aria-hidden="true">
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        <header className="px-4 py-4 sm:py-6 border-b border-primary/5 sticky top-0 z-20 bg-background/80 backdrop-blur-sm">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <NavLink href="/journey" className="btn-secondary flex-shrink-0"><svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Storybook</span></NavLink>
              <div className="flex-1 text-center">
                <h1 id="page-heading" className="heading-md text-primary font-light">Confessions</h1>
                <p className="handwritten-lg text-accent mt-1">Whisper it here. It stays between us.</p>
              </div>
              <div className="w-32" />
            </div>
          </div>
        </header>

        <main className="flex-1 px-4 py-8 sm:py-12">
          <div className="max-w-3xl mx-auto">
            <section className="mb-12 fade-in" style={{ opacity: 0 }}>
              <div className="mb-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-4" style={{ background: 'linear-gradient(145deg, #A61E4D15, #A61E4D05)', border: '1px solid #A61E4D30' }}>
                  <svg className="w-5 h-5" style={{ color: '#A61E4D' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  <span className="font-handwritten text-accent">Leave a Confession</span>
                </div>
                <p className="body-md text-text-light max-w-xl mx-auto text-center">Something you've never said out loud? A memory, a regret, a silly thought — it's safe here.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4" style={{ background: 'linear-gradient(145deg, #FDF8F0, #F5EBD8)', border: '1px solid #E8DCC8', borderRadius: '24px', padding: '1.5rem', boxShadow: '0 4px 20px rgba(15,23,42,0.04)' }}>
                <div>
                  <label htmlFor="name" className="block font-body text-sm font-medium text-text mb-2">Your Name <span className="text-accent">*</span></label>
                  <input id="name" name="name" type="text" placeholder="What should we call you?" maxLength={30} required className="w-full px-4 py-3 rounded-xl font-body text-text bg-white border-2 border-primary/20 hover:border-primary/40 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-colors duration-200" />
                </div>
                <div>
                  <label htmlFor="message" className="block font-body text-sm font-medium text-text mb-2">Your Confession <span className="text-accent">*</span></label>
                  <textarea id="message" name="message" placeholder="Type it out... no one else will know it was you." maxLength={500} rows={4} required className="w-full px-4 py-3 rounded-xl font-body text-text bg-white border-2 border-primary/20 hover:border-primary/40 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-colors duration-200 resize-none" />
                  <div className="flex justify-between mt-2"><span className="text-sm font-body text-text-light/60"><span id="char-count">0</span>/500</span><span className="text-sm text-text-light/40 font-handwritten">Anonymous</span></div>
                </div>
                <button type="submit" className="w-full py-3 rounded-xl font-medium flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-accent/80 text-white shadow-lg shadow-accent/30 transition-colors duration-200 hover:bg-accent"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg><span>Submit Confession</span></button>
                <p className="text-center text-sm text-text-light/50 font-handwritten text-accent/70">Submitted anonymously. No emails, no tracking, no judgment.</p>
              </form>
            </section>

            <section className="fade-in" style={{ opacity: 0 }}>
              <div className="flex items-center justify-between mb-8">
                <h2 className="heading-md text-primary font-light">Shared Confessions</h2>
                <div className="flex items-center gap-2 text-sm text-text-light/60 font-handwritten text-accent"><svg className="w-4 h-4 fill-gold/30 text-gold/30" viewBox="0 0 24 24"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg><span>{confessions.length} shared</span></div>
              </div>

              {supabaseUnavailable ? (
                <div className="text-center py-12 fade-in" style={{ opacity: 0 }}>
                  <svg className="w-16 h-16 mx-auto mb-4 text-accent/30" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  <h3 className="heading-sm text-primary mb-2">Supabase not configured</h3>
                  <p className="body-md text-text-light max-w-md mx-auto">Add your Supabase credentials to enable confessions. See .env.example for details.</p>
                </div>
              ) : loading ? (
                <div className="space-y-3 fade-in" style={{ opacity: 0 }}>
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="p-4 rounded-xl animate-pulse" style={{ background: 'linear-gradient(145deg, #FDF8F0, #F5EBD8)', border: '1px solid #E8DCC8' }}>
                      <div className="h-4 w-1/4 bg-primary/10 rounded mb-2" />
                      <div className="h-3 w-3/4 bg-primary/10 rounded" />
                    </div>
                  ))}
                </div>
              ) : confessions.length === 0 ? (
                <div className="text-center py-12 fade-in" style={{ opacity: 0 }}>
                  <svg className="w-16 h-16 mx-auto mb-4 text-accent/30" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  <h3 className="heading-sm text-primary mb-2">No confessions yet</h3>
                  <p className="body-md text-text-light max-w-md mx-auto">Be the first to whisper something into the void.</p>
                </div>
              ) : (
                <div className="space-y-4 fade-in" style={{ opacity: 0 }}>
                  {confessions.map((confession, i) => (
                    <article key={confession.id} className="relative group fade-in" style={{ opacity: 0, transitionDelay: `${i * 0.05}s` }}>
                      <div className="bg-white rounded-xl p-4 border border-primary/10 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="flex items-start gap-3 mb-2">
                          <span className="px-2 py-1 rounded-full text-xs font-medium font-handwritten text-accent" style={{ background: '#A61E4D15', border: '1px solid #A61E4D30' }}>{confession.name}</span>
                          <time className="text-xs text-text-light/60 font-body">{new Date(confession.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</time>
                        </div>
                        <p className="text-text leading-relaxed whitespace-pre-wrap font-body text-sm">{confession.message}</p>
                        <div className="absolute top-2 right-2 w-4 h-4 opacity-5 group-hover:opacity-20 transition-opacity" style={{ color: '#A61E4D' }}><svg className="w-full h-full" style={{ color: '#A61E4D' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg></div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </section>
          </div>
        </main>

        <footer className="px-4 py-4 border-t border-primary/5">
          <div className="max-w-3xl mx-auto">
            <nav className="flex items-center justify-center gap-3 flex-wrap mb-4" aria-label="Chapter navigation">
              <NavLink href="/letter" className="btn-secondary text-sm"><svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/></svg>Final Letter</NavLink>
              <NavLink href="/journey" className="btn-secondary text-sm">Storybook</NavLink>
              <NavLink href="/dashboard" className="btn-primary text-sm">Grand Archive<svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/></svg></NavLink>
            </nav>
            <div className="text-center text-sm text-text-light/50 font-handwritten text-accent">Made with love, stardust, and too many coffee runs ☕✨</div>
          </div>
        </footer>
      </div>
    </main>
  );
}

