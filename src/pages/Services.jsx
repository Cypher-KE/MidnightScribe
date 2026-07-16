import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { examPrepAreas, pricing, processSteps, serviceBenefits, services, supportAreas } from '../data/siteData';

export default function Services() {
  return (
    <main>
      <section className="page-hero services-page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">Services & rates</p>
            <h1>Writing, research, editing, and study support built around the brief.</h1>
          </div>
          <p className="page-hero-lead">
            Choose the kind of support you need, send the requirements, and I will confirm the scope, deadline, and final
            quote before work begins.
          </p>
        </div>
      </section>

      <section className="section service-detail-section">
        <div className="container services-grid services-full-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={(index % 3) * 80}>
                <article className="service-detail-card">
                  <div className="service-detail-header">
                    <span className="service-icon large-icon">
                      <Icon size={22} />
                    </span>
                    <span className="service-number">0{index + 1}</span>
                  </div>
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                  <ul>
                    {service.items.map((item) => (
                      <li key={item}>
                        <Check size={15} /> {item}
                      </li>
                    ))}
                  </ul>
                  <Link className="card-link" to="/contact">
                    Ask about this service <ArrowRight size={16} />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section service-support-section">
        <div className="container support-area-grid">
          <Reveal>
            <SectionHeading
              eyebrow="Common support areas"
              title="A broad range of writing and subject support."
              text="Not every project fits one neat category. Send the actual instructions and I will confirm what kind of support is appropriate."
            />
          </Reveal>
          <Reveal className="support-chip-grid" delay={100}>
            {supportAreas.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section pricing-section services-pricing-section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Starting rates"
              title="Simple starting rates, quoted against the real scope."
              text="Final pricing may change with complexity, urgency, length, and research depth. You receive the quote before the project begins."
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
        </div>
      </section>

      <section className="section service-benefits-section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Included support"
              title="Revision support, direct communication, and practical ways to save."
              text="These features are applied according to the agreed scope and confirmed before a project begins."
              align="center"
            />
          </Reveal>
          <div className="benefits-grid">
            {serviceBenefits.map(([title, text], index) => (
              <Reveal key={title} delay={(index % 3) * 70}>
                <article className="benefit-card">
                  <span><Check size={16} /></span>
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

      <section className="section exam-prep-section">
        <div className="container exam-prep-grid">
          <Reveal>
            <SectionHeading
              eyebrow="Exam preparation"
              title="Focused preparation for healthcare and professional certification exams."
              text="Support can include study planning, concept review, practice-question walkthroughs, and feedback. MidnightScribe does not take exams, access student accounts, or bypass proctoring systems."
            />
          </Reveal>
          <Reveal className="support-chip-grid" delay={100}>
            {examPrepAreas.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section process-section service-process-section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="How projects move"
              title="Clear requirements in. Useful work and support out."
              text="The workflow keeps communication direct and makes the expected deliverable clear before work begins."
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

      <CTASection />
    </main>
  );
}
