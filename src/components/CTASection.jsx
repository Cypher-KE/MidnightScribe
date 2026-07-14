import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="section cta-section">
      <div className="container">
        <div className="cta-card">
          <div>
            <p className="eyebrow">Have a writing job ready?</p>
            <h2>Send the brief. I’ll take it from there.</h2>
            <p>
              Share the requirements, deadline, and any source material so I can review the job and confirm the next step.
            </p>
          </div>
          <div className="cta-actions">
            <Link className="button button-light" to="/contact">
              Send a writing job <ArrowRight size={18} />
            </Link>
            <a className="text-link light-link" href="mailto:theemidnightscribe@gmail.com">
              <Mail size={17} /> Email directly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
