const express = require("express");
const commands = require("./commands");

const app = express();
app.use(express.json());

app.post("/test-reply", (req, res) => {
  const message = req.body.message || "";
  const command = message.trim().replace(/^!/, "").toLowerCase();

  const reply = commands[command] || "কমান্ডটি পাওয়া যায়নি। !help লিখুন।";

  res.json({ reply });
});

app.get("/", (req, res) => {
  res.send("Mirai Bot is running! 🤖");
});

const PORT = 3000;

app.listen(PORT, "127.0.0.1", () => {
  console.log(`Mirai Bot চলছে: http://127.0.0.1:${PORT}`);
});
