
import React, { useState } from 'react';
import { 
  Heart, 
  Shield, 
  Home, 
  Users, 
  Clock, 
  DollarSign, 
  BookOpen, 
  Briefcase, 
  Vote, 
  Target,
  Calendar
} from 'lucide-react';

type Bucket = {
  id: string;
  title: string;
  icon: JSX.Element;
  blurb: string;
  items: string[];
  color: string;
  bgColor: string;
  borderColor: string;
};

const buckets: Bucket[] = [
  {
    id: "health",
    title: "Physical & Mental Health",
    icon: <Heart className="h-8 w-8" />,
    blurb: "Water, food, rest, care, mood",
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    items: [
      "I have safe drinking water",
      "I get enough restorative sleep",
      "I can obtain medical care when needed"
    ]
  },
  {
    id: "safety",
    title: "Safety & Environment",
    icon: <Shield className="h-8 w-8" />,
    blurb: "Freedom from hazards and harm",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    items: [
      "My surroundings are free from serious hazards",
      "I feel safe from interpersonal violence",
      "I feel safe from property crime"
    ]
  },
  {
    id: "housing",
    title: "Housing & Neighbourhood",
    icon: <Home className="h-8 w-8" />,
    blurb: "Secure, affordable shelter",
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    items: [
      "My home is safe and weather-tight",
      "I can access green space for recreation"
    ]
  },
  {
    id: "social",
    title: "Social Connections",
    icon: <Users className="h-8 w-8" />,
    blurb: "Supportive relationships",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    items: [
      "I have people I can rely on",
      "I regularly spend enjoyable time with friends or family"
    ]
  },
  {
    id: "time",
    title: "Time Autonomy",
    icon: <Clock className="h-8 w-8" />,
    blurb: "Free time & control",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    items: [
      "I have enough free time for hobbies",
      "I can influence my work or study hours"
    ]
  },
  {
    id: "finance",
    title: "Income & Security",
    icon: <DollarSign className="h-8 w-8" />,
    blurb: "Expenses & emergency buffer",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    items: [
      "I can meet routine living costs",
      "I could handle a €1,000 emergency expense"
    ]
  },
  {
    id: "education",
    title: "Education & Skills",
    icon: <BookOpen className="h-8 w-8" />,
    blurb: "Learning & digital access",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    items: [
      "I can access ongoing learning resources",
      "I have reliable internet and devices"
    ]
  },
  {
    id: "work",
    title: "Meaningful Work",
    icon: <Briefcase className="h-8 w-8" />,
    blurb: "Contribution & respect",
    color: "text-teal-600",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    items: [
      "I have opportunities to contribute productively",
      "I feel my work is meaningful"
    ]
  },
  {
    id: "civic",
    title: "Civic Engagement",
    icon: <Vote className="h-8 w-8" />,
    blurb: "Voice & trust",
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
    items: [
      "I feel my voice is heard in decisions",
      "I trust public institutions to act fairly"
    ]
  },
  {
    id: "purpose",
    title: "Purpose & Well-Being",
    icon: <Target className="h-8 w-8" />,
    blurb: "Overall life satisfaction",
    color: "text-teal-600",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    items: [
      "I feel life is worthwhile",
      "I am satisfied with my overall quality of life"
    ]
  }
];

const QualityBuckets = () => {
  const [hoveredBucket, setHoveredBucket] = useState<string | null>(null);

  return (
    <section id="quality-buckets" className="py-16 bg-white px-4">
      <div className="mx-auto max-w-sm">
        {/* Logo and title - matching screenshot */}
        <div className="mb-12 text-center">
          <div className="inline-block border-2 border-accent-600 rounded-2xl p-6 mb-8">
            <img 
              src="/lovable-uploads/b3d627f5-06f2-4d97-bf68-8e1eb3889a3d.png" 
              alt="AltPath.ai Logo" 
              className="h-16 w-16"
            />
            <div className="text-accent-600 font-medium mt-3 text-sm">AltPathAI</div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-neutral-800 leading-tight">
            Quality-of-Life Buckets
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed mb-12">
            Each bucket marks a core life concern. Discover your essentials and find your optimal AltPath.
          </p>
        </div>

        <div className="space-y-6 mb-16">
          {buckets.map(b => (
            <div
              key={b.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredBucket(b.id)}
              onMouseLeave={() => setHoveredBucket(null)}
            >
              <div className={`rounded-2xl border ${b.borderColor} ${b.bgColor} p-6 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className={`transition-colors duration-300 ${
                    hoveredBucket === b.id ? b.color : 'text-neutral-600'
                  } flex-shrink-0`}>
                    {b.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-neutral-800 mb-1 group-hover:text-accent-600 transition-colors leading-tight">
                      {b.title}
                    </h3>
                    <p className="text-sm text-neutral-600 font-medium mb-4">{b.blurb}</p>
                    
                    <div className={`transition-all duration-300 ${
                      hoveredBucket === b.id ? 'opacity-100' : 'opacity-80'
                    }`}>
                      <ul className="text-left list-none space-y-2">
                        {b.items.map((line, index) => (
                          <li key={line} className="text-sm text-neutral-700 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-accent-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">{line}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fixed bottom CTA */}
        <div className="fixed bottom-4 left-4 right-4 z-50">
          <button
            onClick={() => window.open('https://calendly.com/altpathai', '_blank')}
            className="w-full bg-brand-green hover:bg-green-700 text-white px-6 py-4 rounded-xl font-medium transition-all hover:shadow-lg flex items-center justify-center gap-2 text-lg"
          >
            <Calendar className="w-5 h-5" />
            Schedule Meet & Greet →
          </button>
        </div>
      </div>
    </section>
  );
};

export default QualityBuckets;
