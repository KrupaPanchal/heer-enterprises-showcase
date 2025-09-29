import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera, Upload, Sparkles, ArrowRight, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

const SkinScanner = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setAnalysisResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = async () => {
    if (!selectedImage) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Mock analysis result
    setAnalysisResult({
      skinTone: "Medium Warm",
      undertone: "Golden",
      recommendations: [
        { category: "Foundation", shade: "MW-4 (Medium Warm 4)", match: "98%" },
        { category: "Concealer", shade: "Golden Medium", match: "96%" },
        { category: "Blush", shade: "Coral Peach", match: "94%" },
        { category: "Lipstick", shade: "Berry Rose", match: "92%" }
      ],
      skinAnalysis: {
        clarity: "Good",
        hydration: "Well-hydrated", 
        sensitivity: "Low",
        recommendations: "Continue current skincare routine. Consider vitamin C serum for added glow."
      }
    });
    
    setIsAnalyzing(false);
  };

  const resetAnalysis = () => {
    setSelectedImage(null);
    setAnalysisResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold font-serif mb-6 text-gradient">AI Skin Tone Scanner</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Upload a photo and let our advanced AI analyze your unique skin tone to recommend 
            the perfect shades from our curated collection.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {!analysisResult ? (
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Upload Section */}
              <Card className="card-elegant">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-serif">Upload Your Photo</CardTitle>
                  <CardDescription>
                    For best results, use a well-lit photo showing your face and neck clearly
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {selectedImage ? (
                    <div className="relative">
                      <img 
                        src={selectedImage} 
                        alt="Uploaded for analysis" 
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="absolute top-2 right-2"
                        onClick={resetAnalysis}
                      >
                        <RefreshCw className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <div 
                      className="border-2 border-dashed border-border rounded-lg p-12 text-center cursor-pointer hover:border-primary/50 transition-colors"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Camera className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                      <p className="text-lg font-medium mb-2">Upload Photo</p>
                      <p className="text-muted-foreground text-sm">Click to select or drag & drop</p>
                    </div>
                  )}
                  
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  
                  <div className="flex gap-4">
                    <Button 
                      className="flex-1"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Choose Image
                    </Button>
                    {selectedImage && (
                      <Button 
                        className="btn-hero flex-1"
                        onClick={analyzeImage}
                        disabled={isAnalyzing}
                      >
                        {isAnalyzing ? (
                          <>
                            <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                            Analyzing...
                          </>
                        ) : (
                          <>
                            <Sparkles className="h-4 w-4 mr-2" />
                            Analyze Skin Tone
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Tips Section */}
              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">Tips for Best Results</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      title: "Natural Lighting",
                      description: "Take your photo in natural daylight near a window for accurate color detection."
                    },
                    {
                      title: "Clean Face", 
                      description: "Remove makeup or use a bare face photo for the most accurate skin tone analysis."
                    },
                    {
                      title: "Face & Neck Visible",
                      description: "Include both your face and neck in the photo to capture your true skin tone."
                    },
                    {
                      title: "Straight On",
                      description: "Face the camera directly for the best angle and most accurate results."
                    }
                  ].map((tip, index) => (
                    <div key={index} className="flex space-x-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary text-sm font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{tip.title}</h4>
                        <p className="text-muted-foreground text-sm">{tip.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          ) : (
            /* Analysis Results */
            <div className="space-y-8 animate-fade-in">
              <div className="text-center">
                <h2 className="text-3xl font-bold font-serif mb-4">Analysis Complete!</h2>
                <p className="text-muted-foreground">Here are your personalized results and recommendations</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Your Skin Profile */}
                <Card className="card-elegant">
                  <CardHeader>
                    <CardTitle className="text-xl font-serif">Your Skin Profile</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-primary/5 rounded-lg">
                        <p className="text-sm text-muted-foreground">Skin Tone</p>
                        <p className="font-semibold text-lg">{analysisResult.skinTone}</p>
                      </div>
                      <div className="text-center p-4 bg-accent/5 rounded-lg">
                        <p className="text-sm text-muted-foreground">Undertone</p>
                        <p className="font-semibold text-lg">{analysisResult.undertone}</p>
                      </div>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <h4 className="font-semibold mb-2">Skin Analysis</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Clarity:</span>
                          <span className="font-medium">{analysisResult.skinAnalysis.clarity}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Hydration:</span>
                          <span className="font-medium">{analysisResult.skinAnalysis.hydration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sensitivity:</span>
                          <span className="font-medium">{analysisResult.skinAnalysis.sensitivity}</span>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-3">
                        {analysisResult.skinAnalysis.recommendations}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Product Recommendations */}
                <Card className="card-elegant">
                  <CardHeader>
                    <CardTitle className="text-xl font-serif">Perfect Matches</CardTitle>
                    <CardDescription>Products recommended for your skin tone</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {analysisResult.recommendations.map((rec: any, index: number) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
                        <div>
                          <p className="font-medium">{rec.category}</p>
                          <p className="text-sm text-muted-foreground">{rec.shade}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold text-primary">{rec.match}</p>
                          <p className="text-xs text-muted-foreground">match</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-hero" asChild>
                  <Link to="/recommendations">
                    View All Recommendations
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" onClick={resetAnalysis}>
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Try Another Photo
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkinScanner;