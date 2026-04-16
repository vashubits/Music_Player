const app = require('./src/app');
const connectDB = require('./src/db/db');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT,"0.0.0.0", () => {
  console.log(`Server started on port ${PORT}`);
});