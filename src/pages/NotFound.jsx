import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="container not-found-inner">
        <span>404</span>
        <h1>This page missed its deadline.</h1>
        <p>The page you are looking for does not exist or has moved.</p>
        <Link className="button" to="/">
          <ArrowLeft size={18} /> Back home
        </Link>
      </div>
    </main>
  );
}
