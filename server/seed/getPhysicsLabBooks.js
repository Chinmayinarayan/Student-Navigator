require("dotenv").config();
const connectDB = require("../config/db");
const Subject = require("../models/Subject");

(async () => {
  await connectDB();
  const sub = await Subject.findOne({ name: { $regex: /Applied Physics Lab/i } });
  if (!sub) { console.log("Subject not found"); process.exit(1); }
  console.log("=== CURRENT TEXTBOOKS IN MONGODB ===");
  console.log(JSON.stringify(sub.textbooks, null, 2));
  process.exit(0);
})();
