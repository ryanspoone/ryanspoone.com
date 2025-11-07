import '@/styles/Intro.css';

export default function Intro() {
  return (
    <section id="intro" className="intro">
      <h1 className="overline">Hi, my name is</h1>
      <h2 className="title">Ryan Spoone.</h2>
      <h3 className="subtitle">Building Scalable Systems & High-Performing Teams</h3>
      <div className="description">
        <p>
          I&apos;m a Director of Engineering turned Founder, currently based abroad and working remotely. Over the past decade, I&apos;ve scaled engineering teams from 5 to 60+ engineers, architected data platforms processing billions of data points, and delivered products contributing $4M+ in ARR. Currently founding Ouroborai, building AI-powered tools for developers.
        </p>
        <p>
          I specialize in building and scaling engineering teams that deliver high-impact products, combining deep technical expertise in distributed systems, data engineering, and full-stack development with proven leadership in team building, process optimization, and strategic execution.
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
