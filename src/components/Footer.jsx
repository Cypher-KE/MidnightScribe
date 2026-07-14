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
          <p>Thoughtful writing for ideas that deserve more than rushed words.</p>
        </div>

        <div className="footer-links">
          <span>Explore</span>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-links footer-contact">
          <span>Write to us</span>
          <a href={`mailto:${email}`}>
            <Mail size={16} />
            {email}
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} MidnightScribe. All rights reserved.</p>
        <p>Written with intention. Delivered with care.</p>
      </div>
    </footer>
  );
}
