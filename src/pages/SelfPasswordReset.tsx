import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Key, Clock, Shield, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DemoForm from "@/components/DemoForm";

const SelfPasswordReset = () => {
  const useCases = [
    {
      icon: Clock,
      title: "Reduced IT Overhead",
      description: "Minimize IT support tickets by enabling users to reset their passwords independently, freeing up resources for critical tasks.",
      benefits: ["24/7 availability", "Instant resolution", "Cost reduction", "Resource optimization"]
    },
    {
      icon: Users,
      title: "Improved User Experience",
      description: "Provide users with immediate access recovery without waiting for IT support, maintaining productivity and satisfaction.",
      benefits: ["Self-service portal", "Quick resolution", "User autonomy", "Reduced downtime"]
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Maintain security standards with multi-factor verification and secure reset processes that prevent unauthorized access.",
      benefits: ["Multi-factor verification", "Secure channels", "Audit trails", "Fraud prevention"]
    },
    {
      icon: Key,
      title: "Compliance & Governance",
      description: "Meet regulatory requirements with proper documentation and secure password reset workflows.",
      benefits: ["Audit compliance", "Process documentation", "Regulatory alignment", "Risk management"]
    }
  ];

  const resetSteps = [
    {
      step: "1",
      title: "Identity Verification",
      description: "User provides username/email and answers security questions"
    },
    {
      step: "2", 
      title: "Multi-Factor Authentication",
      description: "Additional verification through SMS, email, or authenticator app"
    },
    {
      step: "3",
      title: "Secure Reset Link",
      description: "Time-limited reset link sent to verified communication channel"
    },
    {
      step: "4",
      title: "New Password Creation",
      description: "User creates new password following organizational policies"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-6 text-center">
            <div className="p-4 bg-gradient-primary rounded-full w-20 h-20 mx-auto mb-6 shadow-glow">
              <Key className="w-12 h-12 text-primary-foreground" />
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Self-Service Password Reset
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Enable users to securely reset their passwords independently, reducing IT support overhead while maintaining the highest security standards. Our self-service solution provides instant access recovery with enterprise-grade protection.
            </p>
            <DemoForm>
              <Button variant="hero" size="lg" className="hover-scale">
                Try Password Reset Demo
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
                Empower users with secure self-service capabilities while reducing operational costs and improving security posture.
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

        {/* Reset Process */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Secure Reset Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our multi-step verification process ensures only authorized users can reset passwords while maintaining user convenience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resetSteps.map((step, index) => (
                <Card key={index} className="bg-background/80 border-accent/20 text-center hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                      <span className="text-primary-foreground font-bold text-lg">{step.step}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="bg-background/80 backdrop-blur-sm border border-accent/20 rounded-2xl p-8 max-w-2xl mx-auto">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Security Features
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <span className="text-foreground">Time-limited links</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <span className="text-foreground">IP validation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <span className="text-foreground">Device recognition</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <span className="text-foreground">Audit logging</span>
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

export default SelfPasswordReset;