import { HealthCheck } from '../models/index.js';

export const addHealthCheckEntry = async () => {
  try {
    const dbStart = Date.now();
    const newHealthCheck = await HealthCheck.create();

    const insertDuration = Date.now() - dbStart;
    console.log(
      `Performance: db.healthcheck.insert.duration = ${insertDuration}ms`
    );

    console.log('New health check entry added to DB', {
      id: newHealthCheck.check_id
    });

    return newHealthCheck;
  } catch (error) {
    console.error('Failed to add health check entry', {
      error: error.message,
      stack: error.stack
    });
    throw new Error(error);
  }
};
