import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Palette, Sparkles, Heart, ShoppingBag } from 'lucide-react';
import heroImage from '@/assets/hero-beauty.jpg';

const Home = () => {
  const features = [
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "AI Skin Analysis",
      description: "Our advanced skin tone scanner analyzes your unique complexion to recommend perfect shades."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: "Premium Products",
      description: "Curated collection of high-quality cosmetics for every skin tone and preference."
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Personalized Beauty",
      description: "Get tailored product recommendations that complement your natural beauty."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Happy Customers" },
    { number: "500+", label: "Premium Products" },
    { number: "50+", label: "Skin Tones Matched" },
    { number: "98%", label: "Satisfaction Rate" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-serif mb-6 leading-tight">
              Discover Your
              <span className="text-gradient block">Perfect Shade</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Experience personalized beauty with our AI-powered skin tone analysis and curated cosmetics collection. 
              Every shade tells a story—let us help you find yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-hero" asChild>
                <Link to="/skin-scanner">
                  <Palette className="h-5 w-5 mr-2" />
                  Try Skin Scanner
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="btn-elegant" asChild>
                <Link to="/products">
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Shop Products
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold font-serif mb-4">Why Choose Heer Enterprises?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge technology with premium beauty products to deliver a personalized experience like no other.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-elegant hover:scale-105 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-serif">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-4xl md:text-5xl font-bold font-serif mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold font-serif mb-6">Ready to Find Your Perfect Match?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your beauty journey today with our personalized skin analysis and discover products made just for you.
          </p>
          <Button size="lg" className="btn-hero" asChild>
            <Link to="/skin-scanner">
              Get Started Now
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;