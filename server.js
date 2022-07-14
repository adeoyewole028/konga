const express = require("express");
const path = require("path");

const app = express();

/* Ensure any requests prefixed with /static will serve our "frontend/static" directory */
app.use("/public", express.static(path.resolve(__dirname, "konga", "public")));

/* Redirect all routes to our (soon to exist) "index.html" file */
app.get("/*", (req, res) => {
  res.sendFile(path.resolve("", "index.html"));
});

app.listen(process.env.PORT || 3000, () => console.log("Server running..."));
