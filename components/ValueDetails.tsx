
import React from 'react';
import { Shield, Zap, Layers, Box, Code, GitBranch } from 'lucide-react';
import { VALUE_PROPS } from '../constants';

const IconMap: Record<string, any> = {
  Shield: Shield,
  Zap: Zap,
  Layers: Layers
};

const ValueDetails: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden transition-colors duration-500">
      {/* Decorative Technical Layer */}
      <div className="absolute top-20 left-1/4 w-px h-64 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute bottom-20 right-1/4 w-px h-64 bg-gradient-to-b from-transparent via-purple-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="font-mono text-[10px] text-blue-600 dark:text-blue-400 uppercase tracking-widest bg-blue-500/5 dark:bg-blue-400/10 px-4 py-1.5 rounded-full border border-blue-500/10">Engineered for Precision</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">Built for technical <br className="hidden md:block" /> system thinkers</h2>
          <p className="text-black/60 dark:text-white/60 max-w-2xl mx-auto text-lg">Every component of NovaArch is designed with structural integrity and operational excellence in mind.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {VALUE_PROPS.map((prop, i) => {
            const IconComp = IconMap[prop.icon];
            return (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-blue-500/5 dark:bg-blue-400/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative p-10 rounded-2xl border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/[0.02] hover:border-blue-500/30 dark:hover:border-blue-400/30 transition-all duration-500">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    <IconComp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="font-mono text-[10px] text-black/30 dark:text-white/30 uppercase tracking-tighter">0{i+1}</div>
                    <div className="h-px w-4 bg-black/10 dark:border-white/10" />
                    <div className="font-mono text-[10px] text-blue-500/60 dark:text-blue-400/60 uppercase">{prop.tag}</div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">{prop.title}</h3>
                  <p className="text-black/60 dark:text-white/60 leading-relaxed">
                    {prop.description}
                  </p>
                  
                  <div className="mt-10 flex items-center text-xs font-bold text-blue-600 dark:text-blue-400 cursor-pointer group-hover:translate-x-1 transition-transform">
                    ARCHITECTURE SPEC <span className="ml-2">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Small Data Labels */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
           {['Global Consistency', 'Regional Failover', 'Cold Boot < 1s', 'Tier 4 Datacenters'].map((label, idx) => (
             <div key={idx} className="flex items-center space-x-2 text-[10px] font-mono text-black/40 dark:text-white/20">
                <Box size={10} className="text-blue-500" />
                <span>{label.toUpperCase()}</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default ValueDetails;
