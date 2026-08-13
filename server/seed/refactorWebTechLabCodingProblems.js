require('dotenv').config();
const connectDB = require('../config/db');
const Subject = require('../models/Subject');
const Topic = require('../models/Topic');
const CodingProblem = require('../models/CodingProblem');

const REFACTORED_WEB_TECH_PROBLEMS = {
  intro: [
    {
      title: "Create a Basic HTML Webpage",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML",
      placementImportance: "Essential",
      tags: ["HTML", "Web Basics"],
      description: "Build a semantic HTML page containing headings (h1-h3), paragraphs, links, images with alt text, and an ordered list."
    },
    {
      title: "Create a Personal Portfolio Page",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML",
      placementImportance: "Essential",
      tags: ["HTML", "Portfolio"],
      description: "Structure a personal bio webpage with About Me, Skills, Projects, and Contact Information sections."
    },
    {
      title: "Create an Interactive Webpage with HTML/CSS/JS",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web",
      placementImportance: "Essential",
      tags: ["HTML", "CSS", "JavaScript"],
      description: "Combine HTML markup, CSS styling, and a JavaScript event listener to toggle an alert or background theme on button click."
    },
    {
      title: "Build a Dynamic Greeting Webpage",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps",
      placementImportance: "Important",
      tags: ["HTML", "JavaScript", "DOM"],
      description: "Display 'Good Morning / Afternoon / Evening' based on the client's current local time."
    }
  ],
  htmlFundamentals: [
    {
      title: "User Registration Form",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Learn/Forms",
      placementImportance: "Essential",
      tags: ["HTML Forms", "Validation"],
      description: "Create a registration form with text, email, password, radio buttons (gender), checkboxes (interests), and a submit button."
    },
    {
      title: "User Login Form",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Learn/Forms",
      placementImportance: "Essential",
      tags: ["HTML Forms", "Authentication"],
      description: "Build a clean login form with email, password, 'Remember Me' checkbox, and required field validation attributes."
    },
    {
      title: "Student Profile Card Page",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Learn/HTML",
      placementImportance: "Essential",
      tags: ["HTML", "Semantic"],
      description: "Design a profile card featuring student avatar, department, roll number, bio, and social profile links."
    },
    {
      title: "Student Marks Table with Rowspan and Colspan",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables",
      placementImportance: "Essential",
      tags: ["HTML Tables", "Structure"],
      description: "Construct a structured HTML table with thead, tbody, tfoot, and use colspan and rowspan for subject totals."
    },
    {
      title: "College Timetable using HTML Tables",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables",
      placementImportance: "Important",
      tags: ["HTML Tables", "Grid"],
      description: "Format a weekly college class timetable spanning Monday through Friday with lunch breaks and lab blocks."
    },
    {
      title: "Semantic HTML Portfolio Structure",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Glossary/Semantics",
      placementImportance: "Essential",
      tags: ["HTML5", "Accessibility", "SEO"],
      description: "Use proper HTML5 elements (<header>, <nav>, <main>, <section>, <article>, <aside>, <footer>) without div soup."
    },
    {
      title: "HTML Navigation Menu",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Learn/HTML",
      placementImportance: "Essential",
      tags: ["HTML", "Navigation"],
      description: "Build an accessible unordered list navigation menu with anchor links and active page indicators."
    },
    {
      title: "Product Information Page",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Learn/HTML",
      placementImportance: "Important",
      tags: ["HTML", "E-Commerce"],
      description: "Create an e-commerce product showcase with item image, price badge, feature bullet points, and CTA button."
    }
  ],
  cssFundamentals: [
    {
      title: "CSS Box Model Demonstration",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model",
      placementImportance: "Essential",
      tags: ["CSS", "Box Model"],
      description: "Implement elements illustrating the effects of content, padding, border, and margin with box-sizing: border-box."
    },
    {
      title: "Center a Div (Flexbox & CSS Grid)",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout",
      placementImportance: "Essential",
      tags: ["CSS", "Centering", "Flexbox"],
      description: "Center a div horizontally and vertically inside a full-height container using both Flexbox and CSS Grid techniques."
    },
    {
      title: "Responsive Card Component with CSS",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Learn/CSS",
      placementImportance: "Essential",
      tags: ["CSS", "Cards", "Hover Effects"],
      description: "Style a modern UI card with border-radius, box-shadow, linear gradient, and smooth hover transition animations."
    },
    {
      title: "Sticky Navigation Bar with CSS",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout",
      placementImportance: "Essential",
      tags: ["CSS", "Navbar", "Positioning"],
      description: "Create a top navigation bar with position: sticky, backdrop-filter blur, logo, and interactive hover states."
    },
    {
      title: "User Profile Card with CSS",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Learn/CSS",
      placementImportance: "Important",
      tags: ["CSS", "Profile Card"],
      description: "Build an aesthetic user profile card with circular avatar clipping, stat counters, and follow button styling."
    },
    {
      title: "Product Card with Badge and Rating",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Learn/CSS",
      placementImportance: "Important",
      tags: ["CSS", "E-Commerce", "Cards"],
      description: "Style an e-commerce card with 'Sale' badge, star rating icons, price strike-through, and buy button."
    },
    {
      title: "Responsive CSS Grid Gallery",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids",
      placementImportance: "Essential",
      tags: ["CSS Grid", "Responsive"],
      description: "Create an image gallery using repeat(auto-fit, minmax(250px, 1fr)) with gap spacing."
    },
    {
      title: "Flexbox Layout Spacing and Alignment",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox",
      placementImportance: "Essential",
      tags: ["Flexbox", "Layout"],
      description: "Demonstrate justify-content (space-between, space-around), align-items, and flex-wrap across varied screen widths."
    }
  ],
  advancedCss: [
    {
      title: "Responsive Navbar with Mobile Hamburger Menu",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design",
      placementImportance: "Essential",
      tags: ["Responsive", "CSS", "Media Queries"],
      description: "Build a responsive navigation header that collapses into a hamburger toggle drawer on screens < 768px."
    },
    {
      title: "Responsive Landing Page Hero Section",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design",
      placementImportance: "Essential",
      tags: ["Responsive", "Hero Section", "Layout"],
      description: "Design a full-width hero banner with headline, call-to-action buttons, and side illustration adapting to mobile screens."
    },
    {
      title: "Responsive Auth Card with Glassmorphism",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Learn/CSS",
      placementImportance: "Important",
      tags: ["Glassmorphism", "CSS", "Responsive"],
      description: "Create a modern login/signup glassmorphism form card with backdrop-blur and responsive scaling."
    },
    {
      title: "Responsive Portfolio Layout with Media Queries",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design",
      placementImportance: "Essential",
      tags: ["Media Queries", "Portfolio", "Responsive"],
      description: "Build a multi-breakpoint portfolio layout with mobile (320px), tablet (768px), and desktop (1024px) adaptations."
    },
    {
      title: "Mobile-First Card Layout Architecture",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design",
      placementImportance: "Essential",
      tags: ["Mobile First", "CSS"],
      description: "Implement styles starting with default mobile layout and enhancing upwards via min-width media queries."
    },
    {
      title: "Flexbox Admin Dashboard Layout",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox",
      placementImportance: "Essential",
      tags: ["Flexbox", "Dashboard", "Layout"],
      description: "Construct a responsive app shell with collapsible sidebar navigation, top appbar, and scrollable content area."
    },
    {
      title: "CSS Grid Analytics Dashboard Grid",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids",
      placementImportance: "Essential",
      tags: ["CSS Grid", "Grid Areas", "Dashboard"],
      description: "Create a dashboard grid layout using grid-template-areas for metrics cards, chart containers, and activity feeds."
    }
  ],
  javascriptProgramming: [
    {
      title: "Reverse a String in JavaScript",
      difficulty: "Easy",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/reverse-string/",
      placementImportance: "Essential",
      tags: ["JavaScript", "String", "Two Pointers"]
    },
    {
      title: "Palindrome Check in JavaScript",
      difficulty: "Easy",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/valid-palindrome/",
      placementImportance: "Essential",
      tags: ["JavaScript", "String", "Palindrome"]
    },
    {
      title: "FizzBuzz Problem in JavaScript",
      difficulty: "Easy",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/fizz-buzz/",
      placementImportance: "Essential",
      tags: ["JavaScript", "Conditionals", "Math"]
    },
    {
      title: "Prime Number Check in JavaScript",
      difficulty: "Easy",
      platform: "GeeksforGeeks",
      problemUrl: "https://www.geeksforgeeks.org/problems/prime-number2314/1",
      placementImportance: "Essential",
      tags: ["JavaScript", "Math", "Primes"]
    },
    {
      title: "Factorial Calculation in JavaScript",
      difficulty: "Easy",
      platform: "GeeksforGeeks",
      problemUrl: "https://www.geeksforgeeks.org/problems/factorial5739/1",
      placementImportance: "Essential",
      tags: ["JavaScript", "Recursion", "Factorial"]
    },
    {
      title: "Fibonacci Sequence Generator in JavaScript",
      difficulty: "Easy",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/fibonacci-number/",
      placementImportance: "Essential",
      tags: ["JavaScript", "Fibonacci", "Arrays"]
    },
    {
      title: "Find Largest Number in an Array",
      difficulty: "Easy",
      platform: "GeeksforGeeks",
      problemUrl: "https://www.geeksforgeeks.org/problems/largest-element-in-array4009/1",
      placementImportance: "Essential",
      tags: ["JavaScript", "Arrays"]
    },
    {
      title: "Find Second Largest Number in an Array",
      difficulty: "Easy",
      platform: "GeeksforGeeks",
      problemUrl: "https://www.geeksforgeeks.org/problems/second-largest3735/1",
      placementImportance: "Essential",
      tags: ["JavaScript", "Arrays"]
    },
    {
      title: "Remove Duplicates from an Array in JavaScript",
      difficulty: "Easy",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
      placementImportance: "Essential",
      tags: ["JavaScript", "Arrays", "Set"]
    },
    {
      title: "Character Frequency Counter in String",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map",
      placementImportance: "Essential",
      tags: ["JavaScript", "Hash Map", "String"],
      description: "Write a function returning an object or Map counting occurrences of each character in a given string."
    },
    {
      title: "Valid Anagram Check in JavaScript",
      difficulty: "Easy",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/valid-anagram/",
      placementImportance: "Essential",
      tags: ["JavaScript", "String", "Hash Map"]
    },
    {
      title: "Array Sum and Average Calculator",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce",
      placementImportance: "Essential",
      tags: ["JavaScript", "Array Methods", "Reduce"],
      description: "Compute sum and average of numerical elements in an array using Array.prototype.reduce."
    },
    {
      title: "Find Missing Number in Array",
      difficulty: "Easy",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/missing-number/",
      placementImportance: "Essential",
      tags: ["JavaScript", "Arrays", "Math"]
    },
    {
      title: "Sort an Array using JavaScript Methods",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort",
      placementImportance: "Essential",
      tags: ["JavaScript", "Sorting"],
      description: "Sort an array of numbers and strings in ascending and descending order using custom comparator callbacks."
    },
    {
      title: "JavaScript Simple Calculator Function",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash",
      placementImportance: "Essential",
      tags: ["JavaScript", "Functions"],
      description: "Implement a calculate(a, b, operation) function supporting addition, subtraction, multiplication, and division with error checks."
    },
    {
      title: "Temperature Converter (Celsius & Fahrenheit)",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript",
      placementImportance: "Important",
      tags: ["JavaScript", "Math"],
      description: "Implement conversion formulas between Celsius and Fahrenheit with rounded decimal precision."
    }
  ],
  domManipulation: [
    {
      title: "Counter Application with DOM Manipulation",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents",
      placementImportance: "Essential",
      tags: ["DOM", "Events", "Counter"],
      description: "Build an interactive counter with increment (+), decrement (-), and reset (0) buttons updating the DOM."
    },
    {
      title: "Todo List Application (Add, Check, Delete)",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents",
      placementImportance: "Essential",
      tags: ["DOM", "Todo App", "CRUD"],
      description: "Implement a todo app adding list items from input, toggling completed status on click, and removing items via delete button."
    },
    {
      title: "Digital Clock Application",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Web/API/setInterval",
      placementImportance: "Essential",
      tags: ["DOM", "Timers", "Date"],
      description: "Create a live digital clock with HH:MM:SS AM/PM updating every 1000ms using setInterval."
    },
    {
      title: "Stopwatch Application with Laps",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Web/API/setInterval",
      placementImportance: "Important",
      tags: ["DOM", "Stopwatch", "Timers"],
      description: "Build a stopwatch supporting Start, Pause, Reset, and Lap recording with millisecond precision."
    },
    {
      title: "Client-Side Form Validation in DOM",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation",
      placementImportance: "Essential",
      tags: ["DOM", "Form Validation"],
      description: "Validate username, email format, and matching passwords on form submit with real-time error messages."
    },
    {
      title: "Dynamic Table Generator from JSON",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement",
      placementImportance: "Essential",
      tags: ["DOM", "Tables", "JSON"],
      description: "Dynamically construct and append HTML table rows and cells from an array of student JavaScript objects."
    },
    {
      title: "Real-Time Search Filter in DOM",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event",
      placementImportance: "Essential",
      tags: ["DOM", "Search Filter"],
      description: "Filter an HTML list or table in real time as the user types into a search input."
    },
    {
      title: "Live Character Counter for Textarea",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event",
      placementImportance: "Important",
      tags: ["DOM", "Textarea", "Input Event"],
      description: "Track characters typed in a textarea and display 'X / 200 remaining', warning when limit is exceeded."
    },
    {
      title: "Dark / Light Mode Theme Switcher",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",
      placementImportance: "Essential",
      tags: ["DOM", "Dark Mode", "LocalStorage"],
      description: "Toggle theme classes on document.body and persist user choice in browser localStorage."
    },
    {
      title: "Dynamic Shopping Cart with DOM",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents",
      placementImportance: "Essential",
      tags: ["DOM", "Shopping Cart", "E-Commerce"],
      description: "Add items to cart, dynamically update quantities, remove items, and re-calculate grand total."
    }
  ],
  clientSideDev: [
    {
      title: "Fetch API Data & Display Cards",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
      placementImportance: "Essential",
      tags: ["Fetch API", "Async/Await", "REST"],
      description: "Fetch user profiles from https://jsonplaceholder.typicode.com/users and render responsive profile cards in the DOM."
    },
    {
      title: "Search API Application with Debouncing",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
      placementImportance: "Essential",
      tags: ["Debounce", "Fetch API", "Search"],
      description: "Implement a search input that debounces API fetch requests by 300ms to prevent excessive network calls."
    },
    {
      title: "Weather Dashboard Application",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
      placementImportance: "Essential",
      tags: ["Weather API", "Async/Await", "Fetch"],
      description: "Fetch and display temperature, humidity, wind speed, and weather icons for a searched city using a public weather API."
    },
    {
      title: "Client-Side Pagination Component",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice",
      placementImportance: "Essential",
      tags: ["Pagination", "Array Methods", "UI"],
      description: "Split an array of 100 items into pages of 10 with Next, Previous, and numbered page navigation buttons."
    },
    {
      title: "Client-Side Form Validation with Regex Rules",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions",
      placementImportance: "Essential",
      tags: ["Regex", "Validation", "Forms"],
      description: "Enforce phone numbers (10 digits), alphanumeric passwords, and postal codes using JavaScript regular expressions."
    },
    {
      title: "LocalStorage Persistent Todo App",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",
      placementImportance: "Essential",
      tags: ["LocalStorage", "Persistence", "JSON"],
      description: "Persist todos across browser refreshes by serializing items with JSON.stringify and JSON.parse."
    },
    {
      title: "Interactive Multiple-Choice Quiz Application",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript",
      placementImportance: "Essential",
      tags: ["Quiz App", "State", "DOM"],
      description: "Create a 5-question quiz showing progress bar, timer per question, immediate feedback, and final score summary."
    },
    {
      title: "Interactive Product Filter (Category, Price, Sort)",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter",
      placementImportance: "Essential",
      tags: ["Filtering", "Sorting", "E-Commerce"],
      description: "Filter products simultaneously by category checkbox, maximum price range slider, and sort by rating/price."
    }
  ],
  frontendFrameworks: [
    {
      title: "React Counter Component (useState)",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://react.dev/learn/state-a-components-memory",
      placementImportance: "Essential",
      tags: ["React", "useState", "Hooks"],
      description: "Build a counter component managing count state with increment, decrement, and reset buttons."
    },
    {
      title: "React Todo List Application",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://react.dev/learn/rendering-lists",
      placementImportance: "Essential",
      tags: ["React", "State", "Lists"],
      description: "Manage a list of todos with add, toggle completion, and delete actions using React state."
    },
    {
      title: "React Controlled Form with Validation",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://react.dev/reference/react-dom/components/input",
      placementImportance: "Essential",
      tags: ["React", "Controlled Components", "Forms"],
      description: "Build a controlled login form with state binding on inputs and client validation feedback."
    },
    {
      title: "React Real-Time Search Filter",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://react.dev/learn/rendering-lists",
      placementImportance: "Essential",
      tags: ["React", "Search", "Filtering"],
      description: "Filter a list of items based on controlled search input state using Array.prototype.filter."
    },
    {
      title: "React Product List & Card Components (Props)",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://react.dev/learn/passing-props-to-a-component",
      placementImportance: "Essential",
      tags: ["React", "Props", "Components"],
      description: "Pass product details via props to reusable ProductCard components and render in a responsive grid."
    },
    {
      title: "React API Fetch with useEffect",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://react.dev/learn/synchronizing-with-effects",
      placementImportance: "Essential",
      tags: ["React", "useEffect", "Async API"],
      description: "Fetch API data inside useEffect, managing loading, data, and error state transitions."
    },
    {
      title: "React Router Navigation Setup",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://reactrouter.com/en/main",
      placementImportance: "Essential",
      tags: ["React Router", "SPA", "Navigation"],
      description: "Configure multi-page client routing with BrowserRouter, Routes, Route, Link, and NavLink."
    },
    {
      title: "React Authentication State & Protected Routes",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://react.dev/learn/conditional-rendering",
      placementImportance: "Essential",
      tags: ["React", "Auth", "Context"],
      description: "Implement AuthContext providing user state, login/logout functions, and redirecting unauthorized users."
    },
    {
      title: "React Analytics Dashboard Widgets",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://react.dev/learn",
      placementImportance: "Important",
      tags: ["React", "Dashboard", "Components"],
      description: "Assemble a dashboard layout featuring metrics cards, status indicators, and collapsible side drawer."
    },
    {
      title: "React Full CRUD Interface",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://react.dev/learn",
      placementImportance: "Essential",
      tags: ["React", "CRUD", "State Management"],
      description: "Implement modal forms to Create, Read, Edit (Update), and Delete items with live state updates."
    }
  ],
  backendWebDev: [
    {
      title: "Basic Node.js HTTP Server",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs",
      placementImportance: "Essential",
      tags: ["Node.js", "HTTP", "Backend"],
      description: "Create an HTTP server with http.createServer responding with JSON and appropriate Content-Type headers."
    },
    {
      title: "Express.js Hello World Server",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://expressjs.com/en/starter/hello-world.html",
      placementImportance: "Essential",
      tags: ["Express", "Node.js", "REST"],
      description: "Initialize an Express application, setup GET / route returning JSON, and listen on PORT 5000."
    },
    {
      title: "Express.js RESTful API Routes",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://expressjs.com/en/guide/routing.html",
      placementImportance: "Essential",
      tags: ["Express", "REST", "Routing"],
      description: "Implement GET /api/items, GET /api/items/:id, POST /api/items, PUT /api/items/:id, and DELETE /api/items/:id."
    },
    {
      title: "In-Memory CRUD REST API",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://expressjs.com/en/starter/basic-routing.html",
      placementImportance: "Essential",
      tags: ["Express", "CRUD", "REST"],
      description: "Build an API performing CRUD operations on an array of student objects with unique ID generation."
    },
    {
      title: "Custom Express Middleware (Logger & Timer)",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://expressjs.com/en/guide/using-middleware.html",
      placementImportance: "Essential",
      tags: ["Express", "Middleware"],
      description: "Write middleware logging incoming request METHOD, URL, timestamp, and duration using next()."
    },
    {
      title: "Request Body Validation Middleware",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://expressjs.com/en/guide/using-middleware.html",
      placementImportance: "Essential",
      tags: ["Express", "Validation"],
      description: "Validate required fields and data types in req.body, returning 400 Bad Request on malformed inputs."
    },
    {
      title: "Centralized Error Handling Middleware",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://expressjs.com/en/guide/error-handling.html",
      placementImportance: "Essential",
      tags: ["Express", "Error Handling"],
      description: "Implement a global (err, req, res, next) error middleware returning clean JSON error responses."
    },
    {
      title: "JWT Authentication API with bcrypt",
      difficulty: "Hard",
      platform: "Custom",
      problemUrl: "https://jwt.io/introduction",
      placementImportance: "Essential",
      tags: ["JWT", "bcrypt", "Security", "Auth"],
      description: "Implement /register with password hashing, /login returning signed JWT, and auth middleware verifying tokens."
    }
  ],
  databaseIntegration: [
    {
      title: "MongoDB Connection with Mongoose",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://mongoosejs.com/docs/connections.html",
      placementImportance: "Essential",
      tags: ["MongoDB", "Mongoose", "Database"],
      description: "Connect Node.js to MongoDB Atlas securely using mongoose.connect and environment variable URI."
    },
    {
      title: "MongoDB Insert Document (Mongoose Model)",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://mongoosejs.com/docs/models.html",
      placementImportance: "Essential",
      tags: ["MongoDB", "Mongoose", "CRUD"],
      description: "Define a Mongoose schema with field validation rules and create documents with Model.create()."
    },
    {
      title: "MongoDB Find and Filter Queries",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://mongoosejs.com/docs/queries.html",
      placementImportance: "Essential",
      tags: ["MongoDB", "Queries"],
      description: "Query documents with Model.find, applying conditions ($gte, $in), field projections, sorting, and limits."
    },
    {
      title: "MongoDB Update Document Operations",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://mongoosejs.com/docs/queries.html",
      placementImportance: "Essential",
      tags: ["MongoDB", "Update"],
      description: "Update documents using Model.findByIdAndUpdate with { new: true, runValidators: true }."
    },
    {
      title: "MongoDB Delete Document Operations",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://mongoosejs.com/docs/queries.html",
      placementImportance: "Essential",
      tags: ["MongoDB", "Delete"],
      description: "Delete documents by ID using Model.findByIdAndDelete and return appropriate confirmation status."
    },
    {
      title: "MongoDB-Backed RESTful CRUD API",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://mongoosejs.com/docs/",
      placementImportance: "Essential",
      tags: ["MongoDB", "Express", "REST API"],
      description: "Wire full Express REST endpoints (GET, POST, PUT, DELETE) directly to MongoDB collections via Mongoose."
    },
    {
      title: "SQL SELECT Queries with WHERE and LIMIT",
      difficulty: "Easy",
      platform: "HackerRank",
      problemUrl: "https://www.hackerrank.com/domains/sql",
      placementImportance: "Essential",
      tags: ["SQL", "Queries", "Database"]
    },
    {
      title: "SQL INNER and LEFT JOIN Queries",
      difficulty: "Medium",
      platform: "HackerRank",
      problemUrl: "https://www.hackerrank.com/domains/sql",
      placementImportance: "Essential",
      tags: ["SQL", "Joins", "Relational DB"]
    },
    {
      title: "SQL GROUP BY and HAVING Aggregations",
      difficulty: "Medium",
      platform: "HackerRank",
      problemUrl: "https://www.hackerrank.com/domains/sql",
      placementImportance: "Essential",
      tags: ["SQL", "Aggregation", "GROUP BY"]
    },
    {
      title: "Full Database-Backed Backend Microservice",
      difficulty: "Hard",
      platform: "Custom",
      problemUrl: "https://mongoosejs.com/docs/",
      placementImportance: "Important",
      tags: ["Full Stack", "MongoDB", "Express"],
      description: "Construct an authenticated database microservice with pagination, filtering, and indexed search."
    }
  ],
  fullStackApp: [
    {
      title: "Full Stack Todo Application (MERN)",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://www.mongodb.com/resources/languages/mern-stack",
      placementImportance: "Essential",
      tags: ["MERN", "Full Stack", "CRUD"],
      description: "Develop a complete Todo application with React UI, Express API, and MongoDB persistence."
    },
    {
      title: "Student Management System",
      difficulty: "Hard",
      platform: "Custom",
      problemUrl: "https://www.mongodb.com/resources/languages/mern-stack",
      placementImportance: "Essential",
      tags: ["Full Stack", "Student System", "MERN"],
      description: "Build an end-to-end portal managing student profiles, grades, search filters, and attendance records."
    },
    {
      title: "Personal Expense Tracker with Charts",
      difficulty: "Hard",
      platform: "Custom",
      problemUrl: "https://www.mongodb.com/resources/languages/mern-stack",
      placementImportance: "Essential",
      tags: ["Expense Tracker", "Full Stack", "Charts"],
      description: "Create an expense ledger tracking income/expenses with category breakdown and monthly charts."
    },
    {
      title: "Markdown Notes Application",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://www.mongodb.com/resources/languages/mern-stack",
      placementImportance: "Important",
      tags: ["Notes App", "Full Stack", "Markdown"],
      description: "Implement a notes app supporting live Markdown preview, tags, search, and database storage."
    },
    {
      title: "Student Attendance Tracking Portal",
      difficulty: "Hard",
      platform: "Custom",
      problemUrl: "https://www.mongodb.com/resources/languages/mern-stack",
      placementImportance: "Important",
      tags: ["Full Stack", "Attendance", "MERN"],
      description: "Develop a daily attendance management module with calendar date picker and percentage reports."
    },
    {
      title: "Product Catalog Management System",
      difficulty: "Hard",
      platform: "Custom",
      problemUrl: "https://www.mongodb.com/resources/languages/mern-stack",
      placementImportance: "Important",
      tags: ["E-Commerce", "Catalog", "Full Stack"],
      description: "Build an inventory management system with image URL storage, stock levels, and category filtering."
    },
    {
      title: "Complete JWT User Authentication System",
      difficulty: "Hard",
      platform: "Custom",
      problemUrl: "https://jwt.io/introduction",
      placementImportance: "Essential",
      tags: ["Auth", "JWT", "Security", "Full Stack"],
      description: "Implement full registration, login, cookie/header token storage, and protected frontend dashboard routes."
    },
    {
      title: "Full Stack CRUD Application Architecture",
      difficulty: "Hard",
      platform: "Custom",
      problemUrl: "https://www.mongodb.com/resources/languages/mern-stack",
      placementImportance: "Essential",
      tags: ["Architecture", "MERN", "Full Stack"],
      description: "Architect a production-grade full stack system with modular controllers, routes, and responsive UI."
    }
  ],
  webSecurity: [
    {
      title: "Input Validation and Sanitization",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://owasp.org/www-project-top-ten/",
      placementImportance: "Essential",
      tags: ["Security", "Validation", "OWASP"],
      description: "Sanitize user HTML inputs to prevent script injection using DOMPurify and validator.js."
    },
    {
      title: "XSS (Cross-Site Scripting) Defense",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://owasp.org/www-community/attacks/xss/",
      placementImportance: "Essential",
      tags: ["XSS", "Security", "Defense"],
      description: "Demonstrate reflected and stored XSS vectors in test environments and implement escaping defenses."
    },
    {
      title: "SQL / NoSQL Injection Defense",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://owasp.org/www-community/attacks/SQL_Injection",
      placementImportance: "Essential",
      tags: ["SQL Injection", "NoSQL Injection", "Security"],
      description: "Replace unsafe query concatenations with parameterized SQL queries and Mongoose sanitized filters."
    },
    {
      title: "Password Hashing with bcrypt Salt Rounds",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://www.npmjs.com/package/bcrypt",
      placementImportance: "Essential",
      tags: ["Cryptography", "bcrypt", "Security"],
      description: "Hash passwords with bcrypt salt rounds (10+) before database storage and verify with bcrypt.compare."
    },
    {
      title: "JWT Security with HttpOnly Cookies",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://cheatsheetseries.owasp.org/cheatsheets/JSON_Web_Token_for_Java_Cheat_Sheet.html",
      placementImportance: "Essential",
      tags: ["JWT", "Cookies", "Security"],
      description: "Store JWTs in secure, httpOnly, sameSite cookies to protect against client-side XSS token theft."
    },
    {
      title: "Secure API Hardening with Helmet & Rate Limiting",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://helmetjs.github.io/",
      placementImportance: "Essential",
      tags: ["Helmet", "Rate Limiting", "API Security"],
      description: "Configure express-rate-limit and Helmet security headers (CSP, HSTS, X-Frame-Options)."
    }
  ],
  testing: [
    {
      title: "Jest Unit Tests for Utility Functions",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://jestjs.io/docs/getting-started",
      placementImportance: "Essential",
      tags: ["Jest", "Unit Testing"],
      description: "Write Jest tests asserting mathematical, string manipulation, and array helper outputs."
    },
    {
      title: "Supertest REST API Endpoint Tests",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://www.npmjs.com/package/supertest",
      placementImportance: "Essential",
      tags: ["Supertest", "API Testing", "Jest"],
      description: "Test Express HTTP routes asserting status 200/201/400 and verifying returned JSON schemas."
    },
    {
      title: "Form Validation Unit Test Suite",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://jestjs.io/docs/getting-started",
      placementImportance: "Essential",
      tags: ["Testing", "Validation"],
      description: "Implement automated unit tests validating email, password, and phone number regex edge cases."
    },
    {
      title: "React Component Testing with React Testing Library",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://testing-library.com/docs/react-testing-library/intro/",
      placementImportance: "Essential",
      tags: ["React Testing Library", "UI Testing"],
      description: "Render components, fire user click events, and assert DOM state updates."
    },
    {
      title: "Playwright Automated Login Flow Test",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://playwright.dev/docs/intro",
      placementImportance: "Important",
      tags: ["Playwright", "E2E Testing"],
      description: "Write an end-to-end browser automation script that inputs credentials, clicks submit, and checks dashboard URL."
    },
    {
      title: "Playwright CRUD Workflow Automation",
      difficulty: "Hard",
      platform: "Custom",
      problemUrl: "https://playwright.dev/docs/intro",
      placementImportance: "Important",
      tags: ["Playwright", "Automation"],
      description: "Automate item creation, table row assertion, item update, and deletion in a live browser session."
    },
    {
      title: "Full API Integration Test Suite",
      difficulty: "Hard",
      platform: "Custom",
      problemUrl: "https://jestjs.io/docs/getting-started",
      placementImportance: "Important",
      tags: ["Integration Testing", "Jest", "Supertest"],
      description: "Run complete multi-endpoint integration tests using an in-memory MongoDB instance."
    }
  ],
  deployment: [
    {
      title: "Deploy React App to Vercel / Netlify",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://vercel.com/docs",
      placementImportance: "Essential",
      tags: ["Deployment", "Vercel", "Frontend"],
      description: "Deploy a production React/Vite single-page application with custom build commands and preview URLs."
    },
    {
      title: "Deploy Node.js Express API to Cloud",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://render.com/docs",
      placementImportance: "Essential",
      tags: ["Deployment", "Backend", "Render"],
      description: "Deploy an Express backend on Render/Railway, configuring PORT, environment variables, and health checks."
    },
    {
      title: "Deploy Full Stack MERN Application",
      difficulty: "Hard",
      platform: "Custom",
      problemUrl: "https://render.com/docs",
      placementImportance: "Essential",
      tags: ["MERN Deployment", "Cloud", "Full Stack"],
      description: "Deploy frontend and backend separately, configuring CORS, MongoDB Atlas IP access, and HTTPS."
    },
    {
      title: "Dockerize Web Application",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://docs.docker.com/get-started/",
      placementImportance: "Essential",
      tags: ["Docker", "Containers", "DevOps"],
      description: "Write Dockerfiles for frontend and backend microservices and run via docker-compose up."
    },
    {
      title: "Configure Production Environment Variables",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://nodejs.org/en/learn/command-line/how-to-read-environment-variables-from-nodejs",
      placementImportance: "Essential",
      tags: ["Environment Variables", "Security"],
      description: "Manage JWT_SECRET, MONGO_URI, and API_BASE_URL across development (.env) and cloud production."
    },
    {
      title: "Configure Production Build & Asset Optimization",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://vite.dev/guide/build.html",
      placementImportance: "Important",
      tags: ["Vite", "Build", "Optimization"],
      description: "Optimize production bundle with tree shaking, chunk splitting, and minification."
    }
  ],
  tools: [
    {
      title: "Git Branching and Pull Request Workflow",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://github.com/git-guides",
      placementImportance: "Essential",
      tags: ["Git", "GitHub", "Workflow"],
      description: "Create feature branches, commit changes, open pull requests, and resolve merge conflicts."
    },
    {
      title: "npm Project Initialization & Package Management",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://docs.npmjs.com/",
      placementImportance: "Essential",
      tags: ["npm", "Node.js", "Dependencies"],
      description: "Initialize projects with npm init, install runtime vs devDependencies, and manage package-lock.json."
    },
    {
      title: "Configure npm Automation Scripts",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://docs.npmjs.com/cli/v10/using-npm/scripts",
      placementImportance: "Essential",
      tags: ["npm Scripts", "Automation"],
      description: "Setup custom npm scripts for dev, build, lint, and test execution."
    },
    {
      title: "Vite Project Setup & Configuration",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://vite.dev/guide/",
      placementImportance: "Essential",
      tags: ["Vite", "Frontend Tooling"],
      description: "Scaffold and configure a lightning-fast React application with Vite, ESLint, and PostCSS."
    },
    {
      title: "Chrome DevTools DOM & Console Debugging",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://developer.chrome.com/docs/devtools/",
      placementImportance: "Essential",
      tags: ["DevTools", "Debugging"],
      description: "Inspect DOM elements, live-edit CSS rules, and debug JavaScript runtime errors via the browser Console."
    },
    {
      title: "Network Request Debugging with DevTools",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://developer.chrome.com/docs/devtools/network/",
      placementImportance: "Essential",
      tags: ["DevTools", "Network Tab", "HTTP"],
      description: "Inspect HTTP headers, status codes, payload parameters, and timing waterfall charts."
    },
    {
      title: "Lighthouse Performance & Core Web Vitals Audit",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://developer.chrome.com/docs/lighthouse/",
      placementImportance: "Important",
      tags: ["Lighthouse", "Performance", "SEO"],
      description: "Audit page load performance, LCP, CLS, FID, accessibility, and apply recommended optimizations."
    }
  ],
  capstoneProjects: [
    {
      title: "Responsive Personal Portfolio Website",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Learn",
      placementImportance: "Essential",
      tags: ["Portfolio", "Project", "Responsive"],
      description: "Build and deploy a responsive portfolio featuring project showcase cards, resume download, and contact form."
    },
    {
      title: "Interactive Task & Todo Management App",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Learn",
      placementImportance: "Essential",
      tags: ["Todo App", "Project", "CRUD"],
      description: "Create an interactive task board with category filters, priority flags, and persistent storage."
    },
    {
      title: "Personal Expense Tracker with Dashboard",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://developer.mozilla.org/en-US/docs/Learn",
      placementImportance: "Essential",
      tags: ["Expense Tracker", "Project", "Dashboard"],
      description: "Develop a money management dashboard visualizing monthly income vs expenses with dynamic charts."
    },
    {
      title: "Student Management System with Search & Export",
      difficulty: "Hard",
      platform: "Custom",
      problemUrl: "https://www.mongodb.com/resources/languages/mern-stack",
      placementImportance: "Essential",
      tags: ["MERN", "Project", "CRUD"],
      description: "Build an academic records system with search filters, modal forms, and CSV data export."
    },
    {
      title: "Full Stack Notes Application with Markdown",
      difficulty: "Hard",
      platform: "Custom",
      problemUrl: "https://www.mongodb.com/resources/languages/mern-stack",
      placementImportance: "Essential",
      tags: ["Notes App", "Full Stack", "Markdown"],
      description: "Implement a full stack note-taking application supporting tags, rich Markdown preview, and cloud storage."
    },
    {
      title: "MERN E-Commerce Product Catalog",
      difficulty: "Hard",
      platform: "Custom",
      problemUrl: "https://www.mongodb.com/resources/languages/mern-stack",
      placementImportance: "Essential",
      tags: ["E-Commerce", "MERN", "Project"],
      description: "Build a product storefront featuring shopping cart state, category filters, and checkout simulation."
    },
    {
      title: "Final Full Stack Capstone Web Application",
      difficulty: "Hard",
      platform: "Custom",
      problemUrl: "https://www.mongodb.com/resources/languages/mern-stack",
      placementImportance: "Essential",
      tags: ["Capstone", "Full Stack", "MERN"],
      description: "Architect and deploy an end-to-end MERN application with authentication, database models, and cloud hosting."
    }
  ]
};

