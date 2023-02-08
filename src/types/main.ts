import React from 'react';

export interface Children {
  children: React.ReactNode | React.ReactNode[];
}
export interface Job {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
  [key: string]: any;
}
