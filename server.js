const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// HOME ROUTE
app.get("/", (req, res) => {
  res.send("🏆 GamePunter API is LIVE");
});

// SAMPLE FREE TIPS
app.get("/api/tips", (req, res) => {
  res.json([
    {
      match: "Arsenal vs Chelsea",
      prediction: "Over 2.5",
      odds: "1.70"
    },
    {
      match: "Inter vs Milan",
      prediction: "BTTS Yes",
      odds: "1.65"
    }
  ]);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
  console.log("Server running on port 3000");
});
