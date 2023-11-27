import express, { Router } from "express";
import { HooksService } from "../../modules/hooks/HooksService";


const restEndpoint: Router = express.Router();
// define routes
restEndpoint.get("/", (_req, res) => {
    res.send({ message: "Rest Endpoint Initialized!" });
})

restEndpoint.post('/hooks/:option', async (req, res) => {
    const option = req.params.option;
    let pullRequestCount=0;
    if (option === 'github') {
      // Check if the payload contains information about a pull request
      const payload = req.body;
      console.log(payload);
      if (payload.action === 'closed' && payload.pull_request) {
        pullRequestCount++;
  
        // Check if it's the 100th pull request
        if (pullRequestCount % 5 === 0) {
          // Perform release creation logic here
          await HooksService.github(payload);
        }
      }
  
      res.status(200).send({ message: 'GitHub Webhook received successfully!' });
    } else {
      res.status(400).send({ error: 'Invalid option' });
    }
  });
export { restEndpoint }