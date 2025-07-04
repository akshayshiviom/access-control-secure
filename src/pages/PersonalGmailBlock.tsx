import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Clock, Shield, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DemoForm from "@/components/DemoForm";

const PersonalGmailBlock = () => {
  const useCases = [
    {
      icon: Clock,
      title: "Productivity Enhancement",
      description: "Prevent personal email distractions during work hours to maintain focus and improve overall team productivity.",
      benefits: ["Reduced distractions", "Better focus", "Time management", "Productivity metrics"]
    },
    {
      icon: Shield,
      title: "Data Loss Prevention",
      description: "Prevent accidental or intentional data leakage through personal email accounts and unauthorized file sharing.",
      benefits: ["Data protection", "Information security", "Leak prevention", "Compliance adherence"]
    },
    {
      icon: Users,
      title: "Workplace Policy Enforcement",
      description: "Enforce company policies regarding personal device and email usage during work hours and on company networks.",
      benefits: ["Policy compliance", "Consistent enforcement", "Legal protection", "Clear boundaries"]
    },
    {
      icon: Mail,
      title: "Corporate Email Focus",
      description: "Encourage use of corporate email systems and maintain professional communication standards.",
      benefits: ["Professional communication", "Centralized management", "Better oversight", "Corporate standards"]
    }
  ];

  const blockingFeatures = [
    {
      title: "Time-Based Blocking",
      description: "Block access during specific work hours or time periods",
      icon: "⏰"
    },
    {
      title: "Network-Level Control",
      description: "Implement blocking at the network infrastructure level",
      icon: "🌐"
    },
    {
      title: "Application Control",
      description: "Block specific email applications and web interfaces",
      icon: "📱"
    },
    {
      title: "User Group Policies",
      description: "Apply different policies based on user roles and departments",
      icon: "👥"
    },
    {
      title: "Bypass Management",
      description: "Temporary access for emergencies or special circumstances",
      icon: "🚪"
    },
    {
      title: "Usage Monitoring",
      description: "Track and report on blocked access attempts and violations",
      icon: "📊"
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
              <Users className="w-12 h-12 text-primary-foreground" />
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Personal Gmail Blocking
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Prevent unauthorized personal email access during work hours to maintain productivity and security. Control access to personal Gmail and other email services while preserving corporate communication channels.
            </p>
            <DemoForm>
              <Button variant="hero" size="lg" className="hover-scale">
                Configure Email Blocking
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
                Implement personal email blocking to enhance productivity, security, and policy compliance in your organization.
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

        {/* Blocking Features */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Blocking Features</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive email blocking capabilities with flexible controls and monitoring options.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blockingFeatures.map((feature, index) => (
                <Card key={index} className="bg-background/80 border-accent/20 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">{feature.icon}</span>
                      <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16">
              <div className="bg-background/80 backdrop-blur-sm border border-accent/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Policy Configuration Example</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-foreground mb-4">Work Hours Policy</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between border-b border-accent/20 pb-2">
                        <span className="text-muted-foreground">Block Time:</span>
                        <span className="text-foreground">9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between border-b border-accent/20 pb-2">
                        <span className="text-muted-foreground">Work Days:</span>
                        <span className="text-foreground">Monday - Friday</span>
                      </div>
                      <div className="flex justify-between border-b border-accent/20 pb-2">
                        <span className="text-muted-foreground">Blocked Services:</span>
                        <span className="text-foreground">Gmail, Yahoo, Outlook</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Break Allowance:</span>
                        <span className="text-foreground">30 min lunch break</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-4">Department Rules</h4>
                    <div className="space-y-3 text-sm">
                      <div className="bg-green-500/10 text-green-400 p-3 rounded">
                        <div className="font-medium">Sales Team</div>
                        <div className="text-xs">Limited access for client communication</div>
                      </div>
                      <div className="bg-red-500/10 text-red-400 p-3 rounded">
                        <div className="font-medium">Finance Department</div>
                        <div className="text-xs">Complete block during work hours</div>
                      </div>
                      <div className="bg-yellow-500/10 text-yellow-400 p-3 rounded">
                        <div className="font-medium">Management</div>
                        <div className="text-xs">Bypass permissions available</div>
                      </div>
                    </div>
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

export default PersonalGmailBlock;