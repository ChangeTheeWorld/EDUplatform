// server.ts
import express from 'express';
import pool from './db';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Test PostgreSQL connection
app.get('/test-db', async (req, res) => {
  try {
    // Query PostgreSQL database
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows); // Send the result as JSON
  } catch (error) {
    console.error('Database connection error', error);
    res.status(500).send('Error connecting to the database');
  }
});

// Routes
import authRoutes from './routes/auth';

app.use('/auth', authRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});