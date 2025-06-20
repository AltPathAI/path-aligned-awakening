
import { createClient } from '@supabase/supabase-js';
import { Topic, Question, Vote, Video } from '@/types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Topics CRUD functions
export const getTopics = async (page = 0, limit = 10) => {
  const { data, error } = await supabase
    .from('topics')
    .select('*')
    .order('created_at', { ascending: false })
    .range(page * limit, (page + 1) * limit - 1);
  
  if (error) throw error;
  return data as Topic[];
};

export const getTopicById = async (id: string) => {
  const { data, error } = await supabase
    .from('topics')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) throw error;
  return data as Topic;
};

export const createTopic = async (title: string, description?: string) => {
  const { data, error } = await supabase
    .from('topics')
    .insert([{ title, description }])
    .select()
    .single();
  
  if (error) throw error;
  return data as Topic;
};

export const updateTopic = async (id: string, updates: Partial<Pick<Topic, 'title' | 'description'>>) => {
  const { data, error } = await supabase
    .from('topics')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();
  
  if (error) throw error;
  return data as Topic;
};

export const deleteTopic = async (id: string) => {
  const { error } = await supabase
    .from('topics')
    .delete()
    .eq('id', id);
  
  if (error) throw error;
};

// Questions CRUD functions
export const getQuestionsByTopic = async (topicId: string) => {
  const { data, error } = await supabase
    .from('questions')
    .select(`
      *,
      author:users(id, full_name, avatar_url),
      votes(*),
      videos(*)
    `)
    .eq('topic_id', topicId)
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data as Question[];
};

export const getQuestionById = async (id: string) => {
  const { data, error } = await supabase
    .from('questions')
    .select(`
      *,
      author:users(id, full_name, avatar_url),
      votes(*),
      videos(*)
    `)
    .eq('id', id)
    .single();
  
  if (error) throw error;
  return data as Question;
};

export const createQuestion = async (body: string, topicId: string, userId: string) => {
  const { data, error } = await supabase
    .from('questions')
    .insert([{ body, topic_id: topicId, user_id: userId }])
    .select()
    .single();
  
  if (error) throw error;
  return data as Question;
};

export const updateQuestion = async (id: string, body: string, userId: string) => {
  const { data, error } = await supabase
    .from('questions')
    .update({ body, updated_at: new Date().toISOString() })
    .eq('id', id)
    .eq('user_id', userId)
    .select()
    .single();
  
  if (error) throw error;
  return data as Question;
};

export const deleteQuestion = async (id: string, userId: string) => {
  const { error } = await supabase
    .from('questions')
    .delete()
    .eq('id', id)
    .eq('user_id', userId);
  
  if (error) throw error;
};

// Votes CRUD functions
export const getVotesByQuestion = async (questionId: string) => {
  const { data, error } = await supabase
    .from('votes')
    .select('*')
    .eq('question_id', questionId);
  
  if (error) throw error;
  return data as Vote[];
};

export const getUserVotes = async (userId: string) => {
  const { data, error } = await supabase
    .from('votes')
    .select('question_id')
    .eq('user_id', userId);
  
  if (error) throw error;
  return data;
};

export const createVote = async (questionId: string, userId: string) => {
  const { data, error } = await supabase
    .from('votes')
    .insert([{ question_id: questionId, user_id: userId }])
    .select()
    .single();
  
  if (error) throw error;
  return data as Vote;
};

export const deleteVote = async (questionId: string, userId: string) => {
  const { error } = await supabase
    .from('votes')
    .delete()
    .eq('question_id', questionId)
    .eq('user_id', userId);
  
  if (error) throw error;
};

// Videos CRUD functions
export const getVideosByQuestion = async (questionId: string) => {
  const { data, error } = await supabase
    .from('videos')
    .select('*')
    .eq('question_id', questionId)
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data as Video[];
};

export const createVideo = async (questionId: string, youtubeId: string) => {
  const { data, error } = await supabase
    .from('videos')
    .insert([{ question_id: questionId, youtube_id: youtubeId }])
    .select()
    .single();
  
  if (error) throw error;
  return data as Video;
};

export const deleteVideo = async (id: string) => {
  const { error } = await supabase
    .from('videos')
    .delete()
    .eq('id', id);
  
  if (error) throw error;
};

// Legacy function for backward compatibility
export const voteOnQuestion = async (questionId: string, userId: string, value: 1 | -1) => {
  if (value === 1) {
    return createVote(questionId, userId);
  } else {
    return deleteVote(questionId, userId);
  }
};
