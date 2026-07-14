import { Link } from 'react-router-dom';

export default function Logo({ compact = false }) {
  return (
    <Link className="brand" to="/" aria-label="MidnightScribe home">
      <span className="brand-mark" aria-hidden="true">
        <span className="brand-moon" />
        <span className="brand-nib" />
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
