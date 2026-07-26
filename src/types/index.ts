export interface StreamData {
  id: string;
  user_id: string;
  user_login: string;
  user_name: string;
  game_id: string;
  game_name: string;
  type: string;
  title: string;
  viewer_count: number;
  started_at: string;
  language: string;
  thumbnail_url: string;
  tag_ids: string[];
  is_mature: boolean;
}

export interface TwitchUser {
  id: string;
  login: string;
  display_name: string;
  type: string;
  broadcaster_type: string;
  description: string;
  profile_image_url: string;
  offline_image_url: string;
  view_count: number;
  email?: string;
  created_at: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  tags: string[];
  link?: string;
  featured: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  color: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface StreamSchedule {
  day: string;
  time: string;
  game: string;
  description?: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  href: string;
  image: string;
  date: string;
  tags: string[];
}
