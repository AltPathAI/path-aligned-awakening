
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
  Target 
} from 'lucide-react';

type Bucket = {
  id: string;
  title: string;
  icon: JSX.Element;
  blurb: string;
  items: string[];
  color: string;
};

const buckets: Bucket[] = [
  {
    id: "health",
    title: "Physical & Mental Health",
    icon: <Heart className="h-8 w-8" />,
    blurb: "Water, food, rest, care, mood",
    color: "text-red-600",
    items: [
      "I have safe drinking water.",
      "I get enough restorative sleep.",
      "I can obtain medical care when needed."
    ]
  },
  {
    id: "safety",
    title: "Safety & Environment",
    icon: <Shield className="h-8 w-8" />,
    blurb: "Freedom from hazards and harm",
    color: "text-blue-600",
    items: [
      "My surroundings are free from serious hazards.",
      "I feel safe from interpersonal violence.",
      "I feel safe from property crime."
    ]
  },
  {
    id: "housing",
    title: "Housing & Neighbourhood",
    icon: <Home className="h-8 w-8" />,
    blurb: "Secure, affordable shelter",
    color: "text-amber-600",
    items: [
      "My home is safe and weather-tight.",
      "I can access green space for recreation."
    ]
  },
  {
    id: "social",
    title: "Social Connections",
    icon: <Users className="h-8 w-8" />,
    blurb: "Supportive relationships",
    color: "text-purple-600",
    items: [
      "I have people I can rely on.",
      "I regularly spend enjoyable time with friends or family."
    ]
  },
  {
    id: "time",
    title: "Time Autonomy",
    icon: <Clock className="h-8 w-8" />,
    blurb: "Free time & control",
    color: "text-indigo-600",
    items: [
      "I have enough free time for hobbies.",
      "I can influence my work or study hours."
    ]
  },
  {
    id: "finance",
    title: "Income & Security",
    icon: <DollarSign className="h-8 w-8" />,
    blurb: "Expenses & emergency buffer",
    color: "text-green-600",
    items: [
      "I can meet routine living costs.",
      "I could handle a €1 000 emergency expense."
    ]
  },
  {
    id: "education",
    title: "Education & Skills",
    icon: <BookOpen className="h-8 w-8" />,
    blurb: "Learning & digital access",
    color: "text-teal-600",
    items: [
      "I can access ongoing learning resources.",
      "I have reliable internet and devices."
    ]
  },
  {
    id: "work",
    title: "Meaningful Work",
    icon: <Briefcase className="h-8 w-8" />,
    blurb: "Contribution & respect",
    color: "text-orange-600",
    items: [
      "I have opportunities to contribute productively.",
      "I feel my work is meaningful."
    ]
  },
  {
    id: "civic",
    title: "Civic Engagement",
    icon: <Vote className="h-8 w-8" />,
    blurb: "Voice & trust",
    color: "text-cyan-600",
    items: [
      "I feel my voice is heard in decisions.",
      "I trust public institutions to act fairly."
    ]
  },
  {
    id: "purpose",
    title: "Purpose & Well-Being",
    icon: <Target className="h-8 w-8" />,
    blurb: "Overall life satisfaction",
    color: "text-pink-600",
    items: [
      "I feel life is worthwhile.",
      "I am satisfied with my overall quality of life."
    ]
  }
];

const QualityBuckets = () => {
  const [hoveredBucket, setHoveredBucket] = useState<string | null>(null);

  return (
    <section id="quality-buckets" className="py-32 bg-white">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <div className="mb-20">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-neutral-800 leading-tight">
            Quality-of-Life Buckets
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            The essential domains that define a fulfilling life. Each bucket represents core human needs that must be addressed before we can refine them into personal elegance.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {buckets.map(b => (
            <div
              key={b.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredBucket(b.id)}
              onMouseLeave={() => setHoveredBucket(null)}
            >
              <div className="rounded-xl border-2 border-neutral-200 bg-neutral-50 p-8 h-full transition-all duration-300 hover:border-accent-500 hover:bg-accent-50 hover:shadow-lg hover:-translate-y-1">
                <div className="flex flex-col items-center gap-4 text-neutral-700 mb-6">
                  <div className={`transition-colors duration-300 ${
                    hoveredBucket === b.id ? b.color : 'text-neutral-600'
                  }`}>
                    {b.icon}
                  </div>
                  <div className="text-center">
                    <h3 className="font-medium text-lg text-neutral-800 mb-2 group-hover:text-accent-600 transition-colors">
                      {b.title}
                    </h3>
                    <p className="text-sm text-neutral-600 font-medium">{b.blurb}</p>
                  </div>
                </div>

                <div className={`transition-all duration-300 ${
                  hoveredBucket === b.id ? 'opacity-100 max-h-40' : 'opacity-70 max-h-32'
                } overflow-hidden`}>
                  <ul className="text-left list-none space-y-2">
                    {b.items.map((line, index) => (
                      <li key={line} className="text-sm text-neutral-700 flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-accent-600 rounded-full mt-2 flex-shrink-0"></div>
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-neutral-600 italic max-w-2xl mx-auto leading-relaxed">
            These buckets form the foundation. Once secured through pragmatic solutions, 
            we can layer on the elegance that makes life truly beautiful.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QualityBuckets;
