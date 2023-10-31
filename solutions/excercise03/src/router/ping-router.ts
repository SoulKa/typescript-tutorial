import {Response, Router} from "express";
import PingService from "../ping/ping-service";

const router = Router();
const pingService = new PingService();

declare type PingResponse = {
  url: string;
  duration: number;
}

function mapToPingResponse([url, duration]: [string, number]) {
  return {url, duration} as PingResponse;
}

// Get all saved pings
router.get("/", (req, res: Response<PingResponse[]>) => {
  const pings = pingService.getPings();
  res.send(pings.map(mapToPingResponse));
});

// Run ping tests for all given URLs in parallel
router.post("/", async (req, res: Response<PingResponse[]>, next) => {
  try {
    const urls = req.body as string[];
    const durations = await pingService.runPingTests(urls);
    res.send(urls.map((url, index) => ({url, duration: durations[index]})));
  } catch (e) {
    next(e);
  }
});

// Delete all saved pings
router.delete("/", (req, res) => {
  pingService.deletePings();
  res.sendStatus(204);
});

// Get or measure the ping for the given URL
router.get("/:url", async (req, res: Response<PingResponse>, next) => {
  try {
    const url = req.params.url;
    const duration = await pingService.getOrRunPingTest(url);
    res.send({url, duration});
  } catch (e) {
    next(e);
  }
});

// Delete the ping for the given URL
router.delete("/:url", (req, res) => {
  const url = req.params.url;
  pingService.deletePing(url);
  res.sendStatus(204);
});

export default router;