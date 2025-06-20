
import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { createTopic } from '@/lib/supabase';
import TopicForm from '@/components/TopicForm';
import Navbar from '@/components/Navbar';
import { toast } from '@/components/ui/use-toast';

const NewTopicPage = () => {
  const navigate = useNavigate();

  const createMutation = useMutation({
    mutationFn: ({ title, description }: { title: string; description?: string }) => 
      createTopic(title, description),
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Topic created successfully',
      });
      navigate('/topics');
    },
    onError: (error) => {
      console.error('Error creating topic:', error);
      toast({
        title: 'Error',
        description: 'Failed to create topic. Please try again.',
        variant: 'destructive',
      });
    },
  });

  const handleSubmit = async (data: { title: string; description?: string }) => {
    await createMutation.mutateAsync(data);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Create New Topic
          </h1>
          <p className="text-gray-600">
            Every breakthrough begins with a question that challenges the status quo. 
            What conversation will you spark?
          </p>
        </div>

        <TopicForm
          onSubmit={handleSubmit}
          isSubmitting={createMutation.isPending}
          submitButtonText="Create Topic"
        />
      </div>
    </div>
  );
};

export default NewTopicPage;
