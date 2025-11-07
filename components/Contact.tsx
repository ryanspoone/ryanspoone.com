import '@/styles/Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h3 className="heading">What&apos;s Next?</h3>
      <h4 className="title">Let&apos;s Connect</h4>
      <div>
        <p>
          I&apos;m always happy to chat with:
        </p>
        <ul className="intro-list">
          <li>
            <span>▹</span>
            <strong>Engineering leaders</strong> discussing team scaling, architecture, or process optimization
          </li>
          <li>
            <span>▹</span>
            <strong>Founders</strong> exploring technical challenges or looking for fractional CTO/advisor support
          </li>
          <li>
            <span>▹</span>
            <strong>Recruiters</strong> with Director/VP Engineering opportunities at growth-stage companies
          </li>
          <li>
            <span>▹</span>
            <strong>Anyone interested in</strong> ETL systems, performance engineering, or AI/ML product development
          </li>
        </ul>
        <p className="section-heading">
          <strong>Currently Open To:</strong>
        </p>
        <ul className="opportunities-list">
          <li>
            <span>▹</span>
            Technical leadership roles (Director/VP Engineering) at growth-stage companies
          </li>
          <li>
            <span>▹</span>
            Fractional CTO/advisor positions for B2B SaaS startups
          </li>
          <li>
            <span>▹</span>
            Strategic technical consulting engagements
          </li>
          <li>
            <span>▹</span>
            Networking conversations with fellow engineering leaders
          </li>
        </ul>
        <p className="location-info">
          Location: Remote-first (currently based in Southeast Asia, open to US/global opportunities)
          <br/>
          Response Time: I typically respond within 24-48 hours
        </p>
      </div>
      <a className="btn btn-primary" href="mailto:me@ryanspoone.com">
        Say Hello
      </a>
    </section>
  );
}
