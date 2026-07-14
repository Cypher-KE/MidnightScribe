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
            <h1>An independent writing service built for real briefs and deadlines.</h1>
          </div>
          <p className="page-hero-lead">
            MidnightScribe is how I take on online writing jobs from clients who need dependable help with research,
            drafting, rewriting, editing, and polished final delivery.
          </p>
        </div>
      </section>

      <section className="section about-story-section">
        <div className="container about-story-grid">
          <Reveal className="story-image-card">
            <img src="/writing-detail.jpg" alt="Person reviewing written material in a focused setting" />
            <div className="story-image-caption">
              <span>Independent writing</span>
              <strong>built around the job you send.</strong>
            </div>
          </Reveal>
          <Reveal className="story-copy" delay={120}>
            <SectionHeading
              eyebrow="Why MidnightScribe?"
              title="Because good writing work is often done after the brief arrives and the noise gets quiet."
            />
            <p>
              I built MidnightScribe as a focused way to offer my writing skills online. Clients send the requirements,
              source material, and deadline; I turn that information into a structured piece of work that fits the agreed
              purpose.
            </p>
            <p>
              Some jobs begin with a blank page. Others need research, a rewrite, stronger structure, or a final polish.
              The service is flexible, but the standard stays the same: understand the brief, do the work carefully, and
              deliver something useful.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Working principles"
              title="What every writing job should get."
              text="The project may change, but these are the standards I use to keep the work dependable."
              align="center"
            />
          </Reveal>
          <div className="values-grid">
            {[
              ['01', 'Follow the brief', 'The requirements, audience, format, and deadline define the job and guide the final work.'],
              ['02', 'Research before guessing', 'When a topic needs evidence or context, the writing should be informed rather than improvised.'],
              ['03', 'Write for the purpose', 'A report, article, proposal, and personal statement should not all sound like the same template.'],
              ['04', 'Edit before delivery', 'A first draft is not the finish line. Structure, clarity, grammar, and consistency are checked before handoff.'],
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
            <h2>For clients who need the writing done properly, not just filled with words.</h2>
            <p>
              Send a complete brief, a rough draft, source material, or even a project that still needs the direction
              clarified. I will confirm what I can take on before the work starts.
            </p>
            <Link className="button button-primary" to="/contact">
              Send your writing job <ArrowRight size={18} />
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
              <p>Flexible support for one-off and recurring writing jobs</p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
