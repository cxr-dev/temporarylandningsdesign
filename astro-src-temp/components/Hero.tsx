
import React from 'react';
import { ChevronRight, Terminal, Cpu, Globe } from 'lucide-react';

interface HeroProps {
  isDarkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-mono text-blue-600 dark:text-blue-400 mb-6 animate-pulse-slow">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span>v2.4.0 INFRASTRUCTURE RELEASE</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-black dark:text-white">
              Architecture for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 dark:from-blue-400 dark:via-cyan-300 dark:to-purple-400">intelligent</span> scale.
            </h1>
            
            <p className="text-lg md:text-xl text-black/60 dark:text-white/60 mb-10 max-w-xl leading-relaxed">
              Orchestrate next-gen workloads with the industry's most robust inference stack. High performance, zero-trust, global delivery.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all group shadow-xl shadow-blue-500/10">
                GET STARTED
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black dark:text-white font-bold rounded-lg flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                DOCUMENTATION
              </button>
            </div>
            
            <div className="mt-12 flex items-center space-x-6 text-[10px] font-mono text-black/40 dark:text-white/30 uppercase tracking-widest">
               <div className="flex items-center"><Cpu size={14} className="mr-2" /> 4.2 TFLOPS</div>
               <div className="flex items-center"><Globe size={14} className="mr-2" /> 180+ EDGE NODES</div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            {/* Background Decorative Shapes */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/5 dark:bg-blue-500/10 blur-[100px] animate-pulse-slow" />
            
            <div className="relative aspect-square w-full rounded-2xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-black/40 backdrop-blur-xl p-8 overflow-hidden group shadow-2xl">
              <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-black/20 dark:text-white/20">
                SYSTEM_NODE_01_HEALTH: <span className="text-green-500">OPTIMAL</span>
              </div>
              
              <div className="flex flex-col h-full justify-between">
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-2 w-full bg-black/5 dark:bg-white/5 rounded overflow-hidden">
                      <div className="h-full bg-blue-500/40 animate-shimmer" style={{ width: `${40 + i * 15}%`, animationDelay: `${i * 0.4}s` }} />
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-center py-10">
                   <div className="w-56 h-56 relative animate-float">
                      <div className="absolute inset-0 border-2 border-dashed border-black/10 dark:border-white/10 rounded-full animate-[spin_30s_linear_infinite]" />
                      <div className="absolute inset-6 border border-blue-500/20 dark:border-blue-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <Terminal className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-2" />
                        <span className="text-[10px] font-mono text-blue-500/60 dark:text-blue-400/40">NOVA_KERNEL</span>
                      </div>
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                    <div className="text-[10px] font-mono text-black/40 dark:text-white/40 mb-1 uppercase">P99 Latency</div>
                    <div className="text-xl font-bold text-blue-600 dark:text-cyan-400">8.4ms</div>
                  </div>
                  <div className="p-4 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                    <div className="text-[10px] font-mono text-black/40 dark:text-white/40 mb-1 uppercase">Success Rate</div>
                    <div className="text-xl font-bold text-purple-600 dark:text-purple-400">99.99%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
