import { Router } from "express";
import StatusRoute from "./status.route";
import { Routes } from "../types/routes.types";

class HypothesisRoute {

  public router = Router();

  constructor() {
    this.initialiseRoutes([
      new StatusRoute()
    ]);
  }

  private initialiseRoutes = (routes: Routes[]) => {
    routes.forEach((route:Routes) => {      
      this.router.use(`/${route.path}`, route.router);
    })
  }
}

export default HypothesisRoute;