import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { insertContactMessageSchema } from "@shared/schema";
import { useAnimateOnScroll } from "@/hooks/use-animation";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface ContactInfo {
  type: "email" | "phone" | "location" | "availability";
  icon: string;
  label: string;
  value: string;
  href?: string;
}

interface SocialProfile {
  icon: string;
  href: string;
  label: string;
}

const contactInfo: ContactInfo[] = [
  {
    type: "email",
    icon: "fa-solid fa-envelope",
    label: "Email",
    value: "aryasingh9953@gmail.com",
    href: "aryasingh9953@gmail.com",
  },
  {
    type: "phone",
    icon: "fa-solid fa-phone",
    label: "Phone",
    value: "+91 9310439553",
    href: "tel:+919310439553",
  },
  {
    type: "location",
    icon: "fa-solid fa-location-dot",
    label: "Location",
    value: "India,Delhi",
  },
  {
    type: "availability",
    icon: "fa-solid fa-calendar",
    label: "Availability",
    value: "Open to opportunities",
  },
];

const socialProfiles: SocialProfile[] = [
  { icon: "fab fa-github", href: "#", label: "GitHub" },
  { icon: "fab fa-linkedin-in", href: "#", label: "LinkedIn" },
  { icon: "fab fa-twitter", href: "#", label: "Twitter" },
  { icon: "fab fa-dribbble", href: "#", label: "Dribbble" },
];

// Extended schema with validation
const contactFormSchema = insertContactMessageSchema.extend({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { ref: contactRef, controls: contactControls } = useAnimateOnScroll();
  const { toast } = useToast();
  
  // Define form with react-hook-form and zod validation
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  
  // Contact form submission mutation
  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
        variant: "default",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error instanceof Error ? error.message : "Please try again later",
        variant: "destructive",
      });
    },
  });
  
  // Form submission handler
  const onSubmit = (data: ContactFormValues) => {
    contactMutation.mutate(data);
  };
  
  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold relative">
            <span className="font-mono text-primary mr-2">04.</span> Get In Touch
          </h2>
          <div className="h-px bg-gray-300 dark:bg-gray-700 flex-grow ml-6"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            ref={contactRef}
            initial={{ opacity: 0, y: 30 }}
            animate={contactControls}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
              I'm currently open to new opportunities and collaborations. Whether you have a project in mind 
              or just want to connect, feel free to reach out!
            </p>
          </motion.div>
          
          <div className="flex flex-col md:flex-row gap-12">
            <motion.div 
              className="md:w-2/5"
              initial={{ opacity: 0, x: -30 }}
              animate={contactControls}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md h-full">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <i className={info.icon}></i>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">{info.label}</div>
                        {info.href ? (
                          <a 
                            href={info.href} 
                            className="text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-gray-800 dark:text-gray-200">{info.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10">
                  <h4 className="text-lg font-medium mb-4">Social Profiles</h4>
                  <div className="flex space-x-4">
                    {socialProfiles.map((profile, index) => (
                      <a 
                        key={index}
                        href={profile.href}
                        aria-label={profile.label}
                        className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-all duration-300"
                      >
                        <i className={profile.icon}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-3/5"
              initial={{ opacity: 0, x: 30 }}
              animate={contactControls}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="John Doe" 
                                {...field} 
                                className="bg-gray-100 dark:bg-gray-700 border-transparent focus:border-primary focus:bg-white dark:focus:bg-gray-800"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="john@example.com" 
                                {...field} 
                                className="bg-gray-100 dark:bg-gray-700 border-transparent focus:border-primary focus:bg-white dark:focus:bg-gray-800"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Project Inquiry" 
                              {...field} 
                              className="bg-gray-100 dark:bg-gray-700 border-transparent focus:border-primary focus:bg-white dark:focus:bg-gray-800"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Your message here..." 
                              rows={5} 
                              {...field} 
                              className="bg-gray-100 dark:bg-gray-700 border-transparent focus:border-primary focus:bg-white dark:focus:bg-gray-800 resize-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      size="lg"
                      className="w-full hover:shadow-lg hover:shadow-primary/30"
                      disabled={contactMutation.isPending}
                    >
                      {contactMutation.isPending ? (
                        <>
                          <i className="fa-solid fa-circle-notch fa-spin mr-2"></i>
                          Sending...
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <i className="fa-solid fa-paper-plane ml-2"></i>
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
