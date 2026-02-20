
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 relative transition-colors duration-500">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] bg-blue-500/[0.03] dark:bg-blue-500/[0.05] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">
              Trusted by infrastructure <br className="hidden md:block" /> 
              <span className="text-blue-600 dark:text-blue-400">experts</span> worldwide.
            </h2>
            <p className="text-black/50 dark:text-white/50 text-lg leading-relaxed">
              From global streaming giants to disruptive AI startups, we provide the backbone for critical system delivery.
            </p>
          </div>
          <div className="flex items-center space-x-4 bg-black/5 dark:bg-white/5 px-6 py-4 rounded-2xl border border-black/5 dark:border-white/5">
             <div className="text-right">
                <div className="font-bold text-black dark:text-white">4.9/5 Rating</div>
                <div className="text-xs text-black/40 dark:text-white/40 font-mono">ON G2 STACKSHARE</div>
             </div>
             <div className="flex text-yellow-500">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="relative group">
              {/* Blend-in Background: Soft gray in light, dark glass in dark */}
              <div className="h-full bg-slate-50/80 dark:bg-white/[0.015] backdrop-blur-sm border border-black/5 dark:border-white/5 rounded-3xl p-8 flex flex-col hover:border-blue-500/30 dark:hover:border-blue-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/[0.02]">
                <div className="flex justify-between items-start mb-8">
                  <div className="font-bold text-xl tracking-tighter text-black/40 dark:text-white/40 italic font-mono opacity-60 group-hover:opacity-100 transition-opacity">
                    {t.logo.toUpperCase()}
                  </div>
                  <Quote size={20} className="text-blue-500/20 group-hover:text-blue-500/40 transition-colors" />
                </div>
                
                <p className="text-black/70 dark:text-white/70 text-base mb-10 leading-relaxed italic grow">
                  "{t.content}"
                </p>
                
                <div className="flex items-center space-x-4 pt-6 border-t border-black/5 dark:border-white/5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-black dark:text-white">{t.name}</div>
                    <div className="text-black/40 dark:text-white/40 text-[10px] font-mono tracking-tight uppercase">@{t.handle}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
