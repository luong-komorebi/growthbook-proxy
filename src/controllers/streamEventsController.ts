import express, { Request, Response } from "express";
import { channelManager } from "../services/sse";
import { apiKeyMiddleware } from "../middleware/apiKeyMiddleware";

const getSubscribeToSse = async (req: Request, res: Response) => {
  channelManager.subscribe(req, res);
};

export const streamEventsRouter = express.Router();
streamEventsRouter.use(apiKeyMiddleware);

// subscribe clients to streaming updates
streamEventsRouter.get("/:apiKey", getSubscribeToSse);
