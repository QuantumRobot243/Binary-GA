const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// ✅ Move up one level to correctly locate "X_243"
const basePath = path.join(__dirname, "../front");

// ✅ Serve static files (CSS, JS) from "front"
app.use(express.static(basePath));

// ✅ Serve index.html from "front/html/"
app.get("/", (req, res) => {
  res.sendFile(path.join(basePath, "html", "index.html"));
});

// ✅ Handle other HTML files dynamically
app.get("/:page", (req, res) => {
  const page = req.params.page;
  const filePath = path.join(basePath, "html", `${page}.html`);

  // Check if the file exists before sending
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).send("Page not found!");
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

