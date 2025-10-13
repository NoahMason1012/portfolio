"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2 } from "lucide-react";

interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
  logo?: string;
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      id: "1",
      company: "Flynaut",
      position: "Full Stack Mobile Developer",
      location: "Charlotte, North Carolina, United States",
      startDate: "Jan 2023",
      endDate: "Dec 2024",
      description: [
        "Expanded into cross-platform frameworks like React Native and Flutter for multi-device apps",
        "Designed and implemented backend services using Node.js, Express.js, and Laravel (PHP)",
        "Integrated real-time databases and push notifications via Firebase",
        "Improved team productivity through Agile/Scrum workflows",
        "Delivered secure APIs with JWT authentication and payment gateway integrations"
      ],
      technologies: ["React Native", "Flutter", "Node.js", "Express.js", "Laravel", "Firebase", "JWT", "Stripe", "Agile/Scrum"],
    },
    {
      id: "2",
      company: "ScottsdaleBizz",
      position: "Mobile Application Developer",
      location: "AZ, United States",
      startDate: "Oct 2021",
      endDate: "Dec 2022",
      description: [
        "Built and deployed native Android (Java, Kotlin) and iOS (Objective-C, Swift) applications",
        "Integrated third-party APIs (Google Maps, Stripe, Firebase Auth)",
        "Worked closely with UI/UX designers to deliver pixel-perfect and responsive interfaces",
        "Published apps to Google Play Store and Apple App Store",
        "Ensured high-quality code standards and best practices"
      ],
      technologies: ["Java", "Kotlin", "Objective-C", "Swift", "Google Maps", "Stripe", "Firebase", "Android", "iOS"],
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-foreground">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional development journey as a Full Stack Mobile Developer, building scalable Android and iOS 
            applications and delivering exceptional mobile solutions for clients worldwide.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform md:-translate-x-1/2 z-10 border-2 border-background" />

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} ml-12 md:ml-0`}>
                  <Card className="hover-elevate transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <div className="flex items-center gap-3">
                          <Building2 className="h-5 w-5 text-primary" />
                          <h3 className="text-xl font-semibold font-display text-foreground">
                            {experience.company}
                          </h3>
                        </div>
                        <Badge variant="secondary" className="w-fit">
                          {experience.startDate} - {experience.endDate}
                        </Badge>
                      </div>
                      
                      <h4 className="text-lg font-medium text-primary mb-2">
                        {experience.position}
                      </h4>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{experience.location}</span>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        {experience.description.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs hover-elevate"
                            data-testid={`badge-tech-${tech.toLowerCase()}`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block w-2/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}