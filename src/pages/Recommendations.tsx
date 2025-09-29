import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingBag, Star, Heart, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart, Product } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

const Recommendations = () => {
  const { addItem } = useCart();
  const { toast } = useToast();

  // Mock recommendations based on skin analysis
  const skinProfile = {
    tone: "Medium Warm",
    undertone: "Golden",
    matchDate: "Today"
  };

  const recommendedProducts: (Product & { matchPercentage: number; reason: string })[] = [
    {
      id: 'rec-1',
      name: 'Perfect Match Foundation - MW-4',
      price: 48,
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop',
      category: 'foundation',
      description: 'Buildable coverage foundation specifically formulated for medium warm skin tones.',
      matchPercentage: 98,
      reason: 'Perfect match for your golden undertones'
    },
    {
      id: 'rec-2',
      name: 'Golden Hour Concealer',
      price: 32,
      image: 'https://images.unsplash.com/photo-1583241800971-f29b84d54f96?w=400&h=400&fit=crop',
      category: 'face',
      description: 'High-coverage concealer that complements warm undertones beautifully.',
      matchPercentage: 96,
      reason: 'Ideal for brightening and highlighting'
    },
    {
      id: 'rec-3',
      name: 'Coral Sunset Blush',
      price: 28,
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop',
      category: 'cheeks',
      description: 'Warm coral blush that enhances your natural glow and complements golden undertones.',
      matchPercentage: 94,
      reason: 'Enhances your warm complexion'
    },
    {
      id: 'rec-4',
      name: 'Berry Rose Lipstick',
      price: 35,
      image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop',
      category: 'lips',
      description: 'Rich berry-toned lipstick with warm undertones that complements medium warm skin.',
      matchPercentage: 92,
      reason: 'Perfect lip color for your tone'
    },
    {
      id: 'rec-5',
      name: 'Bronze Goddess Highlighter',
      price: 42,
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop',
      category: 'face',
      description: 'Golden bronze highlighter that creates a natural sun-kissed glow.',
      matchPercentage: 90,
      reason: 'Creates beautiful warmth and dimension'
    },
    {
      id: 'rec-6',
      name: 'Warm Earth Eyeshadow Palette',
      price: 65,
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop',
      category: 'eyes',
      description: '12-shade palette with warm browns, golds, and bronzes perfect for your skin tone.',
      matchPercentage: 88,
      reason: 'Warm tones that make your eyes pop'
    }
  ];

  const handleAddToCart = (product: Product) => {
    addItem(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const getMatchColor = (percentage: number) => {
    if (percentage >= 95) return 'text-green-600';
    if (percentage >= 90) return 'text-green-500';
    if (percentage >= 85) return 'text-yellow-600';
    return 'text-orange-500';
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold font-serif mb-6 text-gradient">Your Perfect Matches</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Based on your skin analysis, we've curated the perfect products that will 
            complement your unique beauty and enhance your natural radiance.
          </p>
        </div>

        {/* Skin Profile Summary */}
        <div className="mb-12">
          <Card className="card-elegant bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold font-serif">Your Skin Profile</h2>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/skin-scanner">
                    <Palette className="h-4 w-4 mr-2" />
                    Retake Scan
                  </Link>
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-background/50 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Skin Tone</p>
                  <p className="text-xl font-semibold text-primary">{skinProfile.tone}</p>
                </div>
                <div className="text-center p-4 bg-background/50 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Undertone</p>
                  <p className="text-xl font-semibold text-primary">{skinProfile.undertone}</p>
                </div>
                <div className="text-center p-4 bg-background/50 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Analysis Date</p>
                  <p className="text-xl font-semibold text-primary">{skinProfile.matchDate}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recommendations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {recommendedProducts.map((product) => (
            <Card key={product.id} className="card-elegant group hover:scale-105 transition-all duration-300">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg aspect-square">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-primary text-primary-foreground">
                      <Star className="h-3 w-3 mr-1" />
                      {product.matchPercentage}% Match
                    </Badge>
                  </div>
                  <button className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="h-4 w-4 text-primary" />
                  </button>
                </div>
              </CardHeader>
              
              <CardContent className="p-4">
                <div className="mb-3">
                  <div className={`text-sm font-bold ${getMatchColor(product.matchPercentage)}`}>
                    {product.matchPercentage}% Match
                  </div>
                  <p className="text-xs text-muted-foreground">{product.reason}</p>
                </div>
                
                <CardTitle className="text-lg font-serif mb-2 line-clamp-2">
                  {product.name}
                </CardTitle>
                
                <CardDescription className="text-sm mb-4 line-clamp-2">
                  {product.description}
                </CardDescription>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary">
                    ${product.price}
                  </div>
                  <Badge variant="secondary" className="text-xs capitalize">
                    {product.category}
                  </Badge>
                </div>
              </CardContent>
              
              <CardFooter className="p-4 pt-0">
                <Button 
                  className="w-full btn-hero"
                  onClick={() => handleAddToCart(product)}
                >
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Additional Recommendations */}
        <section className="text-center py-16 bg-gradient-to-br from-muted/30 to-background rounded-3xl">
          <div className="max-w-2xl mx-auto px-8">
            <h2 className="text-3xl font-bold font-serif mb-6">Want More Personalized Recommendations?</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Complete your beauty profile by telling us about your preferences, 
              skin concerns, and favorite looks to get even more tailored product suggestions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero" asChild>
                <Link to="/skin-scanner">
                  Complete Profile
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

export default Recommendations;