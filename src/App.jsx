import { useEffect, useState } from "react";

function App() {
  const roles = [
    "CSE Student",
    "Problem Solver",
    "AI/ML Learner",
    "Future Software Engineer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timer = setTimeout(
      () => {
        if (!deleting) {
          setDisplayText(
            currentRole.substring(0, displayText.length + 1)
          );

          if (displayText === currentRole) {
            setDeleting(true);
          }
        } else {
          setDisplayText(
            currentRole.substring(0, displayText.length - 1)
          );

          if (displayText === "") {
            setDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      deleting
        ? 60
        : displayText === currentRole
        ? 1400
        : 100
    );

    return () => clearTimeout(timer);
  }, [displayText, deleting, roleIndex]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white">

      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-3xl" />

        <div className="absolute bottom-[-180px] right-[-180px] h-[420px] w-[420px] rounded-full bg-purple-600/10 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

          <a
            href="#home"
            className="text-2xl font-bold tracking-wide"
          >
            Karishma<span className="text-blue-400">.</span>
          </a>

          <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a
              href="#home"
              className="transition hover:text-blue-400"
            >
              Home
            </a>

            <a
              href="#about"
              className="transition hover:text-blue-400"
            >
              About
            </a>

            <a
              href="#activities"
              className="transition hover:text-blue-400"
            >
              Activities
            </a>

            <a
              href="#skills"
              className="transition hover:text-blue-400"
            >
              Skills
            </a>

            <a
              href="#profiles"
              className="transition hover:text-blue-400"
            >
              Profiles
            </a>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="mx-auto flex min-h-[90vh] max-w-6xl flex-col items-center justify-center px-6 py-16 text-center"
      >

        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
          Welcome to my portfolio
        </p>

        {/* SMALL ROUND PHOTO */}
        <div className="relative mb-8">

          {/* Outer glow */}
          <div className="absolute inset-[-12px] animate-pulse rounded-full bg-blue-500/20 blur-xl" />

          {/* Gradient border */}
          <div className="relative rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-400 p-[4px] shadow-2xl shadow-blue-500/20">

            <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-slate-950 sm:h-48 sm:w-48">

              <img
                src="/profile.jpeg"
                alt="Karishma"
                className="h-full w-full scale-[1.25] object-cover object-[50%_27%]"
              />

            </div>
          </div>

          {/* Small status dot */}
          <div className="absolute bottom-3 right-3 h-5 w-5 rounded-full border-4 border-slate-950 bg-green-400" />
        </div>

        <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl md:text-7xl">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Karishma
          </span>
          <span className="ml-2">👋</span>
        </h1>

        {/* Animated text */}
        <div className="mt-6 h-10 text-xl font-semibold text-slate-300 sm:text-2xl">
          {displayText}
          <span className="ml-1 animate-pulse text-blue-400">
            |
          </span>
        </div>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
          I'm a 2nd-year Computer Science and Engineering student
          at REVA University, building practical skills through
          coding, problem-solving, and project-based learning.
        </p>

        <p className="mt-4 text-sm text-slate-500">
          C • Java • Python • Git/GitHub • SQL • Web Development • AI/ML
        </p>

        {/* Buttons */}
        <div className="mt-9 flex flex-wrap justify-center gap-4">

          <a
            href="#activities"
            className="rounded-full bg-blue-500 px-7 py-3 font-semibold shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-400"
          >
            Explore My Journey
          </a>

          <a
            href="https://github.com/karishmanadaf87-bit"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-700 px-7 py-3 font-semibold text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:text-blue-400"
          >
            GitHub ↗
          </a>

        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce text-slate-600">
          ↓
        </div>

      </section>

      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20"
      >

        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 shadow-xl backdrop-blur md:p-10">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            About Me
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Learning by building.
          </h2>

          <p className="mt-6 max-w-4xl leading-8 text-slate-400">
            I’m a 2nd-year Computer Science and Engineering student
            at REVA University, building practical skills through
            coding, problem-solving, and project-based learning.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            I’m currently learning C, Java, Python, Git/GitHub,
            SQL, web development, and AI/ML concepts. I’m interested
            in building useful software projects and developing
            strong problem-solving skills for future internship
            opportunities.
          </p>

          {/* Education card */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">

            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
              <p className="text-sm text-slate-500">
                Education
              </p>

              <h3 className="mt-2 text-lg font-bold">
                B.Tech Computer Science & Engineering
              </h3>

              <p className="mt-1 text-slate-400">
                REVA University
              </p>

              <p className="mt-2 text-sm text-blue-400">
                2025 – 2029
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
              <p className="text-sm text-slate-500">
                Current Focus
              </p>

              <h3 className="mt-2 text-lg font-bold">
                Coding & Technology
              </h3>

              <p className="mt-2 text-slate-400">
                Problem solving, programming, AI/ML and
                software development.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= ACTIVITIES ================= */}
      <section
        id="activities"
        className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20"
      >

        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Portfolio Journey
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            My Activities
          </h2>

          <p className="mt-3 max-w-2xl text-slate-400">
            A record of the practical skills and activities I have
            worked on during my portfolio-building journey.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {/* Activity 1 */}
          <div className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-400/50">

            <div className="flex items-start justify-between">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-xl text-blue-400">
                01
              </div>

              <span className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-500">
                Setup
              </span>

            </div>

            <h3 className="mt-6 text-xl font-bold">
              VS Code Setup
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              I set up my development environment using VS Code
              and prepared my workspace for programming and
              portfolio-building activities. I learned how to
              work with files and folders in VS Code and became
              familiar with using the editor for my coding work.
            </p>

          </div>

          {/* Activity 2 */}
          <div className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-7 transition duration-300 hover:-translate-y-2 hover:border-purple-400/50">

            <div className="flex items-start justify-between">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-xl text-purple-400">
                02
              </div>

              <span className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-500">
                Version Control
              </span>

            </div>

            <h3 className="mt-6 text-xl font-bold">
              Git & GitHub Setup
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              I learned the basics of Git and GitHub and created
              a GitHub repository to manage my work. I practiced
              working with repositories and learned how GitHub
              can be used to store, track, and share my coding
              projects.
            </p>

          </div>

          {/* Activity 3 */}
          <div className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50">

            <div className="flex items-start justify-between">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-xl text-cyan-400">
                03
              </div>

              <span className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-500">
                Collaboration
              </span>

            </div>

            <h3 className="mt-6 text-xl font-bold">
              GitLens & Live Share
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              I explored GitLens and Live Share in VS Code to
              understand collaborative development. I learned how
              GitLens can help track Git activity and how Live Share
              can support real-time collaboration with other
              developers while working on a project.
            </p>

          </div>

          {/* Activity 4 */}
          <div className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-7 transition duration-300 hover:-translate-y-2 hover:border-yellow-400/50">

            <div className="flex items-start justify-between">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500/10 text-xl text-yellow-400">
                04
              </div>

              <span className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-500">
                Problem Solving
              </span>

            </div>

            <h3 className="mt-6 text-xl font-bold">
              LeetCode Practice Repository
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              I created a GitHub repository to document my LeetCode
              problem-solving practice. I organized solutions into
              categories such as arrays and strings, basic
              algorithms, stacks, and linked lists. I practiced
              solving coding problems, tested solutions with typical
              and edge cases, and documented approaches and time
              and space complexity.
            </p>

          </div>

        </div>

      </section>

      {/* ================= SKILLS ================= */}
      <section
        id="skills"
        className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20"
      >

        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Skills
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Technologies I'm learning
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">

          {[
            "C",
            "Java",
            "Python",
            "Git",
            "GitHub",
            "SQL",
            "Web Development",
            "AI / ML",
          ].map((skill) => (
            <div
              key={skill}
              className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-center font-semibold text-slate-200 transition duration-300 hover:-translate-y-2 hover:border-blue-400 hover:bg-slate-800"
            >
              <span className="transition group-hover:text-blue-400">
                {skill}
              </span>
            </div>
          ))}

        </div>

      </section>

      {/* ================= CODING PROFILES ================= */}
      <section
        id="profiles"
        className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20"
      >

        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Coding Profiles
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Find me online
          </h2>

          <p className="mt-3 text-slate-400">
            My coding practice and development profiles.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">

          {/* GitHub */}
          <a
            href="https://github.com/karishmanadaf87-bit"
            target="_blank"
            rel="noreferrer"
            className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-400"
          >
            <div className="text-3xl">⌘</div>

            <h3 className="mt-5 text-xl font-bold group-hover:text-blue-400">
              GitHub ↗
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Projects, repositories and coding work.
            </p>
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/Karishma804/"
            target="_blank"
            rel="noreferrer"
            className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-7 transition duration-300 hover:-translate-y-2 hover:border-yellow-400"
          >
            <div className="text-3xl">⚡</div>

            <h3 className="mt-5 text-xl font-bold group-hover:text-yellow-400">
              LeetCode ↗
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Problem-solving practice and coding progress.
            </p>
          </a>

          {/* HackerRank */}
          <a
            href="https://www.hackerrank.com/profile/karishmanadaf87"
            target="_blank"
            rel="noreferrer"
            className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-7 transition duration-300 hover:-translate-y-2 hover:border-green-400"
          >
            <div className="text-3xl">◆</div>

            <h3 className="mt-5 text-xl font-bold group-hover:text-green-400">
              HackerRank ↗
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Coding challenges and problem-solving progress.
            </p>
          </a>

        </div>

      </section>

      {/* ================= CURRENT GOALS ================= */}
      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 md:p-10">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            My Direction
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Growing one skill at a time.
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">

            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <p className="text-2xl">💻</p>
              <h3 className="mt-3 font-bold">
                Coding
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Strengthening programming fundamentals.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <p className="text-2xl">🧠</p>
              <h3 className="mt-3 font-bold">
                Problem Solving
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Practicing DSA and coding problems.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <p className="text-2xl">🤖</p>
              <h3 className="mt-3 font-bold">
                AI / ML
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Exploring AI and machine learning concepts.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <p className="text-2xl">🚀</p>
              <h3 className="mt-3 font-bold">
                Internships
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Preparing for future internship opportunities.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-slate-800 px-6 py-10 text-center">

        <p className="text-lg font-semibold">
          Karishma<span className="text-blue-400">.</span>
        </p>

        <p className="mt-2 text-sm text-slate-500">
          Computer Science & Engineering Student
        </p>

        <p className="mt-5 text-xs text-slate-600">
          © 2026 Karishma. Built as part of my portfolio journey.
        </p>

      </footer>

    </div>
  );
}

export default App;