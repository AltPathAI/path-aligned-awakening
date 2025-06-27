
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

export interface Bucket {
  id: string;
  title: string;
  icon: typeof Heart;
  blurb: string;
  items: string[];
  color: string;
  bgColor: string;
  borderColor: string;
}

export const buckets: Bucket[] = [
  {
    id: "health",
    title: "Physical & Mental Health",
    icon: Heart,
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
    icon: Shield,
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
    icon: Home,
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
    icon: Users,
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
    icon: Clock,
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
    icon: DollarSign,
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
    icon: BookOpen,
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
    icon: Briefcase,
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
    icon: Vote,
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
    icon: Target,
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
