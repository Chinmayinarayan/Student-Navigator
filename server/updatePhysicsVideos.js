const mongoose = require("mongoose");
require("dotenv").config();
const Subject = require("./models/Subject");
const Topic = require("./models/Topic");
const physicsLabTopics = require("./data/subjects/physicsLabTopics");

const videoData = {
  "Measurement Techniques": [
    {
      title: "Errors in Measurements and Error Analysis",
      channel: "NPTEL",
      url: "https://www.youtube.com/watch?v=Mdn2VbIACAU",
      category: "Theory Explanation",
      recommended: true
    },
    {
      title: "Physics Laboratory Measurements",
      channel: "NPTEL",
      url: "https://www.youtube.com/watch?v=CFqbfN6Cy8o",
      category: "Experiment Demonstration"
    },
    {
      title: "Physics Lab Viva Questions",
      url: "https://www.youtube.com/watch?v=QFmqXqOjR4U",
      category: "Viva Preparation"
    }
  ],
  "Laser Experiments": [
    {
      title: "Laser Physics",
      channel: "NPTEL",
      url: "https://www.youtube.com/watch?v=IK7boC7pkD4",
      category: "Theory Explanation",
      recommended: true
    },
    {
      title: "Laser Experiment Physics Lab",
      url: "https://www.youtube.com/watch?v=SXrY_0Qbch0",
      category: "Experiment Demonstration"
    },
    {
      title: "Laser Experiment Viva Questions",
      url: "https://www.youtube.com/watch?v=9D8cPrEAGyc",
      category: "Viva Preparation"
    }
  ],
  "Interference and Diffraction Experiments": [
    {
      title: "Interference and Diffraction",
      channel: "Neso Academy",
      url: "https://www.youtube.com/watch?v=Pk6s2OlKzKQ",
      category: "Theory Explanation",
      recommended: true
    },
    {
      title: "Young's Double Slit Experiment",
      url: "https://www.youtube.com/watch?v=svms57Y58bo",
      category: "Experiment Demonstration"
    },
    {
      title: "Interference Diffraction Viva Questions",
      url: "https://www.youtube.com/watch?v=QPiOn4XYqa0",
      category: "Viva Preparation"
    }
  ],
  "Fiber Optics Experiments": [
    {
      title: "Optical Fiber Communication",
      channel: "Neso Academy",
      url: "https://www.youtube.com/watch?v=9vMByy1jJFU",
      category: "Theory Explanation",
      recommended: true
    },
    {
      title: "Numerical Aperture of Optical Fiber Experiment",
      url: "https://www.youtube.com/watch?v=1X7SeYNZEKE",
      category: "Experiment Demonstration"
    },
    {
      title: "Fiber Optics Viva Questions",
      url: "https://www.youtube.com/watch?v=YUtsYkToTYI",
      category: "Viva Preparation"
    }
  ],
  "Semiconductor Experiments": [
    {
      title: "Semiconductor Physics",
      channel: "NPTEL",
      url: "https://www.youtube.com/watch?v=yNpe7MzqTEA",
      category: "Theory Explanation",
      recommended: true
    },
    {
      title: "Band Gap Measurement Experiment",
      url: "https://www.youtube.com/watch?v=pamocqvl_Es",
      category: "Experiment Demonstration"
    },
    {
      title: "Semiconductor Experiment Viva Questions",
      url: "https://www.youtube.com/watch?v=dNKD1WBcgZ8",
      category: "Viva Preparation"
    }
  ],
  "Magnetic Experiments": [
    {
      title: "Magnetic Field Experiments Physics",
      channel: "NPTEL",
      url: "https://www.youtube.com/watch?v=AcRCgyComEw",
      category: "Theory Explanation",
      recommended: true
    },
    {
      title: "Tangent Galvanometer Experiment",
      url: "https://www.youtube.com/watch?v=MQUbh0rb-gU",
      category: "Experiment Demonstration"
    },
    {
      title: "Magnetic Experiment Viva Questions",
      url: "https://www.youtube.com/watch?v=knsB7lALE4Q",
      category: "Viva Preparation"
    }
  ],
  "Ultrasonic Experiments": [
    {
      title: "Ultrasonic Waves",
      channel: "Neso Academy",
      url: "https://www.youtube.com/watch?v=7VNyyInaVsU",
      category: "Theory Explanation",
      recommended: true
    },
    {
      title: "Ultrasonic Experiment Physics Lab",
      url: "https://www.youtube.com/watch?v=7VNyyInaVsU",
      category: "Experiment Demonstration"
    },
    {
      title: "Ultrasonic Viva Questions",
      url: "https://www.youtube.com/watch?v=7VNyyInaVsU",
      category: "Viva Preparation"
    }
  ],
  "Modern Physics Experiments": [
    {
      title: "Modern Physics",
      channel: "NPTEL",
      url: "https://www.youtube.com/watch?v=Qo5oz7NhVks",
      category: "Theory Explanation",
      recommended: true
    },
    {
      title: "Modern Physics Experiment",
      url: "https://www.youtube.com/watch?v=knsB7lALE4Q",
      category: "Experiment Demonstration"
    },
    {
      title: "Modern Physics Viva Questions",
      url: "https://www.youtube.com/watch?v=QL2N9FqKUto",
      category: "Viva Preparation"
    }
  ],
  "Experimental Data Analysis": [
    {
      title: "Experimental Data Analysis Physics",
      channel: "NPTEL",
      url: "https://www.youtube.com/watch?v=QFmqXqOjR4U",
      category: "Theory Explanation",
      recommended: true
    },
    {
      title: "Physics Lab Graph and Error Analysis",
      url: "https://www.youtube.com/watch?v=h0mVxBSCsjQ",
      category: "Experiment Demonstration"
    }
  ]
};

async function updatePhysicsLabVideos() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    const subject = await Subject.findOne({ name: "Applied Physics Lab" });
    if (!subject) {
      console.log("Applied Physics Lab subject not found");
      return;
    }

    const topics = await Topic.find({ subject: subject._id });
    const topicVideoData = Object.fromEntries(
      physicsLabTopics.map(topic => [topic.title, topic.youtubeResources || []])
    );

    for (const topic of topics) {
      if (topicVideoData[topic.title]) {
        topic.youtubeResources = topicVideoData[topic.title];
        await topic.save();
        console.log(`Updated videos for topic: ${topic.title}`);
      }
    }

    console.log("All physics lab videos updated successfully");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

updatePhysicsLabVideos();
