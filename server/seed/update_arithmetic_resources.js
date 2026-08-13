const fs = require('fs');
const path = require('path');

const filePath = 'c:/Users/DELL/OneDrive/Desktop/Career_platform/server/data/subjects/arithmeticalReasoningTopics.js';
const topics = require(filePath);

const resourcesMap = {
  "Number System": [
    {
      "title": "Neso Academy – Aptitude & Reasoning (Playlist)",
      "channel": "Neso Academy",
      "url": "https://www.nesoacademy.org/ot/03-aptitude-and-reasoning",
      "category": "Theory Explanation",
      "recommended": true
    },
    {
      "title": "S Chand Academy – Number System | Quantitative Aptitude",
      "channel": "S Chand Academy",
      "url": "https://www.youtube.com/watch?v=_dbDpXoz3nQ",
      "category": "Theory Explanation"
    },
    {
      "title": "TalentSprint Aptitude Prep – Number System",
      "channel": "TalentSprint Aptitude Prep",
      "url": "https://www.youtube.com/watch?v=wqKpV2edSdE",
      "category": "Placement Focus"
    }
  ],
  "Arithmetic Operations": [
    {
      "title": "Neso Academy – Aptitude & Reasoning Playlist",
      "channel": "Neso Academy",
      "url": "https://www.nesoacademy.org/ot/03-aptitude-and-reasoning",
      "category": "Theory Explanation",
      "recommended": true
    },
    {
      "title": "CareerRide – Quantitative Aptitude",
      "channel": "CareerRide",
      "url": "https://www.careerride.com/video-latest.aspx",
      "category": "Placement Focus"
    }
  ],
  "Ratio and Proportion": [
    {
      "title": "Neso Academy – Ratio & Proportion",
      "channel": "Neso Academy",
      "url": "https://www.nesoacademy.org/ot/03-aptitude-and-reasoning",
      "category": "Theory Explanation",
      "recommended": true
    },
    {
      "title": "TalentSprint Aptitude Prep - Ratio & Proportion",
      "channel": "TalentSprint Aptitude Prep",
      "url": "https://www.youtube.com/@TalentSprintAptitudePrep",
      "category": "Placement Focus"
    }
  ],
  "Percentage and Applications": [
    {
      "title": "Neso Academy – Percentage Aptitude",
      "channel": "Neso Academy",
      "url": "https://www.nesoacademy.org/ot/03-aptitude-and-reasoning",
      "category": "Theory Explanation",
      "recommended": true
    },
    {
      "title": "CareerRide – Percentage Aptitude",
      "channel": "CareerRide",
      "url": "https://www.careerride.com/video-latest.aspx",
      "category": "Placement Focus"
    }
  ],
  "Average and Statistics Basics": [
    {
      "title": "Neso Academy – Average Aptitude",
      "channel": "Neso Academy",
      "url": "https://www.nesoacademy.org/ot/03-aptitude-and-reasoning",
      "category": "Theory Explanation",
      "recommended": true
    },
    {
      "title": "CareerRide – Quantitative Aptitude",
      "channel": "CareerRide",
      "url": "https://www.careerride.com/video-latest.aspx",
      "category": "Placement Focus"
    }
  ],
  "Time and Work": [
    {
      "title": "Neso Academy – Time and Work Aptitude",
      "channel": "Neso Academy",
      "url": "https://www.nesoacademy.org/ot/03-aptitude-and-reasoning",
      "category": "Theory Explanation",
      "recommended": true
    },
    {
      "title": "CareerRide – Time and Work Aptitude",
      "channel": "CareerRide",
      "url": "https://www.careerride.com/video-latest.aspx",
      "category": "Placement Focus"
    }
  ],
  "Time, Speed and Distance": [
    {
      "title": "Neso Academy – Time, Speed & Distance Aptitude",
      "channel": "Neso Academy",
      "url": "https://www.nesoacademy.org/ot/03-aptitude-and-reasoning",
      "category": "Theory Explanation",
      "recommended": true
    },
    {
      "title": "TalentSprint Aptitude Prep – Time Speed Distance",
      "channel": "TalentSprint Aptitude Prep",
      "url": "https://www.youtube.com/@TalentSprintAptitudePrep",
      "category": "Placement Focus"
    }
  ],
  "Simple and Compound Interest": [
    {
      "title": "Neso Academy – Interest Aptitude",
      "channel": "Neso Academy",
      "url": "https://www.nesoacademy.org/ot/03-aptitude-and-reasoning",
      "category": "Theory Explanation",
      "recommended": true
    },
    {
      "title": "CareerRide – Interest Problems",
      "channel": "CareerRide",
      "url": "https://www.careerride.com/video-latest.aspx",
      "category": "Placement Focus"
    }
  ],
  "Algebraic Thinking": [
    {
      "title": "Khan Academy – Algebra Playlist",
      "channel": "Khan Academy",
      "url": "https://www.youtube.com/playlist?list=PLSQl0a2vh4HDS8Lw0v5y6P8l6V8yJqgX8",
      "category": "Theory Explanation",
      "recommended": true
    },
    {
      "title": "Neso Academy – Algebra Concepts",
      "channel": "Neso Academy",
      "url": "https://www.nesoacademy.org/maths",
      "category": "Theory Explanation"
    },
    {
      "title": "The Organic Chemistry Tutor – Algebra",
      "channel": "The Organic Chemistry Tutor",
      "url": "https://www.youtube.com/@TheOrganicChemistryTutor/playlists",
      "category": "Theory Explanation"
    }
  ],
  "Logical Reasoning Basics": [
    {
      "title": "Neso Academy – Logical Reasoning basics",
      "channel": "Neso Academy",
      "url": "https://www.nesoacademy.org/ot/03-aptitude-and-reasoning",
      "category": "Theory Explanation",
      "recommended": true
    },
    {
      "title": "CareerRide – Logical Reasoning",
      "channel": "CareerRide",
      "url": "https://www.youtube.com/@CareerRide",
      "category": "Placement Focus"
    }
  ],
  "Analytical Reasoning": [
    {
      "title": "Neso Academy – Analytical Reasoning basics",
      "channel": "Neso Academy",
      "url": "https://www.nesoacademy.org/ot/03-aptitude-and-reasoning",
      "category": "Theory Explanation",
      "recommended": true
    },
    {
      "title": "Adda247 – Reasoning Playlist",
      "channel": "Adda247",
      "url": "https://www.youtube.com/@Adda247",
      "category": "Placement Focus"
    }
  ],
  "Data Interpretation": [
    {
      "title": "TalentSprint Aptitude Prep – Data Interpretation",
      "channel": "TalentSprint Aptitude Prep",
      "url": "https://www.youtube.com/@TalentSprintAptitudePrep",
      "category": "Placement Focus",
      "recommended": true
    },
    {
      "title": "Neso Academy – Data Interpretation basics",
      "channel": "Neso Academy",
      "url": "https://www.nesoacademy.org/ot/03-aptitude-and-reasoning",
      "category": "Theory Explanation"
    }
  ],
  "Problem Solving Techniques": [
    {
      "title": "Neso Academy – Problem Solving shortcut methods",
      "channel": "Neso Academy",
      "url": "https://www.nesoacademy.org/ot/03-aptitude-and-reasoning",
      "category": "Theory Explanation",
      "recommended": true
    },
    {
      "title": "The Organic Chemistry Tutor – Math Problem Solving",
      "channel": "The Organic Chemistry Tutor",
      "url": "https://www.youtube.com/@TheOrganicChemistryTutor/playlists",
      "category": "Theory Explanation"
    }
  ],
  "Placement Aptitude Preparation": [
    {
      "title": "TalentSprint Aptitude Prep – Placement Aptitude",
      "channel": "TalentSprint Aptitude Prep",
      "url": "https://www.youtube.com/@TalentSprintAptitudePrep",
      "category": "Placement Focus",
      "recommended": true
    },
    {
      "title": "IndiaBix Aptitude Preparation",
      "channel": "IndiaBix",
      "url": "https://www.youtube.com/@indiabix",
      "category": "Placement Focus"
    },
    {
      "title": "Neso Academy – Complete Aptitude foundation",
      "channel": "Neso Academy",
      "url": "https://www.nesoacademy.org/ot/03-aptitude-and-reasoning",
      "category": "Theory Explanation"
    }
  ]
};

topics.forEach(topic => {
  if (resourcesMap[topic.title]) {
    topic.youtubeResources = resourcesMap[topic.title];
  }
});

fs.writeFileSync(filePath, "module.exports = " + JSON.stringify(topics, null, 2) + ";\n", 'utf8');
console.log("arithmeticalReasoningTopics.js successfully updated with custom resources!");
