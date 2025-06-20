
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Topic } from '@/types';

interface TopicFormProps {
  topic?: Topic;
  onSubmit: (data: { title: string; description?: string }) => Promise<void>;
  isSubmitting?: boolean;
  submitButtonText?: string;
}

interface FormData {
  title: string;
  description?: string;
}

const TopicForm: React.FC<TopicFormProps> = ({ 
  topic, 
  onSubmit, 
  isSubmitting = false,
  submitButtonText = 'Create Topic'
}) => {
  const form = useForm<FormData>({
    defaultValues: {
      title: topic?.title || '',
      description: topic?.description || '',
    },
  });

  const handleSubmit = async (data: FormData) => {
    await onSubmit(data);
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-teal-900">
          {topic ? 'Edit Topic' : 'Create New Topic'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              rules={{ 
                required: 'Title is required',
                minLength: { value: 3, message: 'Title must be at least 3 characters long' },
                maxLength: { value: 100, message: 'Title must be less than 100 characters' }
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Topic Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="What unconventional question will this topic explore?"
                      {...field}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              rules={{
                maxLength: { value: 500, message: 'Description must be less than 500 characters' }
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe the context, challenge assumptions, or set the stage for meaningful dialogue..."
                      rows={4}
                      {...field}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-4 pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-teal-600 hover:bg-teal-700 text-white"
              >
                {isSubmitting ? 'Saving...' : submitButtonText}
              </Button>
              <Button
                type="button"
                variant="outline"
                disabled={isSubmitting}
                onClick={() => window.history.back()}
                className="border-teal-300 text-teal-700 hover:bg-teal-50"
              >
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default TopicForm;
