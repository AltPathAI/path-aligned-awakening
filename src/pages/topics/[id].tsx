
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams, Link } from 'react-router-dom';
import { getTopicById } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Edit, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import QuestionTeaserThread from '@/components/QuestionTeaserThread';

const TopicDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data: topic, isLoading, error } = useQuery({
    queryKey: ['topic', id],
    queryFn: () => getTopicById(id!),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Skeleton className="h-8 w-32 mb-6" />
          <Card className="mb-8">
            <CardHeader>
              <Skeleton className="h-8 w-64 mb-2" />
              <Skeleton className="h-4 w-96" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-20 w-full" />
            </CardContent>
          </Card>
          <Skeleton className="h-64 w-full" />
        </div>
      </div>
    );
  }

  if (error || !topic) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Topic Not Found</h1>
            <p className="text-gray-600 mb-4">
              The topic you're looking for doesn't exist or may have been deleted.
            </p>
            <Link to="/topics">
              <Button variant="outline" className="border-teal-300 text-teal-700 hover:bg-teal-50">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Topics
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(topic.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation */}
        <div className="mb-6">
          <Link to="/topics">
            <Button variant="ghost" className="text-teal-700 hover:text-teal-900 hover:bg-teal-50 p-0">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Topics
            </Button>
          </Link>
        </div>

        {/* Topic Details */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <CardTitle className="text-2xl font-bold text-teal-900 mb-2">
                  {topic.title}
                </CardTitle>
                <p className="text-sm text-gray-500">
                  Created on {formattedDate}
                </p>
              </div>
              <Link to={`/topics/edit/${topic.id}`}>
                <Button variant="outline" size="sm" className="border-teal-300 text-teal-700 hover:bg-teal-50">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              {topic.description || 'No description provided. This topic awaits the questions that will challenge conventional thinking and inspire new perspectives.'}
            </p>
          </CardContent>
        </Card>

        {/* Questions Thread */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Questions & Discussions
          </h2>
          <QuestionTeaserThread topicId={topic.id} />
        </div>
      </div>
    </div>
  );
};

export default TopicDetailPage;
