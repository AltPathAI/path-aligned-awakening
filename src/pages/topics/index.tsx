
import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { getTopics, deleteTopic } from '@/lib/supabase';
import TopicList from '@/components/TopicList';
import Navbar from '@/components/Navbar';
import { toast } from '@/components/ui/use-toast';

const TopicsPage = () => {
  const queryClient = useQueryClient();

  const { data: topics = [], isLoading } = useQuery({
    queryKey: ['topics'],
    queryFn: () => getTopics(0, 50), // Get first 50 topics
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTopic,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['topics'] });
      toast({
        title: 'Success',
        description: 'Topic deleted successfully',
      });
    },
    onError: (error) => {
      console.error('Error deleting topic:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete topic. Please try again.',
        variant: 'destructive',
      });
    },
  });

  const handleDelete = async (id: string) => {
    await deleteMutation.mutateAsync(id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Topic Management
            </h1>
            <p className="text-gray-600">
              Curate the conversations that challenge conventional thinking and inspire alternative paths.
            </p>
          </div>
          
          <Link to="/topics/new" className="mt-4 sm:mt-0">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white">
              <Plus className="w-4 h-4 mr-2" />
              New Topic
            </Button>
          </Link>
        </div>

        <TopicList
          topics={topics}
          onDelete={handleDelete}
          isLoading={isLoading}
          isDeleting={deleteMutation.isPending}
        />
      </div>
    </div>
  );
};

export default TopicsPage;
