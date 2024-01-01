import express, { json, urlencoded, type Express } from 'express';

export const createServer = (): Express => {
  const app = express();

  app.use(urlencoded({ extended: true }));
  app.use(json());

  app.get('/health', (req, res) => {
    return res.json({ ok: true });
  });

  return app;
};
