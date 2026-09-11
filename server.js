require("dotenv").config();

const path = require("path");
const express = require("express");
const cors = require("cors");
const next = require("next");

const callbackRoutes = require("./backend/src/routes/callbackRequest");
const contactRoutes = require("./backend/src/routes/contactRequest");

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev, dir: path.join(__dirname, "frontend") });
const handle = nextApp.getRequestHandler();

const app = express();

const allowedOrigins = (process.env.FRONTEND_URL || "http://localhost:3000")
  .split(",")
  .map((origin) => origin.trim());
app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

app.get("/health", (req, res) => res.json({ status: "ok" }));
app.use("/api", callbackRoutes);
app.use("/api", contactRoutes);

nextApp.prepare().then(() => {
  app.all(/.*/, (req, res) => handle(req, res));

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
