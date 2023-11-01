import {Response, Router} from "express";
import PingService from "../ping/ping-service";

const router = Router();
const pingService = new PingService();

// TODO: define the PingResponse type to contain the URL and the duration of the ping
declare type PingResponse = {}

// Get all saved pings
router.get("/", (req, res: Response<PingResponse[]>) => {
  // TODO: get all pings from the ping service and map them to PingResponse objects
  res.send([] as PingResponse[]);
});

// Delete the ping for the given URL
router.delete("/:url", (req, res) => {
  // TODO: delete the ping for the given URL. The URL is in the request parameters.
  res.sendStatus(204);
});

// Get or measure the ping for the given URL
router.get("/:url", async (req, res: Response<PingResponse>, next) => {
  try {
    // TODO: get the URL from the request parameters and get or run a ping test for it. Then send the result as response.
    res.send({} as PingResponse);
  } catch (e) {
    next(e);
  }
});

// Run ping tests for all given URLs in parallel
router.post("/", async (req, res: Response<PingResponse[]>, next) => {
  try {
    // TODO: get the URLs from the request body and run ping tests for them in parallel.
    //  Then map the results to PingResponse objects and send them as response.
    //  Hint: the request body is already parsed to an array of strings
    res.send([] as PingResponse[]);
  } catch (e) {
    next(e);
  }
});

// Delete all saved pings
router.delete("/", (req, res) => {
  pingService.deletePings();
  res.sendStatus(204);
});

export default router;