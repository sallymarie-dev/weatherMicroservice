import express from "express";
const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  res.json({ message: "weather microservice is running!!" });
});

app.get("/weather", async (req, res) => {
  const { zip, date } = req.query;
  console.log(zip, date);
  const result = await fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/71202?unitGroup=us&key=ARJGTLULKQ46UZ4DUARXD5SNG&contentType=json"
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
  res.json(weather);
});

app.listen(PORT, () => {
  console.log(`Weather Microservice running on port ${PORT}`);
});
export default app;
