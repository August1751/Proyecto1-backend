import userRoutes from "./user/v1/user.routes";
import bookRoutes from "./book/v1/book.routes";
import reservationRoutes from "./reservation/v1/reservation.routes";
import express from "express";
import { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";


dotenv.config();
// ROUTES
const SERVER_VERSION = "/api/v1/";

// FALLBACKS
function routeNotFound(request: Request, response: Response) {
  response.status(404).json({
    message: "Route not found.",
  });
}

export default function createApp() {
  // MIDDLEWARES
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use(SERVER_VERSION + "reservations", reservationRoutes);
  app.use(SERVER_VERSION + "books", bookRoutes);
  app.use(SERVER_VERSION + "users", userRoutes);
  
  app.use(routeNotFound);
  return app;
}

dotenv.config();