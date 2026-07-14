import { ArrowRight, Clock3, Mail, Send } from 'lucide-react';
import { useMemo, useState } from 'react';
import Reveal from '../components/Reveal';

const email = 'theemidnightscribe@gmail.com';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    project: 'Custom online writing job',
    deadline: '',
    message: '',
  });

  const mailtoLink = useMemo(() => {
    const subject = encodeURIComponent(`MidnightScribe writing job — ${form.project}`);
    const body = encodeURIComponent(
      `Name: ${form.name || 'Not provided'}\nEmail: ${form.email || 'Not provided'}\nJob type: ${form.project}\nDeadline: ${form.deadline || 'Not specified'}\n\nRequirements:\n${form.message || 'Not provided'}`,
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
            <p className="eyebrow">Send a writing job</p>
            <h1>Tell me what needs to be written.</h1>
          </div>
          <p className="page-hero-lead">
            Share the instructions, deadline, length, format, and any source material. The form opens your email app with
            the job details ready to send directly to MidnightScribe.
          </p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-grid">
          <Reveal className="contact-info">
            <div>
              <p className="eyebrow">Start with the brief</p>
              <h2>The more useful the instructions, the better the final work.</h2>
              <p>
                Include what needs to be done, the intended audience, approximate length, deadline, formatting needs, and
                any references or files that should guide the job.
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
                  <small>Next step</small>
                  <strong>I review the job and confirm scope, timing, and availability.</strong>
                </div>
              </div>
            </div>

            <div className="contact-note">
              <span className="mini-moon" />
              <p>Have files or source material? Attach them to the email before sending.</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
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
                What type of writing job is it?
                <select name="project" value={form.project} onChange={updateField}>
                  <option>Custom online writing job</option>
                  <option>Research & academic support</option>
                  <option>Article, blog, or web content</option>
                  <option>Editing, rewriting, or proofreading</option>
                  <option>Business or professional writing</option>
                  <option>Report, summary, or research</option>
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
                Job requirements
                <textarea
                  name="message"
                  value={form.message}
                  onChange={updateField}
                  rows="7"
                  placeholder="Describe what needs to be written, the expected length, instructions, formatting, deadline, and any important context."
                  required
                />
              </label>

              <button className="button button-primary form-submit" type="submit">
                Open email draft <Send size={18} />
              </button>
              <p className="form-help">
                The website does not store your message. It opens your default email application using a mailto link.
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="section direct-email-section">
        <div className="container direct-email-card">
          <p>Prefer to write the email yourself?</p>
          <a href={`mailto:${email}`}>
            Email {email} <ArrowRight size={17} />
          </a>
        </div>
      </section>
    </main>
  );
}
