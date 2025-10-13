"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  startYear: string;
  endYear: string;
  description: string[];
  achievements?: string[];
}

export default function Education() {
  const education: EducationItem[] = [
    {
      id: "1",
      institution: "Central Arizona College",
      degree: "Bachelor of Computer Science",
      field: "Computer Science",
      location: "Arizona, USA",
      startYear: "2012",
      endYear: "2016",
      description: [
        "Focused on software engineering, mobile application development, and computer systems",
        "Studied algorithms, data structures, and object-oriented programming",
        "Completed coursework in mobile development, databases, and software architecture",
        "Built strong foundation in programming fundamentals and software design patterns"
      ],
      // achievements: [
      //   "Dean's List",
      //   "Mobile Development Project Award",
      //   "Computer Science Honor Society"
      // ]
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-foreground">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic background and qualifications that laid the foundation for my mobile development career.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="hover-elevate transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold font-display text-foreground">
                          {edu.institution}
                        </h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                          <MapPin className="h-3 w-3" />
                          {edu.location}
                        </p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="w-fit">
                      <Calendar className="h-3 w-3 mr-1" />
                      {edu.startYear} - {edu.endYear}
                    </Badge>
                  </div>
                  
                  <div className="ml-15">
                    <h4 className="text-lg font-medium text-primary">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {edu.field}
                    </p>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <ul className="space-y-2">
                      {edu.description.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {edu.achievements && edu.achievements.length > 0 && (
                      <div>
                        <h5 className="text-sm font-semibold mb-2">Achievements:</h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.achievements.map((achievement) => (
                            <Badge
                              key={achievement}
                              variant="outline"
                              className="text-xs hover-elevate"
                            >
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
