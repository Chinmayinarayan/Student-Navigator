require('dotenv').config();
const connectDB = require('../config/db');
const Subject = require('../models/Subject');
const Topic = require('../models/Topic');
const CodingProblem = require('../models/CodingProblem');

const WEB_TECH_PROBLEMS = [
  {
    topicPattern: /Introduction to Web Development Environment/i,
    problems: [
      {
        title: "HackerRank HTML/CSS/JS Basic Skill Certification",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/skills-directory/htmlcssjs_basic",
        tags: ["Web Basics", "HTML", "CSS", "JavaScript"]
      },
      {
        title: "freeCodeCamp Web Development Path",
        difficulty: "Easy",
        platform: "Custom",
        problemUrl: "https://www.freecodecamp.org/learn/full-stack-developer/",
        tags: ["freeCodeCamp", "Web Development", "Environment"]
      },
      {
        title: "CodePen Online Playground & Live Prototyping",
        difficulty: "Easy",
        platform: "Custom",
        problemUrl: "https://codepen.io/",
        tags: ["CodePen", "Sandbox", "Prototyping"]
      }
    ]
  },
  {
    topicPattern: /HTML Fundamentals/i,
    problems: [
      {
        title: "freeCodeCamp Responsive Web Design HTML Section",
        difficulty: "Easy",
        platform: "Custom",
        problemUrl: "https://www.freecodecamp.org/learn/responsive-web-design/",
        tags: ["HTML", "Semantic HTML", "freeCodeCamp"]
      },
      {
        title: "HackerRank HTML Structure & Form Challenges",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/skills-directory/htmlcssjs_basic",
        tags: ["HTML", "Forms", "HackerRank"]
      },
      {
        title: "Frontend Mentor HTML Layout Challenges",
        difficulty: "Easy",
        platform: "Custom",
        problemUrl: "https://www.frontendmentor.io/challenges",
        tags: ["HTML", "Frontend Mentor", "Layout"]
      },
      {
        title: "W3Schools HTML Interactive Exercises",
        difficulty: "Easy",
        platform: "Custom",
        problemUrl: "https://www.w3schools.com/html/html_exercises.asp",
        tags: ["HTML", "W3Schools", "Exercises"]
      }
    ]
  },
  {
    topicPattern: /^CSS Fundamentals$/i,
    problems: [
      {
        title: "freeCodeCamp CSS Box Model & Selectors",
        difficulty: "Easy",
        platform: "Custom",
        problemUrl: "https://www.freecodecamp.org/learn/responsive-web-design/",
        tags: ["CSS", "Box Model", "Selectors"]
      },
      {
        title: "W3Schools CSS Styling Exercises",
        difficulty: "Easy",
        platform: "Custom",
        problemUrl: "https://www.w3schools.com/css/css_exercises.asp",
        tags: ["CSS", "Styling", "Exercises"]
      },
      {
        title: "CSSBattle Code Challenges & Target Matching",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://cssbattle.dev/",
        tags: ["CSS", "CSSBattle", "Design"]
      },
      {
        title: "Frontend Mentor Component Card Challenges",
        difficulty: "Easy",
        platform: "Custom",
        problemUrl: "https://www.frontendmentor.io/challenges",
        tags: ["CSS", "UI Components", "Cards"]
      }
    ]
  },
  {
    topicPattern: /Advanced CSS and Responsive Design/i,
    problems: [
      {
        title: "freeCodeCamp Responsive Web Design Certification",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://www.freecodecamp.org/learn/responsive-web-design/",
        tags: ["CSS", "Responsive", "Media Queries"]
      },
      {
        title: "Flexbox Froggy (Interactive Flexbox Game)",
        difficulty: "Easy",
        platform: "Custom",
        problemUrl: "https://flexboxfroggy.com/",
        tags: ["Flexbox", "CSS Layout", "Game"]
      },
      {
        title: "Grid Garden (Interactive CSS Grid Game)",
        difficulty: "Easy",
        platform: "Custom",
        problemUrl: "https://cssgridgarden.com/",
        tags: ["CSS Grid", "Layout", "Game"]
      },
      {
        title: "Frontend Mentor Responsive Multi-Page Layouts",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://www.frontendmentor.io/challenges",
        tags: ["Responsive", "Mobile-First", "Grid"]
      }
    ]
  },
  {
    topicPattern: /JavaScript Programming/i,
    problems: [
      {
        title: "HackerRank 10 Days of JavaScript Problem Set",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/tutorials/10-days-of-javascript",
        tags: ["JavaScript", "HackerRank", "Basics"]
      },
      {
        title: "freeCodeCamp JavaScript Algorithms & Data Structures",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/",
        tags: ["JavaScript", "Algorithms", "ES6"]
      },
      {
        title: "Codewars JavaScript Coding Katas",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://www.codewars.com/",
        tags: ["JavaScript", "Codewars", "Problem Solving"]
      },
      {
        title: "Exercism JavaScript Track Exercises",
        difficulty: "Easy",
        platform: "Custom",
        problemUrl: "https://exercism.org/tracks/javascript",
        tags: ["JavaScript", "Exercism", "Clean Code"]
      }
    ]
  },
  {
    topicPattern: /JavaScript DOM Manipulation/i,
    problems: [
      {
        title: "Frontend Mentor Interactive DOM & State Challenges",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://www.frontendmentor.io/challenges",
        tags: ["DOM", "Events", "Frontend Mentor"]
      },
      {
        title: "JavaScript30 (30 Days Vanilla JS Projects)",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://javascript30.com/",
        tags: ["DOM", "Vanilla JS", "Projects"]
      },
      {
        title: "W3Schools JavaScript DOM Exercises",
        difficulty: "Easy",
        platform: "Custom",
        problemUrl: "https://www.w3schools.com/js/js_exercises.asp",
        tags: ["DOM", "Exercises", "W3Schools"]
      },
      {
        title: "freeCodeCamp DOM Manipulation Projects",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/",
        tags: ["DOM", "Projects", "freeCodeCamp"]
      }
    ]
  },
  {
    topicPattern: /Client-Side Web Development/i,
    problems: [
      {
        title: "Frontend Mentor Interactive Client-Side Apps",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://www.frontendmentor.io/challenges",
        tags: ["Client-Side", "SPA", "UI"]
      },
      {
        title: "JavaScript30 UI & Media Controls",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://javascript30.com/",
        tags: ["Audio", "Canvas", "Client-Side"]
      },
      {
        title: "CodePen Interactive Demos & Canvas Coding",
        difficulty: "Easy",
        platform: "Custom",
        problemUrl: "https://codepen.io/",
        tags: ["CodePen", "Client-Side", "UI"]
      },
      {
        title: "freeCodeCamp Front End Development Libraries",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://www.freecodecamp.org/learn/front-end-development-libraries/",
        tags: ["Libraries", "Bootstrap", "jQuery"]
      }
    ]
  },
  {
    topicPattern: /Frontend Frameworks Introduction/i,
    problems: [
      {
        title: "React.dev Official Learn React & Tic-Tac-Toe",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://react.dev/learn",
        tags: ["React", "Components", "Hooks", "State"]
      },
      {
        title: "Frontend Mentor React & Tailwind Projects",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://www.frontendmentor.io/challenges",
        tags: ["React", "Tailwind", "SPA"]
      },
      {
        title: "freeCodeCamp React and Redux Certification",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://www.freecodecamp.org/learn/front-end-development-libraries/",
        tags: ["React", "Redux", "State Management"]
      },
      {
        title: "React Exercises on Exercism Track",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://exercism.org/tracks/javascript",
        tags: ["React", "Exercism", "Props"]
      }
    ]
  },
  {
    topicPattern: /Backend Web Development Basics/i,
    problems: [
      {
        title: "freeCodeCamp Back End Development and APIs",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://www.freecodecamp.org/learn/back-end-development-and-apis/",
        tags: ["Node.js", "Express", "APIs"]
      },
      {
        title: "Node.js Learn Guides & Event Loop Fundamentals",
        difficulty: "Easy",
        platform: "Custom",
        problemUrl: "https://nodejs.org/en/learn",
        tags: ["Node.js", "Backend", "Event Loop"]
      },
      {
        title: "Express.js Getting Started & REST Routing",
        difficulty: "Easy",
        platform: "Custom",
        problemUrl: "https://expressjs.com/en/starter/installing.html",
        tags: ["Express", "Routing", "Middleware"]
      },
      {
        title: "RESTful API Microservice Challenges",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://www.freecodecamp.org/learn/back-end-development-and-apis/",
        tags: ["REST", "CRUD", "JSON"]
      }
    ]
  },
  {
    topicPattern: /Database Integration/i,
    problems: [
      {
        title: "MongoDB University Developer Learning Path",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://learn.mongodb.com/catalog?enroll=1",
        tags: ["MongoDB", "NoSQL", "Mongoose"]
      },
      {
        title: "MongoDB Developer Center Node.js Guides",
        difficulty: "Easy",
        platform: "Custom",
        problemUrl: "https://www.mongodb.com/developer/",
        tags: ["MongoDB", "CRUD", "Aggregations"]
      },
      {
        title: "SQLZoo Interactive SQL Queries & Joins",
        difficulty: "Easy",
        platform: "Custom",
        problemUrl: "https://sqlzoo.net/wiki/SQL_Tutorial",
        tags: ["SQL", "Queries", "Joins"]
      },
      {
        title: "HackerRank SQL Practice Domain",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/sql",
        tags: ["SQL", "Relational Database"]
      }
    ]
  },
  {
    topicPattern: /Full Stack Web Application Development/i,
    problems: [
      {
        title: "Frontend Mentor Full-Stack CRUD Applications",
        difficulty: "Hard",
        platform: "Custom",
        problemUrl: "https://www.frontendmentor.io/challenges",
        tags: ["Full Stack", "CRUD", "REST"]
      },
      {
        title: "freeCodeCamp Back End Development & API Projects",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://www.freecodecamp.org/learn/back-end-development-and-apis/",
        tags: ["Full Stack", "APIs", "Database"]
      },
      {
        title: "MERN Stack Real-World Applications Architecture",
        difficulty: "Hard",
        platform: "Custom",
        problemUrl: "https://www.mongodb.com/resources/languages/mern-stack",
        tags: ["MERN", "Full Stack", "Architecture"]
      },
      {
        title: "Full Stack Open Comprehensive University Course",
        difficulty: "Hard",
        platform: "Custom",
        problemUrl: "https://fullstackopen.com/en/",
        tags: ["React", "Node", "GraphQL", "TypeScript"]
      }
    ]
  },
  {
    topicPattern: /Web Security Basics/i,
    problems: [
      {
        title: "PortSwigger Web Security Academy Hands-On Labs",
        difficulty: "Hard",
        platform: "Custom",
        problemUrl: "https://portswigger.net/web-security",
        tags: ["Security", "XSS", "SQLi", "CSRF"]
      },
      {
        title: "OWASP WebGoat Vulnerability Sandbox Lab",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://owasp.org/www-project-webgoat/",
        tags: ["OWASP", "Vulnerabilities", "Security"]
      },
      {
        title: "OWASP Juice Shop Penetration Testing App",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://owasp.org/www-project-juice-shop/",
        tags: ["Penetration Testing", "OWASP Top 10"]
      }
    ]
  },
  {
    topicPattern: /Web Application Testing/i,
    problems: [
      {
        title: "freeCodeCamp Quality Assurance & Chai/Mocha Testing",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://www.freecodecamp.org/learn/quality-assurance/",
        tags: ["Testing", "QA", "Unit Tests"]
      },
      {
        title: "Jest JavaScript Testing Framework Setup & Assertions",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://jestjs.io/docs/getting-started",
        tags: ["Jest", "Unit Tests", "Mocks"]
      },
      {
        title: "Playwright Modern End-to-End Web Automation",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://playwright.dev/docs/intro",
        tags: ["Playwright", "E2E Testing", "Automation"]
      },
      {
        title: "Cypress Web Application Testing Suite",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://docs.cypress.io/",
        tags: ["Cypress", "E2E", "Integration"]
      }
    ]
  },
  {
    topicPattern: /Web Deployment and Hosting/i,
    problems: [
      {
        title: "Vercel Next.js & React Instant Global Deployment",
        difficulty: "Easy",
        platform: "Custom",
        problemUrl: "https://vercel.com/docs",
        tags: ["Deployment", "Vercel", "Serverless"]
      },
      {
        title: "Netlify Continuous Deployment & Edge Functions",
        difficulty: "Easy",
        platform: "Custom",
        problemUrl: "https://docs.netlify.com/",
        tags: ["Netlify", "CI/CD", "JAMstack"]
      },
      {
        title: "Render Cloud Application Hosting (Node.js & Databases)",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://render.com/docs",
        tags: ["Render", "Cloud", "Backend Hosting"]
      },
      {
        title: "GitHub Pages Static Web Hosting with Custom Domains",
        difficulty: "Easy",
        platform: "Custom",
        problemUrl: "https://pages.github.com/",
        tags: ["GitHub Pages", "Static Hosting"]
      }
    ]
  },
  {
    topicPattern: /Modern Web Development Tools/i,
    problems: [
      {
        title: "GitHub Skills Interactive Workflow Lessons",
        difficulty: "Easy",
        platform: "Custom",
        problemUrl: "https://skills.github.com/",
        tags: ["GitHub", "Git", "Collaboration"]
      },
      {
        title: "Git Version Control Official Commands & Workflows",
        difficulty: "Easy",
        platform: "Custom",
        problemUrl: "https://git-scm.com/doc",
        tags: ["Git", "Version Control", "CLI"]
      },
      {
        title: "npm Package Management, Scripts & Dependencies",
        difficulty: "Easy",
        platform: "Custom",
        problemUrl: "https://www.npmjs.com/",
        tags: ["npm", "Node Modules", "Build Tools"]
      },
      {
        title: "Vite Next Generation Frontend Tooling & HMR",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://vite.dev/guide/",
        tags: ["Vite", "Bundler", "HMR"]
      },
      {
        title: "Chrome DevTools Performance & Network Profiling",
        difficulty: "Easy",
        platform: "Custom",
        problemUrl: "https://developer.chrome.com/docs/devtools/",
        tags: ["DevTools", "Debugging", "Performance"]
      }
    ]
  },
  {
    topicPattern: /Mini Projects and Capstone Development/i,
    problems: [
      {
        title: "Frontend Mentor Multi-Page Capstone Challenges",
        difficulty: "Hard",
        platform: "Custom",
        problemUrl: "https://www.frontendmentor.io/challenges",
        tags: ["Capstone", "Frontend Mentor", "Portfolio"]
      },
      {
        title: "JavaScript30 Portfolio Project Showcase",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://javascript30.com/",
        tags: ["Projects", "Portfolio", "JavaScript"]
      },
      {
        title: "freeCodeCamp Certification Projects Suite",
        difficulty: "Hard",
        platform: "Custom",
        problemUrl: "https://www.freecodecamp.org/learn/",
        tags: ["Certification", "freeCodeCamp", "Projects"]
      },
      {
        title: "Full Stack Open Capstone Web Application",
        difficulty: "Hard",
        platform: "Custom",
        problemUrl: "https://fullstackopen.com/en/",
        tags: ["Full Stack", "Capstone", "Production"]
      }
    ]
  }
];

