
export interface User {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  subscription_tier?: 'free' | 'basic' | 'premium';
  created_at?: string;
  updated_at?: string;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  video_urls: string[];
  created_at: string;
  updated_at: string;
}

export interface Question {
  id: string;
  content: string;
  topic_id: string;
  author_id: string;
  author?: User;
  vote_count: number;
  votes?: Vote[];
  created_at: string;
  updated_at: string;
}

export interface Vote {
  id: string;
  question_id: string;
  user_id: string;
  value: 1 | -1;
  created_at: string;
}

export interface Subscription {
  id: string;
  user_id: string;
  stripe_customer_id: string;
  stripe_subscription_id: string;
  status: 'active' | 'canceled' | 'past_due';
  tier: 'basic' | 'premium';
  created_at: string;
  updated_at: string;
}
