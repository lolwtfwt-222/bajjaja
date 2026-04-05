import { Router } from "express";
import { ForService, ServiceType } from "../Modules/Service";

const App = Router();

App.use(ForService(ServiceType.Public));

App.get("/", (_, res) => res.send("Tournament-SDK | Made by @ash27z"));

App.post("/", (_, res) => res.send("Tournament-SDK | Made by @ash27z"));

export default {
  App,
  DefaultAPI: "/",
};