const seedWebTechLabCodingProblems = async () => {
  try {
    await connectDB();

    const subject = await Subject.findOne({ name: /^Web Technologies Lab$/i });
    if (!subject) {
      console.log('❌ Web Technologies Lab subject not found');
      process.exit(1);
    }
    console.log(`✅ Found subject: "${subject.name}"`);

    const topics = await Topic.find({ subject: subject._id });

    let totalAdded = 0;

    for (const item of WEB_TECH_PROBLEMS) {
      const topic = topics.find(t => item.topicPattern.test(t.title));
      if (topic) {
        await CodingProblem.deleteMany({ topic: topic._id });
        const problemsToInsert = item.problems.map((p, idx) => ({
          topic: topic._id,
          title: p.title,
          description: `Practical lab challenge for ${topic.title} in Web Technologies Lab.`,
          difficulty: p.difficulty,
          platform: p.platform,
          problemUrl: p.problemUrl,
          tags: p.tags || [topic.title],
          order: idx + 1,
          estimatedMinutes: p.difficulty === 'Hard' ? 60 : p.difficulty === 'Medium' ? 40 : 25,
          isPublished: true
        }));
        await CodingProblem.insertMany(problemsToInsert);
        totalAdded += problemsToInsert.length;
        console.log(`   ✅ "${topic.title}": added ${problemsToInsert.length} challenges`);
      } else {
        console.log(`   ❌ Topic pattern not matched: ${item.topicPattern}`);
      }
    }

    console.log(`\n🎉 Web Technologies Lab Coding Problems Seeded! Total: ${totalAdded}`);
    process.exit(0);
  } catch (err) {
    console.error('❌ Error:', err);
    process.exit(1);
  }
};

seedWebTechLabCodingProblems();
