import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="section cta-section">
      <div className="container">
        <div className="cta-card">
          <div>
            <p className="eyebrow">Your idea is already worth something.</p>
            <h2>Let’s make the words match it.</h2>
            <p>
              Tell MidnightScribe what you are working on, where you are stuck, and when you need it.
            </p>
          </div>
          <div className="cta-actions">
            <Link className="button button-light" to="/contact">
              Start a project <ArrowRight size={18} />
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
