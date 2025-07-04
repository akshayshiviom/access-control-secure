import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Lock, Shield, AlertTriangle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DemoForm from "@/components/DemoForm";

const PasswordPolicy = () => {
  const useCases = [
    {
      icon: Shield,
      title: "Compliance Requirements",
      description: "Meet industry standards and regulatory requirements with comprehensive password policies that ensure data protection.",
      benefits: ["GDPR compliance", "HIPAA requirements", "SOX standards", "ISO 27001 alignment"]
    },
    {
      icon: Lock,
      title: "Security Enhancement",
      description: "Strengthen your organization's security posture by enforcing robust password requirements across all systems.",
      benefits: ["Reduced breach risk", "Stronger authentication", "Consistent security", "Attack prevention"]
    },
    {
      icon: AlertTriangle,
      title: "Risk Management",
      description: "Minimize security risks by preventing weak passwords and enforcing regular password updates.",
      benefits: ["Vulnerability reduction", "Proactive protection", "Risk assessment", "Security monitoring"]
    },
    {
      icon: CheckCircle,
      title: "User Education",
      description: "Guide users to create stronger passwords while maintaining usability and productivity.",
      benefits: ["Security awareness", "Best practices", "User training", "Behavior change"]
    }
  ];

  const policyFeatures = [
    "Minimum password length requirements",
    "Character complexity rules",
    "Password history enforcement",
    "Regular password rotation",
    "Dictionary attack prevention",
    "Common password blocking",
    "Custom policy creation",
    "Real-time validation"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-6 text-center">
            <div className="p-4 bg-gradient-primary rounded-full w-20 h-20 mx-auto mb-6 shadow-glow">
              <Lock className="w-12 h-12 text-primary-foreground" />
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Password Policy Management
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Enforce strong password requirements with customizable policies that enhance account security while maintaining user productivity. Create comprehensive password standards that meet your organization's specific needs.
            </p>
            <DemoForm>
              <Button variant="hero" size="lg" className="hover-scale">
                Configure Password Policies
              </Button>
            </DemoForm>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Use Cases & Benefits</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Implement password policies that protect your organization while empowering users with clear security guidelines.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={index} className="bg-background border-accent/20 hover:border-primary/30 transition-all duration-300 hover:shadow-elegant">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <useCase.icon className="w-8 h-8 text-primary" />
                      <CardTitle className="text-2xl">{useCase.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{useCase.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {useCase.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Policy Features */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Comprehensive Password Controls
                </h2>
                <p className="text-muted-foreground mb-8">
                  Configure detailed password policies that balance security with usability. Our system provides granular control over password requirements while offering clear guidance to users.
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {policyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-background/80 backdrop-blur-sm border border-accent/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">Policy Example</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Minimum Length:</span>
                    <span className="text-foreground font-medium">12 characters</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Complexity:</span>
                    <span className="text-foreground font-medium">Mixed case + numbers + symbols</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rotation:</span>
                    <span className="text-foreground font-medium">Every 90 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">History:</span>
                    <span className="text-foreground font-medium">Last 12 passwords</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Lockout:</span>
                    <span className="text-foreground font-medium">5 failed attempts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PasswordPolicy;