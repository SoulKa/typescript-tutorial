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

router.get("/", (req, res: Response<PingResponse[]>) => {
  const pings = pingService.getPings();
  res.send(pings.map(mapToPingResponse));
});

router.get("/:url", async (req, res: Response<PingResponse>, next) => {
  try {
    const url = req.params.url;
    const duration = await pingService.getOrRunPingTest(url);
    res.send({url, duration});
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res: Response<PingResponse[]>, next) => {
  try {
    const urls = req.body as string[];
    const durations = await pingService.runPingTests(urls);
    res.send(urls.map((url, index) => ({url, duration: durations[index]})));
  } catch (e) {
    next(e);
  }
});

router.delete("/:url", (req, res) => {
  const url = req.params.url;
  pingService.deletePing(url);
  res.sendStatus(204);
});

router.delete("/", (req, res) => {
  pingService.deletePings();
  res.sendStatus(204);
});

export default router;