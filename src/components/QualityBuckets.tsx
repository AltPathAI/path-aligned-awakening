
import React from 'react';
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
};

const buckets: Bucket[] = [
  {
    id: "health",
    title: "Physical & Mental Health",
    icon: <Heart className="h-8 w-8 stroke-neutral-600" />,
    blurb: "Water, food, rest, care, mood",
    items: [
      "We have safe drinking water.",
      "We get enough restorative sleep.",
      "We can obtain medical care when needed."
    ]
  },
  {
    id: "safety",
    title: "Safety & Environment",
    icon: <Shield className="h-8 w-8 stroke-neutral-600" />,
    blurb: "Freedom from hazards and harm",
    items: [
      "Our surroundings are free from serious hazards.",
      "We feel safe from interpersonal violence.",
      "We feel safe from property crime."
    ]
  },
  {
    id: "housing",
    title: "Housing & Neighbourhood",
    icon: <Home className="h-8 w-8 stroke-neutral-600" />,
    blurb: "Secure, affordable shelter",
    items: [
      "Our home is safe and weather-tight.",
      "We can access green space for recreation."
    ]
  },
  {
    id: "social",
    title: "Social Connections",
    icon: <Users className="h-8 w-8 stroke-neutral-600" />,
    blurb: "Supportive relationships",
    items: [
      "We have people we can rely on.",
      "We regularly spend enjoyable time with friends or family."
    ]
  },
  {
    id: "time",
    title: "Time Autonomy",
    icon: <Clock className="h-8 w-8 stroke-neutral-600" />,
    blurb: "Free time & control",
    items: [
      "We have enough free time for hobbies.",
      "We can influence our work or study hours."
    ]
  },
  {
    id: "finance",
    title: "Income & Security",
    icon: <DollarSign className="h-8 w-8 stroke-neutral-600" />,
    blurb: "Expenses & emergency buffer",
    items: [
      "We can meet routine living costs.",
      "We could handle a €1 000 emergency expense."
    ]
  },
  {
    id: "education",
    title: "Education & Skills",
    icon: <BookOpen className="h-8 w-8 stroke-neutral-600" />,
    blurb: "Learning & digital access",
    items: [
      "We can access ongoing learning resources.",
      "We have reliable internet and devices."
    ]
  },
  {
    id: "work",
    title: "Meaningful Work",
    icon: <Briefcase className="h-8 w-8 stroke-neutral-600" />,
    blurb: "Contribution & respect",
    items: [
      "We have opportunities to contribute productively.",
      "We feel our work is meaningful."
    ]
  },
  {
    id: "civic",
    title: "Civic Engagement",
    icon: <Vote className="h-8 w-8 stroke-neutral-600" />,
    blurb: "Voice & trust",
    items: [
      "We feel our voice is heard in decisions.",
      "We trust public institutions to act fairly."
    ]
  },
  {
    id: "purpose",
    title: "Purpose & Well-Being",
    icon: <Target className="h-8 w-8 stroke-neutral-600" />,
    blurb: "Overall life satisfaction",
    items: [
      "We feel life is worthwhile.",
      "We are satisfied with our overall quality of life."
    ]
  }
];

const QualityBuckets = () => {
  return (
    <section id="quality-buckets" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl mb-12 text-neutral-800">
          Quality-of-Life Buckets
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {buckets.map(b => (
            <div
              key={b.id}
              className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
            >
              <div className="flex flex-col items-center gap-2 text-neutral-700 mb-4">
                {b.icon}
                <h3 className="mt-1 font-medium text-neutral-800">{b.title}</h3>
                <p className="text-sm text-neutral-600">{b.blurb}</p>
              </div>

              <ul className="text-left list-disc list-inside space-y-1">
                {b.items.map(line => (
                  <li key={line} className="text-sm text-neutral-700">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityBuckets;
