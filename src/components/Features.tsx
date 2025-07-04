import { Card } from "@/components/ui/card";
import { Shield, Lock, Key, User, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: User,
      title: "Custom Login Page",
      description: "Create branded login experiences tailored to your organization's identity and security requirements."
    },
    {
      icon: Lock,
      title: "Password Policy",
      description: "Enforce strong password requirements with customizable policies to enhance account security."
    },
    {
      icon: Key,
      title: "Self Password Reset",
      description: "Enable users to securely reset their passwords independently, reducing IT support overhead."
    },
    {
      icon: Shield,
      title: "2FA Authentication",
      description: "Add an extra layer of security with two-factor authentication for critical access points."
    },
    {
      icon: Shield,
      title: "IP Restriction",
      description: "Control access based on IP addresses, ensuring connections only from trusted locations."
    },
    {
      icon: Shield,
      title: "Device Restriction",
      description: "Manage and restrict access based on device authentication and registration."
    },
    {
      icon: Users,
      title: "Personal Gmail Block",
      description: "Prevent unauthorized personal email access during work hours to maintain productivity and security."
    },
    {
      icon: Lock,
      title: "Software Access Management",
      description: "Centrally manage and control which applications and software users can access within your organization."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Comprehensive Security Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our security software provides everything you need to protect your business data and control access across your organization.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 bg-gradient-card border-accent/20 hover:shadow-glow transition-all duration-300 hover:border-accent/40 group"
            >
              <div className="mb-4">
                <feature.icon className="w-12 h-12 text-accent group-hover:text-primary transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to secure your business with enterprise-grade protection?
          </p>
          <div className="flex justify-center">
            <Card className="p-8 bg-gradient-card border-accent/20 max-w-md">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Get Started Today
              </h3>
              <p className="text-muted-foreground mb-6">
                Choose individual features or get the complete security package.
              </p>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">₹300</div>
                <div className="text-sm text-muted-foreground mb-4">per feature</div>
                <div className="text-2xl font-bold text-primary">₹1,100</div>
                <div className="text-sm text-muted-foreground">complete package</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;