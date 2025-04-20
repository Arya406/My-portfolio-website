import { Link } from "wouter";

interface SocialLink {
  icon: string;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  { icon: "fab fa-github", href: "#", label: "GitHub" },
  { icon: "fab fa-linkedin-in", href: "#", label: "LinkedIn" },
  { icon: "fab fa-twitter", href: "#", label: "Twitter" },
  { icon: "fab fa-dribbble", href: "#", label: "Dribbble" },
];

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="#home" className="text-2xl font-bold tracking-tight">
              <span className="text-primary">Arya</span>
              <span className="text-gray-900 dark:text-white">Singh</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Full-stack Developer & UI/UX Designer
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Arya Singh. All rights reserved.
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-300"
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
