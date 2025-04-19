import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Setup routes with /api prefix
  
  // API endpoint for contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const contactData = insertContactMessageSchema.parse(req.body);
      
      // Store contact form submission
      const message = await storage.createContactMessage(contactData);
      
      res.status(201).json({ success: true, message: "Message sent successfully" });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: validationError.message 
        });
      }
      
      res.status(500).json({ 
        success: false, 
        message: "Failed to send message" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
