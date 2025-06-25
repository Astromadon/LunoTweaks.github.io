
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Zap, 
  Shield, 
  Monitor, 
  Gamepad2, 
  Users, 
  CheckCircle, 
  TrendingUp, 
  Cpu,
  Wifi,
  BarChart3,
  Star,
  MessageCircle,
  Play,
  Download,
  ArrowRight,
  Target,
  Trophy,
  Clock
} from "lucide-react";

const Index = () => {
  const [scanProgress, setScanProgress] = useState(0);
  const [isScanning, setIsScanning] = useState(false);

  const startScan = () => {
    setIsScanning(true);
    setScanProgress(0);
    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
  };

  const proTeams = [
    "TSM", "FaZe Clan", "100 Thieves", "NRG", "Cloud9", "Team Liquid"
  ];

  const features = [
    {
      icon: Monitor,
      title: "PC Health Check-up",
      description: "Complete system scan to identify performance bottlenecks and stability issues",
      color: "text-blue-400"
    },
    {
      icon: Gamepad2,
      title: "Gaming Optimization",
      description: "Boost FPS, reduce latency, eliminate stuttering for competitive advantage",
      color: "text-green-400"
    },
    {
      icon: Wifi,
      title: "Network Tuning",
      description: "Optimize internet settings for lowest ping and most stable connection",
      color: "text-purple-400"
    },
    {
      icon: Shield,
      title: "System Stability",
      description: "Ensure rock-solid performance with professional-grade configurations",
      color: "text-orange-400"
    }
  ];

  const testimonials = [
    {
      name: "Bugha",
      team: "World Cup Champion",
      text: "Paragon Tweaks gave me the edge I needed for consistent performance.",
      rating: 5
    },
    {
      name: "EpikWhale",
      team: "Professional Player",
      text: "My FPS increased by 40% and input lag is virtually gone.",
      rating: 5
    },
    {
      name: "SypherPK",
      team: "Content Creator",
      text: "Best optimization service I've used. Results speak for themselves.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-cyan-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Paragon Tweaks
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
              <a href="#results" className="hover:text-cyan-400 transition-colors">Results</a>
              <a href="#community" className="hover:text-cyan-400 transition-colors">Community</a>
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
                <MessageCircle className="h-4 w-4 mr-2" />
                Join Discord
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <Badge className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border-cyan-500/30 mb-4">
              ⚡ Trusted by Pro Players
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
              UNLEASH YOUR
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                TRUE POTENTIAL
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional PC optimization used by <span className="text-cyan-400 font-semibold">TSM, FaZe, 100T</span> and more. 
              Get the competitive edge with proven performance tweaks.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-lg px-8 py-6"
              onClick={startScan}
            >
              <Monitor className="h-5 w-5 mr-2" />
              Start Free PC Scan
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 text-lg px-8 py-6"
            >
              <Play className="h-5 w-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Live Scan Demo */}
          {(isScanning || scanProgress > 0) && (
            <Card className="bg-gray-900/50 border-gray-700 max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-cyan-400">PC Health Scan</CardTitle>
                <CardDescription>Analyzing your system performance...</CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={scanProgress} className="mb-2" />
                <p className="text-sm text-gray-400">{scanProgress}% complete</p>
                {scanProgress === 100 && (
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-green-400">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Found 12 optimization opportunities
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <Target className="h-4 w-4 mr-2" />
                      Potential FPS increase: +35%
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Pro Team Logos */}
          <div className="mt-16">
            <p className="text-gray-400 mb-6">Trusted by professional esports organizations</p>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
              {proTeams.map((team, index) => (
                <div key={index} className="text-2xl font-bold text-gray-400 hover:text-white transition-colors">
                  {team}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20 px-6 bg-gray-900/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Complete Performance
              </span>
              <br />
              Optimization Suite
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From baseline diagnostics to advanced gaming tweaks, we optimize every aspect of your system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group">
                <CardHeader>
                  <feature.icon className={`h-12 w-12 ${feature.color} mb-4 group-hover:scale-110 transition-transform`} />
                  <CardTitle className="text-white group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Proven Results That
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Matter</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gradient-to-br from-green-900/20 to-green-800/20 border-green-500/30">
              <CardHeader className="text-center">
                <TrendingUp className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-green-400">+45%</CardTitle>
                <CardDescription>Average FPS Increase</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 border-blue-500/30">
              <CardHeader className="text-center">
                <Clock className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-blue-400">-67%</CardTitle>
                <CardDescription>Input Lag Reduction</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/20 to-purple-800/20 border-purple-500/30">
              <CardHeader className="text-center">
                <Trophy className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-purple-400">10,000+</CardTitle>
                <CardDescription>Gamers Optimized</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-700">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-gray-300 italic">
                    "{testimonial.text}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="font-semibold text-cyan-400">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.team}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 px-6 bg-gray-900/30">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">TrapHouse</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Get live support, share optimization tips, and connect with pro players in our exclusive Discord community.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Users className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">15,000+</h3>
              <p className="text-gray-400">Active Members</p>
            </div>
            <div className="text-center">
              <MessageCircle className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">24/7</h3>
              <p className="text-gray-400">Live Support</p>
            </div>
            <div className="text-center">
              <Download className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Exclusive</h3>
              <p className="text-gray-400">Tools & Scripts</p>
            </div>
          </div>

          <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-lg px-8 py-6">
            <MessageCircle className="h-5 w-5 mr-2" />
            Join Discord Community
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Dominate?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get the same performance optimizations used by world championship players.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-lg px-8 py-6">
              Start Your Optimization
            </Button>
            <Button size="lg" variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 text-lg px-8 py-6">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Zap className="h-6 w-6 text-cyan-400" />
              <span className="text-xl font-bold">Paragon Tweaks</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 Paragon Tweaks. Elevating gaming performance worldwide.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
