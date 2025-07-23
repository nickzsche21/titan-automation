interface TestimonialCardProps {
  name: string;
  company: string;
  testimonial: string;
  result: string;
  avatar: string;
}

export function TestimonialCard({ name, company, testimonial, result, avatar }: TestimonialCardProps) {
  return (
    <div className="glass-panel p-6 mx-4 min-w-[300px] float">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-solar flex items-center justify-center text-deep-black font-cosmic font-bold text-lg mr-4">
          {name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <h4 className="font-cosmic font-bold text-pure-white">{name}</h4>
          <p className="text-sm text-muted-foreground font-space">{company}</p>
        </div>
      </div>
      
      <p className="text-muted-foreground font-space mb-4 italic">"{testimonial}"</p>
      
      <div className="bg-solar-gold/10 rounded-lg p-3 border border-solar-gold/20">
        <p className="text-solar-gold font-cosmic font-bold text-sm">
          📈 {result}
        </p>
      </div>
    </div>
  );
}