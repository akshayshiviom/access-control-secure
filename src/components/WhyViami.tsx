import { 
  Shield, 
  Lock, 
  Eye, 
  Zap, 
  Users, 
  Award, 
  Target, 
  Heart, 
  Lightbulb,
  TrendingUp,
  Globe,
  CheckCircle,
  Star,
  Calendar,
  Building
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import viamiLogo from "@/assets/viami logo.png";
import { Link } from "react-router-dom";

const WhyViami = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Military-grade encryption and security protocols trusted by Fortune 500 companies worldwide.",
    },
    {
      icon: Lock,
      title: "Zero-Trust Architecture",
      description: "Never trust, always verify. Our zero-trust model ensures maximum security at every level.",
    },
    {
      icon: Eye,
      title: "Real-Time Monitoring",
      description: "24/7 threat detection and monitoring with instant alerts and automated response systems.",
    },
    {
      icon: Zap,
      title: "Lightning Fast Response",
      description: "Automated threat response in milliseconds, protecting your assets before damage occurs.",
    },
    {
      icon: Users,
      title: "Expert Support Team",
      description: "Dedicated security experts available around the clock to support your organization.",
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Award-winning security platform recognized by leading cybersecurity organizations.",
    },
  ];

  const teamMembers = [
    {
      name: "Punit Thakkar",
      role: "Chairman",
      experience: "CEO at Shivaami",
      image: "👩‍💼"
    },
    {
      name: "Akshay Thakkar",
      role: "CEO",
      experience: "CEO at Shiviom",
      image: "👨‍💻"
    },
    {
      name: "Priyanka Khanna",
      role: "Chief Revenue Officer",
      experience: "CRO at Shivaami",
      image: "👩‍🔬"
    },
    {
      name: "Chetana Chaudhary",
      role: "VP of Product",
      experience: "CTO at Shivaami",
      image: "👨‍💼"
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Viami was established with a vision to democratize enterprise security"
    },
    {
      year: "2021",
      title: "First 100 Customers",
      description: "Reached our first major milestone with enterprise clients"
    },
    {
      year: "2022",
      title: "Series A Funding",
      description: "Secured $50M in Series A funding to accelerate growth"
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Expanded operations to serve customers in 25+ countries"
    },
    {
      year: "2024",
      title: "Industry Leadership",
      description: "Recognized as a leader in SaaS security solutions"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Expert Support" },
    // { number: "50+", label: "Countries Served" }
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground flex flex-col items-center gap-4">
              <span>Why Choose</span>
              <img src={viamiLogo} alt="Viami" className="h-12 md:h-16 w-auto" />
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              In an increasingly dangerous digital world, your organization needs more than basic security. 
              Viami delivers enterprise-grade protection with unmatched performance and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background border-b border-accent/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-primary rounded-2xl shadow-glow">
                  <Eye className="w-12 h-12 text-primary-foreground" />
                </div>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Our Vision</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                To create a world where every organization, regardless of size, has access to enterprise-grade seccurity software 
                that's simple to deploy, manage, and scale. We envision a future where Data access breaches are a thing of the past.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-primary rounded-2xl shadow-glow">
                  <Target className="w-12 h-12 text-primary-foreground" />
                </div>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Our Mission</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                To democratize cybersecurity by providing intuitive, powerful, and affordable security solutions 
                that protect businesses from evolving digital threats while enabling growth and innovation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6 bg-gradient-card border-accent/20">
                  <Shield className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Protect</h3>
                  <p className="text-sm text-muted-foreground">Safeguard digital assets with cutting-edge security</p>
                </Card>
                <Card className="p-6 bg-gradient-card border-accent/20">
                  <Users className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Empower</h3>
                  <p className="text-sm text-muted-foreground">Enable businesses to operate securely and confidently</p>
                </Card>
                <Card className="p-6 bg-gradient-card border-accent/20">
                  <TrendingUp className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Innovate</h3>
                  <p className="text-sm text-muted-foreground">Drive continuous improvement in security technology</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-primary rounded-2xl shadow-glow">
                <Heart className="w-12 h-12 text-primary-foreground" />
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-6 text-foreground">Our Purpose</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We believe that security shouldn't be a luxury reserved for large enterprises. Every business, 
              from startups to global corporations, deserves protection from cyber threats. Our purpose is to 
              level the playing field and make world-class security accessible to all.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-left">
                <CheckCircle className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Accessibility First</h3>
                <p className="text-muted-foreground">Security solutions that are easy to understand and implement</p>
              </div>
              <div className="text-left">
                <Globe className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Global Impact</h3>
                <p className="text-muted-foreground">Protecting businesses worldwide from cyber threats</p>
              </div>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Management Team Section */}
      {/* <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our experienced leadership team brings decades of cybersecurity expertise from leading technology companies and government agencies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-accent/20 text-center hover:border-primary/30 transition-colors">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.experience}</p>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Company Journey Section */}
      {/* <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-primary rounded-2xl shadow-glow">
                <Calendar className="w-12 h-12 text-primary-foreground" />
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-6 text-foreground">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From a small startup to a global leader in SaaS security, our journey has been marked by innovation, growth, and unwavering commitment to our customers.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                      <span className="text-primary-foreground font-bold">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

=======
>>>>>>> 264f6c604b7137dacf357d4e50cf17467ff5173a
      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Why Businesses Choose Viami</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We deliver enterprise-grade protection with unmatched performance and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <Card key={index} className="bg-gradient-card border-accent/20 hover:border-primary/30 transition-all duration-300 hover:shadow-elegant animate-fade-in">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-primary rounded-lg shadow-glow">
                      <reason.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{reason.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Ready to Secure your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of organizations that trust Viami to protect their digital assets.
            </p>
            <div className="flex justify-center">
              <Button variant="outline" size="lg" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyViami;