import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Check, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import DemoForm from "@/components/DemoForm";

const Pricing = () => {
  const navigate = useNavigate();
  const [userCount, setUserCount] = useState(10);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [isFeatureDialogOpen, setIsFeatureDialogOpen] = useState(false);
  
  const individualPricePerUser = 300;
  const packagePricePerUser = 1100;
  
  const totalIndividualPrice = userCount * individualPricePerUser;
  const totalPackagePrice = userCount * packagePricePerUser;
  const savingsAmount = (userCount * 8 * individualPricePerUser) - totalPackagePrice;
  
  const selectedFeaturesPrice = userCount * selectedFeatures.length * individualPricePerUser;

  const handleFeatureToggle = (feature: string) => {
    setSelectedFeatures(prev => {
      if (prev.includes(feature)) {
        return prev.filter(f => f !== feature);
      } else if (prev.length < 3) {
        return [...prev, feature];
      }
      return prev;
    });
  };

  const handleIndividualCheckout = () => {
    if (selectedFeatures.length === 0) {
      return; // Dialog will handle this
    }
    
    const params = new URLSearchParams({
      type: 'individual',
      features: selectedFeatures.join(','),
      users: userCount.toString(),
      amount: selectedFeaturesPrice.toString()
    });
    
    navigate(`/checkout?${params.toString()}`);
  };

  const handlePackageCheckout = () => {
    const params = new URLSearchParams({
      type: 'package',
      features: features.join(','),
      users: userCount.toString(),
      amount: totalPackagePrice.toString()
    });
    
    navigate(`/checkout?${params.toString()}`);
  };

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

        {/* User Calculator */}
        <div className="max-w-md mx-auto mb-12">
          <Card className="p-6 bg-background/50 border-accent/20">
            <div className="text-center mb-4">
              <Label htmlFor="userCount" className="text-lg font-semibold text-foreground">
                How many users do you have?
              </Label>
            </div>
            <div className="flex items-center gap-4">
              <Input
                id="userCount"
                type="number"
                min="1"
                value={userCount}
                onChange={(e) => setUserCount(Math.max(1, parseInt(e.target.value) || 1))}
                className="text-center text-lg font-semibold"
              />
              <span className="text-muted-foreground">users</span>
            </div>
          </Card>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          
          {/* Free Plan */}
          <Card className="p-8 bg-gradient-card border-accent/20 relative">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2 text-foreground">Free Plan</h3>
              <p className="text-muted-foreground mb-6">Perfect for getting started with basic security features</p>
              <div className="text-5xl font-bold text-accent mb-2">Free</div>
              <div className="text-muted-foreground">Forever</div>
              <div className="mt-3 p-3 bg-accent/10 rounded-lg">
                <div className="text-sm text-muted-foreground">For up to {userCount} users</div>
                <div className="text-lg font-bold text-accent">No cost, no credit card required</div>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center text-foreground">
                <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <span>Custom Login Page</span>
              </div>
              <div className="flex items-center text-foreground">
                <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <span>Password Policy</span>
              </div>
              <div className="flex items-center text-foreground">
                <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <span>Self Password Reset</span>
              </div>
              <div className="flex items-center text-muted-foreground pt-2 border-t border-accent/20">
                <X className="w-5 h-5 text-muted-foreground mr-3 flex-shrink-0" />
                <span>2FA Authentication</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <X className="w-5 h-5 text-muted-foreground mr-3 flex-shrink-0" />
                <span>IP Restriction</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <X className="w-5 h-5 text-muted-foreground mr-3 flex-shrink-0" />
                <span>Advanced Features</span>
              </div>
              <div className="flex items-center text-foreground pt-2 border-t border-accent/20">
                <Shield className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <span>Community support</span>
              </div>
            </div>

            <div className="space-y-3">
              <Button variant="outline" size="lg" className="w-full border-accent/20 text-foreground hover:bg-accent/10" asChild>
                <Link to="/free-trial">Get Started Free</Link>
              </Button>
            </div>
          </Card>
          
          {/* Individual Features Plan */}
          <Card className="p-8 bg-gradient-card border-accent/20 relative">
            {/* 20% Off Banner */}
            <div className="absolute -top-3 -right-3">
              <div className="bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-lg transform rotate-12">
                20% OFF First Year
              </div>
            </div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2 text-foreground">Individual Features</h3>
              <p className="text-muted-foreground mb-6">Pick and choose the security features you need (max 3)</p>
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="text-2xl font-bold text-muted-foreground line-through">₹{individualPricePerUser.toLocaleString()}</div>
                <div className="text-5xl font-bold text-accent">₹{Math.round(individualPricePerUser * 0.8).toLocaleString()}</div>
              </div>
              <div className="text-muted-foreground">/ user / year per feature</div>
              <div className="text-sm text-destructive font-semibold"> ₹{individualPricePerUser.toLocaleString()}/user/year at Renewal </div>
              <div className="mt-3 p-3 bg-accent/10 rounded-lg">
                <div className="text-sm text-muted-foreground">
                  Total for {userCount} users, {selectedFeatures.length > 0 ? selectedFeatures.length : '1-3'} features:
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="text-lg text-muted-foreground line-through">
                    ₹{selectedFeatures.length > 0 ? selectedFeaturesPrice.toLocaleString() : (userCount * individualPricePerUser).toLocaleString()}
                  </div>
                  <div className="text-2xl font-bold text-accent">
                    ₹{selectedFeatures.length > 0 ? Math.round(selectedFeaturesPrice * 0.8).toLocaleString() : Math.round(userCount * individualPricePerUser * 0.8).toLocaleString()}
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">
                  first year, then ₹{selectedFeatures.length > 0 ? selectedFeaturesPrice.toLocaleString() : (userCount * individualPricePerUser).toLocaleString()}/year
                </div>
                {selectedFeatures.length === 0 && (
                  <div className="text-xs text-muted-foreground mt-1 italic">
                    *Price shown for 1 feature. Total will update when you select features.
                  </div>
                )}
              </div>
            </div>

            {selectedFeatures.length > 0 ? (
              <div className="space-y-3 mb-8">
                <div className="text-sm font-semibold text-foreground mb-2">Selected Features:</div>
                {selectedFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center text-foreground">
                    <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
                <div className="flex items-center text-muted-foreground pt-2 border-t border-accent/20">
                  <Shield className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  <span>Basic support included</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Shield className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  <span>Easy integration</span>
                </div>
              </div>
            ) : (
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-foreground">
                  <Shield className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  <span>Choose up to 3 features</span>
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
            )}

            <div className="space-y-3">
              <Button variant="outline" size="lg" className="w-full border-accent/20 text-foreground hover:bg-accent/10" asChild>
                <Link to="/free-trial">Start Free Trial</Link>
              </Button>
              <Dialog open={isFeatureDialogOpen} onOpenChange={setIsFeatureDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="w-full border-accent/20 text-foreground hover:bg-accent/10">
                    {selectedFeatures.length > 0 ? 'Change Features' : 'Choose Features'}
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Select Features (Max 3)</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    {features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <Checkbox
                          id={feature}
                          checked={selectedFeatures.includes(feature)}
                          onCheckedChange={() => handleFeatureToggle(feature)}
                          disabled={!selectedFeatures.includes(feature) && selectedFeatures.length >= 3}
                        />
                        <Label htmlFor={feature} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          {feature}
                        </Label>
                      </div>
                    ))}
                    <div className="pt-4 border-t">
                      <div className="text-sm text-muted-foreground">
                        Selected: {selectedFeatures.length}/3 features
                      </div>
                      {selectedFeatures.length > 0 && (
                        <div className="text-lg font-semibold text-accent mt-2">
                          Total: ₹{selectedFeaturesPrice.toLocaleString()}/year
                        </div>
                      )}
                    </div>
                    <Button 
                      onClick={() => {
                        setIsFeatureDialogOpen(false);
                        handleIndividualCheckout();
                      }}
                      className="w-full"
                      disabled={selectedFeatures.length === 0}
                    >
                      Proceed to Checkout
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </Card>

          {/* All-in-One Plan */}
          <Card className="p-8 bg-gradient-card border-primary/40 relative shadow-premium">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold shadow-glow">
                Most Popular
              </div>
            </div>
            {/* 20% Off Banner */}
            <div className="absolute -top-3 -right-3">
              <div className="bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-lg transform rotate-12">
                20% OFF First Year
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2 text-foreground">Complete Security Package</h3>
              <p className="text-muted-foreground mb-6">Get all security features in one comprehensive solution</p>
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="text-2xl font-bold text-muted-foreground line-through">₹{packagePricePerUser.toLocaleString()}</div>
                <div className="text-5xl font-bold text-primary">₹{Math.round(packagePricePerUser * 0.8).toLocaleString()}</div>
              </div>
              <div className="text-muted-foreground">/ user / year for all features</div>
              <div className="text-sm text-destructive font-semibold">First year only, then ₹{packagePricePerUser.toLocaleString()}/year</div>
              <div className="mt-3 p-3 bg-primary/10 rounded-lg">
                <div className="text-sm text-muted-foreground">Total for {userCount} users:</div>
                <div className="flex items-center justify-center gap-2">
                  <div className="text-lg text-muted-foreground line-through">₹{totalPackagePrice.toLocaleString()}</div>
                  <div className="text-2xl font-bold text-primary">₹{Math.round(totalPackagePrice * 0.8).toLocaleString()}</div>
                </div>
                <div className="text-xs text-muted-foreground">₹{totalPackagePrice.toLocaleString()}/user/year at Renewal</div>
              </div>
              <div className="mt-2 text-sm text-accent font-semibold">Save ₹{Math.round(savingsAmount * 0.8).toLocaleString()} compared to individual features!</div>
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

            <div className="space-y-3">
              <Button variant="outline" size="lg" className="w-full border-accent/20 text-foreground hover:bg-accent/10" asChild>
                <Link to="/free-trial">Start Free Trial</Link>
              </Button>
              <Button 
                onClick={handlePackageCheckout}
                variant="hero" 
                size="lg" 
                className="w-full"
              >
                Get Complete Package
              </Button>
              <DemoForm>
                <Button variant="outline" size="lg" className="w-full">
                  Get Demo & Quote
                </Button>
              </DemoForm>
            </div>
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