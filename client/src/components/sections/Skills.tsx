import { motion } from "framer-motion";
import { useAnimateOnScroll } from "@/hooks/use-animation";
import { SkillBar } from "@/components/ui/skill-bar";

interface Skill {
  name: string;
  percentage: number;
}

interface TechTag {
  name: string;
}

interface SoftSkill {
  name: string;
  description: string;
  icon: string;
  iconBgClass: string;
  iconColorClass: string;
}

const technicalSkills: Skill[] = [
  { name: "Frontend Development", percentage: 95 },
  { name: "Backend Development", percentage: 85 },
  { name: "UI/UX Design", percentage: 80 },
  { name: "DevOps", percentage: 70 },
  { name: "Mobile Development", percentage: 75 },
];

const techTags: TechTag[] = [
  { name: "JavaScript" }, { name: "TypeScript" }, { name: "React.js" },
  { name: "Next.js" }, { name: "Node.js" }, { name: "Express" },
  { name: "MongoDB" }, { name: "PostgreSQL" }, { name: "GraphQL" },
  { name: "Redux" }, { name: "Tailwind CSS" }, { name: "SASS" },
  { name: "Figma" }, { name: "Git" }, { name: "Docker" }, { name: "AWS" },
];

const softSkills: SoftSkill[] = [
  { 
    name: "Team Leadership", 
    description: "Managed 5+ developers", 
    icon: "fa-solid fa-users",
    iconBgClass: "bg-primary/10",
    iconColorClass: "text-primary"
  },
  { 
    name: "Communication", 
    description: "Clear & effective", 
    icon: "fa-solid fa-comment-dots",
    iconBgClass: "bg-secondary/10",
    iconColorClass: "text-secondary"
  },
  { 
    name: "Problem Solving", 
    description: "Creative solutions", 
    icon: "fa-solid fa-lightbulb",
    iconBgClass: "bg-accent/10",
    iconColorClass: "text-accent"
  },
  { 
    name: "Time Management", 
    description: "Efficient multitasking", 
    icon: "fa-solid fa-clock",
    iconBgClass: "bg-primary/10",
    iconColorClass: "text-primary"
  },
];

export default function Skills() {
  const { ref: skillsRef, controls: skillsControls } = useAnimateOnScroll();
  const { ref: techRef, controls: techControls } = useAnimateOnScroll();
  
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold relative">
            <span className="font-mono text-primary mr-2">02.</span> Skills
          </h2>
          <div className="h-px bg-gray-300 dark:bg-gray-700 flex-grow ml-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            ref={skillsRef}
            initial={{ opacity: 0, y: 50 }}
            animate={skillsControls}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>
            
            {/* Skill Bars */}
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <SkillBar 
                  key={index} 
                  name={skill.name} 
                  percentage={skill.percentage} 
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>
          
          <div>
            <motion.div
              ref={techRef}
              initial={{ opacity: 0, y: 50 }}
              animate={techControls}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-8">Tools & Technologies</h3>
              
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-3">
                {techTags.map((tag, index) => (
                  <motion.div
                    key={index}
                    className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md hover:border-primary dark:hover:border-primary transition-all duration-300 cursor-default"
                    initial={{ opacity: 0, y: 20 }}
                    animate={techControls}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.03 }}
                    whileHover={{ y: -5 }}
                  >
                    <span>{tag.name}</span>
                  </motion.div>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold mt-12 mb-8">Soft Skills</h3>
              
              <div className="grid grid-cols-2 gap-6">
                {softSkills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={techControls}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <div className={`w-12 h-12 rounded-full ${skill.iconBgClass} flex items-center justify-center ${skill.iconColorClass}`}>
                      <i className={skill.icon}></i>
                    </div>
                    <div>
                      <div className="font-medium">{skill.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{skill.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
