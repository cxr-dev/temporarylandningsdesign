
import { Shield, Zap, Layers, Database, Cpu, Globe, Lock, Activity, Server, Box } from 'lucide-react';
import { Testimonial, ValueProp, InfraNode } from './types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Kate Davis',
    handle: 'friable_captain_8',
    logo: 'HULU',
    content: "The infrastructure orchestration is fantastic. It's motivating to see how much we've improved over time. The platform has a great mix of speed and reliability.",
    rating: 4.9
  },
  {
    id: '2',
    name: 'Martin Kazlauskas',
    handle: 'sartorial_statue_59',
    logo: 'HBO MAX',
    content: "NovaArch redefined our edge computing strategy. Seamless deployment and cross-cloud availability are no longer pain points for our dev team.",
    rating: 3.2
  },
  {
    id: '3',
    name: 'Sanjay Sharma',
    handle: 'voracious_rainbows_68',
    logo: 'DISNEY+',
    content: "The system thinking approach behind NovaArch is exactly what we needed. High-performance inference at scale is now a reality for our ML workloads.",
    rating: 4.9
  },
  {
    id: '4',
    name: 'Tawanna Afumba',
    handle: 'intransigent_toejam_15',
    logo: 'STARZ',
    content: "Unrivaled monitoring capabilities. We caught latency spikes before they reached the end users. The UI is a developer's dream.",
    rating: 3.2
  },
  {
    id: '5',
    name: 'Larry King',
    handle: 'pendulous_unicorn_46',
    logo: 'VIX',
    content: "Our migration to the next-gen architecture was smoother than expected. NovaArch provides the trust and professionalism enterprise clients demand.",
    rating: 4.9
  },
  {
    id: '6',
    name: 'Fatima Mohamed',
    handle: 'salubrious_artist_72',
    logo: 'PRIME VIDEO',
    content: "From prototype to global scale in weeks. The platform's ability to handle bursty traffic without a hitch is impressive.",
    rating: 3.2
  }
];

export const VALUE_PROPS: ValueProp[] = [
  {
    tag: 'PERFORMANCE',
    title: 'Elastic Inference Engine',
    description: 'Auto-scaling infrastructure that adjusts to your workload in real-time, ensuring zero latency spikes even during peak demand.',
    icon: 'Zap'
  },
  {
    tag: 'TRUST',
    title: 'Zero-Trust Architecture',
    description: 'Built-in security at every layer of the stack. End-to-end encryption and identity-aware proxying for every microservice.',
    icon: 'Shield'
  },
  {
    tag: 'SCALABILITY',
    title: 'Distributed State Fabric',
    description: 'A global data layer that maintains consistency across regions while delivering sub-millisecond local read speeds.',
    icon: 'Layers'
  }
];

export const INFRA_NODES: InfraNode[] = [
  { name: 'Edge Runtime', description: 'V8 Isolate Container', latency: '2ms', status: 'optimal', icon: 'Globe' },
  { name: 'Vector DB', description: 'Semantic Search Engine', latency: '14ms', status: 'active', icon: 'Database' },
  { name: 'Auth Proxy', description: 'Identity-Aware Layer', latency: '4ms', status: 'optimal', icon: 'Lock' },
  { name: 'Inference Cluster', description: 'GPU Orchestration', latency: '22ms', status: 'active', icon: 'Cpu' },
  { name: 'State Fabric', description: 'Global KV Store', latency: '8ms', status: 'syncing', icon: 'Layers' },
  { name: 'Security Shield', description: 'DDoS Mitigation', latency: '1ms', status: 'optimal', icon: 'Shield' },
  { name: 'Log Drain', description: 'Real-time Analytics', latency: '35ms', status: 'active', icon: 'Activity' },
  { name: 'Compute Node', description: 'Dedicated CPU Instance', latency: '12ms', status: 'optimal', icon: 'Server' }
];

export const IconMap: Record<string, any> = {
  Shield: Shield,
  Zap: Zap,
  Layers: Layers,
  Database: Database,
  Cpu: Cpu,
  Globe: Globe,
  Lock: Lock,
  Activity: Activity,
  Server: Server,
  Box: Box
};
