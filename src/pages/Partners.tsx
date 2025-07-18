import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { 
  Handshake, 
  Users, 
  TrendingUp, 
  Shield, 
  Award, 
  Globe,
  Mail,
  Phone,
  CheckCircle
} from "lucide-react";

const Partners = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your interest!",
      description: "We'll get back to you within 24 hours to discuss partnership opportunities.",
    });
    setFormData({ name: "", email: "", company: "", phone: "", message: "" });
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: "Competitive Margins",
      description: "Earn attractive commissions on every sale with our tiered partner program"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Get dedicated partner support and training to help you succeed"
    },
    {
      icon: Award,
      title: "Sales Materials",
      description: "Access to comprehensive sales collateral, demos, and marketing materials"
    },
    {
      icon: Shield,
      title: "Product Training",
      description: "Complete product training and certification programs for your team"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-hero">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-primary rounded-2xl shadow-glow">
                  <Handshake className="w-12 h-12 text-primary-foreground" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Partner With <span className="text-primary">Viami</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Join our growing network of resellers and help businesses strengthen their cybersecurity while building a profitable partnership with us.
              </p>
            </div>
          </div>
        </section>

        {/* Official Distributor Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 bg-gradient-card border-primary/20 shadow-premium">
                <div className="text-center">
                  <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h2 className="text-3xl font-bold mb-4 text-foreground">Official Distribution Partner</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    We're proud to partner with <span className="text-primary font-semibold">Shiviom.com</span> as our official distributor, 
                    bringing enterprise-grade security solutions to businesses worldwide.
                  </p>
                  <div className="flex items-center justify-center gap-3 p-4 bg-primary/10 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-primary" />
                    <span className="text-primary font-semibold">Trusted by Shiviom.com for global distribution</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Why Partner With Viami?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join a winning partnership program designed to help you grow your business while providing essential security solutions to your clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6 bg-gradient-card border-accent/20 hover:border-primary/30 transition-colors">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-primary rounded-lg shadow-glow">
                        <benefit.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-xl text-foreground">{benefit.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Form Section */}
        <section id="partner-form" className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6 text-foreground">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Fill out the form below and our partnership team will contact you within 24 hours.
                </p>
              </div>

              <Card className="p-8 bg-gradient-card border-accent/20">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-background/50 border-accent/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-background/50 border-accent/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-foreground">Company Name *</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        required
                        className="bg-background/50 border-accent/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-background/50 border-accent/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">Tell us about your business *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={4}
                      placeholder="Tell us about your company, existing client base, and why you're interested in partnering with Viami..."
                      className="bg-background/50 border-accent/20"
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Submit Partnership Application
                  </Button>
                </form>
              </Card>

              {/* Contact Information */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6 bg-gradient-card border-accent/20 text-center">
                  <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Email Us</h3>
                  <p className="text-muted-foreground mb-2">Partnership inquiries:</p>
                  <p className="text-primary font-semibold">partners@viami.in</p>
                </Card>
                <Card className="p-6 bg-gradient-card border-accent/20 text-center">
                  <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Call Us</h3>
                  <p className="text-muted-foreground mb-2">Partnership hotline:</p>
                  <p className="text-primary font-semibold">+1 (555) 123-PARTNER</p>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Partners;