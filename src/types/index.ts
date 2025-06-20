
interface BaseEntity {
  id: string;
  created_at: string;
  updated_at: string;
}

export interface User extends BaseEntity {
  email: string;
  full_name?: string;
  avatar_url?: string;
  subscription_tier?: 'free' | 'basic' | 'premium';
  subscription_status?: 'active' | 'cancelled' | 'expired';
  stripe_customer_id?: string;
}

export interface Topic extends BaseEntity {
  title: string;
  description: string;
  youtube_videos: string[];
  author_id: string;
  view_count: number;
  question_count: number;
}

export interface Question extends BaseEntity {
  content: string;
  topic_id: string;
  author_id: string;
  vote_count: number;
  reply_count: number;
  author?: User;
}

export interface Vote extends BaseEntity {
  question_id: string;
  user_id: string;
  value: 1 | -1;
}

export interface Reply extends BaseEntity {
  content: string;
  question_id: string;
  author_id: string;
  author?: User;
}

export interface ValuesExercise extends BaseEntity {
  title: string;
  description: string;
  prompt: string;
  user_id: string;
  ai_response?: string;
  completed: boolean;
}

export interface SubscriptionTier {
  id: string;
  name: string;
  price: number;
  features: string[];
  stripe_price_id: string;
}
