import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Globe, MapPin, Lock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DemoForm from "@/components/DemoForm";

const IPRestriction = () => {
  const useCases = [
    {
      icon: MapPin,
      title: "Geographic Access Control",
      description: "Restrict access based on geographic locations to prevent unauthorized access from high-risk regions or countries.",
      benefits: ["Geographic filtering", "Country-based blocking", "Regional compliance", "Risk zone prevention"]
    },
    {
      icon: Lock,
      title: "Office Network Security",
      description: "Limit access to corporate systems exclusively from trusted office networks and VPN connections.",
      benefits: ["Office-only access", "VPN integration", "Network segmentation", "Perimeter security"]
    },
    {
      icon: Shield,
      title: "Remote Work Protection",
      description: "Secure remote work environments by allowing access only from pre-approved home and mobile networks.",
      benefits: ["Home office security", "Mobile network control", "Remote worker protection", "Flexible policies"]
    },
    {
      icon: Globe,
      title: "Compliance & Governance",
      description: "Meet regulatory requirements for data access controls and maintain audit trails for compliance purposes.",
      benefits: ["Regulatory compliance", "Audit documentation", "Data sovereignty", "Legal requirements"]
    }
  ];

  const features = [
    {
      title: "Whitelist Management",
      description: "Maintain approved IP addresses and ranges for authorized access",
      icon: "✓"
    },
    {
      title: "Blacklist Protection", 
      description: "Block known malicious IP addresses and suspicious networks",
      icon: "✗"
    },
    {
      title: "Geographic Filtering",
      description: "Control access based on country and regional locations",
      icon: "🌍"
    },
    {
      title: "Dynamic Rules",
      description: "Create time-based and conditional access rules",
      icon: "⏰"
    },
    {
      title: "VPN Integration",
      description: "Seamless integration with corporate VPN solutions",
      icon: "🔒"
    },
    {
      title: "Real-time Monitoring",
      description: "Live monitoring and alerts for unauthorized access attempts",
      icon: "👁️"
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
              IP Address Restriction
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Control access based on IP addresses, ensuring connections only from trusted locations. Implement geographic and network-based access controls to enhance your security perimeter.
            </p>
            <DemoForm>
              <Button variant="hero" size="lg" className="hover-scale">
                Configure IP Restrictions
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
                Implement IP-based access controls to create secure perimeters and enforce location-based security policies.
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

        {/* Features Grid */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">IP Restriction Features</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive IP management tools to create flexible and secure access policies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
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
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Configuration Example</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-foreground mb-4 text-green-500">✓ Allowed IPs</h4>
                    <div className="space-y-2 font-mono text-sm">
                      <div className="bg-green-500/10 text-green-400 p-2 rounded">192.168.1.0/24 (Office Network)</div>
                      <div className="bg-green-500/10 text-green-400 p-2 rounded">10.0.0.0/16 (VPN Range)</div>
                      <div className="bg-green-500/10 text-green-400 p-2 rounded">203.0.113.0/24 (Branch Office)</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-4 text-red-500">✗ Blocked Regions</h4>
                    <div className="space-y-2 text-sm">
                      <div className="bg-red-500/10 text-red-400 p-2 rounded">High-risk countries</div>
                      <div className="bg-red-500/10 text-red-400 p-2 rounded">Known bot networks</div>
                      <div className="bg-red-500/10 text-red-400 p-2 rounded">Tor exit nodes</div>
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

export default IPRestriction;