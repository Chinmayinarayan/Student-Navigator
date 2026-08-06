import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { BookOpen, ExternalLink, Play } from "lucide-react";
import api from "../services/api";
import { getTopicsBySubject } from "../services/topicApi";
import TopicCard from "../components/TopicCard";
import { getDirectBookPdfUrl } from "../utils/bookLinks";
import SubjectPrerequisiteGraph from "../components/SubjectPrerequisiteGraph";
import SubjectCompanyPrep from "../components/SubjectCompanyPrep";

// ─── YouTube Resource Map ─────────────────────────────────────────────────────
// Keyed by lowercase keyword fragments so fuzzy-matching works across DB names
const YT_RESOURCES = [
  {
    keys: ["algorithm"],
    resources: [
      { title: "Abdul Bari – Algorithms Playlist", channel: "Abdul Bari", url: "https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O" },
      { title: "MIT OCW – Introduction to Algorithms", channel: "MIT OpenCourseWare", url: "https://www.youtube.com/playlist?list=PLUl4u3cNGP63EdVPN7z2fQf0q4Q4qQqQq" },
      { title: "Neso Academy – Design & Analysis of Algorithms", channel: "Neso Academy", url: "https://www.youtube.com/@nesoacademy/playlists" },
    ],
  },
  {
    keys: ["applied physics lab", "physics lab"],
    resources: [
      { title: "Virtual Labs (IIT) – Physics Experiments", channel: "Virtual Labs IIT", url: "https://www.vlab.co.in/participating-institute-iit-delhi" },
      { title: "NPTEL – Engineering Physics", channel: "NPTEL", url: "https://www.youtube.com/@nptelhrd/search?query=engineering%20physics" },
      { title: "Physics Practical Experiments", channel: "LabInstruments", url: "https://www.youtube.com/@LabInstruments" },
    ],
  },
  {
    keys: ["arithmetical", "analytical reasoning"],
    resources: [
      { title: "Neso Academy – Aptitude and Reasoning", channel: "Neso Academy", url: "https://www.nesoacademy.org/ot/03-aptitude-and-reasoning" },
      { title: "IndiaBix Aptitude", channel: "IndiaBix", url: "https://www.indiabix.com/" },
      { title: "TalentSprint Aptitude Preparation", channel: "TalentSprint", url: "https://www.youtube.com/@TalentSprintAptitudePrep" },
    ],
  },
  {
    keys: ["artificial intelligence", "machine learning"],
    resources: [
      { title: "freeCodeCamp – Machine Learning with Python", channel: "freeCodeCamp", url: "https://www.youtube.com/watch?v=7eh4d6sabA0" },
      { title: "Krish Naik – Machine Learning Playlist", channel: "Krish Naik", url: "https://www.youtube.com/@krishnaik06/playlists" },
      { title: "StatQuest – Machine Learning Playlist", channel: "StatQuest", url: "https://www.youtube.com/playlist?list=PLblh5JKOoLUIxGDQs4LFFD1G8D1j2QKQ-" },
    ],
  },
  {
    keys: ["basic electrical engineering"],
    resources: [
      { title: "Neso Academy – Basic Electrical Engineering", channel: "Neso Academy", url: "https://www.youtube.com/@nesoacademy/playlists" },
      { title: "Gate Smashers – Electrical Engineering Basics", channel: "Gate Smashers", url: "https://www.youtube.com/@GateSmashers/playlists" },
      { title: "NPTEL – Basic Electrical Technology", channel: "NPTEL", url: "https://nptel.ac.in/courses/108105053" },
    ],
  },
  {
    keys: ["basic electronics"],
    resources: [
      { title: "Neso Academy – Electronic Devices and Circuits", channel: "Neso Academy", url: "https://www.youtube.com/@nesoacademy/playlists" },
      { title: "Gate Smashers – Digital Electronics", channel: "Gate Smashers", url: "https://www.youtube.com/@GateSmashers/playlists" },
      { title: "All About Electronics", channel: "ALLABOUTELECTRONICS", url: "https://www.youtube.com/@ALLABOUTELECTRONICS" },
    ],
  },
  {
    keys: ["basic mechanical"],
    resources: [
      { title: "NPTEL – Engineering Mechanics / Mechanical Basics", channel: "NPTEL", url: "https://nptel.ac.in/courses/112106286" },
      { title: "Learn Engineering", channel: "Learn Engineering", url: "https://www.youtube.com/@LearnEngineering" },
      { title: "Gate Academy – Mechanical Engineering", channel: "Gate Academy Plus", url: "https://www.youtube.com/@GateAcademyPlus" },
    ],
  },
  {
    keys: ["big data"],
    resources: [
      { title: "Simplilearn – Big Data Analytics Course", channel: "Simplilearn", url: "https://www.youtube.com/watch?v=1vbXmCrkT3Y" },
      { title: "Great Learning – Big Data Full Course", channel: "Great Learning", url: "https://www.youtube.com/@GreatLearningOfficial" },
      { title: "Edureka – Big Data Hadoop Playlist", channel: "Edureka", url: "https://www.youtube.com/@edurekaIN/playlists" },
    ],
  },
  {
    keys: ["c programming", "c language"],
    resources: [
      { title: "Neso Academy – C Programming Playlist", channel: "Neso Academy", url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRjT3oRrqiRLLlsX3n8QK8XS" },
      { title: "Jenny's Lectures – C Programming", channel: "Jenny's Lectures CS/IT", url: "https://www.youtube.com/@JennyslecturesCSIT/playlists" },
      { title: "freeCodeCamp – C Programming Full Course", channel: "freeCodeCamp", url: "https://www.youtube.com/watch?v=KJgsSFOSQv0" },
    ],
  },
  {
    keys: ["cloud computing"],
    resources: [
      { title: "freeCodeCamp – Cloud Computing Course", channel: "freeCodeCamp", url: "https://www.youtube.com/watch?v=2LaAJq1lB1Q" },
      { title: "Neso Academy – Cloud Computing", channel: "Neso Academy", url: "https://www.youtube.com/@nesoacademy/playlists" },
      { title: "AWS Training – Cloud Practitioner", channel: "AWS Training", url: "https://www.youtube.com/@AWSTraining" },
    ],
  },
  {
    keys: ["computer networks lab"],
    resources: [
      { title: "Cisco Networking Academy", channel: "Cisco NetAcad", url: "https://www.netacad.com/" },
      { title: "Practical Networking", channel: "Practical Networking", url: "https://www.youtube.com/@PracticalNetworking" },
      { title: "Neso Academy – Computer Networks", channel: "Neso Academy", url: "https://www.youtube.com/@nesoacademy/playlists" },
    ],
  },
  {
    keys: ["computer networks"],
    resources: [
      { title: "Neso Academy – Computer Networks Playlist", channel: "Neso Academy", url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRjX6qvY0G3r8zXxK9x8zZ8y" },
      { title: "Gate Smashers – Computer Networks", channel: "Gate Smashers", url: "https://www.youtube.com/@GateSmashers/playlists" },
      { title: "NPTEL – Computer Networks", channel: "NPTEL", url: "https://nptel.ac.in/courses/106105183" },
    ],
  },
  {
    keys: ["computer organization", "computer architecture"],
    resources: [
      { title: "Neso Academy – Computer Organization Playlist", channel: "Neso Academy", url: "https://www.youtube.com/@nesoacademy/playlists" },
      { title: "Gate Smashers – Computer Organization", channel: "Gate Smashers", url: "https://www.youtube.com/@GateSmashers/playlists" },
      { title: "NPTEL – Computer Organization", channel: "NPTEL", url: "https://nptel.ac.in/courses/106103068" },
    ],
  },
  {
    keys: ["corporate communication"],
    resources: [
      { title: "NPTEL – Soft Skills / Communication Skills", channel: "NPTEL", url: "https://nptel.ac.in/courses/109104031" },
      { title: "English with Lucy – Communication Skills", channel: "English with Lucy", url: "https://www.youtube.com/@EnglishwithLucy" },
      { title: "Toastmasters International – Communication Skills", channel: "Toastmasters International", url: "https://www.youtube.com/@ToastmastersInternational" },
    ],
  },
  {
    keys: ["cryptography", "network security"],
    resources: [
      { title: "Neso Academy – Cryptography Playlist", channel: "Neso Academy", url: "https://www.youtube.com/@nesoacademy/playlists" },
      { title: "Gate Smashers – Cryptography & Network Security", channel: "Gate Smashers", url: "https://www.youtube.com/@GateSmashers/playlists" },
      { title: "NPTEL – Cryptography and Network Security", channel: "NPTEL", url: "https://nptel.ac.in/courses/106105031" },
    ],
  },
  {
    keys: ["data structures"],
    resources: [
      { title: "Abdul Bari – Data Structures & Algorithms", channel: "Abdul Bari", url: "https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O" },
      { title: "Striver – A2Z DSA Course", channel: "takeUforward", url: "https://www.youtube.com/@takeUforward/playlists" },
      { title: "Neso Academy – Data Structures", channel: "Neso Academy", url: "https://www.youtube.com/@nesoacademy/playlists" },
    ],
  },
  {
    keys: ["database applications lab"],
    resources: [
      { title: "SQLBolt – Interactive SQL Practice", channel: "SQLBolt", url: "https://sqlbolt.com/" },
      { title: "freeCodeCamp – SQL Full Course", channel: "freeCodeCamp", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
      { title: "Oracle Database Tutorials", channel: "Oracle Learning", url: "https://www.youtube.com/@OracleLearning" },
    ],
  },
  {
    keys: ["database management"],
    resources: [
      { title: "Gate Smashers – DBMS Playlist", channel: "Gate Smashers", url: "https://www.youtube.com/@GateSmashers/playlists" },
      { title: "Neso Academy – DBMS", channel: "Neso Academy", url: "https://www.youtube.com/@nesoacademy/playlists" },
      { title: "NPTEL – Database Management Systems", channel: "NPTEL", url: "https://nptel.ac.in/courses/106106093" },
    ],
  },
  {
    keys: ["design thinking"],
    resources: [
      { title: "Stanford d.school – Design Thinking", channel: "Stanford d.school", url: "https://dschool.stanford.edu/resources" },
      { title: "IDEO Design Thinking", channel: "IDEO U", url: "https://www.youtube.com/@IDEOU" },
      { title: "AJ&Smart – Design Thinking Process", channel: "AJ&Smart", url: "https://www.youtube.com/@AJSmart" },
    ],
  },
  {
    keys: ["design and analysis"],
    resources: [
      { title: "Abdul Bari – Algorithms", channel: "Abdul Bari", url: "https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O" },
      { title: "Gate Smashers – DAA", channel: "Gate Smashers", url: "https://www.youtube.com/@GateSmashers/playlists" },
      { title: "NPTEL – Design and Analysis of Algorithms", channel: "NPTEL", url: "https://nptel.ac.in/courses/106101060" },
    ],
  },
  {
    keys: ["discrete mathematics"],
    resources: [
      { title: "Neso Academy – Discrete Mathematics Playlist", channel: "Neso Academy", url: "https://www.youtube.com/@nesoacademy/playlists" },
      { title: "Gate Smashers – Discrete Mathematics", channel: "Gate Smashers", url: "https://www.youtube.com/@GateSmashers/playlists" },
      { title: "NPTEL – Discrete Mathematics", channel: "NPTEL", url: "https://nptel.ac.in/courses/111107058" },
    ],
  },
  {
    keys: ["embedded", "iot"],
    resources: [
      { title: "NPTEL – Embedded Systems", channel: "NPTEL", url: "https://nptel.ac.in/courses/108102045" },
      { title: "Great Learning – IoT Full Course", channel: "Great Learning", url: "https://www.youtube.com/@GreatLearningOfficial" },
      { title: "freeCodeCamp – IoT Course", channel: "freeCodeCamp", url: "https://www.youtube.com/@freecodecamp/playlists" },
    ],
  },
  {
    keys: ["engineering chemistry"],
    resources: [
      { title: "NPTEL – Engineering Chemistry", channel: "NPTEL", url: "https://nptel.ac.in/courses/104103019" },
      { title: "Last Moment Tuitions – Engineering Chemistry", channel: "Last Moment Tuitions", url: "https://www.youtube.com/@LastMomentTuitions" },
      { title: "Neso Academy – Engineering Chemistry", channel: "Neso Academy", url: "https://www.youtube.com/@nesoacademy/playlists" },
    ],
  },
  {
    keys: ["engineering exploration"],
    resources: [
      { title: "NPTEL – Engineering Design / Innovation", channel: "NPTEL", url: "https://nptel.ac.in/" },
      { title: "Stanford d.school – Design Thinking", channel: "Stanford d.school", url: "https://dschool.stanford.edu/resources" },
      { title: "IDEO Design Thinking", channel: "IDEO U", url: "https://www.youtube.com/@IDEOU" },
    ],
  },
  {
    keys: ["engineering mechanics"],
    resources: [
      { title: "NPTEL – Engineering Mechanics", channel: "NPTEL", url: "https://nptel.ac.in/courses/112106286" },
      { title: "Neso Academy – Engineering Mechanics", channel: "Neso Academy", url: "https://www.youtube.com/@nesoacademy/playlists" },
      { title: "Gate Academy – Engineering Mechanics", channel: "Gate Academy Plus", url: "https://www.youtube.com/@GateAcademyPlus" },
    ],
  },
  {
    keys: ["engineering physics"],
    resources: [
      { title: "NPTEL – Engineering Physics", channel: "NPTEL", url: "https://nptel.ac.in/courses" },
      { title: "Neso Academy – Engineering Physics", channel: "Neso Academy", url: "https://www.youtube.com/@nesoacademy/playlists" },
      { title: "Physics Wallah – Engineering Physics", channel: "Physics Wallah", url: "https://www.youtube.com/@PhysicsWallah" },
    ],
  },
  {
    keys: ["exploratory data analysis", "eda"],
    resources: [
      { title: "Krish Naik – EDA Playlist", channel: "Krish Naik", url: "https://www.youtube.com/@krishnaik06/playlists" },
      { title: "freeCodeCamp – Data Analysis with Python", channel: "freeCodeCamp", url: "https://www.youtube.com/watch?v=r-uOLxNrNk8" },
      { title: "Alex The Analyst – Data Analytics Playlist", channel: "Alex The Analyst", url: "https://www.youtube.com/@AlexTheAnalyst/playlists" },
    ],
  },
  {
    keys: ["generative ai"],
    resources: [
      { title: "DeepLearning.AI – Generative AI Courses", channel: "DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/" },
      { title: "Google Cloud – Generative AI Learning", channel: "Google Cloud Tech", url: "https://www.youtube.com/@GoogleCloudTech" },
      { title: "freeCodeCamp – Generative AI Courses", channel: "freeCodeCamp", url: "https://www.youtube.com/@freecodecamp/playlists" },
    ],
  },
  {
    keys: ["industry readiness", "leadership"],
    resources: [
      { title: "LinkedIn Learning – Leadership Skills", channel: "LinkedIn Learning", url: "https://www.youtube.com/@LinkedInLearning" },
      { title: "Google Career Certificates – Career Skills", channel: "Google Career Certificates", url: "https://www.youtube.com/@GoogleCareerCertificates" },
      { title: "Harvard Business Review – Leadership", channel: "Harvard Business Review", url: "https://www.youtube.com/@HarvardBusinessReview" },
    ],
  },
  {
    keys: ["linear algebra"],
    resources: [
      { title: "3Blue1Brown – Essence of Linear Algebra", channel: "3Blue1Brown", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr" },
      { title: "MIT OCW – Linear Algebra", channel: "MIT OpenCourseWare", url: "https://www.youtube.com/playlist?list=PLE7DDD91010BC51F8" },
      { title: "Khan Academy – Linear Algebra", channel: "Khan Academy", url: "https://www.youtube.com/@khanacademy/playlists" },
    ],
  },
  {
    keys: ["multivariable calculus"],
    resources: [
      { title: "MIT OCW – Multivariable Calculus", channel: "MIT OpenCourseWare", url: "https://www.youtube.com/playlist?list=PL4C4C8A7D06566F38" },
      { title: "Khan Academy – Multivariable Calculus", channel: "Khan Academy", url: "https://www.youtube.com/@khanacademy/playlists" },
      { title: "NPTEL – Multivariable Calculus", channel: "NPTEL", url: "https://nptel.ac.in/" },
    ],
  },
  {
    keys: ["open elective", "oe"],
    resources: [
      { title: "NPTEL Courses", channel: "NPTEL", url: "https://nptel.ac.in/courses" },
      { title: "Coursera Courses", channel: "Coursera", url: "https://www.coursera.org/" },
      { title: "edX Courses", channel: "edX", url: "https://www.edx.org/" },
    ],
  },
  {
    keys: ["object oriented programming lab", "oop lab"],
    resources: [
      { title: "freeCodeCamp – Java Programming Projects", channel: "freeCodeCamp", url: "https://www.youtube.com/@freecodecamp/playlists" },
      { title: "Programming with Mosh – Java", channel: "Programming with Mosh", url: "https://www.youtube.com/@programmingwithmosh" },
      { title: "Telusko Java Projects", channel: "Telusko", url: "https://www.youtube.com/@Telusko" },
    ],
  },
  {
    keys: ["object oriented programming", "oop"],
    resources: [
      { title: "Neso Academy – OOP", channel: "Neso Academy", url: "https://www.youtube.com/@nesoacademy/playlists" },
      { title: "Telusko – Java OOP", channel: "Telusko", url: "https://www.youtube.com/@Telusko" },
      { title: "freeCodeCamp – Java Programming", channel: "freeCodeCamp", url: "https://www.youtube.com/watch?v=A74TOX803D0" },
    ],
  },
  {
    keys: ["operating system"],
    resources: [
      { title: "Gate Smashers – Operating System", channel: "Gate Smashers", url: "https://www.youtube.com/@GateSmashers/playlists" },
      { title: "Neso Academy – Operating System", channel: "Neso Academy", url: "https://www.youtube.com/@nesoacademy/playlists" },
      { title: "NPTEL – Operating Systems", channel: "NPTEL", url: "https://nptel.ac.in/courses/106106144" },
    ],
  },
  {
    keys: ["compiler design", "compiler"],
    resources: [
      { title: "Gate Smashers – Compiler Design", channel: "Gate Smashers", url: "https://www.youtube.com/@GateSmashers/playlists" },
      { title: "Neso Academy – Compiler Design", channel: "Neso Academy", url: "https://www.youtube.com/@nesoacademy/playlists" },
      { title: "NPTEL – Compiler Design", channel: "NPTEL", url: "https://nptel.ac.in/" },
    ],
  },
  {
    keys: ["probability", "statistics"],
    resources: [
      { title: "Khan Academy – Statistics and Probability", channel: "Khan Academy", url: "https://www.youtube.com/playlist?list=PL1328115D3D8A2566" },
      { title: "StatQuest – Statistics Playlist", channel: "StatQuest", url: "https://www.youtube.com/@statquest/playlists" },
      { title: "NPTEL – Probability and Statistics", channel: "NPTEL", url: "https://nptel.ac.in/" },
    ],
  },
  {
    keys: ["problem solving"],
    resources: [
      { title: "freeCodeCamp – Programming Problem Solving", channel: "freeCodeCamp", url: "https://www.youtube.com/@freecodecamp/playlists" },
      { title: "Abdul Bari – Algorithms", channel: "Abdul Bari", url: "https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O" },
      { title: "NeetCode – Problem Solving Patterns", channel: "NeetCode", url: "https://www.youtube.com/@NeetCode/playlists" },
    ],
  },
  {
    keys: ["professional aptitude", "logical reasoning", "aptitude"],
    resources: [
      { title: "Neso Academy – Aptitude and Reasoning", channel: "Neso Academy", url: "https://www.nesoacademy.org/ot/03-aptitude-and-reasoning" },
      { title: "TalentSprint Aptitude Preparation", channel: "TalentSprint", url: "https://www.youtube.com/@TalentSprintAptitudePrep" },
      { title: "IndiaBix", channel: "IndiaBix", url: "https://www.indiabix.com/" },
    ],
  },
  {
    keys: ["single variable calculus", "calculus"],
    resources: [
      { title: "3Blue1Brown – Essence of Calculus", channel: "3Blue1Brown", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr" },
      { title: "MIT OCW – Single Variable Calculus", channel: "MIT OpenCourseWare", url: "https://www.youtube.com/playlist?list=PL590CCC2BC5AF3BC1" },
      { title: "Khan Academy – Calculus", channel: "Khan Academy", url: "https://www.youtube.com/@khanacademy/playlists" },
    ],
  },
  {
    keys: ["software engineering"],
    resources: [
      { title: "Neso Academy – Software Engineering", channel: "Neso Academy", url: "https://www.youtube.com/@nesoacademy/playlists" },
      { title: "Gate Smashers – Software Engineering", channel: "Gate Smashers", url: "https://www.youtube.com/@GateSmashers/playlists" },
      { title: "NPTEL – Software Engineering", channel: "NPTEL", url: "https://nptel.ac.in/" },
    ],
  },
  {
    keys: ["web technologies", "web tech"],
    resources: [
      { title: "freeCodeCamp – Web Development Full Course", channel: "freeCodeCamp", url: "https://www.youtube.com/@freecodecamp/playlists" },
      { title: "Traversy Media – Web Development", channel: "Traversy Media", url: "https://www.youtube.com/@TraversyMedia/playlists" },
      { title: "The Net Ninja – Web Development", channel: "The Net Ninja", url: "https://www.youtube.com/@NetNinja/playlists" },
    ],
  },
  {
    keys: ["wireless", "mobile networks"],
    resources: [
      { title: "NPTEL – Wireless Communication", channel: "NPTEL", url: "https://nptel.ac.in/" },
      { title: "Gate Smashers – Computer Networks / Wireless", channel: "Gate Smashers", url: "https://www.youtube.com/@GateSmashers/playlists" },
      { title: "Neso Academy – Wireless Communication", channel: "Neso Academy", url: "https://www.youtube.com/@nesoacademy/playlists" },
    ],
  },
];

/** Returns the matching resource list for a subject name, or [] */
function getYTResources(subjectName) {
  if (!subjectName) return [];
  const lower = subjectName.toLowerCase();
  // longer keys first so "computer networks lab" wins over "computer networks"
  const sorted = [...YT_RESOURCES].sort(
    (a, b) => Math.max(...b.keys.map((k) => k.length)) - Math.max(...a.keys.map((k) => k.length))
  );
  for (const entry of sorted) {
    if (entry.keys.some((k) => lower.includes(k))) return entry.resources;
  }
  return [];
}

// ─── Component ────────────────────────────────────────────────────────────────
function SubjectDetails() {
  const { id } = useParams();

  const [subject, setSubject] = useState(null);
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const subjectResponse = await api.get(`/subjects/${id}`);
        setSubject(subjectResponse.data.subject);
        const topicData = await getTopicsBySubject(id);
        setTopics(topicData);
      } catch (error) {
        console.error(error);
      } finally {
        loading && setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] bg-[#030712] text-white">
        <div className="text-center p-8 bg-slate-950/60 backdrop-blur-xl border border-white/5 rounded-3xl shadow-2xl">
          <h2 className="text-xl font-bold">Loading Subject Details...</h2>
          <p className="mt-2 text-sm text-slate-500">Preparing learning resources &amp; roadmap.</p>
        </div>
      </div>
    );
  }

  if (!subject) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] bg-[#030712] text-white">
        <div className="text-center p-8 bg-slate-950/60 backdrop-blur-xl border border-white/5 rounded-3xl shadow-2xl">
          <h2 className="text-xl font-bold text-rose-500">Subject not found</h2>
          <Link to="/dashboard" className="mt-4 inline-block text-sm font-semibold text-cyan-400 hover:underline">
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const ytLinks = getYTResources(subject.name);

  return (
    <div className="space-y-8 animate-fadeIn">

      {/* Breadcrumb */}
      <div>
        <Link to="/subjects" className="text-xs font-bold text-slate-500 hover:text-slate-300 transition tracking-wider uppercase">
          ← Back to My Subjects
        </Link>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden rounded-[28px] border border-white/5 bg-slate-950/40 p-8 shadow-2xl">
        <div className="absolute right-0 top-0 -mr-16 -mt-16 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="relative z-10 space-y-4">
          <span className="rounded-xl bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 text-[10px] font-extrabold text-cyan-400 uppercase tracking-wider">
            Core Subject
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
            {subject.name}
          </h1>
          <p className="text-sm text-slate-400 leading-relaxed max-w-4xl">
            {subject.description || "Browse structured dynamic roadmap topics, practice problems, reference resources, and AI marks-wise theory questions."}
          </p>
        </div>
      </section>

      {/* Prerequisite Graph */}
      <SubjectPrerequisiteGraph subjectId={id} />

      {/* SDE Company Prep Focus Paths */}
      {topics.length > 0 && (
        <SubjectCompanyPrep topics={topics} />
      )}

      <div className="space-y-8">

        {/* Topics */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <h2 className="text-lg font-extrabold text-white flex items-center gap-2">
              <span>📚</span> Course Syllabus &amp; Topics
            </h2>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{topics.length} Modules</span>
          </div>
          <div className="space-y-2.5">
            {topics.length > 0 ? (
              topics.map((topic, index) => (
                <TopicCard key={topic._id} topic={topic} index={index} />
              ))
            ) : (
              <div className="rounded-3xl border border-dashed border-white/10 bg-slate-950/20 p-12 text-center">
                <h3 className="text-base font-semibold text-slate-400">No topics available yet</h3>
                <p className="mt-2 text-xs text-slate-600">Dynamic topics are being loaded.</p>
              </div>
            )}
          </div>
        </section>

        {/* ── YouTube Resources ─────────────────────────────────────────── */}
        {ytLinks.length > 0 && (
          <div className="bg-slate-950/40 border border-white/5 rounded-3xl p-6 shadow-md space-y-4">
            <h3 className="text-base font-extrabold text-white flex items-center gap-2">
              <Play className="h-4 w-4 text-rose-400" />
              YouTube Resources
            </h3>
            <div className="grid gap-3 sm:grid-cols-3">
              {ytLinks.map((res, i) => (
                <a
                  key={i}
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-1.5 rounded-2xl border border-white/5 bg-black/20 p-4 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition group"
                >
                  <p className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">
                    {res.channel}
                  </p>
                  <p className="text-xs font-semibold text-white leading-snug group-hover:underline">
                    {res.title}
                  </p>
                  <span className="mt-auto pt-2 inline-flex items-center gap-1 text-[10px] font-bold text-slate-500 group-hover:text-cyan-400 transition">
                    <ExternalLink className="h-3 w-3" /> Open Link
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Textbooks */}
        {subject.textbooks && subject.textbooks.length > 0 && (
          <div className="bg-slate-950/40 border border-white/5 rounded-3xl p-6 shadow-md space-y-4">
            <h3 className="text-base font-extrabold text-white flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-cyan-500" />
              Standard Textbooks &amp; Reference Manuals
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {subject.textbooks.map((book, i) => {
                const pdfUrl = getDirectBookPdfUrl(book);
                return (
                  <a
                    key={i}
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-colors group"
                  >
                    <span className="text-base mt-0.5 shrink-0">📖</span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold text-cyan-300 group-hover:text-cyan-200 group-hover:underline leading-snug break-words">{book.title}</p>
                      {book.author && (
                        <p className="text-[10px] text-slate-500 mt-0.5 font-medium">by {book.author}</p>
                      )}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default SubjectDetails;
