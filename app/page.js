// app/page.js

export default function Home() {
  return (
    <>
      {/* TOP NAVBAR */}
      <header className="nav">
        <div className="nav-left">
          <span className="nav-logo-dot" />
          <span className="nav-name">Ayla Siddiqui | Student</span>
        </div>
        <nav className="nav-links">
          <a href="#hero">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        {/* HERO SECTION */}
        <section id="hero" className="hero-section">
          <div className="hero-text">
            <p className="hero-kicker">MY WORK & JOURNEY</p>
            <h1 className="hero-title">
              Hi, I&apos;m <span className="hero-name">Ayla.</span>
            </h1>
            <p className="hero-subtitle">
              I&apos;m a student in Toronto interested in{" "}
              <strong>computer engineering</strong>,{" "}
              <strong>quantitative finance</strong>, and{" "}
              <strong>systems design</strong>.
            </p>
            <p className="hero-body">
              I like math-heavy problems, low-level systems, and projects that
              mix software, hardware, and finance. Right now I&apos;m rebuilding
              my academic record while learning to build serious engineering
              projects.
            </p>
          </div>

          {/* Fake graphic panel – you can swap this for a real image later */}
          <div className="hero-graphic">
            <div className="hero-orbit" />
            <div className="hero-screen">
              <div className="hero-screen-header" />
              <div className="hero-screen-chart" />
              <div className="hero-screen-bars">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="experience-section">
          <p className="section-eyebrow">MY PATH</p>
          <h2 className="section-heading">Work Experience.</h2>
          <p className="section-intro">
            I&apos;m early in my career, but I&apos;m building a foundation in
            math, CS, and engineering to prepare for internships in software,
            trading, or systems roles.
          </p>

          <div className="timeline">
            <div className="timeline-line" />

            <article className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-card">
                <h3>Ontario Secondary School Diploma</h3>
                <p className="timeline-subtitle">Toronto · 2024–2026</p>
                <ul>
                  <li>
                    Focused on calculus, advanced functions, computer science,
                    and economics.
                  </li>
                  <li>
                    Rebuilding academic profile after A-Levels and aiming for
                    engineering / CS at university.
                  </li>
                </ul>
                <p className="timeline-date">Now</p>
              </div>
            </article>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="projects-section">
          <p className="section-eyebrow">MY WORK</p>
          <h2 className="section-heading">Projects.</h2>
          <p className="section-intro">
            These projects show how I think about systems, data, and building
            tools that actually do something useful.
          </p>

          <div className="projects-grid">
            <article className="project-card">
              <div className="project-thumb fake-thumb-1" />
              <div className="project-body">
                <h3>Simple Trade Replay Engine</h3>
                <p>
                  A small Python tool that replays historical trades and
                  simulates basic strategies to understand P&amp;L and risk.
                </p>
                <div className="project-tags">
                  <span>Python</span>
                  <span>Pandas</span>
                  <span>Backtesting</span>
                </div>
              </div>
            </article>

            <article className="project-card">
              <div className="project-thumb fake-thumb-2" />
              <div className="project-body">
                <h3>Portfolio Website</h3>
                <p>
                  This site: built with Next.js and custom CSS, designed to grow
                  as I add more projects and experience.
                </p>
                <div className="project-tags">
                  <span>Next.js</span>
                  <span>React</span>
                  <span>Design</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="contact-section">
          <p className="section-eyebrow">SAY HI</p>
          <h2 className="section-heading">Contact.</h2>
          <p className="section-intro">
            I&apos;m always open to chatting about engineering, CS, or
            interesting projects.
          </p>

          <div className="contact-grid">
            <div className="contact-card">
              <span className="contact-label">Email</span>
              <span className="contact-value">aylasiddiqui6@gmail.com</span>
            </div>
            <div className="contact-card">
              <span className="contact-label">GitHub</span>
              <span className="contact-value">@aylaS06</span>
            </div>
            <div className="contact-card">
              <span className="contact-label">Location</span>
              <span className="contact-value">Toronto</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
