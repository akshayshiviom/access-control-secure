import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Network, Shield, AlertTriangle, Monitor } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const NetworkSecurity = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-6 text-center">
            <div className="p-4 bg-gradient-primary rounded-full w-20 h-20 mx-auto mb-6 shadow-glow">
              <Network className="w-12 h-12 text-primary-foreground" />
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Network Security Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Protect your network infrastructure with advanced firewall protection, 
              intrusion detection, and real-time threat monitoring.
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-background border-accent/20 hover:border-primary/30 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">Advanced Firewall</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Next-generation firewall with deep packet inspection and application-level security.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Deep packet inspection</li>
                    <li>• Application-aware filtering</li>
                    <li>• Geo-blocking capabilities</li>
                    <li>• Custom security rules</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-background border-accent/20 hover:border-primary/30 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">Intrusion Detection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    AI-powered intrusion detection and prevention system with real-time threat analysis.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Real-time threat detection</li>
                    <li>• Machine learning algorithms</li>
                    <li>• Automated response actions</li>
                    <li>• Behavioral analysis</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-background border-accent/20 hover:border-primary/30 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Monitor className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">Network Monitoring</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive network monitoring with bandwidth analysis and performance optimization.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Real-time network visibility</li>
                    <li>• Bandwidth monitoring</li>
                    <li>• Performance analytics</li>
                    <li>• Custom dashboards</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-background border-accent/20 hover:border-primary/30 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Network className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">VPN & Remote Access</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Secure remote access solutions with enterprise-grade VPN and zero-trust networking.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Site-to-site VPN</li>
                    <li>• Remote access VPN</li>
                    <li>• Zero-trust network access</li>
                    <li>• Multi-factor authentication</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default NetworkSecurity;