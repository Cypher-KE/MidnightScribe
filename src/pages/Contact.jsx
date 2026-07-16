import { ArrowRight, AtSign, Clock3, Mail, Phone, Send } from 'lucide-react';
import { useMemo, useState } from 'react';
import Reveal from '../components/Reveal';

const email = 'theemidnightscribe@gmail.com';
const phone = '+1 (680) 202-6621';
const phoneHref = 'tel:+16802026621';
const instagramHandle = '@theemidnightscribe';
const instagramUrl = 'https://www.instagram.com/theemidnightscribe/';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    project: 'Essay, paper, or custom writing',
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
            <h1>Tell me what you need help with.</h1>
          </div>
          <p className="page-hero-lead">
            Share the instructions, deadline, expected output, and any source material. The form opens your email app with
            the job details ready to send directly to MidnightScribe.
          </p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-grid">
          <Reveal className="contact-info">
            <div>
              <p className="eyebrow">Start with the brief</p>
              <h2>The clearer the instructions, the more accurately I can scope the support.</h2>
              <p>
                Include the task, intended outcome, deadline, approximate length where relevant, formatting needs, and any references or files that should guide the work or tutoring session.
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
              <a href={phoneHref}>
                <span>
                  <Phone size={19} />
                </span>
                <div>
                  <small>Phone</small>
                  <strong>{phone}</strong>
                </div>
              </a>
              <a href={instagramUrl} target="_blank" rel="noreferrer">
                <span>
                  <AtSign size={19} />
                </span>
                <div>
                  <small>Instagram</small>
                  <strong>{instagramHandle}</strong>
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
                What type of support do you need?
                <select name="project" value={form.project} onChange={updateField}>
                  <option>Essay, paper, or custom writing</option>
                  <option>Research or academic support</option>
                  <option>Lab report or technical paper</option>
                  <option>Term tutoring or recurring support</option>
                  <option>Healthcare certification exam preparation</option>
                  <option>Math, statistics, or STEM tutoring</option>
                  <option>Data analysis or technical support</option>
                  <option>Programming guidance or debugging</option>
                  <option>Article, blog, or web content</option>
                  <option>Editing, rewriting, or proofreading</option>
                  <option>Business or professional writing</option>
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
                Project requirements
                <textarea
                  name="message"
                  value={form.message}
                  onChange={updateField}
                  rows="7"
                  placeholder="Describe the project, expected outcome, instructions, deadline, and any important context. Do not send account passwords or ask me to take graded assessments on your behalf."
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
