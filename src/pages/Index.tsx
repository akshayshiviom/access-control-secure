import Header from "@/components/Header";


import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div id="features">
        <Features />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
