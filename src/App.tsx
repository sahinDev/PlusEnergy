import { useMemo, useState } from "react";
import "./App.css";

const plusEnergyLogoUrl = new URL(
  "./assets/plusenergy-solutions-logo.svg",
  import.meta.url
).href;

type Service = {
  title: string;
  description: string;
  image: string;
  keywords: string[];
};

const services: Service[] = [
  {
    title: "Residential Electrical Services",
    description:
      "Panel upgrades, lighting, EV chargers, troubleshooting, rewiring and safe home electrical installations.",
    image:
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?q=80&w=1200&auto=format&fit=crop",
    keywords: ["home", "residential", "panel", "ev charger"],
  },
  {
    title: "Commercial Electrical Services",
    description:
      "Reliable electrical work for restaurants, retail locations, offices, plazas and commercial spaces.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
    keywords: ["commercial", "office", "restaurant", "retail"],
  },
  {
    title: "Emergency Repairs",
    description:
      "Fast response electrical diagnostics, power issues, breaker problems and urgent repairs.",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1200&auto=format&fit=crop",
    keywords: ["emergency", "repair", "breaker", "power"],
  },
  {
    title: "Lighting Installation",
    description:
      "Interior, exterior, pot lights, commercial lighting, LED upgrades and architectural lighting.",
    image:
      "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=1200&auto=format&fit=crop",
    keywords: ["lighting", "led", "pot lights", "upgrade"],
  },
];

const projects = [
  {
    title: "Tim Hortons Lighting Upgrade",
    location: "Windsor, Ontario",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Restaurant Electrical Renovation",
    location: "Toronto, Ontario",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Residential Exterior Lighting",
    location: "GTA",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function App() {
  const [search, setSearch] = useState("");

  const filteredServices = useMemo(() => {
    const q = search.toLowerCase();
    if (!q) return services;
    return services.filter((service) =>
      [service.title, service.description, ...service.keywords]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [search]);

  return (
    <div className="site">
      <header className="topbar">
        <div className="logoBox">
          <img
            src={plusEnergyLogoUrl}
            alt="PlusEnergy Solutions"
            className="brandLogo"
          />
        </div>

        <nav className="topLinks" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#quote">Quote</a>
        </nav>

        <a href="tel:6475013597" className="headerCall">
          Call
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="heroOverlay" />

          <div className="heroContent">
            <div className="badge">ECRA / ESA Licensed Electrical Contractor</div>

            <h1>Professional Electrical Services Across Ontario</h1>

            <p>
              Residential, commercial and emergency electrical solutions with
              licensed electricians, clear proposals and reliable project delivery.
            </p>

            <div className="heroActions">
              <a href="https://wa.me/16475013597" className="primaryBtn">
                WhatsApp Message
              </a>
              <a href="tel:6475013597" className="secondaryBtn">
                Call Now
              </a>
            </div>

            <div className="trustRow">
              <div>
                <strong>ESA</strong>
                <span>Licensed</span>
              </div>
              <div>
                <strong>10+</strong>
                <span>Years Experience</span>
              </div>
              <div>
                <strong>GTA</strong>
                <span>Service Area</span>
              </div>
            </div>
          </div>
        </section>

        <section className="quickSearch">
          <h2>What service do you need?</h2>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search: panel upgrade, lighting, emergency..."
          />
        </section>

        <section id="services" className="section">
          <div className="sectionHeader">
            <span>Services</span>
            <h2>Electrical solutions built for homes and businesses</h2>
          </div>

          <div className="serviceGrid">
            {filteredServices.map((service) => (
              <article className="serviceCard" key={service.title}>
                <img src={service.image} alt={service.title} />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="#quote">Request Quote -&gt;</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="darkSection">
          <span>Why Choose Us</span>
          <h2>Designed to convert mobile visitors into real leads</h2>

          <div className="reasonList">
            <div>
              <b>Licensed &amp; Insured</b>
              <p>Clear trust signal shown early on mobile.</p>
            </div>
            <div>
              <b>Fast Contact Options</b>
              <p>Call, WhatsApp and quote buttons always visible.</p>
            </div>
            <div>
              <b>Project Proof</b>
              <p>Commercial and residential work shown with strong visuals.</p>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="sectionHeader">
            <span>Projects</span>
            <h2>Recent electrical work</h2>
          </div>

          <div className="projectList">
            {projects.map((project) => (
              <article className="projectCard" key={project.title}>
                <img src={project.image} alt={project.title} />
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.location}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="quote" className="quoteBox">
          <h2>Need a licensed electrician?</h2>
          <p>
            Get a free quote for residential, commercial or emergency electrical work.
          </p>

          <form>
            <input placeholder="Your name" />
            <input placeholder="Phone number" />
            <input placeholder="Service needed" />
            <textarea placeholder="Tell us about the project" />
            <button type="button">Request Free Quote</button>
          </form>
        </section>
      </main>

      <nav className="bottomNav">
        <a href="#quote">Quote</a>
        <a href="tel:6475013597">Call</a>
        <a href="https://wa.me/16475013597">WhatsApp</a>
      </nav>
    </div>
  );
}
