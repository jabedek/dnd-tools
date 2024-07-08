import { Request, Response, Application, NextFunction } from "express";
// import { verifySignup } from "../middlewares/verify-signup";
import { namesController } from "../controllers/names.controller";

export function namesRoutes(app: Application) {
  console.log("names routes");

  app.use(function (req: Request, res: Response, next: NextFunction) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/names/load", namesController.loadNames);
  app.post("/api/names/save", namesController.saveNames);
}
