
import React from 'react';
import { Topic } from '@/types';
import TopicCard from './TopicCard';
import { Skeleton } from '@/components/ui/skeleton';

interface TopicListProps {
  topics: Topic[];
  onDelete: (id: string) => Promise<void>;
  isLoading?: boolean;
  isDeleting?: boolean;
}

const TopicList: React.FC<TopicListProps> = ({ 
  topics, 
  onDelete, 
  isLoading = false, 
  isDeleting = false 
}) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="space-y-3">
            <Skeleton className="h-32 w-full rounded-lg" />
          </div>
        ))}
      </div>
    );
  }

  if (topics.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="max-w-md mx-auto">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            No topics yet
          </h3>
          <p className="text-gray-600 mb-6">
            The most unconventional paths often start with the most unexpected questions. 
            Create your first topic to begin challenging assumptions.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {topics.map((topic) => (
        <TopicCard
          key={topic.id}
          topic={topic}
          onDelete={onDelete}
          isDeleting={isDeleting}
        />
      ))}
    </div>
  );
};

export default TopicList;
