require('dotenv').config();
const connectDB = require('../config/db');
const mongoose = require('mongoose');
const Subject = require('../models/Subject');

(async () => {
  await connectDB();

  const exactBooks = [
    {
      title: "Analytical Reasoning",
      author: "M.K. Pandey",
      url: "https://www.scribd.com/document/388167952/M-K-PANDEY-Analytical-Reasoning"
    },
    {
      title: "Quantitative Aptitude",
      author: "R.S. Aggarwal",
      url: "https://www.scribd.com/document/1027615967/Rs-Aggarwal-Quantitative-Aptitude-New-Em"
    },
    {
      title: "Fast Track Objective Mathematics",
      author: "Rajesh Verma",
      url: "https://blogmedia.testbook.com/blog/wp-content/uploads/2023/04/afastrack-objective-mathematics-bd6e1c73.pdf"
    },
    {
      title: "A New Approach to Reasoning - Verbal & Non-Verbal",
      author: "B.S. Sijwalii & Indu Sijwali",
      url: "https://www.scribd.com/document/754925971/A-New-Approach-to-REASONING-Verbal-Non-Verbal-1"
    },
    {
      title: "Data Interpretation & Data Sufficiency",
      author: "Ananta Ashisha (Arihant)",
      url: "https://www.scribd.com/document/473447897/Data-Interpretation-and-Data-Sufficiency-By-Ananta-Ashisha-Data-Interpretation-Arihant-Expert"
    },
    {
      title: "How to Prepare for Quantitative Aptitude for CAT",
      author: "Arun Sharma",
      url: "https://www.scribd.com/document/1023111016/How-to-Prepare-for-Quantitative-Aptitude-for-CAT-by-Arun-Sharma"
    }
  ];

  // Use direct MongoDB $set to force-replace the textbooks array entirely
  const result = await Subject.findOneAndUpdate(
    { name: /aptitude/i },
    { $set: { textbooks: exactBooks } },
    { new: true, runValidators: false }
  );

  if (!result) { console.log('Subject not found!'); process.exit(1); }

  console.log(`✅ Force-replaced textbooks for "${result.name}"`);
  console.log(`Total books: ${result.textbooks.length}`);
  result.textbooks.forEach((b, i) => console.log(`  ${i+1}. ${b.title} — ${b.url}`));
  process.exit(0);
})();
