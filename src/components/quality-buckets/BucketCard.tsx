
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BucketCardProps {
  icon: LucideIcon;
  title: string;
  blurb: string;
  items: string[];
  color: string;
  bgColor: string;
  borderColor: string;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const BucketCard: React.FC<BucketCardProps> = ({
  icon: Icon,
  title,
  blurb,
  items,
  color,
  bgColor,
  borderColor,
  isHovered,
  onHover,
  onLeave
}) => {
  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className={`rounded-2xl border ${borderColor} ${bgColor} p-4 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}>
        <div className="flex items-start gap-3 mb-3">
          <div className={`transition-colors duration-300 ${
            isHovered ? color : 'text-neutral-600'
          } flex-shrink-0`}>
            <Icon className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-base text-neutral-800 mb-1 group-hover:text-accent-600 transition-colors leading-tight">
              {title}
            </h3>
            <p className="text-xs text-neutral-600 font-medium mb-3">{blurb}</p>
            
            <div className={`transition-all duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-80'
            }`}>
              <ul className="text-left list-none space-y-1">
                {items.map((line, index) => (
                  <li key={line} className="text-xs text-neutral-700 flex items-start gap-2">
                    <div className="w-1 h-1 bg-accent-600 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span className="leading-relaxed">{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BucketCard;
