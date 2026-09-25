"use client";
import { useEffect, useState } from "react";
const skills = ["Python", "SQL", "Power BI", "Excel", "Machine Learning"];

export default function Home() {
  const [selectedSkill, setSelectedSkill] = useState("All");
  const [activeSection, setActiveSection] = useState("home");
  const [projectFilter, setProjectFilter] = useState("All");
  const [selectedProjectSkill, setSelectedProjectSkill] = useState("All");
  const skillCards = [
    {
      name: "Python",
      category: "Programming",
      icon: "🐍",
      color: "text-indigo-400",
      glow: "bg-indigo-500/10",
      gradient: "from-indigo-500 to-blue-400",
      level: 85,
      description:
        "Using Python for data cleaning, exploratory analysis, visualization, and practical machine learning workflows.",
      tools: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
    },

    {
      name: "SQL",
      category: "Data Analytics",
      icon: "⌘",
      color: "text-cyan-400",
      glow: "bg-cyan-500/10",
      gradient: "from-cyan-400 to-blue-400",
      level: 80,
      description:
        "Working with structured data through cleaning, joins, CTEs, aggregations, and analytical investigations.",
      tools: ["Joins", "CTEs", "Aggregations", "Data Cleaning"],
    },

    {
      name: "Power BI",
      category: "Business Intelligence",
      icon: "▦",
      color: "text-amber-300",
      glow: "bg-amber-400/10",
      gradient: "from-amber-300 to-orange-400",
      level: 75,
      description:
        "Building interactive dashboards, KPI reports, and visual data stories that turn business data into insights.",
      tools: ["DAX", "Dashboards", "KPIs", "Data Modeling"],
    },

    {
      name: "Excel",
      category: "Analytics",
      icon: "▤",
      color: "text-emerald-400",
      glow: "bg-emerald-500/10",
      gradient: "from-emerald-400 to-cyan-400",
      level: 80,
      description:
        "Using spreadsheets for data cleaning, analysis, reporting, dashboards, and business-oriented problem solving.",
      tools: ["Pivot Tables", "Formulas", "Dashboards", "Forecasting"],
    },

    {
      name: "Machine Learning",
      category: "ML & AI",
      icon: "✦",
      color: "text-violet-400",
      glow: "bg-violet-500/10",
      gradient: "from-violet-400 to-indigo-400",
      level: 65,
      description:
        "Exploring practical predictive models and learning how data can be transformed into intelligent systems.",
      tools: ["Scikit-learn", "Random Forest", "Classification", "Prediction"],
    },
  ];

useEffect(() => {
  const handleScroll = () => {
    const sections = ["about", "skills", "projects", "experience", "contact"];

    let currentSection = "home";

    for (const section of sections) {
      const element = document.getElementById(section);

      if (element) {
        const rect = element.getBoundingClientRect();

        if (rect.top <= 180) {
          currentSection = section;
        }
      }
    }

    setActiveSection(currentSection);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <main className="pt-25 min-h-screen bg-[#070B14] text-white">

      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[400px] w-[400px] rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="absolute right-[-10%] top-[20%] h-[350px] w-[350px] rounded-full bg-cyan-400/10 blur-[120px]" />
      </div>

      {/* Navbar */}
      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
  <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-[#080c16]/80 px-5 shadow-2xl shadow-black/20 backdrop-blur-xl">

    {/* Logo */}
    <a
  href="/"
  className="group flex items-center"
  aria-label="Return to home"
>
  <span className="text-xl font-bold tracking-tight text-white transition group-hover:text-indigo-400">
    HH
  </span>
</a>

    {/* Navigation */}
    <div className="hidden items-center gap-1 md:flex">
      {[
        ["about", "About"],
        ["skills", "Skills"],
        ["projects", "Projects"],
        ["experience", "Experience"],
        ["contact", "Contact"],
      ].map(([id, label]) => (
        <a
          key={id}
          href={`#${id}`}
          className={`rounded-lg px-4 py-2 text-sm transition ${
            activeSection === id
              ? "bg-white/[0.07] text-white"
              : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
          }`}
        >
          {label}
        </a>
      ))}
    </div>

    {/* CTA */}
    <a
  href="#contact"
  className="..."
>
  Let's Connect
</a>

  </nav>
</header>


{/* HERO */}
<section
  id="home"
  className="relative flex min-h-[calc(100vh-100px)] items-center justify-center overflow-hidden px-6 py-20"
>
  {/* Background glow */}
  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/[0.07] blur-[150px]" />

  {/* ========================= */}
  {/* LEFT — REVENUE TREND */}
  {/* ========================= */}

  <div
    className="
      hero-card hero-card-left-1
      absolute left-[3%] top-[19%]
      hidden w-48
      -rotate-6
      rounded-2xl border border-white/10
      bg-white/[0.055]
      p-5
      shadow-2xl
      backdrop-blur-xl
      sm:block
    "
  >
    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
      Revenue Trend
    </p>

    <div className="mt-4 flex h-16 items-end gap-1.5">
      <div className="h-[30%] flex-1 rounded-t bg-indigo-400/30" />
      <div className="h-[43%] flex-1 rounded-t bg-indigo-400/40" />
      <div className="h-[38%] flex-1 rounded-t bg-indigo-400/50" />
      <div className="h-[60%] flex-1 rounded-t bg-indigo-400/60" />
      <div className="h-[67%] flex-1 rounded-t bg-indigo-400/70" />
      <div className="h-[88%] flex-1 rounded-t bg-cyan-300/90" />
    </div>

    <div className="mt-3 flex items-center justify-between">
      <span className="text-[10px] text-slate-500">
        Analytics
      </span>

      <span className="text-xs text-cyan-300">
        +24%
      </span>
    </div>
  </div>


  {/* ========================= */}
  {/* LEFT — CONVERSION */}
  {/* ========================= */}

  <div
    className="
      hero-card hero-card-left-2
      absolute left-[6%] top-[47%]
      hidden w-48
      rotate-3
      rounded-2xl border border-white/10
      bg-white/[0.055]
      p-5
      shadow-2xl
      backdrop-blur-xl
      md:block
    "
  >
    <div className="flex items-center justify-between">
      <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
        Conversion
      </p>

      <span className="h-2 w-2 rounded-full bg-cyan-300" />
    </div>

    <div className="mt-4 h-16">
      <svg
        viewBox="0 0 180 60"
        className="h-full w-full"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M2 48 C20 43, 28 45, 43 39 S65 42, 78 32 S102 36, 115 25 S138 28, 155 15 S168 12, 178 7"
          stroke="currentColor"
          strokeWidth="2.5"
          className="text-cyan-300"
        />

        <path
          d="M2 48 C20 43, 28 45, 43 39 S65 42, 78 32 S102 36, 115 25 S138 28, 155 15 S168 12, 178 7 V60 H2 Z"
          fill="currentColor"
          className="text-cyan-300/[0.06]"
        />
      </svg>
    </div>

    <div className="mt-2 flex justify-between">
      <span className="text-[10px] text-slate-500">
        Performance
      </span>

      <span className="text-xs text-cyan-300">
        +18%
      </span>
    </div>
  </div>


  {/* ========================= */}
  {/* LEFT — PROJECTS */}
  {/* ========================= */}

  <div
    className="
      hero-card hero-card-left-3
      absolute bottom-[10%] left-[12%]
      hidden w-48
      -rotate-3
      rounded-2xl border border-white/10
      bg-white/[0.055]
      p-5
      shadow-2xl
      backdrop-blur-xl
      lg:block
    "
  >
    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
      Projects
    </p>

    <div className="mt-3 flex items-end gap-3">
      <span className="text-3xl font-semibold text-white">
        08+
      </span>

      <span className="pb-1 text-xs leading-4 text-slate-500">
        Built &
        <br />
        documented
      </span>
    </div>

    <div className="mt-4 h-px bg-white/10" />

    <p className="mt-3 text-[10px] text-slate-500">
      Data · Analytics · ML
    </p>
  </div>


  {/* ========================= */}
  {/* RIGHT — MODEL PERFORMANCE */}
  {/* ========================= */}

  <div
    className="
      hero-card hero-card-right-1
      absolute right-[4%] top-[18%]
      hidden w-52
      rotate-6
      rounded-2xl border border-white/10
      bg-white/[0.055]
      p-5
      shadow-2xl
      backdrop-blur-xl
      sm:block
    "
  >
    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
      Model Performance
    </p>

    <div className="mt-4 flex items-center gap-4">
      <div className="relative h-14 w-14 rounded-full border-[6px] border-indigo-400/20">
        <div
          className="
            absolute inset-0
            rounded-full
            border-[6px]
            border-transparent
            border-t-cyan-300
            border-r-indigo-400
            -rotate-12
          "
        />
      </div>

      <div>
        <p className="text-sm font-medium text-white">
          ML
        </p>

        <p className="mt-1 text-xs leading-4 text-slate-500">
          Predictive
          <br />
          models
        </p>
      </div>
    </div>

    <div className="mt-4 flex items-center justify-between">
      <span className="text-[10px] text-slate-500">
        Accuracy
      </span>

      <span className="text-xs text-cyan-300">
        92%
      </span>
    </div>
  </div>


  {/* ========================= */}
  {/* RIGHT — CUSTOMER GROWTH */}
  {/* ========================= */}

  <div
    className="
      hero-card hero-card-right-2
      absolute right-[7%] top-[48%]
      hidden w-48
      -rotate-3
      rounded-2xl border border-white/10
      bg-white/[0.055]
      p-5
      shadow-2xl
      backdrop-blur-xl
      md:block
    "
  >
    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
      Customer Growth
    </p>

    <div className="mt-4 h-14">
      <svg
        viewBox="0 0 180 55"
        className="h-full w-full"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M2 45 C20 42, 27 35, 43 38 S66 29, 80 31 S103 21, 118 23 S139 13, 153 17 S168 8, 178 4"
          stroke="currentColor"
          strokeWidth="2.5"
          className="text-cyan-300"
        />
      </svg>
    </div>

    <div className="mt-2 flex justify-between">
      <span className="text-[10px] text-slate-500">
        Growth analysis
      </span>

      <span className="text-xs text-cyan-300">
        +31%
      </span>
    </div>
  </div>


  {/* ========================= */}
  {/* RIGHT — TOOLKIT */}
  {/* ========================= */}

  <div
    className="
      hero-card hero-card-right-3
      absolute bottom-[9%] right-[13%]
      hidden w-52
      rotate-3
      rounded-2xl border border-white/10
      bg-white/[0.055]
      p-5
      shadow-2xl
      backdrop-blur-xl
      lg:block
    "
  >
    <div className="flex items-center justify-between">
      <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
        Toolkit
      </p>

      <span className="h-2 w-2 rounded-full bg-cyan-300" />
    </div>

    <div className="mt-4 flex flex-wrap gap-2">
      <span className="rounded-lg bg-white/[0.06] px-3 py-2 text-[10px] text-slate-400">
        Python
      </span>

      <span className="rounded-lg bg-white/[0.06] px-3 py-2 text-[10px] text-slate-400">
        SQL
      </span>

      <span className="rounded-lg bg-white/[0.06] px-3 py-2 text-[10px] text-slate-400">
        Power BI
      </span>

      <span className="rounded-lg bg-white/[0.06] px-3 py-2 text-[10px] text-slate-400">
        ML
      </span>
    </div>

    <p className="mt-4 text-[10px] text-slate-500">
      Data → Insight → Intelligence
    </p>
  </div>


  {/* ========================= */}
  {/* MAIN HERO */}
  {/* ========================= */}

  <div className="relative z-10 mx-auto max-w-6xl text-center">

    <p className="mb-7 text-xs font-medium uppercase tracking-[0.35em] text-indigo-300 sm:text-sm">
      Data · Analytics · Machine Learning · AI
    </p>

    <h1
      className="
        text-[clamp(4.5rem,13vw,11rem)]
        font-semibold
        leading-[0.82]
        tracking-[-0.07em]
      "
    >
      <span className="block text-white">
        HRIDYA
      </span>

      <span
        className="
          block
          bg-gradient-to-r
          from-indigo-400
          via-blue-400
          to-cyan-300
          bg-clip-text
          text-transparent
        "
      >
        HIRAWAT
      </span>
    </h1>

    <p className="mx-auto mt-8 max-w-md text-base text-slate-400 sm:text-lg">
      Building with data. Learning by building.
    </p>

    <a
      href="#projects"
      className="
        mt-8
        inline-flex
        items-center
        gap-2
        text-sm
        font-medium
        text-white
        transition
        duration-300
        hover:-translate-y-0.5
        hover:text-indigo-300
      "
    >
      Explore my work
      <span className="text-lg">
        ↓
      </span>
    </a>

  </div>
</section>

<section
  id="about"
  className="mx-auto max-w-7xl px-6 py-24 lg:px-10"
>
  {/* Section heading */}
  <div className="mb-10">
    <p className="text-sm uppercase tracking-[0.2em] text-indigo-400">
      About Me
    </p>

    <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
      Data, analytics & intelligent systems.
    </h2>
  </div>

  {/* Professional identity */}
  <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">

    {/* Main introduction */}
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl sm:p-10">

      {/* Subtle glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative">

        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-indigo-400/20 bg-indigo-400/10 px-3 py-1 text-xs text-indigo-300">
            Electrical & Electronics Engineering
          </span>

          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
            Data & AI
          </span>
        </div>

        <h3 className="mt-7 text-2xl font-semibold sm:text-3xl">
          From engineering to data-driven problem solving.
        </h3>

        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
          I'm Hridya Hirawat, an Electrical and Electronics Engineering
          student exploring the intersection of data, technology, and
          intelligent systems.
        </p>

        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          I enjoy taking raw data, business questions, and ideas and
          turning them into something useful — from interactive
          dashboards and analytical projects to machine learning
          solutions.
        </p>

        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          My portfolio is a record of that journey: learning by
          building, working with real-world data, and continuously
          expanding from analytics toward AI.
        </p>

        {/* Career direction */}
        <div className="mt-8 grid gap-3 sm:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Foundation
            </p>
            <p className="mt-2 text-sm font-medium text-slate-200">
              Engineering
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Focus
            </p>
            <p className="mt-2 text-sm font-medium text-slate-200">
              Data & Analytics
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Direction
            </p>
            <p className="mt-2 text-sm font-medium text-slate-200">
              ML & AI
            </p>
          </div>

        </div>

        {/* Skill chips */}
        <div className="mt-7 flex flex-wrap gap-2">

          {[
            "Python",
            "SQL",
            "Power BI",
            "Excel",
            "Pandas",
            "Machine Learning",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-400 transition hover:border-indigo-400/30 hover:text-slate-200"
            >
              {skill}
            </span>
          ))}

        </div>

      </div>
    </div>

    {/* Profile image */}
    <div className="relative min-h-[500px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl">

      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/15 via-transparent to-cyan-400/10" />

      <img
        src="/images/profile.jpeg"
        alt="Hridya Hirawat"
        className="relative h-full min-h-[500px] w-full object-cover object-top"
      />

      {/* Image label */}
      <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/50 p-4 backdrop-blur-md">
        <p className="text-xs uppercase tracking-[0.18em] text-indigo-300">
          Currently building
        </p>

        <p className="mt-1 text-sm text-slate-200">
          Data analytics → Machine Learning → AI
        </p>
      </div>

    </div>

  </div>
</section>
  {/* Beyond the Screen */}
<section
  id="hobbies"
  className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10"
>
  {/* Section heading */}
  <div className="mb-12 max-w-3xl">
    <p className="text-xs font-medium uppercase tracking-[0.35em] text-cyan-300 sm:text-sm">
      Beyond the screen
    </p>

    <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
      What keeps me moving.
    </h2>

    <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
      When I'm not working with data, you'll usually find me exploring,
      competing, building, or staying active.
    </p>
  </div>

  {/* Main layout */}
  <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">

    {/* Travel — large visual card */}
    <div className="group relative min-h-[520px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
      
      {/* Image */}
      <img
        src="/images/travel.jpeg"
        alt="Travel"
        className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
      />

      {/* Dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

      {/* Glow */}
      <div className="absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-[100px] transition duration-700 group-hover:bg-cyan-400/20" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-300">
            01 / 04 · Travel
          </p>

          <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-xs text-slate-300 backdrop-blur-md">
            Explore
          </span>
        </div>

        <h3 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          Exploring beyond the screen.
        </h3>

        <p className="mt-3 max-w-lg text-sm leading-6 text-slate-300 sm:text-base">
          Discovering new places, experiences, and perspectives.
        </p>
      </div>
    </div>

    {/* Hobby cards */}
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

      {/* Snooker */}
      <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-purple-400/30 hover:bg-white/[0.055]">
        
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-400/10 text-xl transition duration-500 group-hover:scale-110 group-hover:rotate-6">
          🎱
        </div>

        <p className="mt-7 text-xs uppercase tracking-[0.25em] text-purple-300">
          02 / 04
        </p>

        <h3 className="mt-3 text-xl font-semibold text-white">
          Snooker
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-400">
          A game of patience, precision, focus, and strategy.
        </p>

        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-purple-500/10 blur-3xl transition duration-500 group-hover:bg-purple-500/20" />
      </div>

      {/* Vibe Coding */}
      <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.055]">
        
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-xl transition duration-500 group-hover:scale-110 group-hover:-rotate-6">
          💻
        </div>

        <p className="mt-7 text-xs uppercase tracking-[0.25em] text-cyan-300">
          03 / 04
        </p>

        <h3 className="mt-3 text-xl font-semibold text-white">
          Vibe Coding
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-400">
          Turning ideas into experiments, projects, and working prototypes.
        </p>

        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-500/10 blur-3xl transition duration-500 group-hover:bg-cyan-500/20" />
      </div>

      {/* Fitness */}
      <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-emerald-400/30 hover:bg-white/[0.055]">
        
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-xl transition duration-500 group-hover:scale-110 group-hover:rotate-6">
          🏋️
        </div>

        <p className="mt-7 text-xs uppercase tracking-[0.25em] text-emerald-300">
          04 / 04
        </p>

        <h3 className="mt-3 text-xl font-semibold text-white">
          Fitness
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-400">
          Staying active and continuously working on strength and consistency.
        </p>

        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-500/10 blur-3xl transition duration-500 group-hover:bg-emerald-500/20" />
      </div>

      {/* Small travel / exploration card */}
      <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/[0.08] to-cyan-400/[0.04] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-indigo-400/30">
        
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-400/10 text-xl transition duration-500 group-hover:scale-110">
            🌍
          </div>

          <span className="text-xs text-slate-600">
            04+
          </span>
        </div>

        <h3 className="mt-7 text-xl font-semibold text-white">
          Always exploring
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-400">
          New places, new ideas, new things to build.
        </p>

        {/* Decorative line */}
        <div className="mt-6 h-px w-full bg-gradient-to-r from-indigo-400/40 via-cyan-300/20 to-transparent" />
      </div>

    </div>
  </div>
</section>


<section
  id="skills"
  className="mx-auto max-w-7xl px-6 py-28 lg:px-10"
>
  {/* Heading */}
  <div className="mb-12">
    <p className="text-sm uppercase tracking-[0.25em] text-indigo-400">
      Skills
    </p>

    <h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
      Tools I use to turn{" "}
      <span className="bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">
        data into decisions.
      </span>
    </h2>

    <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
      A growing toolkit across analytics, business intelligence,
      programming, and machine learning.
    </p>
  </div>

  {/* Skill filters */}
  <div className="mb-10 flex flex-wrap gap-3">
    {[
      "All",
      "Python",
      "SQL",
      "Power BI",
      "Excel",
      "Machine Learning",
    ].map((skill) => (
      <button
        key={skill}
        onClick={() => setSelectedSkill(skill)}
        className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
          selectedSkill === skill
            ? "border-indigo-400/50 bg-indigo-400/15 text-indigo-300 shadow-lg shadow-indigo-500/10"
            : "border-white/10 bg-white/[0.035] text-slate-400 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
        }`}
      >
        {skill}
      </button>
    ))}
  </div>

  {/* Skill cards */}
  <div className="grid gap-5 md:grid-cols-2">
    {skillCards
      .filter(
        (skill) =>
          selectedSkill === "All" || skill.name === selectedSkill
      )
      .map((skill) => (
        <div
          key={skill.name}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-indigo-400/30 hover:bg-white/[0.055] hover:shadow-2xl hover:shadow-indigo-500/[0.08]"
        >
          {/* Glow */}
          <div
            className={`absolute -right-20 -top-20 h-48 w-48 rounded-full blur-3xl transition-all duration-500 group-hover:scale-125 ${skill.glow}`}
          />

          <div className="relative">
            {/* Top row */}
            <div className="flex items-start justify-between">
              <div>
                <p className={`text-xs uppercase tracking-[0.22em] ${skill.color}`}>
                  {skill.category}
                </p>

                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {skill.name}
                </h3>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-lg transition duration-500 group-hover:scale-110 group-hover:rotate-3">
                {skill.icon}
              </div>
            </div>

            {/* Description */}
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
              {skill.description}
            </p>

            {/* Technologies */}
            <div className="mt-6 flex flex-wrap gap-2">
              {skill.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-lg border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-slate-400 transition group-hover:border-white/15 group-hover:text-slate-300"
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* Skill level */}
            <div className="mt-7">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.15em] text-slate-500">
                  Current focus
                </span>

                <span className={`text-xs ${skill.color}`}>
                  {skill.level}%
                </span>
              </div>

              <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${skill.gradient} transition-all duration-1000 group-hover:brightness-125`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
  </div>

  {/* Bottom note */}
  <div className="mt-8 flex items-center gap-3 text-sm text-slate-500">
    <span className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />
    Continuously learning, experimenting, and building.
  </div>
</section>  


<section
  id="projects"
  className="mx-auto max-w-7xl px-6 py-24 lg:px-10"
>
  {/* Heading */}
  <div className="mb-10">
    <p className="text-sm uppercase tracking-[0.2em] text-indigo-400">
      Projects
    </p>

    <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
      Selected work.
    </h2>

    <p className="mt-4 max-w-2xl leading-7 text-slate-400">
      Projects built across data analytics, business intelligence,
      Python, SQL, Excel, and machine learning.
    </p>
  </div>


  {/* Skill Filters */}
  <div className="mb-10 flex flex-wrap gap-3">

    <button
      onClick={() => setProjectFilter("All")}
      className={`rounded-full border px-5 py-2.5 text-sm transition ${
        projectFilter === "All"
          ? "border-indigo-400/50 bg-indigo-400/10 text-indigo-300"
          : "border-white/10 bg-white/[0.04] text-slate-400 hover:border-indigo-400/30 hover:text-white"
      }`}
    >
      All
    </button>

    <button
      onClick={() => setProjectFilter("Python")}
      className={`rounded-full border px-5 py-2.5 text-sm transition ${
        projectFilter === "Python"
          ? "border-indigo-400/50 bg-indigo-400/10 text-indigo-300"
          : "border-white/10 bg-white/[0.04] text-slate-400 hover:border-indigo-400/30 hover:text-white"
      }`}
    >
      Python
    </button>

    <button
      onClick={() => setProjectFilter("SQL")}
      className={`rounded-full border px-5 py-2.5 text-sm transition ${
        projectFilter === "SQL"
          ? "border-indigo-400/50 bg-indigo-400/10 text-indigo-300"
          : "border-white/10 bg-white/[0.04] text-slate-400 hover:border-indigo-400/30 hover:text-white"
      }`}
    >
      SQL
    </button>

    <button
      onClick={() => setProjectFilter("Excel")}
      className={`rounded-full border px-5 py-2.5 text-sm transition ${
        projectFilter === "Excel"
          ? "border-indigo-400/50 bg-indigo-400/10 text-indigo-300"
          : "border-white/10 bg-white/[0.04] text-slate-400 hover:border-indigo-400/30 hover:text-white"
      }`}
    >
      Excel
    </button>

    <button
      onClick={() => setProjectFilter("Power BI")}
      className={`rounded-full border px-5 py-2.5 text-sm transition ${
        projectFilter === "Power BI"
          ? "border-indigo-400/50 bg-indigo-400/10 text-indigo-300"
          : "border-white/10 bg-white/[0.04] text-slate-400 hover:border-indigo-400/30 hover:text-white"
      }`}
    >
      Power BI
    </button>

    <button
      onClick={() => setProjectFilter("Machine Learning")}
      className={`rounded-full border px-5 py-2.5 text-sm transition ${
        projectFilter === "Machine Learning"
          ? "border-indigo-400/50 bg-indigo-400/10 text-indigo-300"
          : "border-white/10 bg-white/[0.04] text-slate-400 hover:border-indigo-400/30 hover:text-white"
      }`}
    >
      Machine Learning
    </button>

  </div>


  {/* Project Grid */}
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

    {/* ================= RETAIL ================= */}
    {(projectFilter === "All" || projectFilter === "Excel") && (
      <a
        href="https://github.com/HRIDYA03/Retail-Sales-Excel-Dashboard"
        target="_blank"
        rel="noopener noreferrer"
        className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] transition-all duration-500 hover:-translate-y-2 hover:border-indigo-400/40 hover:bg-white/[0.055]"
      >
        {/* COVER IMAGE */}
        <div className="aspect-video overflow-hidden bg-slate-900">
          <img
            src="../images/1.png"
            alt="Retail Sales Dashboard"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        <div className="p-6">

          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-indigo-400/10 px-3 py-1 text-xs text-indigo-300">
              Excel
            </span>

            <span className="rounded-full bg-white/[0.05] px-3 py-1 text-xs text-slate-400">
              Data Analytics
            </span>
          </div>

          <h3 className="text-xl font-semibold text-white">
            Retail Sales Dashboard
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            Interactive Excel dashboard for analyzing retail sales
            performance, trends, and KPIs.
          </p>

          <div className="mt-6 flex items-center justify-between">
            <span className="text-sm text-slate-500">
              View on GitHub
            </span>

            <span className="text-indigo-400 transition group-hover:translate-x-1">
              →
            </span>
          </div>

        </div>
      </a>
    )}


    {/* ================= EXECUTIVE KPI ================= */}
    {(projectFilter === "All" || projectFilter === "Excel") && (
      <a
        href="https://github.com/HRIDYA03/Executive-KPI-Forecasting-Workbook"
        target="_blank"
        rel="noopener noreferrer"
        className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] transition-all duration-500 hover:-translate-y-2 hover:border-indigo-400/40 hover:bg-white/[0.055]"
      >
        {/* COVER IMAGE */}
        <div className="aspect-video overflow-hidden bg-slate-900">
          <img
            src="../images/2.png"
            alt="Executive KPI and Forecasting Workbook"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        <div className="p-6">

          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-indigo-400/10 px-3 py-1 text-xs text-indigo-300">
              Excel
            </span>

            <span className="rounded-full bg-white/[0.05] px-3 py-1 text-xs text-slate-400">
              Forecasting
            </span>
          </div>

          <h3 className="text-xl font-semibold text-white">
            Executive KPI & Forecasting Workbook
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            Executive-focused workbook combining KPI analysis,
            performance tracking, and forecasting.
          </p>

          <div className="mt-6 flex items-center justify-between">
            <span className="text-sm text-slate-500">
              View on GitHub
            </span>

            <span className="text-indigo-400 transition group-hover:translate-x-1">
              →
            </span>
          </div>

        </div>
      </a>
    )}


    {/* ================= SQL CLEANING ================= */}
    {(projectFilter === "All" || projectFilter === "SQL") && (
      <a
        href="https://github.com/HRIDYA03/Sales-Data-Cleaning-Data-Quality-Analysis"
        target="_blank"
        rel="noopener noreferrer"
        className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.055]"
      >
        {/* COVER IMAGE */}
        <div className="aspect-video overflow-hidden bg-slate-900">
          <img
            src="../images/3.png"
            alt="SQL Sales Data Cleaning"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        <div className="p-6">

          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
              SQL
            </span>

            <span className="rounded-full bg-white/[0.05] px-3 py-1 text-xs text-slate-400">
              Data Cleaning
            </span>
          </div>

          <h3 className="text-xl font-semibold text-white">
            SQL Sales Data Cleaning
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            SQL project focused on cleaning, transforming,
            and preparing sales data for analysis.
          </p>

          <div className="mt-6 flex items-center justify-between">
            <span className="text-sm text-slate-500">
              View on GitHub
            </span>

            <span className="text-cyan-400 transition group-hover:translate-x-1">
              →
            </span>
          </div>

        </div>
      </a>
    )}


    {/* ================= CUSTOMER CHURN ================= */}
    {(projectFilter === "All" || projectFilter === "SQL") && (
      <a
        href="https://github.com/HRIDYA03/Customer-Churn-SQL-Investigation"
        target="_blank"
        rel="noopener noreferrer"
        className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] transition-all duration-500 hover:-translate-y-2 hover:border-indigo-400/40 hover:bg-white/[0.055]"
      >
        {/* COVER IMAGE */}
        <div className="aspect-video overflow-hidden bg-slate-900">
          <img
            src="../images/4.png"
            alt="Customer Churn SQL Investigation"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        <div className="p-6">

          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-indigo-400/10 px-3 py-1 text-xs text-indigo-300">
              SQL
            </span>

            <span className="rounded-full bg-white/[0.05] px-3 py-1 text-xs text-slate-400">
              Customer Analytics
            </span>
          </div>

          <h3 className="text-xl font-semibold text-white">
            Customer Churn SQL Investigation
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            SQL investigation exploring customer behavior,
            churn patterns, and customer segmentation.
          </p>

          <div className="mt-6 flex items-center justify-between">
            <span className="text-sm text-slate-500">
              View on GitHub
            </span>

            <span className="text-indigo-400 transition group-hover:translate-x-1">
              →
            </span>
          </div>

        </div>
      </a>
    )}


    {/* ================= E-COMMERCE ================= */}
    {(projectFilter === "All" || projectFilter === "SQL") && (
      <a
        href="https://github.com/HRIDYA03/E-commerce-Customer-Behavior-SQL-Analysis"
        target="_blank"
        rel="noopener noreferrer"
        className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.055]"
      >
        {/* COVER IMAGE */}
        <div className="aspect-video overflow-hidden bg-slate-900">
          <img
            src="../images/5.png"
            alt="E-commerce Customer Behavior Analysis"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        <div className="p-6">

          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
              SQL
            </span>

            <span className="rounded-full bg-white/[0.05] px-3 py-1 text-xs text-slate-400">
              Customer Analytics
            </span>
          </div>

          <h3 className="text-xl font-semibold text-white">
            E-commerce Customer Behavior Analysis
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            SQL analysis of customer purchasing behavior,
            retention, cohorts, revenue, and customer value.
          </p>

          <div className="mt-6 flex items-center justify-between">
            <span className="text-sm text-slate-500">
              View on GitHub
            </span>

            <span className="text-cyan-400 transition group-hover:translate-x-1">
              →
            </span>
          </div>

        </div>
      </a>
    )}


    {/* ================= PYTHON CLEANING ================= */}
    {(projectFilter === "All" || projectFilter === "Python") && (
      <a
        href="https://github.com/HRIDYA03/Python-data-Cleaning"
        target="_blank"
        rel="noopener noreferrer"
        className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] transition-all duration-500 hover:-translate-y-2 hover:border-indigo-400/40 hover:bg-white/[0.055]"
      >
        {/* COVER IMAGE */}
        <div className="aspect-video overflow-hidden bg-slate-900">
          <img
            src="../images/6.png"
            alt="Python Data Cleaning"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        <div className="p-6">

          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-indigo-400/10 px-3 py-1 text-xs text-indigo-300">
              Python
            </span>

            <span className="rounded-full bg-white/[0.05] px-3 py-1 text-xs text-slate-400">
              Pandas
            </span>
          </div>

          <h3 className="text-xl font-semibold text-white">
            Python Data Cleaning
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            Real-world Python and pandas data cleaning and
            preprocessing project.
          </p>

          <div className="mt-6 flex items-center justify-between">
            <span className="text-sm text-slate-500">
              View on GitHub
            </span>

            <span className="text-indigo-400 transition group-hover:translate-x-1">
              →
            </span>
          </div>

        </div>
      </a>
    )}


    {/* ================= PYTHON EDA ================= */}
    {(projectFilter === "All" || projectFilter === "Python") && (
      <a
        href="https://github.com/HRIDYA03/Python-Exploratory-Data-Analysis"
        target="_blank"
        rel="noopener noreferrer"
        className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.055]"
      >
        {/* COVER IMAGE */}
        <div className="aspect-video overflow-hidden bg-slate-900">
          <img
            src="../images/7.png"
            alt="Python Exploratory Data Analysis"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        <div className="p-6">

          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
              Python
            </span>

            <span className="rounded-full bg-white/[0.05] px-3 py-1 text-xs text-slate-400">
              EDA
            </span>
          </div>

          <h3 className="text-xl font-semibold text-white">
            Python Exploratory Data Analysis
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            Exploratory analysis focused on discovering
            patterns, trends, and insights from data.
          </p>

          <div className="mt-6 flex items-center justify-between">
            <span className="text-sm text-slate-500">
              View on GitHub
            </span>

            <span className="text-cyan-400 transition group-hover:translate-x-1">
              →
            </span>
          </div>

        </div>
      </a>
    )}


    {/* ================= ZEPTO ================= */}
    {(projectFilter === "All" || projectFilter === "Power BI") && (
      <a
        href="https://github.com/HRIDYA03/zepto-quick-commerce-bi-dashboard"
        target="_blank"
        rel="noopener noreferrer"
        className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] transition-all duration-500 hover:-translate-y-2 hover:border-indigo-400/40 hover:bg-white/[0.055]"
      >
        {/* COVER IMAGE */}
        <div className="aspect-video overflow-hidden bg-slate-900">
          <img
            src="../images/8.png"
            alt="Zepto Quick-Commerce BI Dashboard"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        <div className="p-6">

          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-indigo-400/10 px-3 py-1 text-xs text-indigo-300">
              Power BI
            </span>

            <span className="rounded-full bg-white/[0.05] px-3 py-1 text-xs text-slate-400">
              DAX
            </span>

            <span className="rounded-full bg-white/[0.05] px-3 py-1 text-xs text-slate-400">
              Power Query
            </span>
          </div>

          <h3 className="text-xl font-semibold text-white">
            Zepto Quick-Commerce BI Dashboard
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            Interactive Power BI dashboard analyzing revenue,
            products, cities, pricing, discounts, and influencer activity.
          </p>

          <div className="mt-6 flex items-center justify-between">
            <span className="text-sm text-slate-500">
              View on GitHub
            </span>

            <span className="text-indigo-400 transition group-hover:translate-x-1">
              →
            </span>
          </div>

        </div>
      </a>
    )}


    {/* ================= SMART ENERGY ================= */}
    {(projectFilter === "All" || projectFilter === "Python" || projectFilter === "Machine Learning") && (
      <a
        href="https://github.com/HRIDYA03/Smart-Energy-Analyzer"
        target="_blank"
        rel="noopener noreferrer"
        className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.055]"
      >
        {/* COVER IMAGE */}
        <div className="aspect-video overflow-hidden bg-slate-900">
          <img
            src="../images/9.png"
            alt="Smart Energy Analyzer"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        <div className="p-6">

          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
              Python
            </span>

            <span className="rounded-full bg-indigo-400/10 px-3 py-1 text-xs text-indigo-300">
              Machine Learning
            </span>
          </div>

          <h3 className="text-xl font-semibold text-white">
            Smart Energy Analyzer
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            End-to-end energy consumption analysis and
            forecasting project.
          </p>

          <div className="mt-6 flex items-center justify-between">
            <span className="text-sm text-slate-500">
              View on GitHub
            </span>

            <span className="text-cyan-400 transition group-hover:translate-x-1">
              →
            </span>
          </div>

        </div>
      </a>
    )}

  </div>
