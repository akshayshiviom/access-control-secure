import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhySecureGuard from "@/components/WhySecureGuard";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <div id="why-secureguard">
        <WhySecureGuard />
      </div>
      <div id="features">
        <Features />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
