import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield } from "lucide-react";
import DemoForm from "@/components/DemoForm";

const Pricing = () => {
  const features = [
    "Custom Login Page",
    "Password Policy",
    "Self Password Reset",
    "2FA Authentication",
    "IP Restriction", 
    "Device Restriction",
    "Personal Gmail Block",
    "Software Access Management"
  ];

  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your security needs. Start with individual features or get everything with our complete package.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Individual Features Plan */}
          <Card className="p-8 bg-gradient-card border-accent/20 relative">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2 text-foreground">Individual Features</h3>
              <p className="text-muted-foreground mb-6">Pick and choose the security features you need</p>
              <div className="text-5xl font-bold text-accent mb-2">₹300</div>
              <div className="text-muted-foreground">per feature</div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-foreground">
                <Shield className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <span>Choose any single feature</span>
              </div>
              <div className="flex items-center text-foreground">
                <Shield className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <span>Basic support included</span>
              </div>
              <div className="flex items-center text-foreground">
                <Shield className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <span>Easy integration</span>
              </div>
              <div className="flex items-center text-foreground">
                <Shield className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <span>Scale as you grow</span>
              </div>
            </div>

            <Button variant="outline" size="lg" className="w-full border-accent/20 text-foreground hover:bg-accent/10">
              Choose Features
            </Button>
          </Card>

          {/* All-in-One Plan */}
          <Card className="p-8 bg-gradient-card border-primary/40 relative shadow-premium">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold shadow-glow">
                Most Popular
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2 text-foreground">Complete Security Package</h3>
              <p className="text-muted-foreground mb-6">Get all security features in one comprehensive solution</p>
              <div className="text-5xl font-bold text-primary mb-2">₹1,100</div>
              <div className="text-muted-foreground">for all features</div>
              <div className="mt-2 text-sm text-accent">Save ₹1,300!</div>
            </div>

            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center text-foreground">
                  <Shield className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
              <div className="flex items-center text-foreground pt-2 border-t border-accent/20">
                <Shield className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span className="font-semibold">Priority support</span>
              </div>
              <div className="flex items-center text-foreground">
                <Shield className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span className="font-semibold">Free updates</span>
              </div>
            </div>

            <DemoForm>
              <Button variant="hero" size="lg" className="w-full">
                Get Demo & Quote
              </Button>
            </DemoForm>
          </Card>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Need Help Choosing?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our security experts are here to help you determine the best solution for your business needs.
            </p>
            <DemoForm>
              <Button variant="premium" size="lg">
                Contact Security Expert
              </Button>
            </DemoForm>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;