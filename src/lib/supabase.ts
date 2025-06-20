
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database functions
export const getTopics = async (page = 0, limit = 10) => {
  const { data, error } = await supabase
    .from('topics')
    .select('*')
    .order('created_at', { ascending: false })
    .range(page * limit, (page + 1) * limit - 1);
  
  if (error) throw error;
  return data;
};

export const getQuestionsByTopic = async (topicId: string) => {
  const { data, error } = await supabase
    .from('questions')
    .select(`
      *,
      author:users(full_name, avatar_url),
      votes(value)
    `)
    .eq('topic_id', topicId)
    .order('vote_count', { ascending: false });
  
  if (error) throw error;
  return data;
};

export const createQuestion = async (content: string, topicId: string, userId: string) => {
  const { data, error } = await supabase
    .from('questions')
    .insert([{ content, topic_id: topicId, author_id: userId }])
    .select()
    .single();
  
  if (error) throw error;
  return data;
};

export const voteOnQuestion = async (questionId: string, userId: string, value: 1 | -1) => {
  const { data, error } = await supabase
    .from('votes')
    .upsert([{ question_id: questionId, user_id: userId, value }])
    .select()
    .single();
  
  if (error) throw error;
  return data;
};

export const getUserVotes = async (userId: string) => {
  const { data, error } = await supabase
    .from('votes')
    .select('question_id, value')
    .eq('user_id', userId);
  
  if (error) throw error;
  return data;
};
