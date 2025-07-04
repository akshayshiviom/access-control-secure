import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Lock, Monitor, Users, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DemoForm from "@/components/DemoForm";

const SoftwareAccessManagement = () => {
  const useCases = [
    {
      icon: Lock,
      title: "License Compliance",
      description: "Ensure software license compliance by controlling application access and tracking usage across your organization.",
      benefits: ["License optimization", "Compliance monitoring", "Cost control", "Usage analytics"]
    },
    {
      icon: Users,
      title: "Role-Based Access",
      description: "Grant software access based on job roles, departments, and security clearance levels for appropriate resource allocation.",
      benefits: ["Role-based permissions", "Department policies", "Security levels", "Access governance"]
    },
    {
      icon: Monitor,
      title: "Security Control",
      description: "Prevent unauthorized software installation and usage that could introduce security vulnerabilities or malware.",
      benefits: ["Malware prevention", "Unauthorized software blocking", "Security enforcement", "Risk reduction"]
    },
    {
      icon: Settings,
      title: "IT Asset Management",
      description: "Centrally manage software inventory, deployment, and lifecycle across all organizational endpoints.",
      benefits: ["Centralized control", "Automated deployment", "Lifecycle management", "Asset tracking"]
    }
  ];

  const managementFeatures = [
    {
      category: "Application Control",
      features: [
        "Whitelist/blacklist management",
        "Real-time blocking",
        "Installation prevention",
        "Usage monitoring"
      ]
    },
    {
      category: "User Management", 
      features: [
        "Role-based permissions",
        "Group policies",
        "Temporary access",
        "Request workflows"
      ]
    },
    {
      category: "Compliance & Reporting",
      features: [
        "License tracking",
        "Usage reports",
        "Compliance dashboards",
        "Audit trails"
      ]
    },
    {
      category: "Security Features",
      features: [
        "Malware detection",
        "Signature verification",
        "Behavioral analysis",
        "Threat intelligence"
      ]
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
              <Lock className="w-12 h-12 text-primary-foreground" />
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Software Access Management
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Centrally manage and control which applications and software users can access within your organization. Ensure compliance, security, and optimal resource allocation across all endpoints.
            </p>
            <DemoForm>
              <Button variant="hero" size="lg" className="hover-scale">
                Manage Software Access
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
                Implement comprehensive software access controls to enhance security, compliance, and operational efficiency.
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

        {/* Management Features */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Management Capabilities</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive software management tools for complete control over your organization's application ecosystem.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {managementFeatures.map((category, index) => (
                <Card key={index} className="bg-background/80 border-accent/20 hover:border-primary/30 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg text-center">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.features.map((feature, idx) => (
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
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Access Control Matrix Example</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-accent/20">
                        <th className="text-left py-3 text-foreground">Software Category</th>
                        <th className="text-center py-3 text-foreground">Admin</th>
                        <th className="text-center py-3 text-foreground">Manager</th>
                        <th className="text-center py-3 text-foreground">Employee</th>
                        <th className="text-center py-3 text-foreground">Contractor</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-accent/10">
                        <td className="py-3">Office Suite</td>
                        <td className="text-center py-3">✅</td>
                        <td className="text-center py-3">✅</td>
                        <td className="text-center py-3">✅</td>
                        <td className="text-center py-3">✅</td>
                      </tr>
                      <tr className="border-b border-accent/10">
                        <td className="py-3">Development Tools</td>
                        <td className="text-center py-3">✅</td>
                        <td className="text-center py-3">⏸️</td>
                        <td className="text-center py-3">⏸️</td>
                        <td className="text-center py-3">❌</td>
                      </tr>
                      <tr className="border-b border-accent/10">
                        <td className="py-3">Financial Software</td>
                        <td className="text-center py-3">✅</td>
                        <td className="text-center py-3">✅</td>
                        <td className="text-center py-3">⏸️</td>
                        <td className="text-center py-3">❌</td>
                      </tr>
                      <tr>
                        <td className="py-3">Gaming/Entertainment</td>
                        <td className="text-center py-3">⏸️</td>
                        <td className="text-center py-3">❌</td>
                        <td className="text-center py-3">❌</td>
                        <td className="text-center py-3">❌</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 flex justify-center gap-6 text-xs">
                  <div className="flex items-center gap-1">
                    <span>✅</span>
                    <span className="text-muted-foreground">Full Access</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>⏸️</span>
                    <span className="text-muted-foreground">Approval Required</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>❌</span>
                    <span className="text-muted-foreground">Blocked</span>
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

export default SoftwareAccessManagement;