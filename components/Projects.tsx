"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Play, Eye, Calendar, Download } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  category: string;
  image: string;
  playStoreUrl?: string;
  features: string[];
  stats: {
    downloads?: string;
    rating?: string;
  };
  completedDate: string;
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "1",
      title: "Phuong Dong Healthcare",
      description: "Smart healthcare application providing unique and convenient experience for users with quick medical scheduling and online health records.",
      fullDescription: "Phuong Dong Healthcare application is a smart healthcare application, providing a unique and convenient experience for users. Features include quickly scheduling medical examinations, online health records for families, QR code for convenient appointment booking, and online health examination records.",
      technologies: ["Android", "Java", "Kotlin", "Firebase", "QR Code Integration", "Health APIs"],
      category: "healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
      playStoreUrl: "https://play.google.com/store/apps/details?id=dkphuongdong.patio",
      features: [
        "Quickly schedule medical examination appointments",
        "Online health records for families",
        "QR code for convenient appointment booking",
        "Online health examination records",
        "Secure and safe health information storage",
        "View test results and doctor's notes",
        "Treatment plans accessible from anywhere"
      ],
      stats: { downloads: "1K+", rating: "4.5" },
      completedDate: "2024"
    },
    {
      id: "2",
      title: "Xpress Health",
      description: "Leading healthcare staffing platform connecting healthcare professionals with flexible, high-quality job opportunities across Ireland.",
      fullDescription: "Xpress Health is a leading healthcare staffing platform dedicated to connecting healthcare professionals with flexible, high-quality job opportunities. The user-friendly app empowers nurses and carers to take control of their work schedules and professional development.",
      technologies: ["Android", "Kotlin", "Node.js", "Real-time Booking", "Digital Timesheets"],
      category: "healthcare",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=400&fit=crop",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.xpress.health",
      features: [
        "Discover and book shifts in your area",
        "Filter opportunities by hourly rate and location",
        "Detailed shift information before applying",
        "Manage your schedule and accept shift requests",
        "Submit timesheets directly through the app",
        "24/7 dedicated team support",
        "Instant staff booking for healthcare providers"
      ],
      stats: { downloads: "10K+", rating: "4.6" },
      completedDate: "2024"
    },
    {
      id: "3",
      title: "Msosidrop - Food Delivery",
      description: "Simplest and fastest way to order food delivery in Tanzania with real-time tracking and hot fresh food delivered straight to your door.",
      fullDescription: "Introducing Msosidrop, the simplest and fastest way to order food delivery in Tanzania! Browse restaurant menus, place orders, and have hot and fresh food delivered. Features intuitive interface for finding favorite dishes, tracking orders, and receiving real-time updates.",
      technologies: ["Android", "Java", "Kotlin", "Google Maps", "Real-time Tracking", "Payment Integration"],
      category: "food",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
      playStoreUrl: "https://play.google.com/store/apps/details?id=tz.co.dukaapp.food",
      features: [
        "Browse menus from top restaurants",
        "Place orders with just a few taps",
        "Real-time order status updates",
        "Save favorite dishes and addresses",
        "Fast ordering experience",
        "Cash-on-delivery option available",
        "Food delivery across Dar es Salaam"
      ],
      stats: { downloads: "1K+", rating: "4.3" },
      completedDate: "2025"
    },
    {
      id: "4",
      title: "Cloutin - Influencer Marketing",
      description: "All-in-one influencer marketing app for influencers to maximize earning potential and connect with top brands directly.",
      fullDescription: "Cloutin is the all-in-one influencer marketing app designed for influencers to maximize their earning potential and connect with top brands. Features direct brand collaboration, affiliate marketing, detailed analytics, and easy earnings withdrawals.",
      technologies: ["Android", "Kotlin", "Social Media APIs", "Analytics", "Payment Integration"],
      category: "social",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
      playStoreUrl: "https://play.google.com/store/apps/details?id=co.cloutin.influencer",
      features: [
        "Direct brand collaboration opportunities",
        "Affiliate marketing programs",
        "Detailed analytics and tracking",
        "Create custom packages for brands",
        "Easy earnings and withdrawals",
        "Verified Instagram and YouTube profiles",
        "Real-time campaign performance tracking"
      ],
      stats: { downloads: "5K+", rating: "4.4" },
      completedDate: "2025"
    },
    
    {
      id: "6",
      title: "Zyfoo - E-commerce Platform",
      description: "All-in-one e-commerce solution for small businesses to establish strong online presence and drive sales.",
      fullDescription: "Zyfoo is your gateway to unlocking the power of online selling, streamlining operations, and achieving remarkable growth. All-in-one e-commerce solution designed for small businesses with ERP integration for enhanced efficiency.",
      technologies: ["Android", "Kotlin", "Node.js", "ERP Integration", "Payment Gateways"],
      category: "business",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.boomimart",
      features: [
        "Seamless ERP integration",
        "Customizable platform for business needs",
        "Product management and inventory",
        "Order processing system",
        "Payment gateway integration",
        "AI-powered report generator",
        "Mobile-first design"
      ],
      stats: { downloads: "500+", rating: "4.5" },
      completedDate: "2025"
    },
   
    {
      id: "8",
      title: "Food Delivery App - All in one",
      description: "Ultimate food delivery platform with massive restaurant selection, quick delivery, and real-time tracking for a seamless experience.",
      fullDescription: "The ultimate food delivery experience - All in One App! Whether it's a quick bite or a gourmet feast, this app brings a wide variety of mouth-watering dishes straight to your doorstep. Features include massive restaurant selection, quick and reliable delivery with real-time tracking, contactless delivery options, and 24/7 availability.",
      technologies: ["Android", "Java", "Google Maps", "Real-time Tracking", "Multiple Payment Methods"],
      category: "food",
      image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=600&h=400&fit=crop",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.workspace24.bachelorstiffun",
      features: [
        "Massive restaurant selection from local to national chains",
        "Quick and reliable delivery with real-time tracking",
        "Easy-to-use interface with personalized recommendations",
        "Safe & contactless delivery options",
        "Multiple payment methods supported",
        "Group orders made easy for gatherings",
        "24/7 availability with scheduled deliveries"
      ],
      stats: { downloads: "10K+", rating: "N/A" },
      completedDate: "2025"
    },
    
    {
      id: "10",
      title: "Migraine Monitor",
      description: "Headache monitoring app that connects you to your doctor with AI-assisted insights, trigger tracking, and comprehensive reports.",
      fullDescription: "More than just an intuitive tool for tracking headaches, their severity, duration and triggers, Migraine Monitor allows you to access support from your doctor and the anonymous community. Features real-time and historic headache recording, AI-assisted insights, medication tracking, mood monitoring, and automated weather correlation.",
      technologies: ["Android", "Java", "AI/ML", "Health APIs", "Weather Integration"],
      category: "tools",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.migrainemonitor",
      features: [
        "Real-time and historic headache recording",
        "Dynamic headache intensity measurement",
        "Medication dosing and effectiveness monitoring",
        "Mood and stress tracking",
        "Trigger tracking with predictive insights",
        "Automated weather data correlation",
        "AI-assisted headache insights and PDF reports"
      ],
      stats: { downloads: "10K+", rating: "4.2" },
      completedDate: "2025"
    },
    {
      id: "11",
      title: "War Cards",
      description: "Military trading card game where you choose a side in World War and face players worldwide to capture land and win the war.",
      fullDescription: "War Cards is a military trading card game where you choose a side to fight on in the World War and face off against players from around the world. Your aim is to capture land that will give you an advantage to ultimately win the war. Defeat the toughest generals, gather cards, create unique squads, and develop winning strategies.",
      technologies: ["Android", "Java", "Multiplayer", "Card Game Mechanics"],
      category: "games",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop",
      playStoreUrl: "https://war-cards.en.uptodown.com/android",
      features: [
        "Hundreds of missions across the world",
        "Collect and level up unique cards",
        "Create custom squads with special abilities",
        "Strategic one-on-one battles",
        "Challenge other players globally",
        "Capture enemy troops",
        "Develop winning strategies for tough battles"
      ],
      stats: { downloads: "7K+", rating: "N/A" },
      completedDate: "2015"
    },
    {
      id: "12",
      title: "War Inc.",
      description: "Strategic modern combat game set in 2085 where you command armies with powerful towers and advanced military forces.",
      fullDescription: "War Inc. offers thrilling experience in modern combat and strategic world domination. Set in 2085 after World War 3, engage in epic battles against thousands of players deploying powerful towers and advanced military forces. Command Marines, Snipers, Mechs, Scorpion Tanks, and Walkers to bring your opponent's base to ruin.",
      technologies: ["Android", "Java", "Strategy Game Engine", "Multiplayer"],
      category: "games",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=600&h=400&fit=crop",
      playStoreUrl: "https://war-inc.en.uptodown.com/android",
      features: [
        "Deploy nuclear missiles and drone strikes",
        "Command futuristic units with powerful tools",
        "Massive multiplayer environment with global battles",
        "Single-player campaign with hundreds of missions",
        "Build and upgrade alliance base",
        "Modern units: Mechs, Walkers, Drones",
        "Strategic combat and tactical depth"
      ],
      stats: { downloads: "2.9K+", rating: "4.5" },
      completedDate: "2016"
    },
    
  ];

  const categories = [
    { id: "all", label: "All Apps" },
    { id: "healthcare", label: "Healthcare" },
    { id: "food", label: "Food & Delivery" },
    { id: "social", label: "Social & Marketing" },
    { id: "business", label: "Business & E-commerce" },
    { id: "games", label: "Games" },
    { id: "tools", label: "Tools & Productivity" },
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const handleProjectAction = (action: string, project: Project) => {
    if (action === "view-details") {
      setSelectedProject(project);
    } else if (action === "play-store" && project.playStoreUrl) {
      window.open(project.playStoreUrl, '_blank');
    }
  };

  return (
    <section id="projects" className="py-20 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-foreground">
            Published Mobile Apps
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my mobile applications published on Google Play Store, serving thousands of users worldwide.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => handleCategoryChange(category.id)}
              className="hover-elevate"
              data-testid={`filter-${category.id}`}
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${project.id}-${selectedCategory}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover-elevate transition-all duration-300 overflow-hidden h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    data-testid={`img-project-${project.id}`}
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => handleProjectAction("play-store", project)}
                      data-testid={`button-playstore-${project.id}`}
                    >
                      <Play className="h-4 w-4 mr-1" />
                      Play Store
                    </Button>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl font-display group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {project.completedDate}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs hover-elevate"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Project Stats */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    {project.stats.downloads && (
                      <div className="flex items-center gap-1">
                        <Download className="h-3 w-3" />
                        {project.stats.downloads}
                      </div>
                    )}
                    {project.stats.rating && (
                      <div className="flex items-center gap-1">
                        ⭐ {project.stats.rating}
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2 mt-auto">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 hover-elevate"
                          onClick={() => handleProjectAction("view-details", project)}
                          data-testid={`button-details-${project.id}`}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-display">
                            {project.title}
                          </DialogTitle>
                        </DialogHeader>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div>
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-64 object-cover rounded-lg mb-4"
                            />
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex gap-4 text-sm text-muted-foreground">
                              {project.stats.downloads && (
                                <div className="flex items-center gap-1">
                                  <Download className="h-4 w-4" />
                                  {project.stats.downloads} downloads
                                </div>
                              )}
                              {project.stats.rating && (
                                <div className="flex items-center gap-1">
                                  ⭐ {project.stats.rating} rating
                                </div>
                              )}
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="font-semibold mb-2">About</h3>
                            <p className="text-muted-foreground mb-4">
                              {project.fullDescription}
                            </p>
                            
                            <h3 className="font-semibold mb-2">Key Features</h3>
                            <ul className="space-y-1 text-sm text-muted-foreground">
                              {project.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="w-1 h-1 bg-primary rounded-full mt-2" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="flex gap-4 pt-4 border-t">
                          <Button 
                            onClick={() => handleProjectAction("play-store", project)}
                            data-testid={`button-modal-playstore-${project.id}`}
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View on Play Store
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
