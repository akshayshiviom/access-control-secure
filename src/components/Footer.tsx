import { Link } from "react-router-dom";
import viamiLogo from "@/assets/viami logo.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-accent/20 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={viamiLogo} 
                alt="Viami" 
                className="h-8 w-45"
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your first step towards Securing your Data. Protecting businesses with enterprise-grade security solutions.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/features" className="text-muted-foreground hover:text-accent transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-accent transition-colors">Pricing</Link></li>
              <li><Link to="/partners" className="text-muted-foreground hover:text-accent transition-colors">Partners</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">API</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/faq" className="text-muted-foreground hover:text-accent transition-colors">FAQs</Link></li>
              <li><Link to="/knowledge-hub" className="text-muted-foreground hover:text-accent transition-colors">Knowledge Hub</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors">Contact Us</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Security</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Sales:</p>
              <p className="text-accent">sales@viami.in</p>
              <p>Technical Support:</p>
              <p className="text-accent">support@viami.in</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent/20 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">
            © 2025 Viami. All rights reserved.
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