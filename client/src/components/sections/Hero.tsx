import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useParallax } from "@/hooks/use-parallax";

const socialLinks = [
  { icon: "fab fa-github", href: "#", label: "GitHub" },
  { icon: "fab fa-linkedin", href: "#", label: "LinkedIn" },
  { icon: "fab fa-twitter", href: "#", label: "Twitter" },
  { icon: "fab fa-dribbble", href: "#", label: "Dribbble" },
];

export default function Hero() {
  const { handleParallaxMove, style: parallaxStyle } = useParallax(0.05);
  
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      onMouseMove={handleParallaxMove}
    >
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 opacity-20 dark:opacity-10 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3,
            delay: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div 
          className="absolute top-1/3 left-1/4 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 3,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="md:w-3/5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-sm font-mono text-primary mb-3">Hi, my name is</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter relative inline-block">
              Arya Singh
              
            </h1>
            <h2 className="text-3xl md:text-5xl font-medium text-gray-700 dark:text-gray-300 mb-6">
              I build <span className="text-primary">interactive</span> experiences for the web
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              I'm a full-stack developer specializing in creating exceptional digital experiences. 
              Currently, I'm focused on building accessible, human-centered products.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                asChild 
                size="lg" 
                className="hover:shadow-lg hover:shadow-primary/30"
              >
                <a href="#projects">View My Work</a>
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            <div className="flex mt-12 gap-6">
              {socialLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-300 text-xl"
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-2/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20 blur-2xl"></div>
              <motion.div
                className="absolute inset-6 w-[calc(100%-48px)] h-[calc(100%-48px)] rounded-full border-4 border-white dark:border-gray-800 shadow-xl overflow-hidden"
                style={parallaxStyle}
              >
                <img 
                  src="https://media.licdn.com/dms/image/v2/D5603AQEhxewDWbi1rg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1709559939801?e=1750291200&v=beta&t=8X7Ia3HDxuUPl15nf3-Mf7mZDNcqRrbSzHK8ghACEQs" 
                  alt="Profile of Arya Singh"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <a 
          href="#about" 
          className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-300"
        >
          <i className="fa-solid fa-chevron-down text-2xl"></i>
        </a>
      </motion.div>
    </section>
  );
}
