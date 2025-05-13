import { prismaClient } from '@repo/db/prisma';
import express, { Request, Response } from 'express';

const app = express();

// Add middleware to parse JSON request bodies
app.use(express.json());

app.get('/', (req, res) => {
  res.send('server is healthy');
});

app.post("/signup", async (req: Request, res: Response): Promise<any> => {
  try {
    const { name, email, role } = req.body;
    
    // Validate required fields
    if (!name || !email || !role) {
      return res.status(400).json({ error: "Name, email and role are required" });
    }
    
    // Validate role
    if (role !== "DOCTOR" && role !== "PATIENT") {
      return res.status(400).json({ error: "Role must be either DOCTOR or PATIENT" });
    }
    
    // Create user with the specified role
    // const user = await prismaClient.user.create({
    //   data: {
    //     name,
    //     email,
    //     role
    //   }
    // });
    
    res.status(201).json({ 
      message: `${role.toLowerCase()} account created successfully`, 
      // user: {
      //   id: user.id,
      //   name: user.name,
      //   email: user.email,
      //   role: user.role
      // }
    });
    
  } catch (error) {
    console.error("Signup error:", error);
    
    // Handle potential duplicate email error
    if ((error as any).code === 'P2002' && (error as any).meta?.target?.includes('email')) {
      return res.status(409).json({ error: "Email already in use" });
    }
    
    res.status(500).json({ error: "Failed to create account" });
  }
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});