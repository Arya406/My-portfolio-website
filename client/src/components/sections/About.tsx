import { motion } from "framer-motion";
import { useAnimateOnScroll } from "@/hooks/use-animation";

const technologies = [
  "JavaScript",
  "React.js",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Tailwind CSS",
];

export default function About() {
  const { ref: sectionRef, controls } = useAnimateOnScroll();
  
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold relative">
            <span className="font-mono text-primary mr-2">01.</span> About Me
          </h2>
          <div className="h-px bg-gray-300 dark:bg-gray-700 flex-grow ml-6"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 items-start" ref={sectionRef}>
          <motion.div 
            className="md:w-3/5"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Hello! I'm Arya Singh, a passionate web developer with over 1 years of experience in building 
              digital products and experiences. I enjoy creating things that live on the internet, 
              whether that be websites, applications, or anything in between.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              My journey in web development started back in 2024 when I decided to try editing custom Tumblr themes — 
              turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Since then, I've had the privilege of working at an <span className="text-primary">gaming development company</span>, 
              a <span className="text-primary">start-up</span>, a <span className="text-primary">huge corporation</span>, and a 
              <span className="text-primary"> student-led design studio</span>. These days, I'm focused on building accessible, 
              inclusive products and digital experiences at <span className="text-primary">Acme Inc</span>.
            </p>
            
            <div className="mb-8">
              <div className="font-medium text-xl mb-4">
                Here are a few technologies I've been working with recently:
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <i className="fa-solid fa-caret-right text-primary"></i>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-2/5"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="gradient-border p-2 bg-white dark:bg-gray-900 relative">
                <img 
                  src="https://images.unsplash.com/photo-1743945968054-088cff86a63a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Arya Singh working" 
                  className="w-full h-auto rounded-md hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
