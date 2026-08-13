module.exports = [
  {
    "title": "Introduction to Web Development Environment",
    "slug": "web-tech-lab-introduction-to-web-development-environment",
    "order": 1,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Learn the fundamentals of web technologies, client-server architecture, browsers, servers, development tools setup (VS Code & DevTools), web hosting, and standard development workflows.",
    "subTopics": [
      "Introduction to Web Technologies",
      "Client-Server Architecture",
      "Web Browsers and Web Servers",
      "Setting Up Development Environment",
      "VS Code Setup",
      "Browser Developer Tools",
      "Introduction to Web Hosting",
      "Web Development Workflow"
    ],
    "prerequisiteTitles": [],
    "learningObjectives": [
      "Understand Client-Server HTTP architecture and Web request-response cycles.",
      "Configure Visual Studio Code with essential web extensions (Live Server, Prettier, ES7+ snippets).",
      "Use Chrome/Firefox Browser Developer Tools (Console, Elements, Network inspector) to debug web pages."
    ],
    "notes": [
      {
        "title": "Web Environment Setup & HTTP Architecture Overview",
        "content": "EXPERIMENT 1: WEB DEVELOPMENT ENVIRONMENT & TOOLING SETUP\n\n1. CLIENT-SERVER HTTP ARCHITECTURE:\nClient (Browser) -- HTTP Request (GET /index.html) --> Web Server (Apache/Nginx/Node.js)\nClient (Browser) <-- HTTP Response (200 OK + HTML/CSS/JS) -- Web Server\n\n2. SIMPLE HTTP STATIC SERVER SETUP (Node.js Express):\nconst express = require('express');\nconst path = require('path');\nconst app = express();\nconst PORT = process.env.PORT || 3000;\n\n// Serve static files from 'public' directory\napp.use(express.static(path.join(__dirname, 'public')));\n\napp.get('/api/health', (req, res) => {\n    res.json({ status: 'UP', timestamp: new Date().toISOString() });\n});\n\napp.listen(PORT, () => {\n    console.log(`Web Server running on http://localhost:${PORT}`);\n});\n\n3. BROWSER DEVTOOLS CONSOLE INSPECTION SNIPPET:\n// Open DevTools (F12) -> Console tab\nconsole.log(\"Web Dev Tools Active!\");\nconsole.table([\n    { tool: \"Elements\", purpose: \"Inspect DOM & CSS styles\" },\n    { tool: \"Console\", purpose: \"JavaScript debugging & logging\" },\n    { tool: \"Network\", purpose: \"Inspect HTTP requests, headers & performance\" },\n    { tool: \"Application\", purpose: \"Manage LocalStorage, Cookies & Session Data\" }\n]);"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Learning Web Design",
        "author": "Jennifer Niederst Robbins"
      }
    ],
    "practiceLinks": [
      {
        "title": "MDN Web Docs - Getting Started with the Web",
        "url": "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain Client-Server Architecture in the context of web applications. (2 Marks)",
        "What is the role of a Web Browser vs a Web Server? (2 Marks)",
        "List three key features of Browser Developer Tools. (2 Marks)"
      ],
      "sixMarks": [
        "Describe step-by-step how to set up VS Code with essential extensions for modern web development. (6 Marks)",
        "Explain HTTP Request and Response headers, status codes (200, 404, 500), and methods (GET, POST). (6 Marks)"
      ],
      "longAnswer": [
        "Write a detailed report on Web Development Architecture. Cover local vs production servers, DNS resolution, domain hosting setup, build workflow, and Chrome DevTools tabs (Elements, Console, Network, Application). (10 Marks)"
      ]
    }
  },
  {
    "title": "HTML Fundamentals",
    "slug": "web-tech-lab-html-fundamentals",
    "order": 2,
    "estimatedHours": 5,
    "difficulty": "Beginner",
    "description": "Master HTML markup tags, document layout structure, text formatting, links, images, tables, semantic tags, and practical form building.",
    "subTopics": [
      "Introduction to HTML",
      "HTML Document Structure",
      "HTML Tags and Elements",
      "Headings and Paragraphs",
      "Text Formatting",
      "Links and Navigation",
      "Images",
      "Tables",
      "Lists",
      "Forms and Input Elements",
      "HTML5 Semantic Elements",
      "Practical: Personal Profile Web Page",
      "Practical: Resume Web Page",
      "Practical: Registration Form"
    ],
    "prerequisiteTitles": [
      "Introduction to Web Development Environment"
    ],
    "learningObjectives": [
      "Construct syntactically valid HTML5 documents with proper document declaration and head tags.",
      "Build complex interactive HTML forms utilizing diverse input types and validation attributes.",
      "Implement HTML5 semantic structural tags (<header>, <nav>, <main>, <article>, <section>, <footer>)."
    ],
    "notes": [
      {
        "title": "HTML5 Document Structure & Practical Registration Form",
        "content": "EXPERIMENT 2: HTML5 SEMANTIC PAGE & USER REGISTRATION FORM\n\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Personal Resume & Student Registration</title>\n</head>\n<body>\n    <header>\n        <h1>John Doe - Web Developer</h1>\n        <nav>\n            <a href=\"#about\">About</a> | <a href=\"#education\">Education</a> | <a href=\"#register\">Register</a>\n        </nav>\n    </header>\n\n    <main>\n        <section id=\"about\">\n            <h2>About Me</h2>\n            <p>Welcome! I am a passionate <strong>Web Development</strong> student.</p>\n            <img src=\"avatar.jpg\" alt=\"Profile Picture\" width=\"150\">\n        </section>\n\n        <section id=\"education\">\n            <h2>Education Details</h2>\n            <table border=\"1\">\n                <thead>\n                    <tr><th>Degree</th><th>Institution</th><th>Year</th></tr>\n                </thead>\n                <tbody>\n                    <tr><td>B.Tech CSE</td><td>Tech University</td><td>2026</td></tr>\n                </tbody>\n            </table>\n        </section>\n\n        <section id=\"register\">\n            <h2>Student Registration Form</h2>\n            <form action=\"/submit-registration\" method=\"POST\">\n                <label for=\"username\">Full Name:</label>\n                <input type=\"text\" id=\"username\" name=\"username\" required minlength=\"3\"><br><br>\n\n                <label for=\"email\">Email Address:</label>\n                <input type=\"email\" id=\"email\" name=\"email\" required><br><br>\n\n                <label for=\"gender\">Gender:</label>\n                <input type=\"radio\" id=\"male\" name=\"gender\" value=\"male\"> <label for=\"male\">Male</label>\n                <input type=\"radio\" id=\"female\" name=\"gender\" value=\"female\"> <label for=\"female\">Female</label><br><br>\n\n                <label for=\"course\">Select Course:</label>\n                <select id=\"course\" name=\"course\">\n                    <option value=\"web-tech\">Web Technologies Lab</option>\n                    <option value=\"dsa\">Data Structures</option>\n                </select><br><br>\n\n                <button type=\"submit\">Submit Registration</button>\n            </form>\n        </section>\n    </main>\n\n    <footer>\n        <p>&copy; 2026 Web Tech Lab. All rights reserved.</p>\n    </footer>\n</body>\n</html>"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "HTML and CSS: Design and Build Websites",
        "author": "Jon Duckett"
      }
    ],
    "practiceLinks": [
      {
        "title": "W3Schools HTML Tutorial",
        "url": "https://www.w3schools.com/html/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is the difference between inline and block-level HTML elements? Give examples. (2 Marks)",
        "Explain the importance of HTML5 semantic tags compared to generic <div> tags. (2 Marks)",
        "State the purpose of the alt attribute in an <img> tag. (2 Marks)"
      ],
      "sixMarks": [
        "Design an HTML registration form containing Text, Email, Password, Radio buttons, Checkboxes, Dropdown select, and Submit button. (6 Marks)",
        "Explain the complete HTML5 document structure with head metadata, meta viewport, script, and link elements. (6 Marks)"
      ],
      "longAnswer": [
        "Create a comprehensive HTML structure for an Academic Student Resume webpage. Include semantic sectioning tags, structured tables for education, ordered/unordered lists for skills, hyperlinked projects, and embedded contact forms. (10 Marks)"
      ]
    }
  },
  {
    "title": "CSS Fundamentals",
    "slug": "web-tech-lab-css-fundamentals",
    "order": 3,
    "estimatedHours": 5,
    "difficulty": "Beginner",
    "description": "Learn CSS styling, selectors, colors, typography, CSS Box Model (margin, padding, border), elements positioning, and styling navigation bars.",
    "subTopics": [
      "Introduction to CSS",
      "CSS Syntax",
      "Inline/Internal/External CSS",
      "Element/Class/ID Selectors",
      "Colors and Backgrounds",
      "Fonts and Text Styling",
      "Box Model",
      "Margin and Padding",
      "Borders",
      "CSS Positioning",
      "Practical: Style HTML Pages",
      "Practical: Responsive Layouts",
      "Practical: Navigation Bars"
    ],
    "prerequisiteTitles": [
      "HTML Fundamentals"
    ],
    "learningObjectives": [
      "Apply inline, internal, and external CSS stylesheets to HTML elements.",
      "Understand and manipulate the CSS Box Model (content, padding, border, margin).",
      "Utilize CSS positioning (static, relative, absolute, fixed, sticky) to build layout components."
    ],
    "notes": [
      {
        "title": "CSS Styling, Box Model & Navigation Bar Implementation",
        "content": "EXPERIMENT 3: STYLING HTML PAGES & NAVIGATION BAR LAYOUT\n\n/* styles.css - External CSS File */\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    line-height: 1.6;\n    background-color: #f4f7f6;\n    color: #333;\n}\n\n/* Navigation Bar Styling */\n.navbar {\n    background-color: #1e293b;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 1rem 2rem;\n    position: sticky;\n    top: 0;\n    z-index: 100;\n}\n\n.navbar .logo {\n    color: #38bdf8;\n    font-size: 1.5rem;\n    font-weight: bold;\n}\n\n.nav-links {\n    list-style: none;\n    display: flex;\n    gap: 1.5rem;\n}\n\n.nav-links a {\n    color: #ffffff;\n    text-decoration: none;\n    font-weight: 500;\n    transition: color 0.3s ease;\n}\n\n.nav-links a:hover {\n    color: #38bdf8;\n}\n\n/* Box Model Card Component */\n.card {\n    background: #ffffff;\n    width: 300px;\n    padding: 20px; /* Internal space */\n    border: 2px solid #e2e8f0; /* Border boundary */\n    border-radius: 8px;\n    margin: 20px auto; /* External space */\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n}\n\n.card h3 {\n    color: #0f172a;\n    margin-bottom: 10px;\n}\n\n.btn-primary {\n    display: inline-block;\n    padding: 10px 20px;\n    background-color: #2563eb;\n    color: #fff;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n}\n\n.btn-primary:hover {\n    background-color: #1d4ed8;\n}"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "CSS: The Definitive Guide",
        "author": "Eric A. Meyer"
      }
    ],
    "practiceLinks": [
      {
        "title": "CSS Diner - CSS Selectors Practice",
        "url": "https://flukeout.github.io/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain the CSS Box Model with a clear labeled diagram description. (2 Marks)",
        "Differentiate between Class (.class) and ID (#id) selectors in CSS. (2 Marks)",
        "Explain the difference between position: relative and position: absolute. (2 Marks)"
      ],
      "sixMarks": [
        "Write CSS code to create a sticky top navigation bar with logo and hoverable menu items. (6 Marks)",
        "Explain CSS specificity rules and how conflicting styling rules are resolved by browsers. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on CSS Fundamentals. Detail box-sizing property, inline vs block vs inline-block display modes, CSS variables, pseudo-classes (:hover, :nth-child), and absolute vs relative vs sticky positioning. (10 Marks)"
      ]
    }
  },
  {
    "title": "Advanced CSS and Responsive Design",
    "slug": "web-tech-lab-advanced-css-and-responsive-design",
    "order": 4,
    "estimatedHours": 5,
    "difficulty": "Beginner",
    "description": "Master modern layout systems including Flexbox, CSS Grid, media queries, keyframe animations, transforms, transitions, and CSS custom properties for responsive UI design.",
    "subTopics": [
      "Flexbox",
      "CSS Grid",
      "Media Queries",
      "Responsive Web Design",
      "Animations",
      "Transitions",
      "Transformations",
      "CSS Variables",
      "Mobile-Friendly Design",
      "Practical: Responsive Portfolio",
      "Practical: Landing Page"
    ],
    "prerequisiteTitles": [
      "CSS Fundamentals"
    ],
    "learningObjectives": [
      "Build complex responsive 1D layouts using Flexbox and 2D grid layouts using CSS Grid.",
      "Write mobile-first media queries using `@media` breakpoints.",
      "Create high-performance UI animations and hover transitions using CSS `@keyframes` and `transform`."
    ],
    "notes": [
      {
        "title": "Responsive Flexbox, Grid Layouts & Keyframe Animations",
        "content": "EXPERIMENT 4: RESPONSIVE WEB PORTFOLIO & ANIMATIONS\n\n:root {\n    --primary-color: #4f46e5;\n    --accent-color: #06b6d4;\n    --text-color: #1f2937;\n    --bg-light: #f9fafb;\n}\n\n/* Flexible Container (Flexbox) */\n.hero-section {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding: 4rem 2rem;\n    background: var(--bg-light);\n}\n\n/* 2D Responsive Grid System */\n.portfolio-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n    gap: 1.5rem;\n    padding: 2rem;\n}\n\n.grid-item {\n    background: #fff;\n    border-radius: 12px;\n    padding: 1.5rem;\n    transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n\n.grid-item:hover {\n    transform: translateY(-8px) scale(1.02);\n    box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1);\n}\n\n/* CSS Keyframe Animation */\n@keyframes fadeInSlide {\n    0% { opacity: 0; transform: translateY(20px); }\n    100% { opacity: 1; transform: translateY(0); }\n}\n\n.animated-heading {\n    animation: fadeInSlide 1s ease-out forwards;\n}\n\n/* Responsive Mobile-First Media Query */\n@media (max-width: 768px) {\n    .hero-section {\n        flex-direction: column;\n        text-align: center;\n    }\n    .portfolio-grid {\n        grid-template-columns: 1fr;\n    }\n}"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Responsive Web Design with HTML5 and CSS",
        "author": "Ben Frain"
      }
    ],
    "practiceLinks": [
      {
        "title": "Flexbox Froggy - Learn Flexbox interactively",
        "url": "https://flexboxfroggy.com/"
      },
      {
        "title": "CSS Grid Garden",
        "url": "https://cssgridgarden.com/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State the main differences between CSS Flexbox (1D) and CSS Grid (2D). (2 Marks)",
        "What is the purpose of the `@media` rule in CSS? (2 Marks)",
        "How do CSS variables (`var(--name)`) benefit responsive stylesheet design? (2 Marks)"
      ],
      "sixMarks": [
        "Design a 3-column card grid using CSS Grid that automatically adjusts to a 1-column layout on screen widths under 768px. (6 Marks)",
        "Explain CSS transitions vs @keyframes animations with code examples. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Modern CSS Layout Engines & Responsive Design. Detail Flexbox container/item properties (justify-content, align-items, flex-grow), CSS Grid track definitions (fr, minmax, auto-fit), media query viewport strategies, and modern CSS animation techniques. (10 Marks)"
      ]
    }
  },
  {
    "title": "JavaScript Programming",
    "slug": "web-tech-lab-javascript-programming",
    "order": 5,
    "estimatedHours": 6,
    "difficulty": "Intermediate",
    "description": "Learn core JavaScript syntax: variables (let, const), data types, operators, conditionals, loops, functions, array methods, objects, ES6+ features, and error handling.",
    "subTopics": [
      "Introduction to JavaScript",
      "Variables and Data Types",
      "Operators",
      "Conditional Statements",
      "Loops",
      "Functions",
      "Arrays",
      "Objects",
      "Error Handling",
      "Practical: Calculator",
      "Practical: Form Validation",
      "Practical: Interactive Web Pages"
    ],
    "prerequisiteTitles": [
      "Advanced CSS and Responsive Design"
    ],
    "learningObjectives": [
      "Master ES6+ JavaScript variables, scope (block vs function), and data structures.",
      "Utilize higher-order array methods (`map`, `filter`, `reduce`, `forEach`).",
      "Implement form validation and error handling using try-catch blocks."
    ],
    "notes": [
      {
        "title": "JavaScript Fundamentals, ES6 Syntax & Form Validation Logic",
        "content": "EXPERIMENT 5: JAVASCRIPT PROGRAMMING & FORM VALIDATOR\n\n// ES6 Syntax, Array Processing & Functions\nconst students = [\n    { id: 101, name: \"Alice\", score: 85 },\n    { id: 102, name: \"Bob\", score: 45 },\n    { id: 103, name: \"Charlie\", score: 92 }\n];\n\n// Higher Order Array Methods\nconst passedStudents = students\n    .filter(student => student.score >= 50)\n    .map(student => ({ ...student, status: \"PASSED\" }));\n\nconsole.log(\"Passed Students:\", passedStudents);\n\n// Interactive Form Validation Function\nfunction validateRegistrationForm(formData) {\n    try {\n        const { username, email, age } = formData;\n\n        if (!username || username.trim().length < 3) {\n            throw new Error(\"Validation Error: Name must be at least 3 characters long.\");\n        }\n        \n        const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n        if (!emailRegex.test(email)) {\n            throw new Error(\"Validation Error: Please enter a valid email address.\");\n        }\n\n        if (isNaN(age) || age < 18 || age > 100) {\n            throw new Error(\"Validation Error: Age must be between 18 and 100.\");\n        }\n\n        return { success: true, message: \"Form validated successfully!\" };\n    } catch (error) {\n        return { success: false, message: error.message };\n    } finally {\n        console.log(\"Validation check completed.\");\n    }\n}\n\n// Test Execution\nconst result = validateRegistrationForm({ username: \"John\", email: \"john@tech.com\", age: 22 });\nconsole.log(result);"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Eloquent JavaScript",
        "author": "Marijn Haverbeke"
      },
      {
        "title": "You Don't Know JS Yet",
        "author": "Kyle Simpson"
      }
    ],
    "practiceLinks": [
      {
        "title": "JavaScript.info - The Modern JavaScript Tutorial",
        "url": "https://javascript.info/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain the difference between `var`, `let`, and `const` in JavaScript. (2 Marks)",
        "What is the difference between `==` and `===` operators? (2 Marks)",
        "Explain higher-order functions in JavaScript with an example. (2 Marks)"
      ],
      "sixMarks": [
        "Write a JavaScript function to perform client-side validation for an email, password (min 8 chars with special char), and phone number. (6 Marks)",
        "Explain array higher-order methods: `map()`, `filter()`, and `reduce()` with code snippets. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on JavaScript Execution & Fundamentals. Detail JS engines (V8), call stack, event loop, primitive vs reference types, closures, scope chain, ES6 arrow functions, destructuring, and error handling pattern. (10 Marks)"
      ]
    }
  },
  {
    "title": "JavaScript DOM Manipulation",
    "slug": "web-tech-lab-javascript-dom-manipulation",
    "order": 6,
    "estimatedHours": 6,
    "difficulty": "Intermediate",
    "description": "Learn to dynamically manipulate HTML elements, styles, content, and dynamic components using JavaScript DOM selecting methods, event listeners, and event bubbling.",
    "subTopics": [
      "Document Object Model (DOM)",
      "Selecting HTML Elements",
      "Changing HTML Content",
      "Changing CSS with JavaScript",
      "Event Handling",
      "Event Listeners",
      "Creating Dynamic Elements",
      "Practical: To-Do List",
      "Practical: Dynamic Form",
      "Practical: Interactive Components"
    ],
    "prerequisiteTitles": [
      "JavaScript Programming"
    ],
    "learningObjectives": [
      "Select and manipulate DOM tree nodes using `querySelector`, `getElementById`, and `createElement`.",
      "Attach event listeners (`click`, `submit`, `input`, `keydown`) to implement interactivity.",
      "Build a complete dynamic Interactive To-Do List web app."
    ],
    "notes": [
      {
        "title": "Dynamic DOM Manipulation & Interactive To-Do List Application",
        "content": "EXPERIMENT 6: DYNAMIC INTERACTIVE TO-DO LIST APPLICATION\n\n// HTML Structure assumed:\n// <input id=\"taskInput\" placeholder=\"Enter task...\">\n// <button id=\"addTaskBtn\">Add Task</button>\n// <ul id=\"taskList\"></ul>\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    const taskInput = document.getElementById('taskInput');\n    const addTaskBtn = document.getElementById('addTaskBtn');\n    const taskList = document.getElementById('taskList');\n\n    // Add New Task Event\n    addTaskBtn.addEventListener('click', () => {\n        const taskText = taskInput.value.trim();\n        if (taskText === '') {\n            alert('Please enter a valid task!');\n            return;\n        }\n\n        // Create LI Element dynamically\n        const li = document.createElement('li');\n        li.className = 'task-item';\n        \n        const span = document.createElement('span');\n        span.textContent = taskText;\n        \n        // Toggle Completed Status\n        span.addEventListener('click', () => {\n            span.classList.toggle('completed');\n        });\n\n        // Delete Button\n        const deleteBtn = document.createElement('button');\n        deleteBtn.textContent = 'Delete';\n        deleteBtn.style.marginLeft = '10px';\n        deleteBtn.addEventListener('click', (e) => {\n            e.stopPropagation();\n            taskList.removeChild(li);\n        });\n\n        li.appendChild(span);\n        li.appendChild(deleteBtn);\n        taskList.appendChild(li);\n\n        taskInput.value = '';\n    });\n});"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "DOM Scripting: Web Design with JavaScript and the Document Object Model",
        "author": "Jeremy Keith"
      }
    ],
    "practiceLinks": [
      {
        "title": "MDN - Introduction to the DOM",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is the DOM (Document Object Model) in web browsers? (2 Marks)",
        "Explain event bubbling vs event capturing in JavaScript. (2 Marks)",
        "State the difference between `element.innerHTML` and `element.textContent`. (2 Marks)"
      ],
      "sixMarks": [
        "Write JavaScript code to dynamically construct a HTML table from an array of JSON student objects and append it to the document body. (6 Marks)",
        "Explain event delegation in JavaScript and why it is useful for dynamically generated elements. (6 Marks)"
      ],
      "longAnswer": [
        "Build a complete functional Interactive To-Do List Application using HTML, CSS, and DOM JavaScript. Include dynamic element creation, event handlers for marking tasks completed, task deletion, and clearing all tasks. (10 Marks)"
      ]
    }
  },
  {
    "title": "Client-Side Web Development",
    "slug": "web-tech-lab-client-side-web-development",
    "order": 7,
    "estimatedHours": 6,
    "difficulty": "Intermediate",
    "description": "Master client-side web programming: persistent browser storage (LocalStorage, SessionStorage, Cookies), JSON parsing, asynchronous JS (`Promises`, `async/await`), and Fetch API integration.",
    "subTopics": [
      "Client-Side Programming",
      "Browser Storage (Local Storage, Session Storage)",
      "Cookies",
      "JSON Handling",
      "Fetch API",
      "AJAX Basics",
      "Asynchronous JavaScript",
      "Practical: API Data Fetching App",
      "Practical: Weather App"
    ],
    "prerequisiteTitles": [
      "JavaScript DOM Manipulation"
    ],
    "learningObjectives": [
      "Persist client application state across sessions using Browser `localStorage` and `sessionStorage`.",
      "Execute asynchronous HTTP requests using `fetch()` and ES6 `async/await` syntax.",
      "Parse and process JSON data returned from third-party REST API services."
    ],
    "notes": [
      {
        "title": "Browser Storage & Asynchronous Fetch API Weather Application",
        "content": "EXPERIMENT 7: ASYNCHRONOUS FETCH API & LOCAL STORAGE APP\n\n// 1. Browser LocalStorage Utility Functions\nconst StorageManager = {\n    saveSearchHistory(city) {\n        let history = JSON.parse(localStorage.getItem('weatherHistory')) || [];\n        if (!history.includes(city)) {\n            history.push(city);\n            localStorage.setItem('weatherHistory', JSON.stringify(history));\n        }\n    },\n    getHistory() {\n        return JSON.parse(localStorage.getItem('weatherHistory')) || [];\n    }\n};\n\n// 2. Asynchronous API Data Fetching Function\nasync function fetchWeatherData(city) {\n    const apiKey = 'DEMO_KEY';\n    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;\n\n    try {\n        console.log(`Fetching weather data for ${city}...`);\n        const response = await fetch(apiUrl);\n\n        if (!response.ok) {\n            throw new Error(`HTTP Error! Status: ${response.status}`);\n        }\n\n        const data = await response.json();\n        \n        // Save successfully fetched city to LocalStorage\n        StorageManager.saveSearchHistory(city);\n\n        return {\n            city: data.name,\n            temp: data.main.temp,\n            condition: data.weather[0].description,\n            humidity: data.main.humidity\n        };\n    } catch (error) {\n        console.error(\"Failed to fetch weather:\", error.message);\n        return null;\n    }\n}\n\n// 3. Execution Example\nfetchWeatherData(\"London\").then(weather => {\n    if (weather) {\n        console.log(`Current temperature in ${weather.city}: ${weather.temp}°C (${weather.condition})`);\n    }\n});"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "JavaScript: The Definitive Guide",
        "author": "David Flanagan"
      }
    ],
    "practiceLinks": [
      {
        "title": "MDN - Fetch API Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between `localStorage`, `sessionStorage`, and `Cookies`. (2 Marks)",
        "What is JSON and why is `JSON.stringify()` / `JSON.parse()` required? (2 Marks)",
        "Explain JavaScript Promises and its three states (Pending, Fulfilled, Rejected). (2 Marks)"
      ],
      "sixMarks": [
        "Write an async/await JavaScript function that fetches user data from `https://jsonplaceholder.typicode.com/users` and renders names in an HTML list. (6 Marks)",
        "Explain AJAX architecture and how modern Fetch API replaced XMLHttpRequest. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Asynchronous Client-Side Programming. Detail Event Loop, Microtask vs Macrotask queues, Promises chaining, Async/Await syntax, CORS policies, and LocalStorage data persistence. (10 Marks)"
      ]
    }
  },
  {
    "title": "Frontend Frameworks Introduction",
    "slug": "web-tech-lab-frontend-frameworks-introduction",
    "order": 8,
    "estimatedHours": 6,
    "difficulty": "Intermediate",
    "description": "Introduction to component-based frontend architecture using React.js: JSX syntax, components, props, state management (`useState`), side effects (`useEffect`), and basic routing.",
    "subTopics": [
      "Introduction to Frontend Frameworks",
      "React.js Basics",
      "Components",
      "Props",
      "State Management Basics",
      "Hooks Introduction",
      "Routing Basics",
      "Component-Based Development",
      "Practical: React Portfolio",
      "Practical: React CRUD App"
    ],
    "prerequisiteTitles": [
      "Client-Side Web Development"
    ],
    "learningObjectives": [
      "Understand component-based web UI architecture and JSX syntax.",
      "Manage component internal state with React `useState` hook and pass data via `props`.",
      "Handle side-effects and API lifecycle fetching using React `useEffect` hook."
    ],
    "notes": [
      {
        "title": "React Component Architecture, Hooks & CRUD App State",
        "content": "EXPERIMENT 8: REACT.JS COMPONENT BASED CRUD APPLICATION\n\nimport React, { useState, useEffect } from 'react';\n\n// Sub-component receiving props\nfunction TaskItem({ task, onToggle, onDelete }) {\n    return (\n        <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>\n            <span onClick={() => onToggle(task.id)} style={{ cursor: 'pointer' }}>\n                {task.title}\n            </span>\n            <button onClick={() => onDelete(task.id)} style={{ marginLeft: '10px' }}>Delete</button>\n        </li>\n    );\n}\n\n// Main Parent Component\nexport default function TaskApp() {\n    const [tasks, setTasks] = useState([\n        { id: 1, title: 'Learn React Basics', completed: false },\n        { id: 2, title: 'Build React CRUD App', completed: true }\n    ]);\n    const [input, setInput] = useState('');\n\n    useEffect(() => {\n        document.title = `Tasks Pending: ${tasks.filter(t => !t.completed).length}`;\n    }, [tasks]);\n\n    const addTask = (e) => {\n        e.preventDefault();\n        if (!input.trim()) return;\n        const newTask = { id: Date.now(), title: input, completed: false };\n        setTasks([...tasks, newTask]);\n        setInput('');\n    };\n\n    const toggleTask = (id) => {\n        setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));\n    };\n\n    const deleteTask = (id) => {\n        setTasks(tasks.filter(t => t.id !== id));\n    };\n\n    return (\n        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>\n            <h2>React Task Manager</h2>\n            <form onSubmit={addTask}>\n                <input value={input} onChange={(e) => setInput(e.target.value)} placeholder=\"Add new task...\" />\n                <button type=\"submit\">Add Task</button>\n            </form>\n            <ul>\n                {tasks.map(task => (\n                    <TaskItem key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />\n                ))}\n            </ul>\n        </div>\n    );\n}"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Learning React: Modern Patterns for Developing React Apps",
        "author": "Alex Banks, Eve Porcello"
      }
    ],
    "practiceLinks": [
      {
        "title": "React Official Documentation",
        "url": "https://react.dev/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is JSX in React and how does Virtual DOM improve UI performance? (2 Marks)",
        "Explain the difference between `props` and `state` in React components. (2 Marks)",
        "What is the purpose of the `useEffect` hook in React? (2 Marks)"
      ],
      "sixMarks": [
        "Build a functional React counter component with Increment, Decrement, and Reset state handlers. (6 Marks)",
        "Explain single-page application (SPA) routing using React Router DOM (`BrowserRouter`, `Routes`, `Route`, `Link`). (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on React.js Frontend Architecture. Detail Virtual DOM reconciliation, component life cycle, React Hooks (`useState`, `useEffect`, `useContext`), state immutability, and building modular component trees. (10 Marks)"
      ]
    }
  },
  {
    "title": "Backend Web Development Basics",
    "slug": "web-tech-lab-backend-web-development-basics",
    "order": 9,
    "estimatedHours": 6,
    "difficulty": "Intermediate",
    "description": "Introduction to server-side programming using Node.js and Express.js framework: creating servers, RESTful API endpoint routing (GET, POST, PUT, DELETE), JSON middleware, and API testing.",
    "subTopics": [
      "Introduction to Backend",
      "Server-Side Programming",
      "Node.js Introduction",
      "Express.js Basics",
      "REST API Concepts",
      "HTTP Methods (GET/POST/PUT/DELETE)",
      "API Testing",
      "Practical: Create REST API",
      "Practical: Build Backend Services"
    ],
    "prerequisiteTitles": [
      "Frontend Frameworks Introduction"
    ],
    "learningObjectives": [
      "Understand Node.js event-driven non-blocking I/O architecture.",
      "Build modular Express.js web servers with custom middleware and routing.",
      "Implement complete RESTful API endpoints adhering to standard HTTP methods and status codes."
    ],
    "notes": [
      {
        "title": "Node.js & Express.js REST API Server Implementation",
        "content": "EXPERIMENT 9: BUILDING A RESTful API SERVER WITH EXPRESS.JS\n\nconst express = require('express');\nconst app = express();\nconst PORT = 5000;\n\n// Middleware to parse incoming JSON payloads\napp.use(express.json());\n\n// In-Memory Data Store\nlet products = [\n    { id: 1, name: \"Laptop\", price: 999.99 },\n    { id: 2, name: \"Smartphone\", price: 499.99 }\n];\n\n// GET: Retrieve all products\napp.get('/api/products', (req, res) => {\n    res.status(200).json({ success: true, count: products.length, data: products });\n});\n\n// GET: Retrieve single product by ID\napp.get('/api/products/:id', (req, res) => {\n    const product = products.find(p => p.id === parseInt(req.params.id));\n    if (!product) {\n        return res.status(404).json({ success: false, error: \"Product not found\" });\n    }\n    res.status(200).json({ success: true, data: product });\n});\n\n// POST: Create a new product\napp.post('/api/products', (req, res) => {\n    const { name, price } = req.body;\n    if (!name || !price) {\n        return res.status(400).json({ success: false, error: \"Please provide name and price\" });\n    }\n    const newProduct = { id: products.length + 1, name, price };\n    products.push(newProduct);\n    res.status(201).json({ success: true, data: newProduct });\n});\n\n// DELETE: Remove product by ID\napp.delete('/api/products/:id', (req, res) => {\n    products = products.filter(p => p.id !== parseInt(req.params.id));\n    res.status(200).json({ success: true, message: \"Product removed\" });\n});\n\napp.listen(PORT, () => {\n    console.log(`Express REST API running at http://localhost:${PORT}`);\n});"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Node.js Web Development",
        "author": "David Herron"
      }
    ],
    "practiceLinks": [
      {
        "title": "Express.js Official Guide",
        "url": "https://expressjs.com/en/starter/installing.html"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is Node.js and how does non-blocking event-driven architecture work? (2 Marks)",
        "Define REST API and list four HTTP verbs with their standard functions. (2 Marks)",
        "State the role of middleware functions in Express.js. (2 Marks)"
      ],
      "sixMarks": [
        "Write Express.js code to create GET, POST, and DELETE HTTP endpoints for a Student record management API. (6 Marks)",
        "Explain HTTP response status codes: 200 OK, 201 Created, 400 Bad Request, 404 Not Found, 500 Internal Error. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Server-Side Web Development with Express.js. Detail Node.js V8 execution engine, Event Loop phases, middleware pipeline processing, REST architecture principles, CORS headers, and API testing using Postman/Thunder Client. (10 Marks)"
      ]
    }
  },
  {
    "title": "Database Integration",
    "slug": "web-tech-lab-database-integration",
    "order": 10,
    "estimatedHours": 6,
    "difficulty": "Intermediate",
    "description": "Learn to integrate databases with Node.js/Express web backends: relational (SQL) and NoSQL (MongoDB/Mongoose), CRUD data persistence operations, and data modeling.",
    "subTopics": [
      "Databases in Web Apps",
      "SQL Database Connectivity",
      "MongoDB Basics",
      "CRUD Operations",
      "Data Modeling",
      "Database Integration with Backend",
      "Practical: User Registration System",
      "Practical: Student Management System"
    ],
    "prerequisiteTitles": [
      "Backend Web Development Basics"
    ],
    "learningObjectives": [
      "Connect Express.js servers to MongoDB databases using Mongoose ODM.",
      "Define schema data models with data type validations and default properties.",
      "Perform asynchronous database CRUD (Create, Read, Update, Delete) operations."
    ],
    "notes": [
      {
        "title": "MongoDB & Mongoose Schema Integration in Express Backend",
        "content": "EXPERIMENT 10: MONGOOSE DATABASE INTEGRATION FOR STUDENT MANAGEMENT\n\nconst express = require('express');\nconst mongoose = require('mongoose');\n\nconst app = express();\napp.use(express.json());\n\n// 1. MongoDB Database Connection\nconst MONGO_URI = 'mongodb://127.0.0.1:27017/student_db';\nmongoose.connect(MONGO_URI)\n    .then(() => console.log(\"Connected successfully to MongoDB\"))\n    .catch(err => console.error(\"Database connection error:\", err));\n\n// 2. Define Mongoose Schema & Model\nconst studentSchema = new mongoose.Schema({\n    rollNo: { type: String, required: true, unique: true },\n    name: { type: String, required: true },\n    department: { type: String, default: \"Computer Science\" },\n    gpa: { type: Number, min: 0, max: 10 },\n    createdAt: { type: Date, default: Date.now }\n});\n\nconst Student = mongoose.model('Student', studentSchema);\n\n// 3. Database Controller Endpoints\n// Create Student (Insert)\napp.post('/api/students', async (req, res) => {\n    try {\n        const newStudent = await Student.create(req.body);\n        res.status(201).json({ success: true, data: newStudent });\n    } catch (error) {\n        res.status(400).json({ success: false, error: error.message });\n    }\n});\n\n// Read All Students (Query)\napp.get('/api/students', async (req, res) => {\n    try {\n        const students = await Student.find();\n        res.status(200).json({ success: true, data: students });\n    } catch (error) {\n        res.status(500).json({ success: false, error: error.message });\n    }\n});\n\napp.listen(5000, () => console.log(\"Server running on port 5000\"));"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "MongoDB: The Definitive Guide",
        "author": "Shannon Bradshaw, Eoin Brazil"
      }
    ],
    "practiceLinks": [
      {
        "title": "Mongoose ODM Documentation",
        "url": "https://mongoosejs.com/docs/guide.html"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain SQL relational databases vs NoSQL MongoDB document-based databases. (2 Marks)",
        "What is Mongoose ODM and what is the role of a Schema? (2 Marks)",
        "State the difference between `find()` and `findOne()` in Mongoose. (2 Marks)"
      ],
      "sixMarks": [
        "Write Mongoose database schema for a User entity (username, email, passwordHash, createdAt) with data validation rules. (6 Marks)",
        "Explain step-by-step how to handle asynchronous MongoDB CRUD queries inside Express route handlers using async/await and try/catch. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Database Integration in Web Applications. Detail SQL vs NoSQL models, connection pool management, Mongoose schema validation, indexes, aggregation pipelines, and database security practices. (10 Marks)"
      ]
    }
  },
  {
    "title": "Full Stack Web Application Development",
    "slug": "web-tech-lab-full-stack-web-application-development",
    "order": 11,
    "estimatedHours": 8,
    "difficulty": "Advanced",
    "description": "Integrate React frontend with Express/Node/MongoDB backend to construct full-stack MERN web applications: JWT authentication, protected routes, API state communication, and app architecture.",
    "subTopics": [
      "Frontend and Backend Integration",
      "API Communication",
      "Authentication Basics",
      "User Management",
      "Form Handling",
      "Application Architecture",
      "Projects: Online Learning Platform",
      "Projects: E-Commerce",
      "Projects: Blog",
      "Projects: Student Portal"
    ],
    "prerequisiteTitles": [
      "Database Integration"
    ],
    "learningObjectives": [
      "Architect end-to-end full stack web applications (MERN stack).",
      "Implement JSON Web Token (JWT) user authentication and password hashing with bcrypt.",
      "Connect React frontend state to Express API services via CORS-enabled HTTP headers."
    ],
    "notes": [
      {
        "title": "Full-Stack Auth Integration: Express JWT Server & React Client Fetch",
        "content": "EXPERIMENT 11: FULL STACK JWT AUTHENTICATION & API INTEGRATION\n\n// --- BACKEND: Express JWT Auth Route (server.js) ---\nconst express = require('express');\nconst jwt = require('jsonwebtoken');\nconst bcrypt = require('bcryptjs');\nconst app = express();\napp.use(express.json());\n\nconst JWT_SECRET = 'super_secret_jwt_key';\nconst users = []; // Mock User DB\n\napp.post('/api/auth/register', async (req, res) => {\n    const { email, password } = req.body;\n    const hashedPassword = await bcrypt.hash(password, 10);\n    users.push({ id: Date.now(), email, password: hashedPassword });\n    res.status(201).json({ message: \"User registered successfully\" });\n});\n\napp.post('/api/auth/login', async (req, res) => {\n    const { email, password } = req.body;\n    const user = users.find(u => u.email === email);\n    if (!user || !(await bcrypt.compare(password, user.password))) {\n        return res.status(401).json({ error: \"Invalid login credentials\" });\n    }\n    const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });\n    res.json({ token, message: \"Login successful\" });\n});\n\n// --- FRONTEND: React Login Component Handler ---\n// async function handleLogin(email, password) {\n//     const response = await fetch('/api/auth/login', {\n//         method: 'POST',\n//         headers: { 'Content-Type': 'application/json' },\n//         body: JSON.stringify({ email, password })\n//     });\n//     const data = await response.json();\n//     if (data.token) {\n//         localStorage.setItem('token', data.token);\n//         console.log(\"Logged in successfully!\");\n//     }\n// }"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "MERN Architecture and Development",
        "author": "Greg Lim"
      }
    ],
    "practiceLinks": [
      {
        "title": "JWT.io - JSON Web Token Introduction",
        "url": "https://jwt.io/introduction"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain how JWT (JSON Web Token) functions for stateless user authentication. (2 Marks)",
        "Why is password hashing with bcrypt essential before storing in databases? (2 Marks)",
        "What is CORS (Cross-Origin Resource Sharing) and why does it occur in Full Stack apps? (2 Marks)"
      ],
      "sixMarks": [
        "Explain step-by-step how React frontend communicates with Express backend REST API using fetch/axios and Authorization Bearer headers. (6 Marks)",
        "Describe Full Stack MERN Architecture detailing data flow from Client UI -> REST API Controller -> Mongoose ODM -> Database. (6 Marks)"
      ],
      "longAnswer": [
        "Architect a full-stack E-Commerce / Student Portal Web Application. Detail MongoDB schema design, Express REST routes for authentication & cart management, JWT authorization middleware, React state management, and CORS configuration. (10 Marks)"
      ]
    }
  },
  {
    "title": "Web Security Basics",
    "slug": "web-tech-lab-web-security-basics",
    "order": 12,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Learn web security essentials: Authentication & Authorization, password security, input sanitization, Cross-Site Scripting (XSS), SQL Injection defense, HTTPS SSL/TLS, and Helmet middleware.",
    "subTopics": [
      "Introduction to Web Security",
      "Authentication and Authorization",
      "Password Security",
      "Input Validation",
      "SQL Injection Basics",
      "XSS",
      "HTTPS Basics"
    ],
    "prerequisiteTitles": [
      "Full Stack Web Application Development"
    ],
    "learningObjectives": [
      "Identify common web security vulnerabilities (SQL Injection, XSS, CSRF).",
      "Sanitize client input and implement security middleware headers using Express Helmet.",
      "Enforce HTTPS, secure cookies, and password hashing standard security protocols."
    ],
    "notes": [
      {
        "title": "Web Vulnerabilities (XSS & SQL Injection) Defense Implementation",
        "content": "EXPERIMENT 12: WEB SECURITY HARDENING & INPUT SANITIZATION\n\nconst express = require('express');\nconst helmet = require('helmet');\nconst rateLimit = require('express-rate-limit');\nconst validator = require('validator');\n\nconst app = express();\n\n// 1. Secure HTTP Headers with Helmet\napp.use(helmet());\n\n// 2. Rate Limiting to prevent Brute-Force Denial of Service\nconst limiter = rateLimit({\n    windowMs: 15 * 60 * 1000, // 15 minutes\n    max: 100 // limit each IP to 100 requests per windowMs\n});\napp.use('/api/', limiter);\n\napp.use(express.json());\n\n// 3. XSS (Cross-Site Scripting) & Injection Prevention Middleware\nfunction sanitizeUserInput(req, res, next) {\n    if (req.body.comment) {\n        // Escape HTML tags to prevent execution of malicious script tags\n        req.body.comment = validator.escape(req.body.comment);\n    }\n    next();\n}\n\napp.post('/api/comments', sanitizeUserInput, (req, res) => {\n    console.log(\"Sanitized Comment:\", req.body.comment);\n    res.json({ success: true, data: req.body.comment });\n});\n\n// 4. Safe Parameterized SQL Query Example (Prevent SQL Injection)\n// BAD (Vulnerable to SQLi): \"SELECT * FROM users WHERE name = '\" + req.body.name + \"'\"\n// SAFE (Parameterized Query): db.query('SELECT * FROM users WHERE name = ?', [req.body.name]);"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "The Web Application Hacker's Handbook",
        "author": "Dafydd Stuttard, Marcus Pinto"
      }
    ],
    "practiceLinks": [
      {
        "title": "OWASP Top 10 Web Application Security Risks",
        "url": "https://owasp.org/www-project-top-ten/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define Cross-Site Scripting (XSS) and explain how input escaping prevents it. (2 Marks)",
        "What is SQL Injection and how do parameterized queries mitigate it? (2 Marks)",
        "Differentiate between Authentication (Who you are) and Authorization (What you can do). (2 Marks)"
      ],
      "sixMarks": [
        "Explain OWASP Top 10 vulnerabilities focusing on XSS, Broken Authentication, and Injection attacks with code mitigation strategies. (6 Marks)",
        "Explain HTTPS SSL/TLS handshake process and secure cookie flags (HttpOnly, Secure, SameSite). (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Web Security Engineering. Detail threat modeling, CSP (Content Security Policy) headers, CORS configurations, password hashing algorithms (bcrypt/argon2), JWT security risks, and rate-limiting against DoS attacks. (10 Marks)"
      ]
    }
  },
  {
    "title": "Web Application Testing",
    "slug": "web-tech-lab-web-application-testing",
    "order": 13,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Learn web testing methodologies: functional testing, UI testing, REST API automated testing with Jest and Supertest, browser compatibility, and performance auditing.",
    "subTopics": [
      "Introduction to Web Testing",
      "Functional Testing",
      "UI Testing",
      "API Testing",
      "Browser Compatibility Testing",
      "Performance Testing"
    ],
    "prerequisiteTitles": [
      "Web Security Basics"
    ],
    "learningObjectives": [
      "Write unit tests and integration tests for JavaScript backend and React frontend.",
      "Perform automated HTTP REST API testing using Jest and Supertest framework.",
      "Conduct performance, responsiveness, and browser compatibility audits."
    ],
    "notes": [
      {
        "title": "Automated API Unit & Integration Testing using Jest & Supertest",
        "content": "EXPERIMENT 13: AUTOMATED API TESTING WITH JEST AND SUPERTEST\n\n// server.js - Express API Module to Test\nconst express = require('express');\nconst app = express();\napp.use(express.json());\n\napp.get('/api/health', (req, res) => {\n    res.status(200).json({ status: 'OK', uptime: process.uptime() });\n});\n\napp.post('/api/math/add', (req, res) => {\n    const { a, b } = req.body;\n    if (typeof a !== 'number' || typeof b !== 'number') {\n        return res.status(400).json({ error: \"Invalid inputs\" });\n    }\n    res.status(200).json({ result: a + b });\n});\n\nmodule.exports = app;\n\n// --- api.test.js - Jest Automated Test Suite ---\nconst request = require('supertest');\nconst app = require('./server');\n\ndescribe('REST API Automated Test Suite', () => {\n    it('GET /api/health - should return HTTP 200 OK', async () => {\n        const response = await request(app).get('/api/health');\n        expect(response.statusCode).toBe(200);\n        expect(response.body.status).toBe('OK');\n    });\n\n    it('POST /api/math/add - should return correct sum', async () => {\n        const response = await request(app)\n            .post('/api/math/add')\n            .send({ a: 15, b: 25 });\n        expect(response.statusCode).toBe(200);\n        expect(response.body.result).toBe(400);\n    });\n});"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Testing JavaScript Applications",
        "author": "Lucas da Costa"
      }
    ],
    "practiceLinks": [
      {
        "title": "Jest Official Documentation",
        "url": "https://jestjs.io/docs/getting-started"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain Unit Testing vs Integration Testing vs End-to-End (E2E) testing. (2 Marks)",
        "State the role of Jest and Supertest in backend Node.js application testing. (2 Marks)",
        "What is performance auditing and what metrics does Lighthouse evaluate? (2 Marks)"
      ],
      "sixMarks": [
        "Write Jest unit test cases to verify a password validation function (length, special characters, uppercase). (6 Marks)",
        "Explain browser compatibility testing strategies and cross-browser CSS prefixing. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Web Testing Automation. Detail Test-Driven Development (TDD) workflow, writing automated API test suites with Supertest, UI component testing with React Testing Library, E2E testing with Cypress/Playwright, and Lighthouse performance optimization. (10 Marks)"
      ]
    }
  },
  {
    "title": "Web Deployment and Hosting",
    "slug": "web-tech-lab-web-deployment-and-hosting",
    "order": 14,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Learn web deployment techniques: static hosting (GitHub Pages, Vercel), backend server deployment (Render, AWS EC2), environment variables (.env), Nginx reverse proxy, and Docker containerization.",
    "subTopics": [
      "Introduction to Deployment",
      "Domain and Hosting",
      "Static Website Deployment",
      "Frontend Deployment",
      "Backend Deployment",
      "Cloud Hosting",
      "Environment Variables",
      "Practical: Deploy Web App"
    ],
    "prerequisiteTitles": [
      "Web Application Testing"
    ],
    "learningObjectives": [
      "Configure environment variables (`dotenv`) for development vs production environments.",
      "Deploy frontend single page apps to cloud platforms (Vercel/Netlify) and backend services to Render/AWS.",
      "Create Docker containers and configure Nginx reverse proxy server rules."
    ],
    "notes": [
      {
        "title": "Docker Containerization & Nginx Reverse Proxy Deployment",
        "content": "EXPERIMENT 14: DOCKER CONTAINERIZATION & NGINX REVERSE PROXY\n\n# 1. Dockerfile for Full Stack Node.js Web Application\nFROM node:18-alpine\n\n# Set working directory inside container\nWORKDIR /app\n\n# Copy package descriptors and install dependencies\nCOPY package*.json ./\nRUN npm install --production\n\n# Copy application source code\nCOPY . .\n\n# Expose container port\nEXPOSE 5000\n\n# Set environment variable & launch command\nENV NODE_ENV=production\nCMD [\"node\", \"server.js\"]\n\n# --- 2. Nginx Reverse Proxy Configuration (nginx.conf) ---\n# server {\n#     listen 80;\n#     server_name myapp.com;\n\n#     location / {\n#         proxy_pass http://localhost:3000; # React Frontend\n#     }\n\n#     location /api/ {\n#         proxy_pass http://localhost:5000; # Express Backend API\n#         proxy_http_version 1.1;\n#         proxy_set_header Upgrade $http_upgrade;\n#         proxy_set_header Connection 'upgrade';\n#         proxy_set_header Host $host;\n#     }\n# }"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Docker Deep Dive",
        "author": "Nigel Poulton"
      }
    ],
    "practiceLinks": [
      {
        "title": "Vercel Deployment Documentation",
        "url": "https://vercel.com/docs"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain the importance of `.env` environment variables during deployment. (2 Marks)",
        "What is a Reverse Proxy and how does Nginx function in front of Express servers? (2 Marks)",
        "Differentiate between Static Website Hosting and Dynamic Server Hosting. (2 Marks)"
      ],
      "sixMarks": [
        "Explain step-by-step procedure to containerize a Node.js Express app using Dockerfile and deploy to cloud hosting. (6 Marks)",
        "Describe Continuous Integration / Continuous Deployment (CI/CD) pipelines using GitHub Actions. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Web Application Deployment Architecture. Detail domain name DNS management (A Records, CNAME), SSL certificate installation with Let's Encrypt, environment configuration management, Docker containerization, and cloud deployment platforms. (10 Marks)"
      ]
    }
  },
  {
    "title": "Modern Web Development Tools",
    "slug": "web-tech-lab-modern-web-development-tools",
    "order": 15,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Master modern developer tools: Version control with Git & GitHub, npm package management, bundlers/build tools (Vite/Webpack), Postman API testing tools, and code formatting rules.",
    "subTopics": [
      "Git and GitHub",
      "npm Package Manager",
      "Build Tools",
      "Browser Extensions",
      "API Testing Tools",
      "Development Best Practices"
    ],
    "prerequisiteTitles": [
      "Web Deployment and Hosting"
    ],
    "learningObjectives": [
      "Master Git source code management (branching, merging, pull requests, rebase).",
      "Utilize npm scripts and modern build tooling (Vite, Babel, Webpack).",
      "Formulate production development best practices, ESLint linting, and formatting rules."
    ],
    "notes": [
      {
        "title": "Git Workflow Commands, npm Scripts & Vite Configuration",
        "content": "EXPERIMENT 15: GIT CLI WORKFLOW, NPM PACKAGES & VITE BUILD SETUP\n\n1. GIT VERSION CONTROL COMMAND WORKFLOW:\n# Initialize repository and create feature branch\ngit init\ngit checkout -b feature/auth-system\n\n# Stage changes and commit with conventional message\ngit add .\ngit commit -m \"feat: implement JWT user login endpoint\"\n\n# Remote repository sync\ngit remote add origin https://github.com/user/web-tech-lab.git\ngit push -u origin feature/auth-system\n\n2. NPM PACKAGE DEFINITION (package.json):\n{\n  \"name\": \"web-tech-lab-project\",\n  \"version\": \"1.0.0\",\n  \"scripts\": {\n    \"dev\": \"vite\",\n    \"build\": \"vite build\",\n    \"preview\": \"vite preview\",\n    \"lint\": \"eslint . --ext js,jsx\"\n  },\n  \"dependencies\": {\n    \"express\": \"^4.18.2\",\n    \"react\": \"^18.2.0\"\n  },\n  \"devDependencies\": {\n    \"@vitejs/plugin-react\": \"^4.0.0\",\n    \"vite\": \"^4.3.0\"\n  }\n}\n\n3. VITE CONFIGURATION (vite.config.js):\nimport { defineConfig } from 'vite';\nimport react from '@vitejs/plugin-react';\n\nexport default defineConfig({\n  plugins: [react()],\n  server: {\n    port: 3000,\n    proxy: {\n      '/api': 'http://localhost:5000'\n    }\n  }\n});"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Pro Git",
        "author": "Scott Chacon, Ben Straub"
      }
    ],
    "practiceLinks": [
      {
        "title": "Git Official Documentation",
        "url": "https://git-scm.com/doc"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain Git commands: `git clone`, `git branch`, `git merge`, `git pull`. (2 Marks)",
        "What is the role of package.json and package-lock.json in Node.js projects? (2 Marks)",
        "Explain the advantage of modern bundlers like Vite over older bundlers like Webpack. (2 Marks)"
      ],
      "sixMarks": [
        "Explain Git branching strategies (GitFlow) for team software development. (6 Marks)",
        "Describe code quality tools: ESLint for linting and Prettier for code formatting. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Modern Web Development Tooling. Detail Git internals, resolving merge conflicts, npm package resolution, Vite build optimizations, Hot Module Replacement (HMR), and automated CI testing. (10 Marks)"
      ]
    }
  },
  {
    "title": "Mini Projects and Capstone Development",
    "slug": "web-tech-lab-mini-projects-and-capstone-development",
    "order": 16,
    "estimatedHours": 8,
    "difficulty": "Advanced",
    "description": "Design and implement comprehensive full-stack capstone projects: Portfolio Website, Online Quiz Platform, Task Management App, Learning Management System, or E-Commerce Application.",
    "subTopics": [
      "Portfolio Website",
      "Online Quiz Platform",
      "Task Management App",
      "Learning Management System",
      "E-Commerce App",
      "Full Stack Web App"
    ],
    "prerequisiteTitles": [
      "Modern Web Development Tools"
    ],
    "learningObjectives": [
      "Synthesize all learned frontend and backend skills to build a production-grade full-stack project.",
      "Design clean database schemas, secure REST APIs, and dynamic responsive React component UIs.",
      "Deploy the final capstone web application with complete documentation and git history."
    ],
    "notes": [
      {
        "title": "Full-Stack Capstone Blueprint: Online Quiz & Learning Application",
        "content": "EXPERIMENT 16: CAPSTONE FULL-STACK WEB APPLICATION ARCHITECTURE\n\n// Capstone Architectural Specification: Online Quiz Platform\n// Stack: MongoDB, Express.js, React.js, Node.js (MERN)\n\n// 1. Database Schema Model (Quiz Model)\nconst mongoose = require('mongoose');\n\nconst quizSchema = new mongoose.Schema({\n    title: { type: String, required: true },\n    category: String,\n    questions: [{\n        questionText: String,\n        options: [String],\n        correctOptionIndex: Number\n    }],\n    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }\n});\n\nconst Quiz = mongoose.model('Quiz', quizSchema);\n\n// 2. React Quiz Execution Handler\n// function QuizRunner({ quizData }) {\n//     const [currentQ, setCurrentQ] = useState(0);\n//     const [score, setScore] = useState(0);\n//     const [finished, setFinished] = useState(false);\n\n//     const handleAnswer = (optionIdx) => {\n//         if (optionIdx === quizData.questions[currentQ].correctOptionIndex) {\n//             setScore(prev => prev + 1);\n//         }\n//         if (currentQ + 1 < quizData.questions.length) {\n//             setCurrentQ(prev => prev + 1);\n//         } else {\n//             setFinished(true);\n//         }\n//     };\n//     return finished ? <div>Score: {score}</div> : <div>{quizData.questions[currentQ].questionText}</div>;\n// }"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Full-Stack React Projects",
        "author": "Shama Hoque"
      }
    ],
    "practiceLinks": [
      {
        "title": "GitHub Web App Project Ideas",
        "url": "https://github.com/florinpop17/app-ideas"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State the main architectural layers of a Full Stack Capstone Web Application. (2 Marks)",
        "How do you plan responsive UI wireframes before writing frontend React code? (2 Marks)",
        "Why is README documentation crucial for capstone projects on GitHub? (2 Marks)"
      ],
      "sixMarks": [
        "Detail database schema design and API endpoint mapping for an Online Quiz / LMS Capstone App. (6 Marks)",
        "Explain testing and performance optimization strategies prior to final project deployment. (6 Marks)"
      ],
      "longAnswer": [
        "Write a complete Capstone Project Architecture Report for an E-Commerce / LMS Platform. Include System Requirements, ER Diagram database schema, REST API documentation table, React component hierarchy, Security implementation, and Cloud deployment strategy. (10 Marks)"
      ]
    }
  }
];
