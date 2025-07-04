import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Cloud, Shield, Key, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CloudSecurity = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-6 text-center">
            <div className="p-4 bg-gradient-primary rounded-full w-20 h-20 mx-auto mb-6 shadow-glow">
              <Cloud className="w-12 h-12 text-primary-foreground" />
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Cloud Security Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Secure your cloud infrastructure with comprehensive security controls, 
              compliance management, and multi-cloud protection.
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
                    <CardTitle className="text-2xl">Cloud Workload Protection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive protection for cloud workloads, containers, and serverless functions.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Container security scanning</li>
                    <li>• Serverless function protection</li>
                    <li>• Runtime threat detection</li>
                    <li>• Vulnerability management</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-background border-accent/20 hover:border-primary/30 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Key className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">Identity & Access Management</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Centralized identity management with single sign-on and privileged access controls.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Single sign-on (SSO)</li>
                    <li>• Privileged access management</li>
                    <li>• Identity federation</li>
                    <li>• Multi-factor authentication</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-background border-accent/20 hover:border-primary/30 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Settings className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">Security Configuration</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Automated security configuration management and compliance monitoring across clouds.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Configuration drift detection</li>
                    <li>• Security baseline enforcement</li>
                    <li>• Automated remediation</li>
                    <li>• Policy as code</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-background border-accent/20 hover:border-primary/30 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Cloud className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">Multi-Cloud Security</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Unified security management across AWS, Azure, Google Cloud, and hybrid environments.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Multi-cloud visibility</li>
                    <li>• Unified security policies</li>
                    <li>• Cross-cloud compliance</li>
                    <li>• Hybrid cloud protection</li>
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

export default CloudSecurity;