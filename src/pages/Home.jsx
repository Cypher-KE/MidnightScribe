import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronDown,
  FileText,
  Quote,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import {
  faqs,
  pricing,
  processSteps,
  services,
  strengths,
  supportAreas,
  trustPoints,
} from '../data/siteData';

const audiences = ['Students', 'Researchers', 'Professionals', 'Businesses', 'Agencies', 'Founders'];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main>
      <section className="hero">
        <img
          className="hero-background"
          src="/student-hero.jpg"
          alt="Students collaborating around a laptop in a bright library"
        />
        <div className="hero-overlay" />
        <div className="hero-glow" />

        <div className="container hero-content">
          <div className="hero-copy">
            <div className="hero-badge hero-enter hero-enter-1">
              <Sparkles size={15} /> Writing • Research • Editing • Tutoring
            </div>
            <h1 className="hero-enter hero-enter-2">
              Send the brief. <span>I’ll help you move it forward.</span>
            </h1>
            <p className="hero-lead hero-enter hero-enter-3">
              MidnightScribe provides original writing, research, editing, and one-to-one study support for clients who
              need clear work, direct communication, and realistic deadlines.
            </p>
            <div className="hero-actions hero-enter hero-enter-4">
              <Link className="button button-primary" to="/contact">
                Send a project <ArrowRight size={18} />
              </Link>
              <Link className="button button-glass" to="/services">
                View services & rates
              </Link>
            </div>
            <div className="hero-trust hero-enter hero-enter-5">
              {strengths.slice(0, 3).map((item) => (
                <span key={item}>
                  <Check size={15} /> {item}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-float-card hero-enter hero-enter-5">
            <div className="float-card-icon">
              <FileText size={20} />
            </div>
            <div>
              <span>Writing rates start at</span>
              <strong>$10 per page.</strong>
            </div>
          </div>
        </div>

        <a className="scroll-cue" href="#services" aria-label="Scroll to services">
          <span>Explore services</span>
          <ArrowDownRight size={18} />
        </a>
      </section>

      <section className="audience-marquee" aria-label="Who MidnightScribe works with">
        <div className="marquee-track">
          {[...audiences, ...audiences].map((item, index) => (
            <span key={`${item}-${index}`}>
              {item} <i />
            </span>
          ))}
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="container">
          <Reveal>
            <div className="section-top-row">
              <SectionHeading
                eyebrow="Writing & study support"
                title="One place for the work that needs clearer thinking."
                text="From writing and research to editing, STEM tutoring, and technical guidance, each project starts with the actual brief you send."
              />
              <Link className="text-link" to="/services">
                See all services <ArrowRight size={17} />
              </Link>
            </div>
          </Reveal>

          <div className="services-grid home-services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={index * 70}>
                  <article className="service-card">
                    <div className="service-card-top">
                      <span className="service-number">0{index + 1}</span>
                      <span className="service-icon">
                        <Icon size={20} />
                      </span>
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <Link to="/contact" className="card-link">
                      Ask about this service <ArrowRight size={16} />
                    </Link>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section support-area-section">
        <div className="container support-area-grid">
          <Reveal>
            <SectionHeading
              eyebrow="Areas I can support"
              title="From essays and research to technical subjects."
              text="The exact service depends on the project. Academic support is provided as tutoring, guidance, writing, editing, and feedback—not impersonation or taking graded assessments for clients."
            />
          </Reveal>
          <Reveal className="support-chip-grid" delay={100}>
            {supportAreas.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section pricing-section" id="rates">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Starting rates"
              title="Clear starting points. Final quotes match the actual workload."
              text="Complexity, urgency, length, research depth, and the exact deliverable affect the final price. I confirm the quote before work begins."
              align="center"
            />
          </Reveal>

          <div className="pricing-grid">
            {pricing.map((plan, index) => (
              <Reveal key={plan.label} delay={index * 90}>
                <article className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
                  <div className="pricing-card-top">
                    <span>{plan.note}</span>
                    {plan.featured && <span className="pricing-badge">Most requested</span>}
                  </div>
                  <h3>{plan.label}</h3>
                  <div className="price-line">
                    <strong>{plan.price}</strong>
                    <span>{plan.unit}</span>
                  </div>
                  <p>{plan.description}</p>
                  <ul>
                    {plan.items.map((item) => (
                      <li key={item}>
                        <Check size={16} /> {item}
                      </li>
                    ))}
                  </ul>
                  <Link className={plan.featured ? 'button button-primary' : 'button button-outline'} to="/contact">
                    Get a quote <ArrowRight size={17} />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="pricing-footnote">Starting rates are indicative and may vary by complexity, deadline, and scope.</p>
        </div>
      </section>

      <section className="section image-story-section">
        <div className="container image-story-grid">
          <Reveal className="image-story-media">
            <img src="/student-focus.jpg" alt="Student reading and working in a focused study space" />
            <div className="image-note">
              <span>01</span>
              <p>Every project starts with the brief, not a template.</p>
            </div>
          </Reveal>

          <Reveal className="image-story-copy" delay={120}>
            <p className="eyebrow">How I work</p>
            <h2>Reliable support, not generic filler.</h2>
            <p>
              Good writing and study support has to do more than reach a word count. I work from the instructions,
              research the subject where needed, explain difficult concepts clearly, and quality-check the final work.
            </p>
            <div className="principle-list">
              {strengths.map((item) => (
                <div className="principle-item" key={item}>
                  <span>
                    <Check size={16} />
                  </span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <Link className="button button-outline" to="/about">
              About MidnightScribe <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section trust-section">
        <div className="container">
          <Reveal>
            <div className="section-top-row trust-heading-row">
              <SectionHeading
                eyebrow="Why work with MidnightScribe"
                title="A straightforward service built around trust and clear expectations."
                text="No inflated claims, no hidden process, and no grade guarantees. The focus is the quality of the agreed service and direct communication throughout."
              />
              <ShieldCheck className="trust-heading-icon" size={54} />
            </div>
          </Reveal>
          <div className="trust-grid">
            {trustPoints.map(([title, text], index) => (
              <Reveal key={title} delay={(index % 4) * 60}>
                <article className="trust-card">
                  <span>
                    <Check size={16} />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="A straightforward process"
              title="From brief to useful support."
              text="The process stays simple so you always know what happens next and what information I need from you."
              align="center"
            />
          </Reveal>
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <Reveal key={step.number} delay={index * 90}>
                <article className="process-card">
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section testimonial-section">
        <div className="container">
          <Reveal>
            <div className="testimonial-card">
              <Quote className="testimonial-quote-icon" size={34} />
              <p>
                “The goal is simple: clearer work, stronger understanding, and support that actually matches the brief.”
              </p>
              <div className="testimonial-author">
                <span className="author-mark">M</span>
                <div>
                  <strong>The MidnightScribe standard</strong>
                  <small>Understand the brief. Do the work carefully. Communicate clearly.</small>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-grid">
          <Reveal>
            <SectionHeading
              eyebrow="Frequently asked"
              title="Before you send the project."
              text="Useful answers about pricing, deadlines, revisions, academic support, and how to get started."
            />
          </Reveal>
          <Reveal className="faq-list" delay={100}>
            {faqs.slice(0, 6).map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <article className={`faq-item ${isOpen ? 'open' : ''}`} key={item.question}>
                  <button type="button" onClick={() => setOpenFaq(isOpen ? -1 : index)}>
                    <span>{item.question}</span>
                    <ChevronDown size={20} />
                  </button>
                  <div className="faq-answer-wrap">
                    <p>{item.answer}</p>
                  </div>
                </article>
              );
            })}
          </Reveal>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
