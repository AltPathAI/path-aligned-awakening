
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, ArrowUp, ArrowDown } from 'lucide-react';

const QuestionTeaserThread = () => {
  const sampleQuestions = [
    {
      question: "How do I know if I'm living according to my true values?",
      votes: 24,
      replies: 8
    },
    {
      question: "What's the difference between societal expectations and personal calling?",
      votes: 18,
      replies: 5
    },
    {
      question: "How can game theory help with life decisions?",
      votes: 15,
      replies: 12
    }
  ];

  return (
    <div className="mt-12 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-teal-900 mb-4">
          Community Questions & Insights
        </h3>
        <p className="text-teal-700">
          Real questions from people on their values-aligned journey
        </p>
      </div>
      
      <div className="space-y-4">
        {sampleQuestions.map((item, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow duration-300 border-teal-100">
            <CardContent className="p-4">
              <div className="flex items-start space-x-4">
                <div className="flex flex-col items-center space-y-1">
                  <Button variant="ghost" size="sm" className="p-1 h-8 w-8">
                    <ArrowUp className="w-4 h-4 text-teal-600" />
                  </Button>
                  <span className="text-sm font-medium text-teal-700">{item.votes}</span>
                  <Button variant="ghost" size="sm" className="p-1 h-8 w-8">
                    <ArrowDown className="w-4 h-4 text-teal-400" />
                  </Button>
                </div>
                
                <div className="flex-1">
                  <p className="text-teal-900 font-medium mb-2">{item.question}</p>
                  <div className="flex items-center space-x-4 text-sm text-teal-600">
                    <span className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{item.replies} replies</span>
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Button className="bg-teal-600 hover:bg-teal-700 text-white">
          Join the Discussion
        </Button>
      </div>
    </div>
  );
};

export default QuestionTeaserThread;
