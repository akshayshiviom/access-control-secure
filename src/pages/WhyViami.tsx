import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhyViami from "@/components/WhyViami";

const WhyViamiPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <WhyViami />
      </main>
      <Footer />
    </div>
  );
};

export default WhyViamiPage;