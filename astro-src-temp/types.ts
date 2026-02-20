
import { LucideIcon } from 'lucide-react';

export interface Testimonial {
  id: string;
  name: string;
  handle: string;
  logo: string;
  content: string;
  rating: number;
}

export interface ValueProp {
  title: string;
  description: string;
  icon: string;
  tag: string;
}

export interface InfraNode {
  name: string;
  description: string;
  latency: string;
  status: 'active' | 'optimal' | 'syncing';
  icon: string;
}
