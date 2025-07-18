import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import viamiLogo from "@/assets/viami-logo.png";
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
            <img 
              src={viamiLogo} 
              alt="Viami" 
              className="h-8 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/why-viami" className="text-foreground hover:text-primary transition-colors">
              Why Viami
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                Solutions
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-accent/20 w-56">
                <DropdownMenuItem asChild>
                  <Link to="/custom-login-page" className="w-full">Custom Login Page</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/password-policy" className="w-full">Password Policy</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/self-password-reset" className="w-full">Self Password Reset</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/two-factor-auth" className="w-full">2FA Authentication</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/ip-restriction" className="w-full">IP Restriction</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/device-restriction" className="w-full">Device Restriction</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/personal-gmail-block" className="w-full">Personal Gmail Block</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/software-access-management" className="w-full">Software Access Management</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/data-protection" className="w-full">Data Protection</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/features" className="text-foreground hover:text-primary transition-colors">
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