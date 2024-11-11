import { Router, Request, Response } from 'express';
import pool from '../db';
import bcrypt from 'bcrypt';

const router = Router();

router.post('/register', async (req: any, res: any) => {
    const { name, username, birthdate, phone, email, password } = req.body;
  
    console.log(password);

    // Ensure password is provided
    if (!password) {
      return res.status(400).json({ message: 'Password is required' });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
  
    const query = `
      INSERT INTO users (name, username, birthdate, phone, email, password)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `;
  
    try {
      const { rows } = await pool.query(query, [name, username, birthdate, phone, email, hashedPassword]);
      const newUser = rows[0];
  
      res.status(201).json({
        message: 'User registered successfully',
        user: {
          id: newUser.id,
          name: newUser.name,
          username: newUser.username,
          email: newUser.email,
          birthdate: newUser.birthdate,
          phone: newUser.phone,
        },
      });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({
        message: 'Error registering user',
        error: error instanceof Error ? error.message : 'An unknown error occurred',
      });
    }
  });
  

// Login route
router.post('/login', async (req: any, res: any) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM users WHERE email = $1';

  try {
    const { rows } = await pool.query(query, [email]);

    if (rows.length === 0) {
      return res.status(401).json({ message: 'User not found' });
    }

    const user = rows[0];
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    res.status(200).json({
      message: 'Login successful',
      user: {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        birthdate: user.birthdate,
        phone: user.phone,
      },
    });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({
      message: 'Error logging in',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
});

// Logout route
router.post('/logout', async (req: any, res: any) => {
  res.status(200).json({ message: 'Logged out successfully' });
});

export default router;
