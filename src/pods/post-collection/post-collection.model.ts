import type { Media } from '@content-island/api-client';
 
export interface Post {
  id: string;
  language: 'en';
  title: string;
  slug: string;
  date: string;
  summary: string;
  image: Media;
  content: string;
  readTime: number;
}