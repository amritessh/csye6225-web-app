import express from 'express';
import { sequelize } from './models/index.js';
import healthRoutes from './routes/health.js';

const app = express();

app.use(express.json());
app.use('', healthRoutes);

app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Simple database initialization - inline
try {
  await sequelize.authenticate();
  console.log('Database connection established successfully.');
  
  await sequelize.sync({ force: false, alter: false });
  console.log('Database schema synchronized successfully.');
} catch (error) {
  console.error('Database initialization failed:', error);
  process.exit(1);
}

export { app };