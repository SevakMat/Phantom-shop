import dotenv from 'dotenv';
import { app } from './app';
import MongoConnection from './database/mongo-connection';
import { logger } from './logger';

const result = dotenv.config();
if (result.error) {
  dotenv.config({ path: '.env' });
}

const mongoDb = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASS}@cluster0.usuilvx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const mongoConnection = new MongoConnection(mongoDb);

mongoConnection.connect(() => {
  app.listen(app.get('port'), (): void => {
    console.log(
      `Express server started at http://localhost:${app.get('port')}   `
    );
  });
});

process.on('SIGINT', () => {
  logger.info('Gracefully shutting down');
  mongoConnection.close(err => {
    if (err) {
      logger.log({
        level: 'error',
        message: 'Error shutting closing mongo connection',
        error: err
      });
    }
    process.exit(0);
  });
});
