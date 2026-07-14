import { ArrowRight, Check, Feather, MoonStar } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import SectionHeading from '../components/SectionHeading';
import { strengths } from '../data/siteData';

export default function About() {
  return (
    <main>
      <section className="page-hero about-page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">About MidnightScribe</p>
            <h1>Built for the ideas that keep you awake.</h1>
          </div>
          <p className="page-hero-lead">
            MidnightScribe is a writing and editorial studio for people who know what they want to say but need help
            saying it with more clarity, structure, confidence, and impact.
          </p>
        </div>
      </section>

      <section className="section about-story-section">
        <div className="container about-story-grid">
          <div className="story-card">
            <span className="story-moon" />
            <div className="story-card-copy">
              <MoonStar size={22} />
              <span>Late thoughts.</span>
              <span>Clearer mornings.</span>
            </div>
          </div>
          <div className="story-copy">
            <SectionHeading
              eyebrow="Why the name?"
              title="Because some of the best ideas arrive after everything gets quiet."
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
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <SectionHeading
            eyebrow="Working principles"
            title="The standards behind every page."
            text="A small set of principles keeps the work consistent even when every project is different."
            align="center"
          />
          <div className="values-grid">
            {[
              ['01', 'Clarity before cleverness', 'The reader should understand the idea before they admire the sentence.'],
              ['02', 'Voice over sameness', 'Good editing strengthens your voice instead of replacing it with a template.'],
              ['03', 'Structure creates confidence', 'A strong argument and a clear sequence make writing easier to trust.'],
              ['04', 'Details carry credibility', 'Grammar, citations, tone, and consistency matter because readers notice when they are missing.'],
            ].map(([number, title, text]) => (
              <article className="value-card" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section fit-section">
        <div className="container fit-grid">
          <div>
            <p className="eyebrow">A good fit</p>
            <h2>MidnightScribe is for people who care about how the final work reads.</h2>
            <p>
              Bring a complete draft that needs sharpening, a blank page that needs direction, or a complex idea that
              needs to become understandable.
            </p>
            <Link className="button" to="/contact">
              Tell us what you’re working on <ArrowRight size={18} />
            </Link>
          </div>
          <div className="fit-list">
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
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
