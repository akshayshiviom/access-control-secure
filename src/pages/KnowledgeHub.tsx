import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Key, User, Users } from "lucide-react";

const KnowledgeHubPage = () => {
  const resources = [
    {
      category: "Implementation Guides",
      items: [
        {
          title: "Getting Started with SecureGuard",
          description: "Complete setup guide for implementing your first security features",
          type: "Guide",
          icon: Shield
        },
        {
          title: "Custom Login Page Setup",
          description: "Step-by-step instructions for creating branded login experiences",
          type: "Tutorial",
          icon: User
        },
        {
          title: "2FA Implementation Best Practices",
          description: "How to deploy two-factor authentication effectively across your organization",
          type: "Best Practices",
          icon: Lock
        }
      ]
    },
    {
      category: "Security Knowledge Base",
      items: [
        {
          title: "Password Policy Guidelines",
          description: "Industry-standard password policies and how to implement them",
          type: "Knowledge Base",
          icon: Key
        },
        {
          title: "Understanding IP Restrictions",
          description: "How IP-based access control enhances your security posture",
          type: "Guide",
          icon: Shield
        },
        {
          title: "Device Management Strategies",
          description: "Best practices for controlling device access in modern workplaces",
          type: "Strategy Guide",
          icon: Shield
        }
      ]
    },
    {
      category: "Advanced Configuration",
      items: [
        {
          title: "Software Access Management",
          description: "Centralized control over application access and permissions",
          type: "Advanced Guide",
          icon: Users
        },
        {
          title: "Self-Service Password Reset",
          description: "Reduce IT overhead while maintaining security standards",
          type: "Configuration",
          icon: Key
        },
        {
          title: "Personal Email Blocking",
          description: "Implementing productive workspace policies without compromising security",
          type: "Policy Guide",
          icon: Lock
        }
      ]
    }
  ];

  const whitepapers = [
    {
      title: "The State of Small Business Cybersecurity 2024",
      description: "Industry insights and trends in cybersecurity for growing businesses",
      downloadSize: "2.1 MB PDF"
    },
    {
      title: "ROI of Comprehensive Security Solutions",
      description: "Calculate the business impact of implementing proper access controls",
      downloadSize: "1.8 MB PDF"
    },
    {
      title: "Compliance and Security: A Practical Guide",
      description: "Navigate security requirements while maintaining business agility",
      downloadSize: "3.2 MB PDF"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm border border-accent/20 rounded-full px-4 py-2 mb-6">
                <Shield className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-foreground">Knowledge Hub</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Knowledge Hub
              </h1>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about implementing and maximizing SecureGuard's security features in your organization.
              </p>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            {resources.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-foreground">{section.category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="p-6 bg-gradient-card border-accent/20 hover:border-accent/40 hover:shadow-glow transition-all duration-300 group cursor-pointer">
                      <div className="mb-4">
                        <item.icon className="w-10 h-10 text-accent group-hover:text-primary transition-colors duration-300" />
                      </div>
                      <div className="mb-2">
                        <span className="text-xs text-accent bg-accent/10 px-2 py-1 rounded-full">
                          {item.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <Button variant="ghost" size="sm" className="p-0 h-auto text-accent hover:text-primary">
                        Read More →
                      </Button>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Whitepapers Section */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Industry Whitepapers</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                In-depth reports and analysis on cybersecurity trends, best practices, and industry insights.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {whitepapers.map((paper, index) => (
                <Card key={index} className="p-6 bg-gradient-card border-accent/20 hover:border-accent/40 transition-all duration-300">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    {paper.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {paper.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{paper.downloadSize}</span>
                    <Button variant="premium" size="sm">
                      Download
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Need Custom Documentation?
              </h2>
              <p className="text-muted-foreground mb-8">
                Our team can create custom implementation guides and documentation tailored to your specific business requirements.
              </p>
              <Button variant="hero" size="lg">
                Request Custom Documentation
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default KnowledgeHubPage;