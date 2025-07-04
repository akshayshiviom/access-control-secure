import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, Clock, Star, MessageSquare } from "lucide-react";

const WhatsNewPage = () => {
  const upcomingFeatures = [
    {
      title: "Advanced Threat Detection",
      description: "AI-powered threat detection that learns from your organization's behavior patterns to identify anomalies in real-time.",
      status: "In Development",
      eta: "Q2 2024",
      icon: Shield,
      priority: "high"
    },
    {
      title: "Single Sign-On (SSO) Integration",
      description: "Seamless integration with popular SSO providers including Azure AD, Okta, and Google Workspace.",
      status: "Beta Testing",
      eta: "Q1 2024",
      icon: Zap,
      priority: "high"
    },
    {
      title: "Advanced Analytics Dashboard",
      description: "Comprehensive security analytics with customizable reports and real-time monitoring dashboards.",
      status: "Coming Soon",
      eta: "Q2 2024",
      icon: Star,
      priority: "medium"
    },
    {
      title: "Mobile Device Management",
      description: "Enhanced mobile security features including app whitelisting and remote device management.",
      status: "Planned",
      eta: "Q3 2024",
      icon: Shield,
      priority: "medium"
    },
    {
      title: "API Rate Limiting",
      description: "Advanced API protection with intelligent rate limiting and DDoS protection capabilities.",
      status: "Research Phase",
      eta: "Q4 2024",
      icon: Clock,
      priority: "low"
    },
    {
      title: "Compliance Automation",
      description: "Automated compliance reporting for SOC 2, GDPR, and other industry standards.",
      status: "Planned",
      eta: "Q3 2024",
      icon: Shield,
      priority: "high"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Beta Testing":
        return "bg-accent/20 text-accent";
      case "In Development":
        return "bg-primary/20 text-primary";
      case "Coming Soon":
        return "bg-secondary/50 text-foreground";
      case "Planned":
        return "bg-muted/50 text-muted-foreground";
      case "Research Phase":
        return "bg-muted/30 text-muted-foreground";
      default:
        return "bg-muted/50 text-muted-foreground";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "border-l-accent";
      case "medium":
        return "border-l-primary";
      case "low":
        return "border-l-muted";
      default:
        return "border-l-muted";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm border border-accent/20 rounded-full px-4 py-2 mb-6">
                <Zap className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-foreground">Product Roadmap</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                What's New at SecureGuard
              </h1>
              <p className="text-xl text-muted-foreground">
                Stay up-to-date with the latest features and improvements we're building to enhance your security experience.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingFeatures.map((feature, index) => (
                <Card 
                  key={index} 
                  className={`p-6 bg-gradient-card border-accent/20 hover:border-accent/40 hover:shadow-glow transition-all duration-300 group border-l-4 ${getPriorityColor(feature.priority)}`}
                >
                  <div className="mb-4 flex items-start justify-between">
                    <feature.icon className="w-10 h-10 text-accent group-hover:text-primary transition-colors duration-300" />
                    <Badge className={getStatusColor(feature.status)}>
                      {feature.status}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">ETA: {feature.eta}</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      feature.priority === 'high' ? 'bg-accent/10 text-accent' :
                      feature.priority === 'medium' ? 'bg-primary/10 text-primary' :
                      'bg-muted/50 text-muted-foreground'
                    }`}>
                      {feature.priority.charAt(0).toUpperCase() + feature.priority.slice(1)} Priority
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Feedback Section */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Shape the Future of SecureGuard
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Your feedback drives our development. Let us know what features you'd like to see next or share your thoughts on our current roadmap.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="p-6 bg-gradient-card border-accent/20">
                  <MessageSquare className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Feature Requests</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Suggest new features or improvements to existing functionality.
                  </p>
                  <Button 
                    variant="hero" 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.open('https://forms.gle/feedback-features', '_blank')}
                  >
                    Submit Feature Request
                  </Button>
                </Card>
                
                <Card className="p-6 bg-gradient-card border-accent/20">
                  <Star className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-foreground">General Feedback</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Share your overall experience and suggestions for improvement.
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-accent/20 text-foreground hover:bg-accent/10"
                    onClick={() => window.open('https://forms.gle/general-feedback', '_blank')}
                  >
                    Give Feedback
                  </Button>
                </Card>
              </div>
              
              <p className="text-sm text-muted-foreground">
                You can also reach out to us directly at{" "}
                <a href="mailto:feedback@secureguard.com" className="text-accent hover:text-primary transition-colors">
                  feedback@secureguard.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default WhatsNewPage;