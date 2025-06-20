
import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';
import { getTopicById, updateTopic } from '@/lib/supabase';
import TopicForm from '@/components/TopicForm';
import Navbar from '@/components/Navbar';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';

const EditTopicPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data: topic, isLoading, error } = useQuery({
    queryKey: ['topic', id],
    queryFn: () => getTopicById(id!),
    enabled: !!id,
  });

  const updateMutation = useMutation({
    mutationFn: ({ title, description }: { title: string; description?: string }) =>
      updateTopic(id!, { title, description }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['topics'] });
      queryClient.invalidateQueries({ queryKey: ['topic', id] });
      toast({
        title: 'Success',
        description: 'Topic updated successfully',
      });
      navigate('/topics');
    },
    onError: (error) => {
      console.error('Error updating topic:', error);
      toast({
        title: 'Error',
        description: 'Failed to update topic. Please try again.',
        variant: 'destructive',
      });
    },
  });

  const handleSubmit = async (data: { title: string; description?: string }) => {
    await updateMutation.mutateAsync(data);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-2xl mx-auto">
            <Skeleton className="h-8 w-64 mb-4" />
            <Card>
              <CardHeader>
                <Skeleton className="h-6 w-48" />
              </CardHeader>
              <CardContent className="space-y-4">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-10 w-32" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  if (error || !topic) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Topic Not Found</h1>
            <p className="text-gray-600 mb-4">
              The topic you're looking for doesn't exist or may have been deleted.
            </p>
            <button
              onClick={() => navigate('/topics')}
              className="text-teal-600 hover:text-teal-700 underline"
            >
              Return to Topics
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Edit Topic
          </h1>
          <p className="text-gray-600">
            Refine your topic to better challenge assumptions and inspire meaningful dialogue.
          </p>
        </div>

        <TopicForm
          topic={topic}
          onSubmit={handleSubmit}
          isSubmitting={updateMutation.isPending}
          submitButtonText="Update Topic"
        />
      </div>
    </div>
  );
};

export default EditTopicPage;
