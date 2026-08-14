# Student Navigator

[![CI — Student Navigator Validation](https://github.com/Chinmayinarayan/Student-Navigator/actions/workflows/ci.yml/badge.svg)](https://github.com/Chinmayinarayan/Student-Navigator/actions/workflows/ci.yml)

### 🔗 Deployed Platforms
* **Live Application Demo:** [https://student-navigator-two.vercel.app](https://student-navigator-two.vercel.app)
* **Production API Service:** [https://student-navigator-api.onrender.com](https://student-navigator-api.onrender.com)
* **GitHub Repository:** [https://github.com/Chinmayinarayan/Student-Navigator](https://github.com/Chinmayinarayan/Student-Navigator)

---

Student Navigator is a professional, student-centric academic planning, learning management, career guidance, and placement-preparation platform built on the MERN stack. Designed to assist engineering and science students, the platform acts as a comprehensive curriculum roadmap builder, academic performance tracker, and opportunity explorer. It helps students navigate their university syllabus, practice coding challenges, attempt timed tests and quizzes, track their career readiness, discover scholarships and hackathons, and utilize a context-restricted AI study assistant as a supporting tool for conceptual clarification.

## Project Objective
The primary objective of Student Navigator is to bridge the gap between academic learning and career readiness. The platform consolidates scattered academic materials, coding challenges, concept assessments, and placement opportunities into a single dashboard. By providing clear dependency roadmaps and dynamic performance metrics, it empowers students with actionable feedback on their preparation path for placements and internships.

## Overview & The Platform
Student Navigator serves as a unified digital ecosystem where academic syllabus progression directly informs career preparation. By integrating subject learning, hands-on programming practice, timed mock examinations, and opportunities discovery into a single dashboard, the platform removes fragmented resource hunting and brings structural clarity to the student's learning journey.

Rather than leaving students to guess if they are ready for technical interviews, Student Navigator tracks their activity logs across multiple academic dimensions, calculates a concrete **Career Readiness Score** using deterministic rules, and recommends target areas of improvement.

### AI Boundary & Deterministic Framework
> [!IMPORTANT]
> **AI Scope Limitation:** Student Navigator is **not** an AI-driven matching engine. To ensure absolute data accuracy and prevent AI hallucinations from misguiding the student's preparation paths, the core features of the platform run on standard software engineering algorithms:
> - **Core Curriculum Navigation & Prerequisites Graph:** Built using deterministic database routing and parent-child dependency trees.
> - **Career Matching recommendations:** Determined via heuristic search matching technical skills, interests, and profile logs against standardized career descriptions.
> - **Career Readiness Score:** Calculated using a precise weighted formula (30% Syllabus, 20% Quizzes, 20% Coding, 10% Assignments, 20% Mock Tests).
> - **Scholarship explorer matching:** Driven by standard database queries matching age, CGPA, and location eligibility criteria.
> - **Events discovery & Badge unlocks:** Managed by standard database queries and direct service calls executing criteria checks upon client activities.
>
> **The AI Boundary:** Artificial Intelligence is utilized **strictly** as an optional learning enhancement tool via the **AI Study Assistant**. It queries **Llama 3.3 70B** through the **Groq API** to provide context-restricted tutoring on the specific topic the student is studying, guarded by robust system instruction scopes to reject irrelevant or off-topic prompts.

---

## Problem Statement

Modern university and technical college students face several critical roadblocks that hinder their academic growth and career preparation:

1. **Fragmented Learning Resources:** High-quality learning content (textbooks, reference tools, video playlists) is scattered across the internet, leading to cognitive fatigue and wasted study hours.
2. **Abstract Prerequisite Structures:** Students often struggle to understand the dependency relationships between subjects (e.g., why Linear Algebra must precede Machine Learning) and individual topics.
3. **Disconnected Prep & Academics:** Performance in university courses, timed mock tests, and programming platforms (LeetCode, GeeksforGeeks) are tracked in separate silos, hiding a student's actual career readiness.
4. **Placement Readiness Ambiguity:** Students lack a measurable metric to know if they are prepared for placement drives, technical screenings, or technical interviews.
5. **Undiscovered Opportunities:** Many eligible students miss out on scholarships, hackathons, and corporate competitions due to a lack of awareness and timely notifications.

---

## The Solution

Student Navigator addresses these challenges through a structured, integrated, and secure platform:

* **Centralized Academic Syllabi:** Organizes core computer science and engineering subjects into a detailed roadmap of topics, conceptual notes, textbooks, and curated video playlists.
* **Interactive Prerequisite Graphs:** Visualizes subject and topic dependencies dynamically using interactive node graphs, showing students exactly what they need to master first.
* **Unified Performance Tracking:** Consolidates mock test percentages, quiz historical scores, assignments submitted, and coding problems solved into a singular learning profile.
* **Heuristic Career Readiness Metrics:** Calculates a data-driven, multi-factor **Career Readiness Score** (0–100) and displays a clear readiness level (Beginner to Placement Ready) along with an action checklist using deterministic algorithms.
* **Deterministic Career & Scholarship Matching:** Employs rule-based backend algorithms to suggest relevant career pathways and scholarships based on user profile criteria.
* **Optional AI Study Assistant:** Provides a supporting, context-restricted study chat assistant that keeps students focused on the specific subject and topic they are currently studying.

---

## Major Features

* **Authentication:** Secure user registration and login powered by HTTP-only JSON Web Tokens (JWT) and Bcrypt hashing.
* **Student Profile:** Customizable student details including degree, branch, current year, CGPA, technical skills inventory, and personal career interests.
* **Dashboard:** Unified dashboard displaying student progress metrics, active streaks, task lists, and placement checklists.
* **Career Readiness Score:** Dynamically calculated readiness index (0-100) combining syllabus coverage, quiz averages, coding challenges solved, assignment completions, and mock test scores.
* **Subjects Directory:** Comprehensive listing of 42 core engineering and sciences subjects.
* **Topics Catalog:** Detailed topic-level detail pages featuring conceptual overviews, exam study tips, and recommended textbooks.
* **Prerequisite Relationships:** Interactive dependency graphs (built with ReactFlow) mapping subject-to-subject and topic-to-topic roadmaps.
* **Learning Progress Tracking:** Real-time updates of subject and topic completion status as the student studies.
* **Coding Practice:** Mapped directory of coding problems linked to external platforms (LeetCode, HackerRank, GeeksforGeeks) categorized by topic and difficulty.
* **Quizzes:** Timed conceptual quizzes for every topic with multiple-choice questions and instant feedback.
* **Mock Tests:** Simulators for technical and aptitude mock exams with timer controls and custom question distributions.
* **Career Recommendations:** Heuristic matching engine mapping student skills and interests to concrete tech roles.
* **Career Roadmaps:** Phase-by-phase learning guidelines outlining the exact subjects needed to qualify for specific careers.
* **Scholarships:** Financial support database matching students based on CGPA, income criteria, and state residency.
* **Events:** Dynamic calendar aggregating student hackathons, coding contests, and corporate opportunities.
* **Analytics:** Visual performance charts (built with Recharts) mapping test averages, quiz accuracy, and coding progress.
* **Achievements:** Gamified achievement badges unlocked automatically upon completing learning milestones.
* **AI Study Assistant:** Context-restricted AI tutor utilizing Llama 3.3 via Groq to answer questions strictly relevant to the active topic.

---

## System Architecture

```
React Frontend (Vite)
        │
        ▼ (HTTPS REST API / Bearer Token Auth)
Express API Gateway (CORS, Helmet, Rate Limiter)
        │
        ▼
Node.js Express Server (Routes, Controllers, Services)
   ┌────┴────────────────────────┐
   ▼                             ▼
MongoDB Atlas (Mongoose)     Groq API (Llama 3.3 70B AI Study Assistant)
```

### Technology Stack
* **Frontend:** React 19, Vite 8, Tailwind CSS v4, React Router DOM v7, ReactFlow v11, Recharts v3, Lucide React, Axios.
* **Backend:** Node.js, Express.js v5, Mongoose v8, JWT, BcryptJS, Cookie Parser, Express Rate Limit, Helmet, Morgan.
* **Email Delivery:** Resend API (official Node.js SDK).
* **Database:** MongoDB Atlas (NoSQL Document Store).
* **AI Integration:** Groq SDK (Llama 3.3 70B).

---

## User Workflow
```
[ Register / Login ] ──> [ Complete Student Profile ] ──> [ View Dashboard ]
                                                               │
   ┌───────────────────────┬───────────────────────────────────┼──────────────────────────┐
   ▼                       ▼                                   ▼                          ▼
[ Explore Syllabus ]   [ Solve Coding Problems ]    [ Attempt Quizzes & Tests ]   [ View Matches ]
   │                       │                                   │                          │
   ▼                       ▼                                   ▼                          ▼
[ Graph Dependency ]   [ Access LeetCode links ]    [ Check Recharts Analytics ]  [ Scholarships & Events ]
   │                                                           │                          │
   ▼                                                           ▼                          ▼
[ Ask AI Assistant ] ──────────────────────────────────────────┴─────────────────> [ Placement Ready! ]
```

---

## Backend API Overview

The backend exposes a secure REST API organized into the following major route groups:

* **Authentication:** `/api/auth` — Registration, login, password checks, token decodes.
* **User Profile:** `/api/user` — Fetch/update student profile details, skills, and interests.
* **Syllabus:** `/api/subjects` and `/api/topics` — Retrieve curriculum indices, conceptual notes, and prerequisite mappings.
* **Coding Practice:** `/api/coding-problems` — Fetch list of problems, track marked completions.
* **Quizzes:** `/api/quizzes` — Fetch conceptual quizzes, grade user answers, fetch historical scores.
* **Mock Exams:** `/api/tests` — Fetch mock tests, save test results, track performance.
* **Career Matching:** `/api/careers` and `/api/recommendations` — Fetch career roadmaps, generate heuristic matching scores.
* **Opportunities:** `/api/scholarships` and `/api/events` — Retrieve demographic-filtered financial aid, coding competitions.
* **Analytics:** `/api/analytics` and `/api/career-readiness` — Calculate readiness scores, compile progress charts.
* **AI Assistant:** `/api/assistant` and `/api/ai-notes` — Route conversational prompts to Groq, save notes.

---

## Database Overview (Mongoose Models)

The data tier is structured using Mongoose schemas representing the following database models:

* **`User`** — Student credentials, profile criteria, skills, and settings.
* **`Subject`** — Subjects metadata, prerequisite subject IDs, reference links.
* **`Topic`** — Sub-topics list, study notes, tips, reference books.
* **`Resource`** — Subject textbooks, online study links, and documentation endpoints.
* **`Career`** — Role description, salary bracket, required/essential skill lists, phase roadmaps.
* **`Roadmap`** — Directed Acyclic Graph (DAG) structures connecting syllabus elements.
* **`CodingProblem`** — Practice problem titles, difficulties, and platform target URLs.
* **`Assignment`** — Academic assignments metadata, due dates, course IDs.
* **`Quiz`** — Topic quiz questions, options, and correct answers.
* **`Test` & `Question`** — Placement mock exam details and question banks.
* **`Scholarship`** — Provider, award details, and eligibility criteria (CGPA, income).
* **`Event`** — Coding contests, organizer, registration links, dates.
* **`UserTopicProgress`** — Logs tracking which syllabus topics a student has completed.
* **`UserQuestionProgress`** — Logs tracking student progress on subject theory questions.
* **`UserCodingProgress`** — Logs tracking solved DSA coding challenges.
* **`UserQuizResult`** — History of graded student quizzes.
* **`UserAssignment`** — Track details and completion status of user-submitted assignments.
* **`TestResult`** — History of graded placement mock exams.
* **`UserStreak`** — Daily learning activity logs.
* **`UserAchievement`** — Unlocked gamified milestone badges.
* **`UserScholarship`** — Track user application statuses for listed scholarships.
* **`AINote`** — Personal notebooks containing saved AI chat explanations.

---

## Security Hardening
The API is hardened against common vulnerabilities using several layers of defense:
* **JSON Web Tokens (JWT):** Secure token authentication verifying user identity.
* **Helmet Middleware:** Protects against cross-site scripting (XSS), framing, and clickjacking by setting secure HTTP response headers.
* **CORS Whitelisting:** Enforces origin-level access control, restricting API consumption strictly to the deployed client.
* **Rate Limiting:** Prevents brute-force attacks and denial-of-service (DDoS) by restricting requests per IP (global, auth, and AI limits).
* **Input Validation:** Sanitizes payloads using `express-validator` to block injection scripts.
* **Path-Traversal Blockers:** Checks requested local resource paths to prevent directory traversal attacks.

---

## Testing & CI/CD
* **Testing framework:** Jest + Supertest (Integration and unit validations).
* **Current Test Status:** **31 / 31 tests passing** across 4 test suites:
  * `auth.test.js` — Auth validation, login, duplicate account checks.
  * `businessLogic.test.js` — Dynamic readiness calculations, career matching.
  * `securityAndRbac.test.js` — JWT validation, IDOR prevention, admin RBAC, path traversal, prompt guards.
  * `email.test.js` — Resend API integration success and error logging.
* **CI/CD Pipeline:** GitHub Actions runs automated Jest tests on every commit pushing to `master`.

---

## Live Deployments

* **Frontend Client (Vercel):** [https://student-navigator-two.vercel.app](https://student-navigator-two.vercel.app)
* **Backend Web Service (Render):** [https://student-navigator-api.onrender.com](https://student-navigator-api.onrender.com)
* **Database (MongoDB Atlas):** Hosted M0 Replica Set (`student_navigator_prod`).

---

## Installation & Local Setup

### Prerequisites
* Node.js (v20.x or v22.x)
* MongoDB (Atlas or local instance)
* Resend API Key & Groq API Key

### Step-by-Step Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Chinmayinarayan/Student-Navigator.git
   cd Student-Navigator
   ```

2. **Configure Backend Environment Variables:**
   Create `server/.env` using the template:
   ```bash
   cp server/.env.example server/.env
   # Open server/.env and fill in MONGODB_URI, JWT_SECRET, GROQ_API_KEY, RESEND_API_KEY
   ```

3. **Install & Start Backend Server:**
   ```bash
   cd server
   npm install
   # Seed the database (populates subjects, topics, tests, careers, scholarships)
   npm run seed
   # Start local API server
   npm run dev
   ```

4. **Configure Frontend Environment Variables:**
   Create `client/.env` using the template:
   ```bash
   cp client/.env.example client/.env
   # Fill in VITE_API_URL=http://localhost:5000/api
   ```

5. **Install & Start Frontend Client:**
   Open a separate terminal window:
   ```bash
   cd client
   npm install
   npm run dev
   ```

6. **Access the Application:**
   Open browser at: `http://localhost:5173`.

---

## Environment Variables Directory

### Backend (`server/.env.example`)
* **`PORT`** — Port the Express server listens on (e.g. `5000`).
* **`MONGODB_URI`** — Connection string for MongoDB Atlas.
* **`JWT_SECRET`** — Signature key for auth encryption.
* **`GROQ_API_KEY`** — Groq Console token for Llama 3.3.
* **`RESEND_API_KEY`** — Resend Console token for emails.
* **`CLIENT_URL`** — Whitelisted client URLs (comma-separated).

### Frontend (`client/.env.example`)
* **`VITE_API_URL`** — HTTP API gateway target base URL.

---

## Project Structure
```
Student-Navigator/
├── client/                      # React 19 + Vite frontend
│   ├── public/                  # Static assets
│   └── src/
│       ├── components/          # Reusable UI cards, graph nodes, sidebars
│       ├── pages/               # Route-level page views (Dashboard, quiz, tests)
│       ├── services/            # Axios API clients
│       └── main.jsx
│
├── server/                      # Node.js + Express backend
│   ├── controllers/             # Request route handler controllers
│   ├── routes/                  # Express routing endpoints
│   ├── models/                  # Mongoose document schemas
│   ├── services/                # Career Readiness, career matcher business logic
│   ├── middleware/              # CORS, rate limiters, auth token decrypt
│   ├── config/                  # DB connection configs
│   ├── utils/                   # JWT utils, Resend mailer wrappers
│   ├── seed/                    # DB catalog seeding data scripts
│   └── test/                    # Jest integration test suites
│
└── docs/screenshots/            # 12 clean verification screens
```

---

## Future Enhancements
* **Mock Interviews:** Timed verbal AI interview simulators using speech-to-text.
* **Interactive Code Playground:** Execute code solutions in-browser using a secure execution sandbox (e.g., Docker/WebAssembly).
* **Resume Parse Engine:** Automate skill inventory mapping by scanning PDF resumes.

---

## Project Status
This is a **fully deployed, validated production-ready full-stack portfolio application**. All backend endpoints are tested, CI builds are green, databases are seeded, and client-side deep links are managed correctly on hosted CDNs.
