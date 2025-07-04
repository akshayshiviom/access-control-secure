import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";
import DemoForm from "@/components/DemoForm";
import heroImage from "@/assets/security-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Security Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero/80"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-20 animate-float">
        <Shield className="w-24 h-24 text-primary" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20 animate-float delay-1000">
        <Shield className="w-16 h-16 text-accent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm border border-accent/20 rounded-full px-4 py-2 mb-8 animate-pulse-glow">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground">Your First Step Towards Cybersecurity</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Secure Your Business Data Access
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            In today's digital age, managing and controlling access to data and software is a critical challenge. 
            Our comprehensive security solution is your company's first step towards robust cybersecurity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="min-w-48" asChild>
              <Link to="/free-trial">Start Free Trial</Link>
            </Button>
            <DemoForm>
              <Button variant="outline" size="xl" className="min-w-48 border-accent/20 text-foreground hover:bg-accent/10">
                Get a Demo
              </Button>
            </DemoForm>
            <Button variant="outline" size="xl" className="min-w-48 border-accent/20 text-foreground hover:bg-accent/10" asChild>
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-sm text-muted-foreground">
            <p className="mb-4">Trusted by businesses worldwide</p>
            <div className="flex items-center justify-center gap-8 opacity-60">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>24/7 Protection</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Easy Integration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;