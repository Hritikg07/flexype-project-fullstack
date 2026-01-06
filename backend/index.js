const express = require("express");
const cors = require("cors");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/orders", orderRoutes);

const PORT = 5897;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
