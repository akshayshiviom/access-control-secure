import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FeaturesPage from "./pages/Features";
import WhySecureGuardPage from "./pages/WhySecureGuard";
import CustomLoginPage from "./pages/CustomLoginPage";
import PasswordPolicy from "./pages/PasswordPolicy";
import SelfPasswordReset from "./pages/SelfPasswordReset";
import TwoFactorAuth from "./pages/TwoFactorAuth";
import IPRestriction from "./pages/IPRestriction";
import DeviceRestriction from "./pages/DeviceRestriction";
import PersonalGmailBlock from "./pages/PersonalGmailBlock";
import SoftwareAccessManagement from "./pages/SoftwareAccessManagement";
import DataProtection from "./pages/DataProtection";
import NetworkSecurity from "./pages/NetworkSecurity";
import CloudSecurity from "./pages/CloudSecurity";
import PricingPage from "./pages/Pricing";
import CheckoutPage from "./pages/Checkout";
import FAQPage from "./pages/FAQ";
import KnowledgeHubPage from "./pages/KnowledgeHub";
import WhatsNewPage from "./pages/WhatsNew";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/why-secureguard" element={<WhySecureGuardPage />} />
          <Route path="/custom-login-page" element={<CustomLoginPage />} />
          <Route path="/password-policy" element={<PasswordPolicy />} />
          <Route path="/self-password-reset" element={<SelfPasswordReset />} />
          <Route path="/two-factor-auth" element={<TwoFactorAuth />} />
          <Route path="/ip-restriction" element={<IPRestriction />} />
          <Route path="/device-restriction" element={<DeviceRestriction />} />
          <Route path="/personal-gmail-block" element={<PersonalGmailBlock />} />
          <Route path="/software-access-management" element={<SoftwareAccessManagement />} />
          <Route path="/data-protection" element={<DataProtection />} />
          <Route path="/network-security" element={<NetworkSecurity />} />
          <Route path="/cloud-security" element={<CloudSecurity />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/knowledge-hub" element={<KnowledgeHubPage />} />
          <Route path="/whats-new" element={<WhatsNewPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
