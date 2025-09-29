import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Palette, Eye, Heart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    {
      id: 'foundation',
      name: 'Foundation & Base',
      description: 'Perfect your complexion with our range of foundations, concealers, and primers.',
      icon: <Palette className="h-8 w-8 text-primary" />,
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=300&fit=crop',
      productCount: 24,
      color: 'from-primary/20 to-primary/5'
    },
    {
      id: 'skincare',
      name: 'Skincare Essentials',
      description: 'Nourish and protect your skin with our curated skincare collection.',
      icon: <Sparkles className="h-8 w-8 text-accent" />,
      image: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=500&h=300&fit=crop',
      productCount: 18,
      color: 'from-accent/20 to-accent/5'
    },
    {
      id: 'eyes',
      name: 'Eye Makeup',
      description: 'Create stunning eye looks with our eyeshadows, liners, and mascaras.',
      icon: <Eye className="h-8 w-8 text-secondary-foreground" />,
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500&h=300&fit=crop',
      productCount: 32,
      color: 'from-secondary/40 to-secondary/10'
    },
    {
      id: 'lips',
      name: 'Lip Collection',
      description: 'Express yourself with our vibrant lipsticks, glosses, and lip care products.',
      icon: <Heart className="h-8 w-8 text-destructive" />,
      image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&h=300&fit=crop',
      productCount: 28,
      color: 'from-destructive/20 to-destructive/5'
    },
    {
      id: 'cheeks',
      name: 'Cheeks & Contour',
      description: 'Add dimension and color with our blushes, bronzers, and highlighters.',
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&h=300&fit=crop',
      productCount: 20,
      color: 'from-primary/15 to-primary/5'
    },
    {
      id: 'tools',
      name: 'Beauty Tools',
      description: 'Professional brushes and tools for flawless application every time.',
      icon: <Palette className="h-8 w-8 text-muted-foreground" />,
      image: 'https://images.unsplash.com/photo-1583241800971-f29b84d54f96?w=500&h=300&fit=crop',
      productCount: 15,
      color: 'from-muted/30 to-muted/10'
    }
  ];

  const featuredCollections = [
    {
      name: "New Arrivals",
      description: "Discover the latest additions to our beauty collection",
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop',
      link: '/products?filter=new'
    },
    {
      name: "Best Sellers", 
      description: "Our most loved products chosen by beauty enthusiasts",
      image: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=600&h=400&fit=crop',
      link: '/products?filter=bestsellers'
    },
    {
      name: "Skin Tone Matched",
      description: "Products specifically curated for your unique skin tone",
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=400&fit=crop',
      link: '/recommendations'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold font-serif mb-6 text-gradient">Shop by Category</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our carefully curated beauty categories, each designed to help you 
            create your perfect look and express your unique style.
          </p>
        </div>

        {/* Main Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {categories.map((category) => (
            <Card key={category.id} className="card-elegant group hover:scale-105 transition-all duration-300 overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color}`} />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-background/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      {category.icon}
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-medium">{category.productCount} products</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <CardTitle className="text-xl font-serif mb-3 group-hover:text-primary transition-colors">
                  {category.name}
                </CardTitle>
                <CardDescription className="mb-6 leading-relaxed">
                  {category.description}
                </CardDescription>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <Link to={`/products?category=${category.id}`}>
                    Explore Category
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Collections */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif mb-4">Featured Collections</h2>
            <p className="text-xl text-muted-foreground">
              Specially curated selections for every beauty journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredCollections.map((collection, index) => (
              <Card key={index} className="card-elegant group hover:scale-105 transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={collection.image} 
                      alt={collection.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-xl font-bold font-serif text-foreground mb-2">
                        {collection.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {collection.description}
                      </p>
                      <Button size="sm" className="btn-hero" asChild>
                        <Link to={collection.link}>
                          Shop Now
                          <ArrowRight className="h-3 w-3 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skin Tone Guide CTA */}
        <section className="text-center py-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl">
          <div className="max-w-2xl mx-auto px-8">
            <Palette className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold font-serif mb-6">Not Sure Where to Start?</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Use our AI-powered skin tone scanner to get personalized product recommendations 
              that are perfect for your unique complexion and undertones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero" asChild>
                <Link to="/skin-scanner">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Try Skin Scanner
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/products">
                  Browse All Products
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Categories;