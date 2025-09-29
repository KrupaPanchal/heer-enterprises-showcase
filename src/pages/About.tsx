import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Award, Heart, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Inclusive Beauty",
      description: "We believe beauty comes in all shades and celebrate diversity in every product we create."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Premium Quality",
      description: "Only the finest ingredients and materials make it into our carefully curated product selection."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Personalized Experience",
      description: "Our AI-powered technology ensures every recommendation is tailored to your unique beauty needs."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      bio: "Beauty industry veteran with 15+ years of experience in product development and brand management."
    },
    {
      name: "Dr. Maya Patel",
      role: "Chief Technology Officer",
      bio: "AI researcher specializing in computer vision and skin analysis technology."
    },
    {
      name: "Emily Chen",
      role: "Head of Product Development",
      bio: "Expert in cosmetic chemistry with a passion for creating inclusive beauty products."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-20 animate-fade-in">
          <h1 className="text-5xl font-bold font-serif mb-6 text-gradient">About Heer Enterprises</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Founded on the belief that every person deserves to feel beautiful in their own skin, 
            Heer Enterprises combines cutting-edge technology with premium beauty products to create 
            personalized experiences that celebrate individual uniqueness.
          </p>
        </section>

        {/* Story Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold font-serif mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Heer Enterprises was born from a simple observation: the beauty industry often 
                  overlooked the incredible diversity of human skin tones, leaving many people 
                  struggling to find products that truly matched their unique complexion.
                </p>
                <p>
                  In 2020, our founder Sarah Johnson partnered with AI researcher Dr. Maya Patel 
                  to develop revolutionary skin analysis technology that could identify and match 
                  skin tones with unprecedented accuracy. This breakthrough became the foundation 
                  of our personalized beauty platform.
                </p>
                <p>
                  Today, we're proud to serve over 10,000 customers worldwide, offering a curated 
                  selection of premium cosmetics alongside our proprietary skin tone matching 
                  technology. Every product recommendation is tailored to celebrate your individual 
                  beauty story.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="card-elegant p-8 bg-gradient-to-br from-primary/5 to-accent/5">
                <blockquote className="text-lg italic text-center">
                  "Beauty isn't about fitting into a standard—it's about celebrating what makes you uniquely you."
                </blockquote>
                <cite className="block text-center mt-4 font-semibold">- Sarah Johnson, Founder</cite>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-elegant text-center hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl font-serif">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">The passionate individuals behind Heer Enterprises</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="card-elegant text-center">
                <CardHeader>
                  <div className="mx-auto w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-serif">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Mission Statement */}
        <section className="text-center py-16 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-4xl font-bold font-serif mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To revolutionize the beauty industry by providing personalized, inclusive, and technology-driven 
              solutions that help every individual discover and celebrate their unique beauty. We're committed 
              to breaking down barriers, challenging beauty standards, and ensuring that everyone can find 
              products that make them feel confident and beautiful.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;