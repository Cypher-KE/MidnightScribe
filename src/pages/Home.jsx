import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronDown,
  FileText,
  Quote,
  Sparkles,
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { faqs, processSteps, services, strengths } from '../data/siteData';

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
              <Sparkles size={15} /> Online writing • Editing • Research • Content
            </div>
            <h1 className="hero-enter hero-enter-2">
              Send the brief. <span>I’ll handle the writing.</span>
            </h1>
            <p className="hero-lead hero-enter hero-enter-3">
              MidnightScribe is an independent online writing service for clients who need reliable, polished work.
              Share the job, requirements, and deadline; I take it from there.
            </p>
            <div className="hero-actions hero-enter hero-enter-4">
              <Link className="button button-primary" to="/contact">
                Send a writing job <ArrowRight size={18} />
              </Link>
              <Link className="button button-glass" to="/services">
                View writing services
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
              <span>You send the requirements.</span>
              <strong>I turn them into finished work.</strong>
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
                eyebrow="Writing services"
                title="One place for the writing work on your list."
                text="From a single online writing job to ongoing content and editing support, each project is handled around the brief you actually send."
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
                      Send this type of job <ArrowRight size={16} />
                    </Link>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section image-story-section">
        <div className="container image-story-grid">
          <Reveal className="image-story-media">
            <img src="/student-focus.jpg" alt="Student reading and working in a focused study space" />
            <div className="image-note">
              <span>01</span>
              <p>Every job starts with the brief, not a template.</p>
            </div>
          </Reveal>

          <Reveal className="image-story-copy" delay={120}>
            <p className="eyebrow">How I work</p>
            <h2>Reliable writing, not generic filler.</h2>
            <p>
              Good online writing work has to do more than reach a word count. I work from the instructions, research the
              subject where needed, build a clear structure, and edit the final draft before delivery.
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

      <section className="section process-section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="A straightforward process"
              title="From job brief to finished delivery."
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
                “The job should come back clearer, stronger, and ready for the purpose you hired a writer for.”
              </p>
              <div className="testimonial-author">
                <span className="author-mark">M</span>
                <div>
                  <strong>The MidnightScribe standard</strong>
                  <small>Follow the brief. Do the work. Deliver with care.</small>
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
              title="Before you send the job."
              text="Useful answers about the types of work I take, deadlines, instructions, and how to get started."
            />
          </Reveal>
          <Reveal className="faq-list" delay={100}>
            {faqs.slice(0, 4).map((item, index) => {
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
