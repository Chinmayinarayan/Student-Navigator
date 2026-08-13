require('dotenv').config();
const mongoose = require('mongoose');
const Subject = require('../models/Subject');

(async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 15000,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);

    const targetBook = {
      title: "6G Wireless Communications and Mobile Networking",
      author: "Yulei Wu, Song Guo",
      url: "https://ncrl.seu.edu.cn/_upload/article/files/b6/9c/510e9e1a4bc4a95b460dc0273268/45710ac0-0d54-4485-8293-2296151344a5.pdf"
    };

    const allSubjects = await Subject.find({});
    let totalUpdated = 0;

    for (let sub of allSubjects) {
      if (sub.textbooks && Array.isArray(sub.textbooks)) {
        let modified = false;
        const updatedBooks = sub.textbooks.map(b => {
          const titleLower = (b.title || "").toLowerCase();
          const authorLower = (b.author || "").toLowerCase();

          if (
            titleLower.includes("6g") ||
            authorLower.includes("yulei wu") ||
            authorLower.includes("song guo")
          ) {
            modified = true;
            totalUpdated++;
            return targetBook;
          }
          return b;
        });

        if (modified) {
          sub.textbooks = updatedBooks;
          sub.markModified("textbooks");
          await sub.save();
          console.log(`✅ Updated "6G Wireless Communications and Mobile Networking" link in "${sub.name}".`);
        }
      }
    }

    if (totalUpdated === 0) {
      const targets = await Subject.find({
        name: { $regex: /wireless|mobile|network/i }
      });

      for (let sub of targets) {
        let books = sub.textbooks || [];
        const exists = books.some(b => b.title.toLowerCase().includes("6g"));
        if (!exists) {
          books.push(targetBook);
          sub.textbooks = books;
          sub.markModified("textbooks");
          await sub.save();
          console.log(`✅ Appended "6G Wireless Communications and Mobile Networking" to "${sub.name}".`);
        }
      }
    }

    console.log(`Finished updating. Total books updated: ${totalUpdated}`);
  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    process.exit(0);
  }
})();
