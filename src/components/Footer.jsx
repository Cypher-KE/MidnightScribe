import { ArrowUpRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const email = 'theemidnightscribe@gmail.com';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-intro">
          <Logo />
          <p>Independent online writing, editing, research, and content support built around the brief you send.</p>
        </div>

        <div className="footer-links">
          <span>Explore</span>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Send a job</Link>
        </div>

        <div className="footer-links footer-contact">
          <span>Write to me</span>
          <a href={`mailto:${email}`}>
            <Mail size={16} />
            {email}
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} MidnightScribe. All rights reserved.</p>
        <p>Send the brief. Get the writing done.</p>
      </div>
    </footer>
  );
}
