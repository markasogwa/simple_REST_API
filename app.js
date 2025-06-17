import express from "express"; // Express framework
const app = express();

app.use(express.json()); // Middleware for parsing request bodies (JSON)

// In-memory datastore
let items = []; // Stores items as an array of object
let idCounter = 1;

// Validation middleware
function validateItem(req, res, next) {
  const { name, description } = req.body;

  if (!name || typeof name !== "string") {
    return res.status(400).json({ error: "Invalid or missing 'name'" });
  }
  if (!description || typeof description !== "string") {
    return res.status(400).json({ error: "Invalid or missing 'description'" });
  }
  next();
}

function validateId(req, res, next) {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid item id" });
  }
  next();
}

// Root route
app.get("/", (req, res) => {
  res.send("Hello World.");
});

// CREATE Item
app.post("/items", validateItem, (req, res) => {
  const item = { id: idCounter++, ...req.body };
  items.push(item);
  res.status(201).json(item);
});

// READ All Items
app.get("/items", (req, res) => {
  res.json(items);
});

// READ Item by Id
app.get("/items/:id", validateId, (req, res) => {
  const item = items.find((item) => item.id == req.params.id);
  if (!item) return res.status(404).json({ error: "Item not found" });
  res.json(item);
});

// UPDATE Item
app.put("/items/:id", validateId, validateItem, (req, res) => {
  const item = items.find((item) => item.id == req.params.id);
  if (!item) return res.status(404).json({ error: "Item not found" });

  item.name = req.body.name;
  item.description = req.body.description;

  res.json(item);
});

// REMOVE Item
app.delete("/items/:id", validateId, (req, res) => {
  const itemIndex = items.findIndex((item) => item.id == req.params.id);
  if (itemIndex === -1)
    return res.status(404).json({ error: "Item not found" });

  items.splice(itemIndex, 1);
  res.json({ message: "Item successfully deleted" });
});

// Handle invalid routes
app.use((req, res, next) => {
  res.status(404).json({ error: "Not found" });
});

// Handle server errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Server Error" });
});

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
