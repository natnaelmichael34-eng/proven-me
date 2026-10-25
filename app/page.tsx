import Link from "next/link";

const features = [
  ["Study Guide → Podcast", "Turn your study material into a listenable lesson with an AI voice."],
  ["Problem Solver", "Work through math, science, and other school problems with clear explanations."],
  ["Saved Progress", "Your completed lessons, quiz results, notes, and study history stay with your account."],
  ["AI Tutor", "Ask follow-up questions and keep the context of your study session."],
  ["Smart Quizzes", "Generate practice questions from the material you are studying."],
  ["One Dashboard", "See what you studied, what you finished, and what to work on next."],
];

export default function Home() {
  return (
    <main className="page">
      <div className="container">
        <nav className="nav">
          <div className="logo">Proven<span>Me</span></div>
          <div className="navlinks">
            <Link href="#features">Features</Link>
            <Link href="/sign-in">Sign in</Link>
            <Link href="/sign-up">Create account</Link>
          </div>
        </nav>

        <section className="hero">
          <div>
            <div className="eyebrow">Your AI study companion</div>
            <h1>Study less randomly. Learn more intentionally.</h1>
            <p>Proven Me brings study guides, AI explanations, podcasts, quizzes, and progress tracking into one focused workspace.</p>
            <div className="actions">
              <Link className="btn primary" href="/sign-up">Create your account</Link>
              <Link className="btn" href="/sign-in">Sign in</Link>
            </div>
          </div>

          <div className="glass dashboard">
            <div className="card"><strong>Today&apos;s progress</strong><div className="muted">3 lessons completed · 72% weekly goal</div></div>
            <div className="card"><strong>AI Study Guide</strong><div className="muted">Biology: Cell Structure · 18 min lesson</div></div>
            <div className="card"><strong>Podcast ready</strong><div className="muted">Your study guide has been turned into an audio lesson.</div></div>
            <div className="card"><strong>Next up</strong><div className="muted">5-question practice quiz</div></div>
          </div>
        </section>

        <section id="features">
          <h2 className="section-title">Everything in one study system.</h2>
          <div className="features">
            {features.map(([title, text]) => <article className="glass feature" key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </section>
      </div>
    </main>
  );
}
