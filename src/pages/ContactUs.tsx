import { useState } from "react";
import { Shield, Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-primary rounded-2xl shadow-glow">
                <Shield className="w-12 h-12 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Get in Touch with <span className="bg-gradient-text bg-clip-text text-transparent">Viami</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to secure your business? Our security experts are here to help you find the perfect solution.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>Email Us</CardTitle>
                <CardDescription>Get in touch via email</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-accent font-medium">sales@viami.in</p>
                <p className="text-accent font-medium">support@viami.in</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>Business Hours</CardTitle>
                <CardDescription>We're available when you need us</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Monday - Friday</p>
                <p className="text-foreground font-medium">9:00 AM - 6:00 PM EST</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>Enterprise Support</CardTitle>
                <CardDescription>Dedicated support for enterprise clients</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">24/7 Priority Support</p>
                <p className="text-foreground font-medium">for Enterprise Plans</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input 
                        id="firstName" 
                        required 
                        className="bg-background border-accent/20 focus:border-accent"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input 
                        id="lastName" 
                        required 
                        className="bg-background border-accent/20 focus:border-accent"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Business Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      required 
                      className="bg-background border-accent/20 focus:border-accent"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name *</Label>
                    <Input 
                      id="company" 
                      required 
                      className="bg-background border-accent/20 focus:border-accent"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Select required>
                      <SelectTrigger className="bg-background border-accent/20 focus:border-accent">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sales">Sales Inquiry</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="demo">Request Demo</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      required 
                      rows={5}
                      className="bg-background border-accent/20 focus:border-accent resize-none"
                      placeholder="Tell us about your security needs..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:shadow-glow transform hover:scale-105 transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;