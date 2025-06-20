
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Edit, Trash2 } from 'lucide-react';
import { Topic } from '@/types';
import { Link } from 'react-router-dom';

interface TopicCardProps {
  topic: Topic;
  onDelete: (id: string) => Promise<void>;
  isDeleting?: boolean;
}

const TopicCard: React.FC<TopicCardProps> = ({ topic, onDelete, isDeleting = false }) => {
  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this topic? This action cannot be undone.')) {
      await onDelete(topic.id);
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-teal-900 line-clamp-2">
          {topic.title || 'Untitled Topic'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {topic.description || 'No description provided. Every great conversation starts somewhere—what questions will this topic inspire?'}
        </p>
        
        <div className="flex items-center justify-between">
          <Link to={`/topics/${topic.id}`}>
            <Button variant="outline" size="sm" className="text-teal-700 border-teal-300 hover:bg-teal-50">
              View Details
            </Button>
          </Link>
          
          <div className="flex gap-2">
            <Link to={`/topics/edit/${topic.id}`}>
              <Button variant="ghost" size="sm" className="p-2 h-8 w-8">
                <Edit className="h-4 w-4" />
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDelete}
              disabled={isDeleting}
              className="p-2 h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TopicCard;
