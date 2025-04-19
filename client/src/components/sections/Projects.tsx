import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAnimateOnScroll } from "@/hooks/use-animation";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/types";

// Project data
const projects: ProjectCard[] = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description: "A comprehensive dashboard for e-commerce businesses with analytics, inventory management, and customer insights.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "web",
    categoryLabel: "Web App",
    categoryClass: "bg-primary/10 text-primary",
    tech: ["React", "Node.js", "D3.js", "MongoDB"],
    links: {
      github: "#",
      live: "#",
    },
  },
  {
    id: 2,
    title: "Fitness Tracker App",
    description: "A mobile application that helps users track their workouts, nutrition, and progress toward fitness goals.",
    image: "https://images.unsplash.com/photo-1622609184693-b952706416c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    category: "mobile",
    categoryLabel: "Mobile",
    categoryClass: "bg-secondary/10 text-secondary",
    tech: ["React Native", "Firebase", "Redux", "HealthKit"],
    links: {
      github: "#",
      live: "#",
    },
  },
  {
    id: 3,
    title: "Smart Home Interface",
    description: "A user-friendly interface design for controlling smart home devices with intuitive controls and automations.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "design",
    categoryLabel: "UI/UX",
    categoryClass: "bg-accent/10 text-accent",
    tech: ["Figma", "Prototyping", "User Research", "IoT"],
    links: {
      github: "#",
      live: "#",
    },
  },
  {
    id: 4,
    title: "Content Management System",
    description: "A custom CMS for digital agencies to manage client websites and content with advanced collaboration tools.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
    category: "web",
    categoryLabel: "Web App",
    categoryClass: "bg-primary/10 text-primary",
    tech: ["Next.js", "GraphQL", "PostgreSQL", "AWS"],
    links: {
      github: "#",
      live: "#",
    },
  },
  {
    id: 5,
    title: "Expense Tracker",
    description: "A mobile application for tracking personal expenses, budgeting, and generating financial insights.",
    image: "https://images.unsplash.com/photo-1605170439002-90845e8c0137?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    category: "mobile",
    categoryLabel: "Mobile",
    categoryClass: "bg-secondary/10 text-secondary",
    tech: ["Flutter", "Dart", "SQLite", "Charts"],
    links: {
      github: "#",
      live: "#",
    },
  },
  {
    id: 6,
    title: "Travel App Design System",
    description: "A comprehensive design system for a travel booking platform with component libraries and interaction patterns.",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    category: "design",
    categoryLabel: "UI/UX",
    categoryClass: "bg-accent/10 text-accent",
    tech: ["Figma", "Design System", "Prototyping", "Accessibility"],
    links: {
      github: "#",
      live: "#",
    },
  },
];

// Category filters
const filters = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Apps" },
  { id: "mobile", label: "Mobile" },
  { id: "design", label: "UI/UX Design" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const { ref: projectsRef, controls: projectsControls } = useAnimateOnScroll();
  
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold relative">
            <span className="font-mono text-primary mr-2">03.</span> My Projects
          </h2>
          <div className="h-px bg-gray-300 dark:bg-gray-700 flex-grow ml-6"></div>
        </div>
        
        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          ref={projectsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={projectsControls}
          transition={{ duration: 0.6 }}
        >
          {filters.map((filter, index) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={`rounded-full ${activeFilter === filter.id 
                ? "bg-primary text-white" 
                : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-primary/10 hover:text-primary dark:hover:text-primary"}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </Button>
          ))}
        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={projectsControls}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col h-full"
              >
                <div className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 h-full flex flex-col relative transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 w-full">
                        <div className="flex justify-end gap-3">
                          <a href={project.links.github} className="text-white hover:text-primary transition-colors duration-300">
                            <i className="fa-solid fa-code text-lg"></i>
                          </a>
                          <a href={project.links.live} className="text-white hover:text-primary transition-colors duration-300">
                            <i className="fa-solid fa-arrow-up-right-from-square text-lg"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <span className={`text-xs font-medium ${project.categoryClass} px-2 py-1 rounded-full`}>
                        {project.categoryLabel}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white"
            asChild
          >
            <a href="#" className="inline-flex items-center space-x-2">
              <span>View All Projects</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
