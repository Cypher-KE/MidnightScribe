import { Link } from 'react-router-dom';

export default function Logo({ compact = false }) {
  return (
    <Link className="brand" to="/" aria-label="MidnightScribe home">
      <span className="brand-mark brand-image-mark" aria-hidden="true">
        <img className="brand-logo-image" src="/midnight-scribe-logo.png" alt="" />
      </span>
      {!compact && (
        <span className="brand-text">
          <strong>Midnight</strong>
          <span>Scribe</span>
        </span>
      )}
    </Link>
  );
}