const refactorWebTechLab = async () => {
  try {
    await connectDB();

    const subject = await Subject.findOne({ name: /^Web Technologies Lab/i });
    if (!subject) {
      console.log('❌ Web Technologies Lab subject not found');
      process.exit(1);
    }

    console.log(`\n🔧 Refactoring "${subject.name}"...`);
    const topics = await Topic.find({ subject: subject._id }).sort({ order: 1 });

    // Wipe old coding problems for this subject
    const topicIds = topics.map(t => t._id);
    await CodingProblem.deleteMany({ topic: { $in: topicIds } });

    const mapping = [
      { pattern: /Introduction to Web Development/i, problems: REFACTORED_WEB_TECH_PROBLEMS.intro },
      { pattern: /HTML Fundamentals/i, problems: REFACTORED_WEB_TECH_PROBLEMS.htmlFundamentals },
      { pattern: /CSS Fundamentals/i, problems: REFACTORED_WEB_TECH_PROBLEMS.cssFundamentals },
      { pattern: /Advanced CSS and Responsive Design/i, problems: REFACTORED_WEB_TECH_PROBLEMS.advancedCss },
      { pattern: /JavaScript Programming/i, problems: REFACTORED_WEB_TECH_PROBLEMS.javascriptProgramming },
      { pattern: /JavaScript DOM Manipulation/i, problems: REFACTORED_WEB_TECH_PROBLEMS.domManipulation },
      { pattern: /Client-Side Web Development/i, problems: REFACTORED_WEB_TECH_PROBLEMS.clientSideDev },
      { pattern: /Frontend Frameworks Introduction/i, problems: REFACTORED_WEB_TECH_PROBLEMS.frontendFrameworks },
      { pattern: /Backend Web Development Basics/i, problems: REFACTORED_WEB_TECH_PROBLEMS.backendWebDev },
      { pattern: /Database Integration/i, problems: REFACTORED_WEB_TECH_PROBLEMS.databaseIntegration },
      { pattern: /Full Stack Web Application Development/i, problems: REFACTORED_WEB_TECH_PROBLEMS.fullStackApp },
      { pattern: /Web Security Basics/i, problems: REFACTORED_WEB_TECH_PROBLEMS.webSecurity },
      { pattern: /Web Application Testing/i, problems: REFACTORED_WEB_TECH_PROBLEMS.testing },
      { pattern: /Web Deployment and Hosting/i, problems: REFACTORED_WEB_TECH_PROBLEMS.deployment },
      { pattern: /Modern Web Development Tools/i, problems: REFACTORED_WEB_TECH_PROBLEMS.tools },
      { pattern: /Mini Projects and Capstone Development/i, problems: REFACTORED_WEB_TECH_PROBLEMS.capstoneProjects }
    ];

    let totalInserted = 0;
    for (const item of mapping) {
      const topic = topics.find(t => item.pattern.test(t.title));
      if (topic) {
        const toInsert = item.problems.map((p, idx) => ({
          topic: topic._id,
          title: p.title,
          description: p.description || `Practical coding challenge for ${topic.title}.`,
          difficulty: p.difficulty,
          platform: p.platform,
          problemUrl: p.problemUrl,
          placementImportance: p.placementImportance || "Essential",
          tags: p.tags || [topic.title],
          order: idx + 1,
          estimatedMinutes: p.difficulty === 'Hard' ? 60 : p.difficulty === 'Medium' ? 40 : 25,
          isPublished: true
        }));
        await CodingProblem.insertMany(toInsert);
        totalInserted += toInsert.length;
        console.log(`   ✅ "${topic.title}": ${toInsert.length} specific tasks`);
      }
    }

    console.log(`\n🎉 Refactored Web Technologies Lab successfully! Total specific tasks: ${totalInserted}.`);
    process.exit(0);
  } catch (err) {
    console.error('❌ Error:', err);
    process.exit(1);
  }
};

refactorWebTechLab();
