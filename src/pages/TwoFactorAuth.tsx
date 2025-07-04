import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Smartphone, Key, Lock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DemoForm from "@/components/DemoForm";

const TwoFactorAuth = () => {
  const useCases = [
    {
      icon: Shield,
      title: "Enhanced Account Security",
      description: "Add an extra layer of protection beyond passwords to prevent unauthorized access even if credentials are compromised.",
      benefits: ["99.9% attack prevention", "Credential theft protection", "Account takeover prevention", "Advanced threat defense"]
    },
    {
      icon: Lock,
      title: "Compliance Requirements",
      description: "Meet regulatory standards and industry requirements that mandate multi-factor authentication for sensitive data access.",
      benefits: ["Regulatory compliance", "Audit requirements", "Industry standards", "Risk mitigation"]
    },
    {
      icon: Key,
      title: "Privileged Access Protection",
      description: "Secure administrative and privileged accounts with additional authentication factors for critical system access.",
      benefits: ["Admin account security", "Privileged access control", "Critical system protection", "Elevated permissions"]
    },
    {
      icon: Smartphone,
      title: "Remote Work Security",
      description: "Secure remote access and mobile device authentication for distributed teams and BYOD environments.",
      benefits: ["Remote access security", "Mobile device protection", "BYOD compliance", "Distributed team safety"]
    }
  ];

  const authMethods = [
    {
      icon: Smartphone,
      title: "SMS Authentication",
      description: "Receive verification codes via text message",
      features: ["Instant delivery", "Universal compatibility", "Easy setup", "Global coverage"]
    },
    {
      icon: Shield,
      title: "Authenticator Apps",
      description: "Time-based codes from mobile authenticator applications",
      features: ["Offline capability", "Enhanced security", "Multiple accounts", "Backup codes"]
    },
    {
      icon: Key,
      title: "Hardware Tokens",
      description: "Physical security keys for maximum protection",
      features: ["Phishing resistant", "No battery required", "USB/NFC support", "Enterprise grade"]
    },
    {
      icon: Lock,
      title: "Push Notifications",
      description: "Approve login attempts directly from your mobile device",
      features: ["One-tap approval", "Context information", "Fraud detection", "User friendly"]
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
              <Shield className="w-12 h-12 text-primary-foreground" />
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Two-Factor Authentication
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Add an extra layer of security with two-factor authentication for critical access points. Protect your organization from credential theft and unauthorized access with multiple authentication methods.
            </p>
            <DemoForm>
              <Button variant="hero" size="lg" className="hover-scale">
                Enable 2FA Protection
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
                Implement multi-factor authentication to secure critical access points and meet compliance requirements.
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

        {/* Authentication Methods */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Authentication Methods</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose from multiple authentication methods to balance security and user experience for your organization.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {authMethods.map((method, index) => (
                <Card key={index} className="bg-background/80 border-accent/20 hover:border-primary/30 transition-all duration-300 text-center">
                  <CardHeader>
                    <div className="p-3 bg-gradient-primary rounded-full w-16 h-16 mx-auto mb-4 shadow-glow">
                      <method.icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm">{method.description}</p>
                    <div className="space-y-2">
                      {method.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="bg-background/80 backdrop-blur-sm border border-accent/20 rounded-2xl p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-foreground mb-6">Security Statistics</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                    <div className="text-sm text-muted-foreground">Attack Prevention Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">81%</div>
                    <div className="text-sm text-muted-foreground">Breach Reduction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">&lt;5s</div>
                    <div className="text-sm text-muted-foreground">Average Auth Time</div>
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

export default TwoFactorAuth;