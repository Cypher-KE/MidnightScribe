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

const audiences = ['Students', 'Professionals', 'Creators', 'Growing brands', 'Researchers', 'Founders'];

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
              <Sparkles size={15} /> Writing, editing and thoughtful support
            </div>
            <h1 className="hero-enter hero-enter-2">
              Your ideas deserve <span>words that land.</span>
            </h1>
            <p className="hero-lead hero-enter hero-enter-3">
              MidnightScribe turns rough thinking, unfinished drafts, and complex ideas into clear, credible writing that
              still sounds like you.
            </p>
            <div className="hero-actions hero-enter hero-enter-4">
              <Link className="button button-primary" to="/contact">
                Start a project <ArrowRight size={18} />
              </Link>
              <Link className="button button-glass" to="/services">
                Explore services
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
              <span>From rough draft to</span>
              <strong>clear, polished work.</strong>
            </div>
          </div>
        </div>

        <a className="scroll-cue" href="#services" aria-label="Scroll to services">
          <span>Discover more</span>
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
                eyebrow="What MidnightScribe does"
                title="From scattered thoughts to finished work."
                text="Choose focused support for one draft or bring a larger project that needs structure from the ground up."
              />
              <Link className="text-link" to="/services">
                See all services <ArrowRight size={17} />
              </Link>
            </div>
          </Reveal>

          <div className="services-grid home-services-grid">
            {services.slice(0, 6).map((service, index) => {
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
                      Discuss this service <ArrowRight size={16} />
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
            <img src="/student-focus.jpg" alt="Student reading and thinking in a warm study space" />
            <div className="image-note">
              <span>01</span>
              <p>Clear thinking deserves clear writing.</p>
            </div>
          </Reveal>

          <Reveal className="image-story-copy" delay={120}>
            <p className="eyebrow">The MidnightScribe standard</p>
            <h2>Not just correct. Clear, credible, and distinctly yours.</h2>
            <p>
              Strong writing is not about making every sentence sound complicated. It is about choosing the right words,
              building a confident line of thought, and making every paragraph earn its place.
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
              Read the story <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="A simple process"
              title="Less back-and-forth. More forward motion."
              text="Every project starts with context and ends with a clear deliverable. The middle stays focused."
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
                “The best writing support should leave the final work stronger while still sounding like the person or
                brand behind it.”
              </p>
              <div className="testimonial-author">
                <span className="author-mark">M</span>
                <div>
                  <strong>The MidnightScribe promise</strong>
                  <small>Clarity, voice, and careful thinking</small>
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
              title="Before you send the brief."
              text="A few useful answers about fit, timing, and how projects begin."
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
