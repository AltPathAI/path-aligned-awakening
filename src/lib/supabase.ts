
import { Topic } from '@/types';

// Mock data for development
const mockTopics: Topic[] = [
  {
    id: '1',
    title: 'Alternative Career Paths in Tech',
    description: 'Exploring unconventional routes to success in technology beyond traditional corporate roles.',
    created_at: '2024-01-15T10:00:00Z',
  },
  {
    id: '2',
    title: 'Minimalist Living in a Consumer Society',
    description: 'How to challenge materialism and find fulfillment through intentional living.',
    created_at: '2024-01-10T15:30:00Z',
  },
  {
    id: '3',
    title: 'Education Beyond Traditional Institutions',
    description: 'Alternative learning paths that challenge the conventional education system.',
    created_at: '2024-01-05T09:15:00Z',
  },
];

let topicsStorage = [...mockTopics];

export const getTopics = async (offset: number = 0, limit: number = 50): Promise<Topic[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return topicsStorage.slice(offset, offset + limit);
};

export const getTopicById = async (id: string): Promise<Topic | null> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  return topicsStorage.find(topic => topic.id === id) || null;
};

export const createTopic = async (title: string, description?: string): Promise<Topic> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const newTopic: Topic = {
    id: Math.random().toString(36).substr(2, 9),
    title,
    description,
    created_at: new Date().toISOString(),
  };
  
  topicsStorage.unshift(newTopic);
  return newTopic;
};

export const updateTopic = async (id: string, updates: Partial<Pick<Topic, 'title' | 'description'>>): Promise<Topic> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 600));
  
  const topicIndex = topicsStorage.findIndex(topic => topic.id === id);
  if (topicIndex === -1) {
    throw new Error('Topic not found');
  }
  
  const updatedTopic = { ...topicsStorage[topicIndex], ...updates };
  topicsStorage[topicIndex] = updatedTopic;
  return updatedTopic;
};

export const deleteTopic = async (id: string): Promise<void> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 400));
  
  const topicIndex = topicsStorage.findIndex(topic => topic.id === id);
  if (topicIndex === -1) {
    throw new Error('Topic not found');
  }
  
  topicsStorage.splice(topicIndex, 1);
};
