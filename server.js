const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;


// Serve static files from /public
app.use(express.static(path.join(__dirname, "public")));

// Pretty routes (optional, but nice)
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "public", "index.html")));
app.get("/guide", (req, res) => res.sendFile(path.join(__dirname, "public", "guide.html")));
app.get("/about", (req, res) => res.sendFile(path.join(__dirname, "public", "about.html")));
app.get("/contact", (req, res) => res.sendFile(path.join(__dirname, "public", "contact.html")));

// Fallback 404
app.use((req, res) => res.status(404).send("404 - Page not found"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
