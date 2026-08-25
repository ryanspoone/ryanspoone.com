import '@/styles/Intro.css';

export default function Intro() {
  return (
    <section id="intro" className="intro">
      <h1 className="overline">Hi, my name is</h1>
      <h2 className="title">Ryan Spoone.</h2>
      <h3 className="subtitle">CTO at Delivr.ai. Deterministic Identity & Person-Level Intent.</h3>
      <div className="description">
        <p>
          I&apos;m the CTO of <a href="https://www.delivr.ai">Delivr.ai</a>, where we resolve B2B intent to real people, not accounts. I&apos;m still hands-on. Most weeks that means Rust, Go, and the data infrastructure behind a platform serving over a billion person-level intent signals a day.
        </p>
        <p>
          Before this I spent a decade building data platforms and leading engineering teams through rapid growth and two acquisitions. The pattern held the whole way: measure first, replace what the numbers say to replace, keep the team small and sharp.
        </p>
      </div>
      <div>
        <a className="btn btn-primary" href="#contact">
          Get In Touch
        </a>
      </div>
    </section>
  );
}
