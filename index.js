import express from "express";
const app = express();
const PORT = 3001;

app.get("/", (req, res) => {});

app.get("/weather", (req, res) => {
  const { zip, date } = req.query;
  if (!zip) {
    return res.status(400).json({ error: "zip is required" });
  }
  if (!date) {
    return res.status(400).json({ error: "date is required" });
  }
  const weather = {
    tempHigh: "70",
    tempLow: "52",
    conditins: "slightly sunny",
    summary: "Cool with few clouds",
  };
  res.json(weather);
});

app.listen(PORT, () => {
  console.log(`Weather Microservice running on port ${PORT}`);
});
