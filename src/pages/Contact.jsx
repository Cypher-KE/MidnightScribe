import { ArrowRight, Clock3, Mail, Send } from 'lucide-react';
import { useMemo, useState } from 'react';

const email = 'theemidnightscribe@gmail.com';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    project: 'Writing & draft development',
    deadline: '',
    message: '',
  });

  const mailtoLink = useMemo(() => {
    const subject = encodeURIComponent(`MidnightScribe project inquiry — ${form.project}`);
    const body = encodeURIComponent(
      `Name: ${form.name || 'Not provided'}\nEmail: ${form.email || 'Not provided'}\nProject: ${form.project}\nDeadline: ${form.deadline || 'Not specified'}\n\nProject details:\n${form.message || 'Not provided'}`,
    );
    return `mailto:${email}?subject=${subject}&body=${body}`;
  }, [form]);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = mailtoLink;
  };

  return (
    <main>
      <section className="page-hero contact-page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">Contact MidnightScribe</p>
            <h1>Tell us what needs to be written.</h1>
          </div>
          <p className="page-hero-lead">
            Share the brief, deadline, and where you need support. The form opens your email app with the project details
            ready to send.
          </p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-info">
            <div>
              <p className="eyebrow">Start here</p>
              <h2>A strong brief makes for stronger work.</h2>
              <p>
                Include the goal, audience, approximate length, deadline, and any material that should guide the writing.
              </p>
            </div>

            <div className="contact-detail-list">
              <a href={`mailto:${email}`}>
                <span>
                  <Mail size={19} />
                </span>
                <div>
                  <small>Email</small>
                  <strong>{email}</strong>
                </div>
              </a>
              <div>
                <span>
                  <Clock3 size={19} />
                </span>
                <div>
                  <small>Response</small>
                  <strong>Project inquiries handled by email</strong>
                </div>
              </div>
            </div>

            <div className="contact-note">
              <span className="mini-moon" />
              <p>Have files to share? Mention them in your email and attach them before sending.</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                Your name
                <input name="name" value={form.name} onChange={updateField} placeholder="Jane Doe" required />
              </label>
              <label>
                Your email
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={updateField}
                  placeholder="jane@example.com"
                  required
                />
              </label>
            </div>

            <label>
              What do you need?
              <select name="project" value={form.project} onChange={updateField}>
                <option>Writing & draft development</option>
                <option>Editing & proofreading</option>
                <option>Academic writing support</option>
                <option>Professional documents</option>
                <option>Content & brand writing</option>
                <option>Research & review</option>
                <option>Something else</option>
              </select>
            </label>

            <label>
              Deadline
              <input
                type="text"
                name="deadline"
                value={form.deadline}
                onChange={updateField}
                placeholder="e.g. Friday, 24 July"
              />
            </label>

            <label>
              Project details
              <textarea
                name="message"
                value={form.message}
                onChange={updateField}
                rows="7"
                placeholder="Tell us what you are working on, what you already have, and what a successful outcome looks like."
                required
              />
            </label>

            <button className="button form-submit" type="submit">
              Open email draft <Send size={18} />
            </button>
            <p className="form-help">
              This does not store your message on the website. It opens your default email application using a `mailto:`
              link.
            </p>
          </form>
        </div>
      </section>

      <section className="section direct-email-section">
        <div className="container direct-email-card">
          <p>Prefer a blank email?</p>
          <a href={`mailto:${email}`}>
            Write directly to {email} <ArrowRight size={17} />
          </a>
        </div>
      </section>
    </main>
  );
}
