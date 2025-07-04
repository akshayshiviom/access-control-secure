import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Lock, Database, FileCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DataProtection = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-6 text-center">
            <div className="p-4 bg-gradient-primary rounded-full w-20 h-20 mx-auto mb-6 shadow-glow">
              <Database className="w-12 h-12 text-primary-foreground" />
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Data Protection Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Safeguard your organization's most valuable asset with enterprise-grade data protection, 
              encryption, and compliance management.
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
                    <CardTitle className="text-2xl">Data Encryption</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    End-to-end encryption for data at rest and in transit with AES-256 encryption standards.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Military-grade AES-256 encryption</li>
                    <li>• Key management and rotation</li>
                    <li>• Zero-knowledge architecture</li>
                    <li>• Hardware security modules (HSM)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-background border-accent/20 hover:border-primary/30 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Lock className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">Access Control</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Granular access controls and user permissions management for complete data governance.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Role-based access control (RBAC)</li>
                    <li>• Multi-factor authentication</li>
                    <li>• Session management</li>
                    <li>• Audit trails and logging</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-background border-accent/20 hover:border-primary/30 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <FileCheck className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">Compliance Management</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Automated compliance monitoring and reporting for GDPR, HIPAA, SOX, and other regulations.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• GDPR compliance automation</li>
                    <li>• HIPAA security controls</li>
                    <li>• SOX audit preparation</li>
                    <li>• Custom compliance frameworks</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-background border-accent/20 hover:border-primary/30 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Database className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">Backup & Recovery</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Automated backup solutions with point-in-time recovery and disaster recovery planning.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Automated daily backups</li>
                    <li>• Point-in-time recovery</li>
                    <li>• Disaster recovery planning</li>
                    <li>• Cross-region replication</li>
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

export default DataProtection;