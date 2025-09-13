import sequelize from '../config/database.js';
import healthCheckModel from './healthCheck.js';

const HealthCheck = healthCheckModel(sequelize);

export { sequelize, HealthCheck };
