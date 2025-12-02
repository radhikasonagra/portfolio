import { ReactNode } from 'react';

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  youtubeUrl?: string;
  infoUrl?: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Skill {
  name: string;
  icon: ReactNode;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'ai' | 'tools';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}