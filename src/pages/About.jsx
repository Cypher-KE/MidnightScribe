import { ArrowRight, Check, Feather } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { strengths } from '../data/siteData';

export default function About() {
  return (
    <main>
      <section className="page-hero about-page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">About MidnightScribe</p>
            <h1>Built for the ideas that keep you thinking.</h1>
          </div>
          <p className="page-hero-lead">
            MidnightScribe is a writing and editorial studio for people who know what they want to say but need help
            saying it with more clarity, structure, confidence, and impact.
          </p>
        </div>
      </section>

      <section className="section about-story-section">
        <div className="container about-story-grid">
          <Reveal className="story-image-card">
            <img src="/writing-detail.jpg" alt="Reader reviewing a book in a warm, quiet setting" />
            <div className="story-image-caption">
              <span>Thoughtful work</span>
              <strong>starts with attention.</strong>
            </div>
          </Reveal>
          <Reveal className="story-copy" delay={120}>
            <SectionHeading
              eyebrow="Why the name?"
              title="Because some of the best ideas arrive when everything gets quiet."
            />
            <p>
              MidnightScribe was imagined as a place for the half-formed sentence, the almost-right paragraph, the
              serious project sitting in a notes app, and the important message that deserves more care before it goes
              into the world.
            </p>
            <p>
              The work is grounded in a simple belief: strong writing should sound intelligent without becoming stiff,
              polished without becoming generic, and clear without losing personality.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Working principles"
              title="The standards behind every page."
              text="A small set of principles keeps the work consistent even when every project is different."
              align="center"
            />
          </Reveal>
          <div className="values-grid">
            {[
              ['01', 'Clarity before cleverness', 'The reader should understand the idea before they admire the sentence.'],
              ['02', 'Voice over sameness', 'Good editing strengthens your voice instead of replacing it with a template.'],
              ['03', 'Structure creates confidence', 'A strong argument and a clear sequence make writing easier to trust.'],
              ['04', 'Details carry credibility', 'Grammar, citations, tone, and consistency matter because readers notice when they are missing.'],
            ].map(([number, title, text], index) => (
              <Reveal key={number} delay={index * 80}>
                <article className="value-card">
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section fit-section">
        <div className="container fit-grid">
          <Reveal>
            <p className="eyebrow">A good fit</p>
            <h2>For people who care about how the final work reads.</h2>
            <p>
              Bring a complete draft that needs sharpening, a blank page that needs direction, or a complex idea that
              needs to become understandable.
            </p>
            <Link className="button button-primary" to="/contact">
              Tell us what you’re working on <ArrowRight size={18} />
            </Link>
          </Reveal>
          <Reveal className="fit-list" delay={120}>
            {strengths.map((item) => (
              <div key={item}>
                <span>
                  <Check size={17} />
                </span>
                <p>{item}</p>
              </div>
            ))}
            <div>
              <span>
                <Feather size={17} />
              </span>
              <p>Flexible support across short and long-form projects</p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
