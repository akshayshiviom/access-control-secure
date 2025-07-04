import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DemoForm from "@/components/DemoForm";
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
              Comprehensive security solutions designed to protect your organization with enterprise-grade features.
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

      </div>
    </section>
  );
};

export default Features;