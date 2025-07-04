import { Button } from "@/components/ui/button";
import { Shield, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-accent/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-primary rounded-lg shadow-glow">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">SecureGuard</h1>
              <p className="text-xs text-muted-foreground">Enterprise Security</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/#why-secureguard" className="text-foreground hover:text-primary transition-colors">
              Why SecureGuard
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                Solutions
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-accent/20">
                <DropdownMenuItem asChild>
                  <Link to="/data-protection" className="w-full">Data Protection</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/network-security" className="w-full">Network Security</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/cloud-security" className="w-full">Cloud Security</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </Link>
            <Link to="/pricing" className="text-foreground hover:text-primary transition-colors">
              Pricing
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                Resources
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-accent/20">
                <DropdownMenuItem asChild>
                  <Link to="/faq" className="w-full">FAQ</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/knowledge-hub" className="w-full">Knowledge Hub</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/whats-new" className="w-full">What's New</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;