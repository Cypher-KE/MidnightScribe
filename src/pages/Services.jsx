import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { processSteps, services } from '../data/siteData';

export default function Services() {
  return (
    <main>
      <section className="page-hero services-page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">Writing services</p>
            <h1>Send the job. Get focused writing built around the brief.</h1>
          </div>
          <p className="page-hero-lead">
            I take on online writing projects across content, research, editing, professional documents, and custom
            briefs. The exact scope depends on what you need done.
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
                    Send this writing job <ArrowRight size={16} />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section process-section service-process-section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="How jobs move"
              title="Clear requirements in. Finished work out."
              text="The workflow is designed to keep communication direct and make the deliverable clear before writing begins."
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
