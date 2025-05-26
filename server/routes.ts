import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body using the schema
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
      // Create the contact submission in storage
      const submission = await storage.createContactSubmission(validatedData);
      
      // Log the submission for admin purposes
      console.log("New contact submission received:", {
        id: submission.id,
        name: `${submission.firstName} ${submission.lastName}`,
        email: submission.email,
        company: submission.company,
        service: submission.service,
        createdAt: submission.createdAt
      });
      
      // Return success response
      res.status(201).json({
        message: "Contact submission received successfully",
        id: submission.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        res.status(400).json({
          message: "Invalid form data",
          errors: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        });
      } else {
        // Handle other errors
        console.error("Error processing contact submission:", error);
        res.status(500).json({
          message: "Internal server error. Please try again later."
        });
      }
    }
  });

  // Get all contact submissions (admin endpoint)
  app.get("/api/contact-submissions", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({
        message: "Failed to fetch contact submissions"
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({
      status: "healthy",
      timestamp: new Date().toISOString(),
      service: "TechCorp Solutions API"
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
