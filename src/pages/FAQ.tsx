import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Shield } from "lucide-react";

const FAQPage = () => {
  const faqs = [
    {
      question: "What is SecureGuard and how does it help my business?",
      answer: "SecureGuard is a comprehensive security software solution designed as your first step towards cybersecurity. It helps businesses manage and control access to data and software applications, providing essential security features like custom login pages, password policies, 2FA, and access restrictions."
    },
    {
      question: "Can I purchase individual features or do I need the complete package?",
      answer: "You have the flexibility to choose! You can purchase individual security features for ₹300 each, or get our complete security package with all 8 features for ₹1,100 - saving you ₹1,300 compared to buying features separately."
    },
    {
      question: "How quickly can I implement SecureGuard in my organization?",
      answer: "SecureGuard is designed for easy integration. Most features can be implemented within 24-48 hours with our guided setup process. Our technical support team assists with the implementation to ensure smooth deployment."
    },
    {
      question: "What types of businesses benefit most from SecureGuard?",
      answer: "SecureGuard is ideal for small to medium businesses, startups, and enterprises looking to establish their first line of cybersecurity defense. It's particularly beneficial for companies handling sensitive data, remote teams, and organizations requiring controlled software access."
    },
    {
      question: "Does SecureGuard support multi-factor authentication?",
      answer: "Yes! Our 2FA (Two-Factor Authentication) feature provides an additional layer of security beyond passwords. This significantly reduces the risk of unauthorized access even if passwords are compromised."
    },
    {
      question: "How does IP and Device Restriction work?",
      answer: "IP Restriction allows you to whitelist specific IP addresses or ranges from which users can access your systems. Device Restriction enables you to control access based on registered and authenticated devices, ensuring only approved devices can connect to your network."
    },
    {
      question: "What is the Personal Gmail Block feature?",
      answer: "This feature prevents employees from accessing personal Gmail accounts during work hours on company devices/networks. It helps maintain productivity and prevents potential data leaks through personal email accounts."
    },
    {
      question: "Can I customize the login page to match my brand?",
      answer: "Absolutely! Our Custom Login Page feature allows you to create branded login experiences that match your organization's identity, including logos, colors, and messaging while maintaining security standards."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide comprehensive support including implementation assistance, technical documentation, email support, and priority support for complete package customers. Our security experts are available to help you optimize your security setup."
    },
    {
      question: "Is my data secure with SecureGuard?",
      answer: "Security is our top priority. SecureGuard itself follows enterprise-grade security standards, including encrypted data transmission, secure storage, and regular security audits. We're designed to protect your business while ensuring our own platform maintains the highest security standards."
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
                <span className="text-sm font-medium text-foreground">Frequently Asked Questions</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Got Questions About SecureGuard?
              </h1>
              <p className="text-xl text-muted-foreground">
                Find answers to common questions about our security software features, pricing, and implementation.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <Card key={index} className="p-6 bg-gradient-card border-accent/20 hover:border-accent/40 transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-4 text-foreground">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Support Section */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Still Have Questions?
              </h2>
              <p className="text-muted-foreground mb-8">
                Our security experts are here to help you understand how SecureGuard can best protect your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:support@secureguard.com" 
                  className="inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground hover:shadow-glow transform hover:scale-105 shadow-premium h-11 rounded-md px-8 font-medium transition-all duration-300"
                >
                  Contact Support
                </a>
                <a 
                  href="mailto:sales@secureguard.com" 
                  className="inline-flex items-center justify-center gap-2 border border-accent/20 bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 text-foreground transition-all duration-300"
                >
                  Talk to Sales
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default FAQPage;