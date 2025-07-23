import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CosmicCursor } from '@/components/CosmicCursor';
import { ServiceCard } from '@/components/ServiceCard';
import { PricingCard } from '@/components/PricingCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { useToast } from '@/hooks/use-toast';
import {
  Bot,
  MessageSquare,
  Phone,
  BarChart3,
  Workflow,
  Brain,
  Zap,
  Star,
  ArrowRight,
  CheckCircle,
  Globe,
  Instagram,
  Linkedin,
  MessageCircle,
  Calendar,
  Sparkles,
} from 'lucide-react';
import cosmicBg from '@/assets/cosmic-bg.jpg';
import aiBotIcon from '@/assets/ai-bot-icon.jpg';
import founderPhoto from '@/assets/founder-photo.jpg';

export default function TitanAutomations() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
  });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const services = [
    {
      title: "AI Chatbots for Websites",
      description: "Intelligent conversational bots that engage visitors 24/7, qualify leads, and boost conversions instantly.",
      icon: Bot,
    },
    {
      title: "Instagram Comment-to-DM Bots",
      description: "Automated funnel systems that convert Instagram comments into private conversations and sales.",
      icon: Instagram,
    },
    {
      title: "AI Calling Bots",
      description: "Smart voice response systems that handle customer calls, book appointments, and qualify leads automatically.",
      icon: Phone,
    },
    {
      title: "Lead Capture Tools",
      description: "Advanced dashboard systems that capture, organize, and nurture leads through automated sequences.",
      icon: BarChart3,
    },
    {
      title: "CRM Integrations",
      description: "Seamless integration with your existing CRM, plus smart notifications and automated follow-ups.",
      icon: Workflow,
    },
    {
      title: "AI Analytics Insights",
      description: "Intelligent dashboards powered by AI that provide actionable insights and performance optimization.",
      icon: Brain,
    },
  ];

  const pricingPlans = [
    {
      title: "Starter Bot",
      price: "9,999",
      features: [
        "Basic AI Chatbot for Website",
        "Lead Qualification System",
        "Basic Analytics Dashboard",
        "Email Integration",
        "30 Days Support",
      ],
    },
    {
      title: "Growth Automations",
      price: "29,999",
      features: [
        "Advanced AI Chatbot + Voice Bot",
        "Instagram Comment-to-DM System",
        "CRM Integration",
        "Advanced Analytics",
        "WhatsApp Integration",
        "60 Days Premium Support",
      ],
      isPopular: true,
    },
    {
      title: "Titan AI Suite",
      price: "69,999+",
      features: [
        "Complete AI Automation Ecosystem",
        "Custom AI Models",
        "Multi-Platform Integration",
        "Advanced Workflow Automation",
        "Dedicated Account Manager",
        "Unlimited Support & Updates",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      company: "TechFlow Solutions",
      testimonial: "Titan's AI bots increased our lead conversion by 300%. The Instagram automation alone brought us 50+ qualified leads monthly.",
      result: "300% increase in conversions",
      avatar: "RS",
    },
    {
      name: "Priya Patel",
      company: "Digital Marketing Pro",
      testimonial: "The AI calling bot handles our appointment bookings flawlessly. We save 40+ hours weekly and never miss a lead.",
      result: "40+ hours saved weekly",
      avatar: "PP",
    },
    {
      name: "Arjun Mehta",
      company: "E-commerce Empire",
      testimonial: "Our website chatbot now converts 60% more visitors into customers. The ROI is incredible - paid for itself in 2 weeks.",
      result: "60% increase in website conversions",
      avatar: "AM",
    },
  ];

  const benefits = [
    "Increase Conversions by up to 300%",
    "Save 50+ Hours Every Week",
    "Real-Time Customer Engagement",
    "Works 24/7 Without Breaks",
    "Zero Manual Follow-Ups Required",
    "Built with Precision by AI Specialists",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "🪐 Message sent!",
      description: "We'll get back from the other side of the galaxy!",
      duration: 5000,
    });

    // Reset form
    setFormData({ name: '', email: '', phone: '', service: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative">
      <CosmicCursor />
      
      {/* Cosmic Background */}
      <div className="cosmic-bg"></div>
      <div 
        className="fixed inset-0 opacity-20 z-0"
        style={{
          backgroundImage: `url(${cosmicBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      ></div>

      {/* Hero Section */}
      <section id="hero" className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo/Title */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-cosmic font-bold mb-4 bg-gradient-solar bg-clip-text text-transparent">
              TITAN
            </h1>
            <h2 className="text-3xl md:text-4xl font-cosmic font-bold text-solar-gold mb-2">
              AUTOMATIONS
            </h2>
            <p className="text-lg font-space text-muted-foreground">by Titan Media</p>
          </div>

          {/* Hero Content */}
          <div className="glass-panel p-8 mb-8 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-cosmic font-bold mb-6 text-pure-white leading-tight">
              Unlock The Future of Business with 
              <span className="text-solar-gold"> AI Automations</span>
            </h2>
            <p className="text-xl md:text-2xl font-space text-muted-foreground mb-8 leading-relaxed">
              AI Bots, Smart Funnels & Automation Systems Designed to Save Time & Skyrocket Growth
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="solar" 
                size="lg" 
                className="text-lg px-8 py-4"
                onClick={() => window.open('https://calendly.com/nikhil211884/30min', '_blank')}
              >
                <Calendar className="mr-2" />
                Book Discovery Call
              </Button>
              <Button 
                variant="glass" 
                size="lg" 
                className="text-lg px-8 py-4"
                onClick={() => scrollToSection('services')}
              >
                <Sparkles className="mr-2" />
                Explore Automations
              </Button>
            </div>
          </div>

          {/* Floating AI Icon */}
          <div className="relative w-32 h-32 mx-auto">
            <img 
              src={aiBotIcon} 
              alt="AI Bot" 
              className="w-full h-full object-cover rounded-full border-2 border-solar-gold float rotate-slow"
            />
            <div className="absolute inset-0 rounded-full bg-solar-gold/20 blur-xl pulse-glow"></div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="services" className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-cosmic font-bold mb-6 text-pure-white">
              What We <span className="text-solar-gold">Build</span>
            </h2>
            <p className="text-xl font-space text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge AI automation systems that transform how your business operates in the digital universe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Titan Automations */}
      <section id="benefits" className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-cosmic font-bold mb-16 text-pure-white">
            Why <span className="text-solar-gold">Titan Automations</span>?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="glass-panel p-6 flex items-center hover:scale-105 transition-all duration-500">
                <CheckCircle className="w-8 h-8 text-solar-gold mr-4 flex-shrink-0" />
                <span className="text-lg font-space text-pure-white font-semibold">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Results Carousel */}
      <section id="testimonials" className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-cosmic font-bold mb-6 text-pure-white">
              Client <span className="text-solar-gold">Results</span>
            </h2>
            <p className="text-xl font-space text-muted-foreground">
              Real businesses, real results, powered by Titan AI
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 flex justify-center">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-solar-gold' : 'bg-muted-foreground/30'
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </section>


      {/* Pricing Tiers */}
      <section id="pricing" className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-cosmic font-bold mb-6 text-pure-white">
              Choose Your <span className="text-solar-gold">Power Level</span>
            </h2>
            <p className="text-xl font-space text-muted-foreground">
              Select the automation tier that matches your business ambitions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="relative z-10 py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-cosmic font-bold mb-6 text-pure-white">
              Ready to <span className="text-solar-gold">Launch</span>?
            </h2>
            <p className="text-xl font-space text-muted-foreground">
              Send us a message from across the digital galaxy
            </p>
          </div>

          <form onSubmit={handleSubmit} className="glass-panel p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-cosmic font-bold text-pure-white mb-2">
                  Name
                </label>
                <Input
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="bg-secondary/20 border-primary/30 text-pure-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-cosmic font-bold text-pure-white mb-2">
                  Phone
                </label>
                <Input
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="bg-secondary/20 border-primary/30 text-pure-white"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-cosmic font-bold text-pure-white mb-2">
                Email
              </label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="bg-secondary/20 border-primary/30 text-pure-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-cosmic font-bold text-pure-white mb-2">
                What Do You Need Help With?
              </label>
              <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                <SelectTrigger className="bg-secondary/20 border-primary/30 text-pure-white">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="website-bot">Website AI Bot</SelectItem>
                  <SelectItem value="instagram-funnel">Instagram Funnel Bot</SelectItem>
                  <SelectItem value="ai-calling">AI Calling System</SelectItem>
                  <SelectItem value="custom">Custom Automation</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" variant="solar" className="w-full text-lg py-3">
              <Zap className="mr-2" />
              Launch Mission
            </Button>
          </form>
        </div>
      </section>

      {/* Book Discovery Call Section */}
      <section id="booking" className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-panel p-12">
            <h2 className="text-4xl md:text-6xl font-cosmic font-bold mb-6 text-pure-white">
              Book Your <span className="text-solar-gold">Discovery Call</span>
            </h2>
            <p className="text-xl font-space text-muted-foreground mb-8 leading-relaxed">
              Let's explore how AI automation can transform your business. 
              Schedule a 30-minute strategy session with our automation experts.
            </p>
            
            <Button 
              variant="solar" 
              size="lg" 
              className="text-xl px-12 py-6 pulse-glow"
              onClick={() => window.open('https://calendly.com/nikhil211884/30min', '_blank')}
            >
              <Calendar className="mr-3 w-6 h-6" />
              Book Now - It's Free!
            </Button>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm font-space text-muted-foreground">
              <span>📞 +91 7800709475</span>
              <span>📧 nikhil211884@gmail.com</span>
              <span>🌐 titanautomation.site</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-4 border-t border-primary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-cosmic font-bold text-solar-gold mb-4">
              TITAN AUTOMATIONS
            </h3>
            <p className="font-space text-muted-foreground mb-6">
              Powered by AI. Inspired by the Universe.
            </p>
            
            <div className="flex justify-center space-x-6 mb-6">
              <button className="p-3 glass-panel hover:bg-secondary/20 transition-all duration-500 group">
                <Instagram className="w-6 h-6 text-muted-foreground group-hover:text-solar-gold" />
              </button>
              <button className="p-3 glass-panel hover:bg-secondary/20 transition-all duration-500 group">
                <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-solar-gold" />
              </button>
              <button className="p-3 glass-panel hover:bg-secondary/20 transition-all duration-500 group">
                <MessageCircle className="w-6 h-6 text-muted-foreground group-hover:text-solar-gold" />
              </button>
            </div>
          </div>
          
          <div className="text-center text-sm font-space text-muted-foreground">
            <p>© 2025 Titan Automations by Titan Media. All rights reserved.</p>
            <p className="mt-2">Contact: nikhil211884@gmail.com | titanmediaoffice@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}