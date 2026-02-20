
import React from 'react';
import { INFRA_NODES, IconMap } from '../constants';
import { ShieldCheck, Activity, Terminal } from 'lucide-react';

const Logos: React.FC = () => {
  // Triple the nodes for a long, seamless scroll
  const displayNodes = [...INFRA_NODES, ...INFRA_NODES, ...INFRA_NODES];

  return (
    <section className="relative py-24 overflow-hidden transition-colors duration-500">
      {/* Structural Detailing */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/5 dark:via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/5 dark:via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-3 text-[10px] font-mono tracking-[0.2em] text-blue-600 dark:text-blue-400 uppercase bg-blue-500/5 dark:bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/10 mb-2">
            <Activity size={12} />
            <span>Live System Visualization</span>
          </div>
          <p className="text-black/40 dark:text-white/30 text-xs font-mono uppercase tracking-widest">Global Node Deployment Status</p>
        </div>
        
        <div className="flex items-center space-x-6 text-[10px] font-mono text-black/30 dark:text-white/20">
           <div className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2" /> OPTIMAL</div>
           <div className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" /> ACTIVE</div>
           <div className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mr-2 animate-pulse" /> SYNCING</div>
        </div>
      </div>

      <div className="relative">
        {/* Background Fade Gradient */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-[#050505] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-[#050505] to-transparent z-10" />

        <div className="flex overflow-hidden whitespace-nowrap mask-fade">
          <div className="inline-flex animate-marquee py-4">
            {displayNodes.map((node, i) => {
              const Icon = IconMap[node.icon];
              return (
                <div 
                  key={i} 
                  className="mx-4 w-72 flex-shrink-0 group cursor-pointer"
                >
                  <div className="h-full bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/10 rounded-2xl p-6 transition-all duration-500 hover:border-blue-500/50 dark:hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/[0.05] group-hover:-translate-y-1 relative overflow-hidden">
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white dark:via-blue-400/5 to-transparent -translate-x-full group-hover:animate-shimmer" />
                    
                    <div className="flex items-start justify-between mb-6">
                      <div className="p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-black/60 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                        <Icon size={24} />
                      </div>
                      <div className="text-[10px] font-mono text-black/20 dark:text-white/20 uppercase">
                        NODE_{i % 100}
                      </div>
                    </div>

                    <h4 className="font-bold text-lg text-black dark:text-white mb-1">{node.name}</h4>
                    <p className="text-black/40 dark:text-white/40 text-xs mb-6 truncate">{node.description}</p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-black/5 dark:border-white/5">
                      <div className="flex items-center space-x-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          node.status === 'optimal' ? 'bg-green-500' : 
                          node.status === 'active' ? 'bg-blue-500' : 'bg-yellow-500'
                        }`} />
                        <span className="text-[10px] font-mono text-black/30 dark:text-white/30 uppercase tracking-tighter">
                          {node.latency}
                        </span>
                      </div>
                      <Terminal size={12} className="text-black/10 dark:text-white/10 group-hover:text-blue-500 transition-colors" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logos;
