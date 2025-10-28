import express from 'express';
import config from './config/config';
import HypothesisRoute from './routes/index.route';

class App {
  public app: express.Application;
  public env: string;
  public port: number;

  constructor() {
    this.app = express();
    this.env = config.NODE_ENV;
    this.port = config.PORT;
    this.initialiseRoutes();
  }

  private initialiseRoutes = () => {
    const routes = new HypothesisRoute();
    this.app.use('/', routes.router);
  }

  public listen = () => {
    this.app.listen(this.port, () => {
      console.info(`---------  Hypothesising..  ---------`);
      console.info(`--- ENV: ${this.env} | PORT: ${this.port} ---`);     
    })
  }
}

export default App;