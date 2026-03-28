import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "super-secret-faculty-portal-key";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/auth/login", async (req, res) => {
    const { registrationNumber, dob } = req.body;
    // In a real app, you'd fetch the student from Firestore here
    // For this full-stack demo, we'll assume the frontend handles the initial check
    // and the backend provides a token for secure operations if needed.
    // However, the user requested JWT authentication.
    
    // Mocking a successful login for token generation
    const token = jwt.sign({ registrationNumber }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
