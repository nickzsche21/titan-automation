import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <div className="glass-panel p-6 hover:scale-105 transition-all duration-500 group cursor-pointer float">
      <div className="flex items-center justify-center w-16 h-16 mb-4 mx-auto">
        <div className="relative">
          <Icon className="w-12 h-12 text-solar-gold group-hover:text-pure-white transition-colors duration-500" />
          <div className="absolute inset-0 w-12 h-12 bg-solar-gold/15 rounded-full group-hover:bg-solar-gold/25 transition-colors duration-500 blur-lg"></div>
        </div>
      </div>
      <h3 className="text-xl font-cosmic font-bold text-center mb-3 text-pure-white group-hover:text-solar-gold transition-colors duration-500">
        {title}
      </h3>
      <p className="text-muted-foreground text-center font-space leading-relaxed">
        {description}
      </p>
    </div>
  );
}