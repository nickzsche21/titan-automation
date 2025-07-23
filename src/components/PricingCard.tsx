import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export function PricingCard({ title, price, features, isPopular }: PricingCardProps) {
  return (
    <div className={`glass-panel p-8 hover:scale-105 transition-all duration-500 relative ${
      isPopular ? 'border-2 border-solar-gold pulse-glow' : ''
    }`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-solar px-4 py-1 text-sm font-cosmic font-bold text-deep-black rounded-full">
            MOST POPULAR
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-2xl font-cosmic font-bold mb-2 text-pure-white">
          {title}
        </h3>
        <div className="flex items-center justify-center mb-4">
          <span className="text-4xl font-cosmic font-bold text-solar-gold">₹{price}</span>
          {!price.includes('+') && <span className="text-muted-foreground ml-2">/ project</span>}
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-muted-foreground font-space">
            <Check className="w-5 h-5 text-solar-gold mr-3 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      <Button 
        variant={isPopular ? "solar" : "glass"} 
        className="w-full"
        onClick={() => window.open('https://calendly.com/nikhil211884/30min', '_blank')}
      >
        Book a Call
      </Button>
    </div>
  );
}