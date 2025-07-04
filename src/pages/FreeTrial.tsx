import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const FreeTrial = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    users: "10"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Free Trial Started!",
        description: "We'll send you login credentials within 5 minutes.",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const trialFeatures = [
    "All 8 security features included",
    "Up to 25 users",
    "Priority email support",
    "30-day full access",
    "No credit card required",
    "Easy setup in 5 minutes"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <section className="py-24 bg-gradient-hero">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm border border-accent/20 rounded-full px-4 py-2 mb-6">
                  <Shield className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">30-Day Free Trial</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  Start Your Free Trial Today
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Get full access to all security features for 30 days. No credit card required.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Trial Form */}
                <Card className="p-8 bg-background/50 border-accent/20">
                  <h2 className="text-2xl font-bold mb-6 text-foreground">Start Your Trial</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Business Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company Name *</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="users">Number of Users</Label>
                      <Input
                        id="users"
                        name="users"
                        type="number"
                        min="1"
                        max="25"
                        value={formData.users}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Starting Trial..." : "Start Free Trial"}
                    </Button>
                  </form>
                </Card>

                {/* Trial Benefits */}
                <Card className="p-8 bg-gradient-card border-primary/40">
                  <h2 className="text-2xl font-bold mb-6 text-foreground">What You Get</h2>
                  <div className="space-y-4">
                    {trialFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                    <h3 className="font-semibold text-primary mb-2">Trial Timeline</h3>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>• Setup completed in 5 minutes</p>
                      <p>• Full access for 30 days</p>
                      <p>• No automatic billing</p>
                      <p>• Convert to paid plan anytime</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default FreeTrial;