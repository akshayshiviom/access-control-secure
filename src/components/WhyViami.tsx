import { Shield, Lock, Eye, Zap, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhyViami = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Military-grade encryption and security protocols trusted by Fortune 500 companies worldwide.",
    },
    {
      icon: Lock,
      title: "Zero-Trust Architecture",
      description: "Never trust, always verify. Our zero-trust model ensures maximum security at every level.",
    },
    {
      icon: Eye,
      title: "Real-Time Monitoring",
      description: "24/7 threat detection and monitoring with instant alerts and automated response systems.",
    },
    {
      icon: Zap,
      title: "Lightning Fast Response",
      description: "Automated threat response in milliseconds, protecting your assets before damage occurs.",
    },
    {
      icon: Users,
      title: "Expert Support Team",
      description: "Dedicated security experts available around the clock to support your organization.",
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Award-winning security platform recognized by leading cybersecurity organizations.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Why Choose <span className="text-primary">Viami</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            In an increasingly dangerous digital landscape, your organization needs more than basic security. 
            Viami delivers enterprise-grade protection with unmatched performance and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="bg-background/50 border-accent/20 hover:border-primary/30 transition-all duration-300 hover:shadow-elegant">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-primary rounded-lg shadow-glow">
                    <reason.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{reason.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyViami;