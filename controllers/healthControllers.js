import { addHealthCheckEntry } from '../services/healthService.js';

class HealthController {
  static async checkHealth(req, res) {
    try {
      if (req.body && Object.keys(req.body).length > 0) {
        return res
          .status(400)
          .set({
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            Pragma: 'no-cache',
            'X-Content-Type-Options': 'nosniff'
          })
          .end();
      }

      res.set({
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        Pragma: 'no-cache',
        'X-Content-Type-Options': 'nosniff'
      });

      await addHealthCheckEntry();
      res.status(200).end();
    } catch (error) {
      console.error('Health check endpoint failed:', error.message);
      res
        .status(503)
        .set({
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          Pragma: 'no-cache',
          'X-Content-Type-Options': 'nosniff'
        })
        .end();
    }
  }

  static async handleUnsupportedMethod(req, res) {
    res.set({
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      'X-Content-Type-Options': 'nosniff'
    });
    res.status(405).end();
  }
}

export default HealthController;