</section>

      {/* Education */}
<section
  id="education"
  className="mx-auto max-w-7xl px-6 py-24 lg:px-10"
>
  {/* Heading */}
  <div className="mb-16">
    <p className="text-sm uppercase tracking-[0.2em] text-indigo-400">
      Education
    </p>

    <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
      The foundation behind what I build.
    </h2>

    <p className="mt-4 max-w-2xl leading-7 text-slate-400">
      From school foundations to engineering, each stage has shaped
      how I approach technical and analytical problems.
    </p>
  </div>

  {/* Timeline */}
  <div className="relative">

    {/* Timeline line */}
    <div className="absolute left-[11px] top-3 bottom-3 hidden w-px bg-gradient-to-b from-indigo-400/60 via-cyan-400/40 to-transparent md:block" />

    <div className="space-y-10">

      {/* 01 — Secondary */}
      <div className="relative md:pl-12">

        {/* Dot */}
        <div className="absolute left-[5px] top-8 hidden h-3.5 w-3.5 rounded-full border-2 border-indigo-300 bg-slate-950 shadow-[0_0_18px_rgba(129,140,248,0.6)] md:block" />

        <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-white/[0.045]">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-indigo-300">
                2018 — 2019
              </p>

              <h3 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
                Secondary Examination
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                CBSE Board · Mahavir Senior Model School, Delhi
              </p>
            </div>

            <div className="w-fit rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3">
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                Score
              </p>

              <p className="mt-1 text-2xl font-semibold text-white">
                94.4%
              </p>
            </div>

          </div>

        </div>
      </div>


      {/* 02 — Senior Secondary */}
      <div className="relative md:pl-12">

        {/* Dot */}
        <div className="absolute left-[5px] top-8 hidden h-3.5 w-3.5 rounded-full border-2 border-indigo-300 bg-slate-950 shadow-[0_0_18px_rgba(129,140,248,0.6)] md:block" />

        <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-white/[0.045]">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-indigo-300">
                2020 — 2021
              </p>

              <h3 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
                Senior Secondary Examination
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                CBSE Board · Mahavir Senior Model School, Delhi
              </p>
            </div>

            <div className="w-fit rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3">
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                Score
              </p>

              <p className="mt-1 text-2xl font-semibold text-white">
                94%
              </p>
            </div>

          </div>

        </div>
      </div>


      {/* 03 — B.Tech */}
      <div className="relative md:pl-12">

        {/* Dot */}
        <div className="absolute left-[3px] top-10 hidden h-[17px] w-[17px] rounded-full border-2 border-cyan-300 bg-slate-950 shadow-[0_0_22px_rgba(103,232,249,0.8)] md:block" />

        <div className="group overflow-hidden rounded-3xl border border-cyan-400/20 bg-white/[0.035] transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/40">

          <div className="grid md:grid-cols-[1fr_300px]">

            {/* Education information */}
            <div className="relative p-7 sm:p-9">

              {/* Glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-500/[0.08] blur-3xl transition duration-500 group-hover:bg-cyan-500/[0.14]" />

              <div className="relative z-10">

                <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
                  2022 — 2026
                </p>

                <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                  B.Tech — Electrical & Electronics Engineering
                </h3>

                <p className="mt-2 text-base text-slate-400">
                  Vellore Institute of Technology, Vellore Campus
                </p>

                {/* CGPA */}
                <div className="mt-7 w-fit rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.07] px-5 py-3">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-300">
                    Current CGPA
                  </p>

                  <p className="mt-1 text-2xl font-semibold text-white">
                    8.32
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-7 flex flex-wrap gap-2">

                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-400">
                    Electrical and Electroins Engineering
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-400">
                    Engineering
                  </span>

                </div>

              </div>
            </div>

            {/* Graduation photo */}
            <div className="relative min-h-[320px] overflow-hidden md:min-h-full">

              <img
                src="/images/graduation.jpeg"
                alt="Graduation"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/30 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 rounded-xl border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-md">

                <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-300">
                  VIT Vellore
                </p>

                <p className="mt-1 text-sm text-white">
                  Graduation
                </p>

              </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  </div>

