import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhySecureGuard from "@/components/WhySecureGuard";

const WhySecureGuardPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <WhySecureGuard />
      </main>
      <Footer />
    </div>
  );
};

export default WhySecureGuardPage;