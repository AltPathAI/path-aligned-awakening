
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
  description?: string;
  created_at: string;
  updated_at: string;
}

export interface Question {
  id: string;
  topic_id: string;
  user_id: string;
  body: string;
  created_at: string;
  updated_at: string;
  author?: User;
  votes?: Vote[];
  videos?: Video[];
}

export interface Vote {
  id: string;
  question_id: string;
  user_id: string;
  created_at: string;
}

export interface Video {
  id: string;
  question_id: string;
  youtube_id: string;
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
