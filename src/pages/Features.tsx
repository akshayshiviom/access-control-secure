import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Features from "@/components/Features";

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default FeaturesPage;