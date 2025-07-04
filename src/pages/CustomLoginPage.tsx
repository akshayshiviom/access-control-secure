import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { User, Monitor, Palette, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DemoForm from "@/components/DemoForm";

const CustomLoginPage = () => {
  const useCases = [
    {
      icon: Palette,
      title: "Brand Consistency",
      description: "Maintain your corporate branding throughout the authentication process, reinforcing brand identity and user trust.",
      benefits: ["Custom logos and colors", "Brand-aligned messaging", "Consistent user experience", "Professional appearance"]
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Implement additional security measures directly in your login flow to prevent unauthorized access.",
      benefits: ["CAPTCHA integration", "Suspicious activity detection", "Custom security warnings", "Fraud prevention"]
    },
    {
      icon: Monitor,
      title: "User Experience",
      description: "Create intuitive login experiences that guide users through authentication while maintaining security.",
      benefits: ["Responsive design", "Clear error messages", "Progress indicators", "Accessibility features"]
    },
    {
      icon: User,
      title: "Compliance Requirements",
      description: "Meet industry-specific compliance requirements with customizable authentication flows.",
      benefits: ["Audit trail logging", "Regulatory compliance", "Custom disclaimers", "Terms acceptance"]
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
              <User className="w-12 h-12 text-primary-foreground" />
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Custom Login Page Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Create branded login experiences that reinforce your organization's identity while maintaining the highest security standards. Our custom login pages provide flexibility without compromising protection.
            </p>
            <DemoForm>
              <Button variant="hero" size="lg" className="hover-scale">
                See Custom Login Demo
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
                Discover how custom login pages can transform your authentication experience while maintaining enterprise-grade security.
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

        {/* Features Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Custom Login Features</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="p-4 bg-gradient-primary rounded-full w-16 h-16 mx-auto mb-4 shadow-glow">
                  <Palette className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Visual Customization</h3>
                <p className="text-muted-foreground">Complete control over colors, fonts, layouts, and branding elements</p>
              </div>
              
              <div className="text-center">
                <div className="p-4 bg-gradient-primary rounded-full w-16 h-16 mx-auto mb-4 shadow-glow">
                  <Shield className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Security Integration</h3>
                <p className="text-muted-foreground">Seamless integration with all security features and protocols</p>
              </div>
              
              <div className="text-center">
                <div className="p-4 bg-gradient-primary rounded-full w-16 h-16 mx-auto mb-4 shadow-glow">
                  <Monitor className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Responsive Design</h3>
                <p className="text-muted-foreground">Optimized for all devices and screen sizes with consistent experience</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CustomLoginPage;