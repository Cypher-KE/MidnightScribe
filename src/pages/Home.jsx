import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronDown,
  Feather,
  Quote,
  Sparkles,
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import SectionHeading from '../components/SectionHeading';
import { faqs, processSteps, services, strengths } from '../data/siteData';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <main>
        <section className="hero">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="container hero-grid">
            <div className="hero-copy reveal-up">
              <div className="hero-badge">
                <Sparkles size={15} /> Writing, editing & thoughtful support
              </div>
              <h1>
                Words worth
                <span> staying up for.</span>
              </h1>
              <p className="hero-lead">
                MidnightScribe turns rough ideas, complex thoughts, and unfinished drafts into writing that feels clear,
                intentional, and distinctly yours.
              </p>
              <div className="hero-actions">
                <Link className="button" to="/contact">
                  Start a project <ArrowRight size={18} />
                </Link>
                <Link className="button button-ghost" to="/services">
                  Explore services
                </Link>
              </div>
              <div className="hero-trust">
                {strengths.slice(0, 3).map((item) => (
                  <span key={item}>
                    <Check size={15} /> {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="hero-art" aria-hidden="true">
              <div className="paper-card paper-card-back">
                <span>Notes after midnight</span>
              </div>
              <div className="paper-card paper-card-main">
                <div className="paper-topline">
                  <span>MidnightScribe / Draft 01</span>
                  <span>00:47</span>
                </div>
                <blockquote>
                  “The right words do more than fill a page. They make the idea impossible to ignore.”
                </blockquote>
                <div className="ink-lines">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="signature-line">
                  <span className="mini-moon" />
                  <em>Written with intention.</em>
                </div>
              </div>
              <div className="floating-note note-one">
                <Feather size={18} />
                <span>
                  Your voice,
                  <strong> sharpened.</strong>
                </span>
              </div>
              <div className="floating-note note-two">
                <Quote size={17} />
                <span>Clarity over clutter.</span>
              </div>
            </div>
          </div>
          <a className="scroll-cue" href="#services" aria-label="Scroll to services">
            <span>Discover more</span>
            <ArrowDownRight size={18} />
          </a>
        </section>

        <section className="section proof-strip">
          <div className="container proof-grid">
            <p>
              For <strong>students</strong>
            </p>
            <p>
              For <strong>professionals</strong>
            </p>
            <p>
              For <strong>creators</strong>
            </p>
            <p>
              For <strong>growing brands</strong>
            </p>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-top-row">
              <SectionHeading
                eyebrow="What MidnightScribe does"
                title="From scattered thoughts to finished work."
                text="Choose focused support for a single draft or bring a larger writing project that needs structure from the ground up."
              />
              <Link className="text-link" to="/services">
                See all services <ArrowRight size={17} />
              </Link>
            </div>

            <div className="services-grid home-services-grid">
              {services.slice(0, 6).map((service, index) => {
                const Icon = service.icon;
                return (
                  <article className="service-card" key={service.title}>
                    <div className="service-card-top">
                      <span className="service-number">0{index + 1}</span>
                      <span className="service-icon">
                        <Icon size={20} />
                      </span>
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <Link to="/contact" className="card-link">
                      Discuss this service <ArrowRight size={16} />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section manifesto-section">
          <div className="container manifesto-grid">
            <div className="manifesto-visual">
              <div className="moon-stage">
                <span className="moon-large" />
                <div className="moon-copy">
                  <span>01:13 AM</span>
                  <strong>Good writing survives the morning.</strong>
                </div>
              </div>
            </div>
            <div className="manifesto-copy">
              <p className="eyebrow">The MidnightScribe standard</p>
              <h2>Not just correct. Clear, credible, and alive.</h2>
              <p>
                Good writing is not about using the biggest words. It is about choosing the right ones, building a strong
                line of thought, and making every paragraph earn its place.
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
              <Link className="button button-ghost dark-ghost" to="/about">
                Read the story <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <section className="section process-section">
          <div className="container">
            <SectionHeading
              eyebrow="A simple process"
              title="Less back-and-forth. More forward motion."
              text="Every project starts with context and ends with a clear deliverable. The middle stays focused."
              align="center"
            />
            <div className="process-grid">
              {processSteps.map((step) => (
                <article className="process-card" key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section testimonial-section">
          <div className="container">
            <div className="testimonial-card">
              <Quote className="testimonial-quote-icon" size={34} />
              <p>
                “The best writing support should leave the final work stronger while still sounding like the person or
                brand behind it. That is the standard MidnightScribe is built around.”
              </p>
              <div className="testimonial-author">
                <span className="author-mark">M</span>
                <div>
                  <strong>The MidnightScribe promise</strong>
                  <small>Clarity, voice, and careful thinking</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section faq-section">
          <div className="container faq-grid">
            <SectionHeading
              eyebrow="Frequently asked"
              title="Before you send the brief."
              text="A few useful answers about fit, timing, and how projects begin."
            />
            <div className="faq-list">
              {faqs.slice(0, 4).map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <article className={`faq-item ${isOpen ? 'open' : ''}`} key={item.question}>
                    <button type="button" onClick={() => setOpenFaq(isOpen ? -1 : index)}>
                      <span>{item.question}</span>
                      <ChevronDown size={20} />
                    </button>
                    {isOpen && <p>{item.answer}</p>}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
    </>
  );
}
