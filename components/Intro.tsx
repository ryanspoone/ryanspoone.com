import '@/styles/Intro.css';

export default function Intro() {
  return (
    <section id="intro" className="intro">
      <h1 className="overline">Hi, my name is</h1>
      <h2 className="title">Ryan Spoone.</h2>
      <h3 className="subtitle">CTO at Delivr.ai. Deterministic Identity & Person-Level Intent.</h3>
      <div className="description">
        <p>
          I&apos;m the CTO of <a href="https://www.delivr.ai">Delivr.ai</a>, where we resolve B2B intent to real people, not accounts. I&apos;m still hands-on: Rust, Go, TypeScript, and the data infrastructure underneath a platform that serves over a billion person-level intent signals a day.
        </p>
        <p>
          Over the past decade I&apos;ve built data platforms processing billions of data points, replaced managed warehouses with purpose-built systems, and led engineering teams through rapid growth and acquisitions. Notes from building Delivr live at <a href="https://www.delivr.ai/engineering">delivr.ai/engineering</a>.
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
