import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Smartphone, Monitor, Fingerprint } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DemoForm from "@/components/DemoForm";

const DeviceRestriction = () => {
  const useCases = [
    {
      icon: Smartphone,
      title: "BYOD Security",
      description: "Secure bring-your-own-device environments by controlling which personal devices can access corporate resources.",
      benefits: ["Device registration", "Security compliance", "Remote management", "Data protection"]
    },
    {
      icon: Monitor,
      title: "Corporate Device Management", 
      description: "Ensure only company-managed and compliant devices can access sensitive business applications and data.",
      benefits: ["Managed device control", "Compliance verification", "Asset tracking", "Security standardization"]
    },
    {
      icon: Shield,
      title: "Threat Prevention",
      description: "Block access from compromised, rooted, or jailbroken devices that pose security risks to your organization.",
      benefits: ["Malware detection", "Root/jailbreak blocking", "Threat intelligence", "Risk assessment"]
    },
    {
      icon: Fingerprint,
      title: "Device Identity Verification",
      description: "Verify device authenticity and establish trusted device relationships for secure access.",
      benefits: ["Device fingerprinting", "Hardware verification", "Trust establishment", "Identity binding"]
    }
  ];

  const deviceTypes = [
    {
      icon: Monitor,
      title: "Desktop Computers",
      description: "Manage Windows, macOS, and Linux workstations",
      features: ["Hardware fingerprinting", "Software compliance", "Remote attestation", "Security configuration"]
    },
    {
      icon: Smartphone,
      title: "Mobile Devices",
      description: "Control iOS and Android smartphones and tablets",
      features: ["Device enrollment", "App management", "Remote wipe", "Compliance checking"]
    },
    {
      icon: Shield,
      title: "IoT Devices",
      description: "Secure Internet of Things and embedded devices",
      features: ["Certificate-based auth", "Device certificates", "Secure provisioning", "Lifecycle management"]
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
              Device Access Restriction
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Manage and restrict access based on device authentication and registration. Ensure only trusted, compliant devices can access your critical business resources and applications.
            </p>
            <DemoForm>
              <Button variant="hero" size="lg" className="hover-scale">
                Manage Device Access
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
                Implement device-based access controls to secure your environment and maintain compliance across all endpoints.
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

        {/* Device Types */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Supported Device Types</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive device management across all platforms and device categories in your organization.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {deviceTypes.map((deviceType, index) => (
                <Card key={index} className="bg-background/80 border-accent/20 hover:border-primary/30 transition-all duration-300 text-center">
                  <CardHeader>
                    <div className="p-4 bg-gradient-primary rounded-full w-20 h-20 mx-auto mb-4 shadow-glow">
                      <deviceType.icon className="w-12 h-12 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{deviceType.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 text-sm">{deviceType.description}</p>
                    <div className="space-y-2">
                      {deviceType.features.map((feature, idx) => (
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

            <div className="mt-16">
              <div className="bg-background/80 backdrop-blur-sm border border-accent/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Device Security Workflow</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3 shadow-glow">
                      <span className="text-primary-foreground font-bold">1</span>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Device Registration</h4>
                    <p className="text-muted-foreground text-sm">Enroll and authenticate new devices</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3 shadow-glow">
                      <span className="text-primary-foreground font-bold">2</span>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Compliance Check</h4>
                    <p className="text-muted-foreground text-sm">Verify security policies and configuration</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3 shadow-glow">
                      <span className="text-primary-foreground font-bold">3</span>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Access Control</h4>
                    <p className="text-muted-foreground text-sm">Grant or deny access based on trust level</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3 shadow-glow">
                      <span className="text-primary-foreground font-bold">4</span>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Continuous Monitoring</h4>
                    <p className="text-muted-foreground text-sm">Ongoing security assessment and updates</p>
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

export default DeviceRestriction;