</section>
{/* Experience */}
<section
  id="experience"
  className="mx-auto max-w-7xl px-6 py-24 lg:px-10"
>
  {/* Section heading */}
  <div className="mb-16">
    <p className="text-sm uppercase tracking-[0.2em] text-indigo-400">
      Experience
    </p>

    <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
      Building experience through people, projects, and practice.
    </h2>

    <p className="mt-4 max-w-2xl leading-7 text-slate-400">
      From student leadership and technical communities to internships
      and independent projects, every experience has added something
      to the way I approach problems and build solutions.
    </p>
  </div>

  {/* Timeline */}
  <div className="relative">

    {/* Vertical timeline line */}
    <div
      className="
        absolute
        left-[15px]
        top-4
        bottom-4
        hidden
        w-px
        bg-gradient-to-b
        from-indigo-400/60
        via-cyan-400/40
        to-indigo-400/10
        md:block
      "
    />

    <div className="space-y-10">

      {/* ================================================= */}
      {/* 01 — CORE MEMBER */}
      {/* ================================================= */}

      <div className="relative md:pl-12">

        {/* Timeline dot */}
        <div
          className="
            absolute
            left-[9px]
            top-8
            hidden
            h-3.5
            w-3.5
            rounded-full
            border-2
            border-indigo-400
            bg-slate-950
            shadow-[0_0_18px_rgba(99,102,241,0.6)]
            md:block
          "
        />

        <div
          className="
            group
            relative
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/[0.035]
            p-7
            transition-all
            duration-500
            hover:-translate-y-1
            hover:border-indigo-400/30
            hover:bg-white/[0.05]
          "
        >

          {/* Background glow */}
          <div
            className="
              pointer-events-none
              absolute
              -right-16
              -top-16
              h-40
              w-40
              rounded-full
              bg-indigo-500/10
              blur-3xl
              transition
              duration-500
              group-hover:bg-indigo-500/20
            "
          />

          <div className="relative">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-indigo-400">
                  Leadership
                </p>

                <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                  Core Member
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  IEEE TEMS · VIT Vellore
                </p>
              </div>

              <span
                className="
                  w-fit
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-3
                  py-1.5
                  text-xs
                  text-slate-400
                "
              >
                Sept 2022 — May 2025
              </span>

            </div>

            <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-400">
              Contributed to technical and educational activities,
              organized and promoted events, and worked with the
              student community to increase participation and
              campus engagement.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">

              <span className="rounded-full border border-indigo-400/15 bg-indigo-400/[0.06] px-3 py-1.5 text-xs text-indigo-300">
                Leadership
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-400">
                Event Organization
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-400">
                Teamwork
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-400">
                Communication
              </span>

            </div>

          </div>
        </div>
      </div>


      {/* ================================================= */}
      {/* 02 — STUDENT ORGANIZER */}
      {/* ================================================= */}

      <div className="relative md:pl-12">

        {/* Timeline dot */}
        <div
          className="
            absolute
            left-[9px]
            top-8
            hidden
            h-3.5
            w-3.5
            rounded-full
            border-2
            border-cyan-400
            bg-slate-950
            shadow-[0_0_18px_rgba(34,211,238,0.5)]
            md:block
          "
        />

        <div
          className="
            group
            relative
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/[0.035]
            p-7
            transition-all
            duration-500
            hover:-translate-y-1
            hover:border-cyan-400/30
            hover:bg-white/[0.05]
          "
        >

          <div
            className="
              pointer-events-none
              absolute
              -right-16
              -top-16
              h-40
              w-40
              rounded-full
              bg-cyan-500/10
              blur-3xl
              transition
              duration-500
              group-hover:bg-cyan-500/20
            "
          />

          <div className="relative">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

              <div>

                <p className="text-xs uppercase tracking-[0.22em] text-cyan-400">
                  Campus Experience
                </p>

                <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                  Student Organizer
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  VIT, Vellore
                </p>

              </div>

              <span
                className="
                  w-fit
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-3
                  py-1.5
                  text-xs
                  text-slate-400
                "
              >
                July — Sept 2023
              </span>

            </div>

            <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-400">
              Organized interactive events for freshers arriving on
              campus, contributing to event coordination, student
              engagement, and creating a welcoming experience for
              new students.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">

              <span className="rounded-full border border-cyan-400/15 bg-cyan-400/[0.06] px-3 py-1.5 text-xs text-cyan-300">
                Event Organization
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-400">
                Coordination
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-400">
                Communication
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-400">
                Teamwork
              </span>

            </div>

          </div>
        </div>
      </div>


      {/* ================================================= */}
      {/* 03 — INDEPENDENT PROJECTS */}
      {/* ================================================= */}

      <div className="relative md:pl-12">

        {/* Timeline dot */}
        <div
          className="
            absolute
            left-[9px]
            top-8
            hidden
            h-3.5
            w-3.5
            rounded-full
            border-2
            border-indigo-400
            bg-slate-950
            shadow-[0_0_18px_rgba(99,102,241,0.6)]
            md:block
          "
        />

        <div
          className="
            group
            relative
            overflow-hidden
            rounded-3xl
            border
            border-indigo-400/15
            bg-gradient-to-br
            from-indigo-500/[0.08]
            to-cyan-400/[0.04]
            p-7
            transition-all
            duration-500
            hover:-translate-y-1
            hover:border-indigo-400/35
          "
        >

          {/* Glow */}
          <div
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-56
              w-56
              rounded-full
              bg-indigo-500/10
              blur-3xl
              transition
              duration-500
              group-hover:bg-indigo-500/20
            "
          />

          <div className="relative">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

              <div>

                <p className="text-xs uppercase tracking-[0.22em] text-indigo-300">
                  Self-Directed
                </p>

                <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                  Independent Data Projects
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  Building, experimenting, and learning through projects
                </p>

              </div>

              <span
                className="
                  w-fit
                  rounded-full
                  border
                  border-indigo-400/20
                  bg-indigo-400/[0.06]
                  px-3
                  py-1.5
                  text-xs
                  text-indigo-300
                "
              >
                2025 — Present
              </span>

            </div>

            <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-400">
              A growing collection of data analytics, business
              intelligence, machine learning, and engineering projects
              focused on turning real-world problems into practical
              solutions.
            </p>

            {/* Project list */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              {[
                ["01", "Retail Sales Excel Dashboard"],
                ["02", "Executive KPI & Forecasting Workbook"],
                ["03", "SQL Sales Data Cleaning"],
                ["04", "Customer Churn SQL Investigation"],
                ["05", "E-commerce Customer Behavior Analysis"],
                ["06", "Python Data Cleaning"],
                ["07", "Python Exploratory Data Analysis"],
                ["08", "Zepto Quick-Commerce BI Dashboard"],
              ].map(([number, project]) => (

                <div
                  key={project}
                  className="
                    group/project
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/10
                    px-4
                    py-3
                    transition
                    duration-300
                    hover:border-indigo-400/25
                    hover:bg-white/[0.04]
                  "
                >

                  <span className="text-xs font-medium text-indigo-400">
                    {number}
                  </span>

                  <span
                    className="
                      text-sm
                      text-slate-300
                      transition
                      group-hover/project:text-white
                    "
                  >
                    {project}
                  </span>

                </div>

              ))}

            </div>

            {/* Skills */}
            <div className="mt-6 flex flex-wrap gap-2">

              {[
                "Python",
                "SQL",
                "Power BI",
                "Excel",
                "Pandas",
                "Machine Learning",
                "Data Analytics",
              ].map((skill) => (

                <span
                  key={skill}
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-3
                    py-1.5
                    text-xs
                    text-slate-400
                  "
                >
                  {skill}
                </span>

              ))}

            </div>

          </div>
        </div>
      </div>


      {/* ================================================= */}
      {/* 04 — SUMMER INTERNSHIP */}
      {/* ================================================= */}

      <div className="relative md:pl-12">

        {/* Timeline dot */}
        <div
          className="
            absolute
            left-[9px]
            top-8
            hidden
            h-3.5
            w-3.5
            rounded-full
            border-2
            border-indigo-400
            bg-slate-950
            shadow-[0_0_18px_rgba(99,102,241,0.6)]
            md:block
          "
        />

        <div
          className="
            group
            relative
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/[0.035]
            p-7
            transition-all
            duration-500
            hover:-translate-y-1
            hover:border-indigo-400/30
            hover:bg-white/[0.05]
          "
        >

          <div
            className="
              pointer-events-none
              absolute
              -right-16
              -top-16
              h-40
              w-40
              rounded-full
              bg-indigo-500/10
              blur-3xl
              transition
              duration-500
              group-hover:bg-indigo-500/20
            "
          />

          <div className="relative">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

              <div>

                <p className="text-xs uppercase tracking-[0.22em] text-indigo-400">
                  Internship
                </p>

                <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                  Summer Internship — Embedded Systems Design
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  Maven Silicon · Remote
                </p>

              </div>

              <span
                className="
                  w-fit
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-3
                  py-1.5
                  text-xs
                  text-slate-400
                "
              >
                June — July 2025
              </span>

            </div>

            <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-400">
              Developed a home automation system using an ESP32
              microcontroller, interfacing sensors and actuators and
              implementing control logic using Embedded C. The experience
              provided hands-on exposure to real-time IoT applications
              and microcontroller-based hardware design.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">

              <span className="rounded-full border border-indigo-400/15 bg-indigo-400/[0.06] px-3 py-1.5 text-xs text-indigo-300">
                ESP32
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-400">
                Embedded C
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-400">
                IoT
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-400">
                Sensors
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-400">
                Actuators
              </span>

            </div>

          </div>
        </div>
      </div>


      {/* ================================================= */}
      {/* 05 — LOOKING AHEAD */}
      {/* ================================================= */}

      <div className="relative md:pl-12">

        {/* Future glowing dot */}
        <div
          className="
            absolute
            left-[6px]
            top-8
            hidden
            h-5
            w-5
            rounded-full
            border
            border-cyan-300/60
            bg-cyan-400/20
            shadow-[0_0_25px_rgba(103,232,249,0.7)]
            md:block
            animate-pulse
          "
        />

        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-cyan-400/15
            bg-gradient-to-r
            from-cyan-400/[0.06]
            via-indigo-400/[0.05]
            to-transparent
            p-7
          "
        >

          <div className="relative">

            <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">
              Looking Ahead
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-white">
              Exciting things ahead.
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
              Looking for exciting future opportunities where I can
              continue learning, build meaningful solutions, work on
              real-world problems, and contribute to a strong team.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">

              <span className="rounded-full border border-cyan-400/15 bg-cyan-400/[0.06] px-3 py-1.5 text-xs text-cyan-300">
                Data Analytics
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-400">
                Data Science
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-400">
                Machine Learning
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-400">
                AI
              </span>

            </div>

          </div>
        </div>
      </div>

    </div>
  </div>

</section>

{/* Certifications */}
<section
  id="certifications"
  className="mx-auto max-w-7xl px-6 py-24 lg:px-10"
>
  {/* Section heading */}
  <div className="mb-10">
    <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
      Certifications
    </p>

    <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
      Certifications & practical learning.
    </h2>

    <p className="mt-4 max-w-2xl leading-7 text-slate-400">
      Credentials that complement my academic background and hands-on
      experience in data and analytics.
    </p>
  </div>

  {/* Certification cards */}
  <div className="grid gap-6 md:grid-cols-2">

    {/* Cisco */}
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-indigo-400/30 hover:bg-white/[0.055]">

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl transition duration-500 group-hover:bg-indigo-500/20" />

      {/* Header */}
      <div className="relative flex items-start justify-between">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-400/10 text-sm font-bold tracking-tight text-indigo-300">
          CISCO
        </div>

        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-500">
          July 2026
        </span>

      </div>

      {/* Content */}
      <div className="relative mt-7">

        <p className="text-xs uppercase tracking-[0.2em] text-indigo-400">
          Cisco
        </p>

        <h3 className="mt-3 text-xl font-semibold leading-7 text-white">
          Introduction to Data Science
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-400">
          An introduction to core data science concepts, analytical
          thinking, and working with data.
        </p>

      </div>

      {/* Skills */}
      <div className="relative mt-6 flex flex-wrap gap-2">

        <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs text-slate-400">
          Data Analysis
        </span>

        <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs text-slate-400">
          Microsoft Excel
        </span>

        <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs text-slate-400">
          Data Science
        </span>

        <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs text-slate-400">
          Analytics
        </span>

      </div>

      {/* Footer */}
      <div className="relative mt-8 flex items-center justify-between border-t border-white/10 pt-5">

        <p className="text-xs text-slate-500">
          Issued July 2026
        </p>

        {/* Add Cisco credential URL here later */}
        <a
          href="https://www.credly.com/badges/084c1380-04dd-4bfb-9779-a9e62e58cc42/linked_in_profile"
          target="_blank"
rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-400/10 px-4 py-2 text-xs font-medium text-indigo-300 transition hover:border-indigo-400/40 hover:bg-indigo-400/20 hover:text-indigo-200"
        >
          View Credential
          <span className="text-sm">↗</span>
        </a>

      </div>

    </div>


    {/* Deloitte / Forage */}
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.055]">

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl transition duration-500 group-hover:bg-cyan-500/20" />

      {/* Header */}
      <div className="relative flex items-start justify-between">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-sm font-bold tracking-tight text-cyan-300">
          F
        </div>

        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-500">
          July 2026
        </span>

      </div>

      {/* Content */}
      <div className="relative mt-7">

        <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
          Forage
        </p>

        <h3 className="mt-3 text-xl font-semibold leading-7 text-white">
          Deloitte Australia — Data Analytics Job Simulation
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-400">
          A practical data analytics job simulation focused on applying
          analytical skills to a real-world style business scenario.
        </p>

      </div>

      {/* Skills */}
      <div className="relative mt-6 flex flex-wrap gap-2">

        <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs text-slate-400">
          Data Analysis
        </span>

        <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs text-slate-400">
          Microsoft Excel
        </span>

        <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs text-slate-400">
          Business Analytics
        </span>

      </div>

      {/* Credential ID */}
      <p className="relative mt-5 text-xs text-slate-600">
        Credential ID: Th6gJZR3nx2x9enj4
      </p>

      {/* Footer */}
      <div className="relative mt-5 flex items-center justify-between border-t border-white/10 pt-5">

        <p className="text-xs text-slate-500">
          Issued July 2026
        </p>

        {/* Add Forage credential URL here later */}
        <a
          href="https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_69937ed3fc9eb2237761a716_1783157934846_completion_certificate.pdf"
          target="_blank"
rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium text-cyan-300 transition hover:border-cyan-400/40 hover:bg-cyan-400/20 hover:text-cyan-200"
        >
          View Credential
          <span className="text-sm">↗</span>
        </a>

      </div>

    </div>

  </div>
</section>

      {/* Contact */}
<section
  id="contact"
  className="mx-auto max-w-7xl px-6 py-24 lg:px-10"
>
  {/* Section heading */}
  <div className="mb-10">
    <p className="text-sm uppercase tracking-[0.2em] text-indigo-400">
      Contact
    </p>

    <h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
      Let&apos;s build something meaningful.
    </h2>

    <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
      Have a project, opportunity, collaboration, or simply want to
      connect? Feel free to reach out.
    </p>
  </div>

  {/* Main contact card */}
  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-8 shadow-2xl sm:p-10 lg:p-12">

    {/* Background glows */}
    <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

    <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

    <div className="relative">

      {/* Availability */}
      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs text-emerald-300">
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        Open to opportunities
      </div>

      {/* Main contact information */}
      <div className="mt-10 grid gap-5 md:grid-cols-2">

        {/* Phone */}
        <a
          href="tel:+918810419061"
          className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-white/[0.06]"
        >
          <div className="flex items-start justify-between">

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                ☎️Phone
              </p>

              <p className="mt-3 text-lg font-medium text-white">
                +91 88104 19061
              </p>
            </div>

            <span className="text-xl text-slate-500 transition duration-300 group-hover:translate-x-1 group-hover:text-indigo-300">
              ↗
            </span>

          </div>
        </a>

        {/* Email */}
        <a
          href="mailto:hirawathridya2@gmail.com"
          className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.06]"
        >
          <div className="flex items-start justify-between">

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                ✉Email
              </p>

              <p className="mt-3 break-all text-lg font-medium text-white">
                hirawathridya2@gmail.com
              </p>
            </div>

            <span className="text-xl text-slate-500 transition duration-300 group-hover:translate-x-1 group-hover:text-cyan-300">
              ↗
            </span>

          </div>
        </a>

      </div>

      {/* Social links */}
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        {/* GitHub */}
        <a
          href="https://github.com/HRIDYA03"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
        >
          <div className="flex items-center justify-between">

            <span className="text-xl">
              💻
            </span>

            <span className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-white">
              ↗
            </span>

          </div>

          <p className="mt-5 text-xs uppercase tracking-[0.18em] text-slate-500">
            GitHub
          </p>

          <p className="mt-2 text-sm font-medium text-white">
            View my work
          </p>
        </a>


        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/hridya-hirawat-b077722b6/"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.06]"
        >
          <div className="flex items-center justify-between">

            <span className="text-xl font-semibold text-blue-300">
              in
            </span>

            <span className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-blue-300">
              ↗
            </span>

          </div>

          <p className="mt-5 text-xs uppercase tracking-[0.18em] text-slate-500">
            LinkedIn
          </p>

          <p className="mt-2 text-sm font-medium text-white">
            Connect with me
          </p>
        </a>


        {/* Instagram */}
        <a
          href="https://www.instagram.com/hridyx.h/"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:-translate-y-1 hover:border-pink-400/30 hover:bg-white/[0.06]"
        >
          <div className="flex items-center justify-between">

            <span className="text-xl">
              📷
            </span>

            <span className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-pink-300">
              ↗
            </span>

          </div>

          <p className="mt-5 text-xs uppercase tracking-[0.18em] text-slate-500">
            Instagram
          </p>

          <p className="mt-2 text-sm font-medium text-white">
            Follow my journey
          </p>
        </a>


        {/* Resume */}
        <a
          href="#"
          className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.06]"
        >
          <div className="flex items-center justify-between">

            <span className="text-xl">
              ↳
            </span>

            <span className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-cyan-300">
              ↗
            </span>

          </div>

          <p className="mt-5 text-xs uppercase tracking-[0.18em] text-slate-500">
            Resume
          </p>

          <p className="mt-2 text-sm font-medium text-white">
            View my resume
          </p>
        </a>

      </div>

      {/* Bottom CTA */}
      <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <p className="text-sm font-medium text-white">
            Have something interesting in mind?
          </p>

          <p className="mt-1 text-sm text-slate-500">
            I&apos;d be happy to hear from you.
          </p>
        </div>

        <a
          href="mailto:hirawathridya2@gmail.com"
          className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-slate-200"
        >
          Get in touch
          <span className="text-lg">↗</span>
        </a>

      </div>

    </div>
  </div>

  {/* Footer */}
  <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">

    <p>
      © 2026 Hridya Hirawat
    </p>

    <p>
      Building with data. Learning by building.
    </p>

  </div>
</section>

    </main>
  );
}