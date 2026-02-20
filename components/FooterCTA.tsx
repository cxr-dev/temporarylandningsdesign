
import React from 'react';
import { Sparkles, Terminal, ShieldCheck } from 'lucide-react';

const FooterCTA: React.FC = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden transition-colors duration-500">
      <div className="max-w-5xl mx-auto rounded-[2.5rem] p-12 md:p-24 text-center relative overflow-hidden border border-black/5 dark:border-white/10 bg-white dark:bg-black shadow-2xl">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] via-purple-500/[0.05] to-transparent pointer-events-none" />
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-400/10 dark:bg-blue-600/10 blur-[100px] animate-pulse-slow" />
        
        <div className="relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-[2rem] bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 mb-10 animate-float">
            <Sparkles className="w-10 h-10 text-blue-600 dark:text-blue-400" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight text-black dark:text-white">
            Architect for <br className="hidden md:block" /> the future today.
          </h2>
          
          <p className="text-black/50 dark:text-white/50 max-w-xl mx-auto mb-12 text-lg">
            Join the global network of engineers building high-performance, resilient distributed systems.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="w-full sm:w-auto px-12 py-5 bg-black dark:bg-white text-white dark:text-black font-bold rounded-2xl hover:scale-105 transition-all shadow-xl shadow-blue-500/10">
              DEPLOY NOW
            </button>
            <button className="w-full sm:w-auto px-12 py-5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black dark:text-white font-bold rounded-2xl hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
              VIEW DOCS
            </button>
          </div>
          
          <div className="mt-16 pt-10 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row items-center justify-center gap-8 opacity-40">
             <div className="flex items-center text-[10px] font-mono tracking-widest uppercase text-black dark:text-white">
                <ShieldCheck size={14} className="mr-2" /> PCI-DSS COMPLIANT
             </div>
             <div className="flex items-center text-[10px] font-mono tracking-widest uppercase text-black dark:text-white">
                <Terminal size={14} className="mr-2" /> SOC2 TYPE II
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center text-black/30 dark:text-white/20 text-[10px] font-mono tracking-widest uppercase">
        <div>© 2024 NOVAARCH INC. INFRASTRUCTURE ORCHESTRATION</div>
        <div className="flex space-x-8 mt-6 md:mt-0">
          <a href="#" className="hover:text-blue-500 transition-colors">PRIVACY</a>
          <a href="#" className="hover:text-blue-500 transition-colors">TERMS</a>
          <a href="#" className="hover:text-blue-500 transition-colors">TRUST</a>
          <a href="#" className="hover:text-blue-500 transition-colors">STATUS</a>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
