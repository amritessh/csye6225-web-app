import { sequelize } from 'sequelize';
import healthCheckModel from 'healthCheck.js';

const healthCheck = healthCheckModel(sequelize);

export { sequelize, healthCheck };
