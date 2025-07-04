import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Shield, CreditCard } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Order details from URL params
  const [orderDetails] = useState({
    type: searchParams.get('type') || 'package',
    features: searchParams.get('features')?.split(',') || [],
    users: parseInt(searchParams.get('users') || '10'),
    amount: parseInt(searchParams.get('amount') || '0')
  });

  // Customer information form
  const [customerInfo, setCustomerInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'India',
    requirements: ''
  });

  const [isProcessing, setIsProcessing] = useState(false);

  // Redirect back if no order details
  useEffect(() => {
    if (!orderDetails.amount) {
      toast({
        title: "No Order Found",
        description: "Please select a plan from the pricing page.",
        variant: "destructive",
      });
      navigate('/pricing');
    }
  }, [orderDetails.amount, navigate, toast]);

  const handleInputChange = (field: string, value: string) => {
    setCustomerInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateForm = () => {
    const required = ['firstName', 'lastName', 'email', 'phone', 'company'];
    const missing = required.filter(field => !customerInfo[field as keyof typeof customerInfo]);
    
    if (missing.length > 0) {
      toast({
        title: "Missing Information",
        description: `Please fill in: ${missing.join(', ')}`,
        variant: "destructive",
      });
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(customerInfo.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleProceedToPayment = async () => {
    if (!validateForm()) return;

    setIsProcessing(true);
    
    try {
      // Prepare order data for payment gateway
      const orderData = {
        customer: customerInfo,
        order: {
          type: orderDetails.type,
          features: orderDetails.features,
          users: orderDetails.users,
          amount: orderDetails.amount,
          currency: 'INR'
        },
        timestamp: new Date().toISOString(),
        orderId: `SG-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
      };

      // Store order in localStorage for payment gateway callback
      localStorage.setItem('pendingOrder', JSON.stringify(orderData));

      // TODO: Replace with your actual payment gateway redirect
      // This is where you would integrate with your payment provider
      console.log('Order data prepared for payment gateway:', orderData);
      
      // Simulate payment gateway redirect
      toast({
        title: "Redirecting to Payment",
        description: "You will be redirected to our secure payment gateway.",
      });

      // Replace this URL with your actual payment gateway URL
      const paymentGatewayUrl = `https://your-payment-gateway.com/checkout?orderId=${orderData.orderId}&amount=${orderData.order.amount}`;
      
      // Redirect to payment gateway
      window.location.href = paymentGatewayUrl;
      
    } catch (error) {
      console.error('Checkout error:', error);
      toast({
        title: "Checkout Error",
        description: "There was an error processing your order. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const getOrderSummary = () => {
    if (orderDetails.type === 'package') {
      return {
        title: 'Complete Security Package',
        description: 'All 8 security features included',
        pricePerUser: 1100,
        features: [
          'Custom Login Page',
          'Password Policy', 
          'Self Password Reset',
          '2FA Authentication',
          'IP Restriction',
          'Device Restriction',
          'Personal Gmail Block',
          'Software Access Management'
        ]
      };
    } else {
      return {
        title: 'Individual Features',
        description: `${orderDetails.features.length} selected features`,
        pricePerUser: 300,
        features: orderDetails.features
      };
    }
  };

  const orderSummary = getOrderSummary();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <div className="container mx-auto px-6 py-12">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate('/pricing')}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Pricing
          </Button>

          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-8">Checkout</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Customer Information */}
              <Card className="bg-gradient-card border-accent/20">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Shield className="w-5 h-5 mr-2 text-primary" />
                    Customer Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  
                  {/* Personal Details */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={customerInfo.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={customerInfo.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={customerInfo.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={customerInfo.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company">Company Name *</Label>
                    <Input
                      id="company"
                      value={customerInfo.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Your Company Ltd."
                    />
                  </div>

                  {/* Address Information */}
                  <Separator />
                  <h3 className="font-semibold text-foreground">Billing Address (Optional)</h3>

                  <div>
                    <Label htmlFor="address">Street Address</Label>
                    <Input
                      id="address"
                      value={customerInfo.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      placeholder="123 Main Street"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        value={customerInfo.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        placeholder="Mumbai"
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input
                        id="state"
                        value={customerInfo.state}
                        onChange={(e) => handleInputChange('state', e.target.value)}
                        placeholder="Maharashtra"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="zipCode">ZIP Code</Label>
                      <Input
                        id="zipCode"
                        value={customerInfo.zipCode}
                        onChange={(e) => handleInputChange('zipCode', e.target.value)}
                        placeholder="400001"
                      />
                    </div>
                    <div>
                      <Label htmlFor="country">Country</Label>
                      <Select value={customerInfo.country} onValueChange={(value) => handleInputChange('country', value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="India">India</SelectItem>
                          <SelectItem value="USA">United States</SelectItem>
                          <SelectItem value="UK">United Kingdom</SelectItem>
                          <SelectItem value="Canada">Canada</SelectItem>
                          <SelectItem value="Australia">Australia</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="requirements">Special Requirements</Label>
                    <Textarea
                      id="requirements"
                      value={customerInfo.requirements}
                      onChange={(e) => handleInputChange('requirements', e.target.value)}
                      placeholder="Any specific requirements or notes..."
                      rows={3}
                    />
                  </div>

                </CardContent>
              </Card>

              {/* Order Summary */}
              <Card className="bg-gradient-card border-primary/40">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <CreditCard className="w-5 h-5 mr-2 text-primary" />
                    Order Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{orderSummary.title}</h3>
                      <p className="text-muted-foreground text-sm">{orderSummary.description}</p>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Plan Type:</span>
                        <span className="text-foreground">{orderSummary.title}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Number of Users:</span>
                        <span className="text-foreground">{orderDetails.users}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Price per User:</span>
                        <span className="text-foreground">₹{orderSummary.pricePerUser.toLocaleString()}</span>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <h4 className="font-medium text-foreground">Included Features:</h4>
                      {orderSummary.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <Shield className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal:</span>
                        <span className="text-foreground">₹{orderDetails.amount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Tax (18% GST):</span>
                        <span className="text-foreground">₹{Math.round(orderDetails.amount * 0.18).toLocaleString()}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between text-lg font-bold">
                        <span className="text-foreground">Total:</span>
                        <span className="text-primary">₹{Math.round(orderDetails.amount * 1.18).toLocaleString()}</span>
                      </div>
                    </div>

                    <Button 
                      onClick={handleProceedToPayment}
                      disabled={isProcessing}
                      className="w-full mt-6"
                      size="lg"
                    >
                      {isProcessing ? (
                        "Processing..."
                      ) : (
                        <>
                          <CreditCard className="w-4 h-4 mr-2" />
                          Proceed to Payment
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center mt-4">
                      You will be redirected to our secure payment gateway to complete your purchase.
                    </p>

                  </div>

                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;