import "dotenv/config";
import express from "express";
const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  res.json({ message: "weather microservice is running!!" });
});
const myAPIKey = process.env.myAPIKey;
app.get("/weather", async (req, res) => {
  const { zip, date } = req.query;
  console.log(zip, date);
  const result = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/71202?unitGroup=us&key=${myAPIKey}&contentType=json`
  );
  const data = await result.json();
  console.log(data);
  //   if (!zip) {
  //     return res.status(400).json({ error: "zip is required" });
  //   }
  //   if (!date) {
  //     return res.status(400).json({ error: "date is required" });
  //   }
  const weather = {
    tempHigh: 70,
    tempLow: 52,
    conditions: "slightly sunny",
    summary: "Cool with few clouds",
  };
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Weather Microservice running on port ${PORT}`);
});
export default app;
