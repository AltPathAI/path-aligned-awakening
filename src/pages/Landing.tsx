
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Calendar, Users, Video, Star, CheckCircle, Youtube } from 'lucide-react';

const Landing = () => {
  const handleBookCall = () => {
    // Calendly integration would go here
    window.open('https://calendly.com/your-calendly-link', '_blank');
  };

  const handleYouTubeSubscribe = () => {
    window.open('https://youtube.com/your-channel', '_blank');
  };

  const features = [
    {
      icon: <Video className="w-6 h-6" />,
      title: 'Video-Based Learning',
      description: 'Discover your path through curated video content and community discussions.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Community Engagement',
      description: 'Ask questions, vote on topics, and learn from others on similar journeys.'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Values Alignment',
      description: 'AI-powered exercises to help you discover what truly matters to you.'
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Personal Coaching',
      description: 'Book one-on-one discovery calls to accelerate your personal growth.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Career Transition Coach',
      content: 'AltPath helped me realize that my values weren\'t aligned with my career. The community support was incredible.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Entrepreneur',
      content: 'The AI-powered values exercises gave me clarity I never had before. Highly recommend the discovery calls.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* YouTube Subscribe Banner */}
      <div className="bg-red-600 text-white py-2 px-4 text-center">
        <div className="max-w-4xl mx-auto flex items-center justify-center space-x-4">
          <Youtube className="w-5 h-5" />
          <span className="text-sm font-medium">
            Get weekly insights on values-aligned living
          </span>
          <Button
            size="sm"
            variant="secondary"
            onClick={handleYouTubeSubscribe}
            className="bg-white text-red-600 hover:bg-gray-100"
          >
            Subscribe
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Discover Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              {' '}Values-Aligned{' '}
            </span>
            Journey
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Stop following paths that don't fit who you are. Our AI-powered platform helps you discover 
            what truly matters to you and connect with others on similar journeys.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={handleBookCall}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book a Discovery Call
            </Button>
            <Link to="/topics">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-3 text-lg"
              >
                Explore Topics
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Traditional Advice Falls Short
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Most guidance assumes one-size-fits-all. We believe your path should be as unique as you are.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Community Says
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Find Your Authentic Path?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands who've discovered their values-aligned journey. Your authentic life is waiting.
          </p>
          <Button
            size="lg"
            onClick={handleBookCall}
            className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book Your Discovery Call
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Landing;
