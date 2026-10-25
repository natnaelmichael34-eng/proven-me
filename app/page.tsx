import Link from "next/link";

const features = [
  ["Study Guide → Podcast", "Turn notes and study material into a clear audio lesson you can review anywhere."],
  ["AI Tutor", "Ask follow-up questions, get explanations, and keep the context of your study session."],
  ["Problem Solver", "Work through math, science, and school problems with step-by-step explanations."],
  ["Smart Quizzes", "Generate focused practice questions from the material you are learning."],
  ["Saved Progress", "Keep lessons, quiz results, notes, and study history together in one account."],
  ["One Dashboard", "See what you finished, what is next, and where your study time is going."],
];

export default function Home() {
  return (
    <main className="page">
      <div className="orb orbOne" aria-hidden="true" />
      <div className="orb orbTwo" aria-hidden="true" />
      <div className="container">
        <nav className="nav">
          <Link className="logo" href="/">Proven<span>Me</span></Link>
          <div className="navlinks">
            <Link href="#features">Features</Link>
            <Link href="/sign-in">Sign in</Link>
            <Link className="navCta" href="/sign-up">Get started</Link>
          </div>
        </nav>

        <section className="hero">
          <div className="heroCopy">
            <div className="eyebrow"><span className="pulse" /> AI study workspace</div>
            <h1>Learn smarter.<br /><span>Feel prepared.</span></h1>
            <p>Proven Me brings AI tutoring, study guides, podcasts, quizzes, problem solving, and progress tracking into one calm workspace built for learning.</p>
            <div className="actions">
              <Link className="btn primary" href="/sign-up">Create your account <span>→</span></Link>
              <Link className="btn" href="#features">Explore Proven Me</Link>
            </div>
            <div className="trustRow">
              <span>✦ AI-powered</span>
              <span>•</span>
              <span>Built for students</span>
              <span>•</span>
              <span>Save your progress</span>
            </div>
          </div>

          <div className="heroVisual" aria-label="Proven Me study dashboard preview">
            <div className="glowRing" />
            <div className="glass dashboard">
              <div className="windowTop">
                <div className="windowDots"><i /><i /><i /></div>
                <span>Today</span>
                <span className="status">● Focus mode</span>
              </div>
              <div className="dashboardBody">
                <div className="miniGreeting">GOOD MORNING</div>
                <h2>Keep the momentum.</h2>
                <div className="progressCard">
                  <div><span>Weekly progress</span><strong>72%</strong></div>
                  <div className="progressBar"><span /></div>
                  <small>3 of 5 study sessions completed</small>
                </div>
                <div className="studyCards">
                  <div className="studyCard active"><div className="icon">✦</div><div><b>AI Study Guide</b><small>Biology · Cell Structure</small></div><span>18 min</span></div>
                  <div className="studyCard"><div className="icon">◉</div><div><b>Podcast ready</b><small>Your lesson is ready to listen</small></div><span>▶</span></div>
                  <div className="studyCard"><div className="icon">✓</div><div><b>Practice quiz</b><small>5 questions waiting</small></div><span>→</span></div>
                </div>
              </div>
            </div>
            <div className="floatingBadge badgeTop">✦ <span>AI tutor online</span></div>
            <div className="floatingBadge badgeBottom"><b>+18 min</b><span>focused today</span></div>
          </div>
        </section>

        <section id="features" className="featuresSection">
          <div className="sectionIntro">
            <div className="eyebrow">Everything in one system</div>
            <h2>Less switching.<br /><span>More learning.</span></h2>
            <p>One place for the work that normally gets scattered across tabs, notes, videos, and apps. Humanity invented browser tabs and immediately regretted it.</p>
          </div>
          <div className="features">
            {features.map(([title, text], index) => (
              <article className="glass feature" key={title}>
                <div className="featureNumber">0{index + 1}</div>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="featureArrow">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="bottomCta glass">
          <div><div className="eyebrow">Start learning with intention</div><h2>Your next study session starts here.</h2></div>
          <Link className="btn primary" href="/sign-up">Get started <span>→</span></Link>
        </section>

        <footer className="footer"><span>ProvenMe</span><span>AI study companion</span></footer>
      </div>
    </main>
  );
}
