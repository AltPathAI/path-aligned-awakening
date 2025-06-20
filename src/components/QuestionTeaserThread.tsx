
import React from 'react';

interface QuestionTeaserThreadProps {
  topicId: string;
}

const QuestionTeaserThread: React.FC<QuestionTeaserThreadProps> = ({ topicId }) => {
  return (
    <div className="bg-white rounded-lg border p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Discussion Thread
      </h3>
      <div className="space-y-4">
        <div className="text-gray-600">
          This is where the question teaser thread for topic {topicId} would appear.
        </div>
        <div className="text-sm text-gray-500">
          Thread functionality coming soon...
        </div>
      </div>
    </div>
  );
};

export default QuestionTeaserThread;
