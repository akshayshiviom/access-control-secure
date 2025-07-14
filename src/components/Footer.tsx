import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-accent/20 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-primary rounded-lg shadow-glow">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Viami</h3>
                <p className="text-xs text-muted-foreground">Enterprise Security</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your first step towards comprehensive cybersecurity. Protecting businesses with enterprise-grade security solutions.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Enterprise</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">API</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Help Center</a></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors">Contact Us</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Security</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Enterprise Sales:</p>
              <p className="text-accent">sales@viami.com</p>
              <p>Technical Support:</p>
              <p className="text-accent">support@viami.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent/20 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">
            © 2024 Viami. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;