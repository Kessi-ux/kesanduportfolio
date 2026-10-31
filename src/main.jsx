import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu,
  Code2, Layers3, Zap, BookOpen, Users, BriefcaseBusiness, ExternalLink, Search, Compass, ListChecks, Workflow
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    number: "02",
    category: "PRODUCT · HEALTHCARE",
    title: "Healthcare Provider Discovery & Booking",
    description: "An independent product case study exploring how people discover healthcare providers and move from search to booking.",
    tags: ["Product Discovery", "User Flows", "PRD"],
    accent: "cyan",
    link: "https://app.notion.com/p/Kesandu-Uchenyi-Product-Management-Portfolio-3eb8cdec2900806793b4c4cf99529020",
    linkText: "Case study"
  },
  {
    number: "01",
    category: "RESEARCH · POWER SYSTEMS",
    title: "Load Flow Analysis Tool",
    description: "A JavaScript-based approach to load-flow analysis, explored through matrix calculations and a three-bus power-system model.",
    tags: ["JavaScript", "Power Systems", "Research"],
    accent: "violet",
    link: "https://doi.org/10.1109/PECon62060.2024.10826692",
    linkText: "Read publication"
  }
];

const experience = [
  { date: "2024 — NOW", role: "Product Management Mentor (Volunteer)", org: "Genesys Tech Hub", detail: "Mentoring Product Management interns on product strategy, vision, market research, requirements gathering, Agile and Scrum methodologies, and product lifecycle management." },
  { date: "2025 — 2026", role: "Programme Associate", org: "Charitable Literacy & Academic Youth Foundation", detail: "Coordinated educational initiatives, student mentorship and scholarship support, while contributing to project coordination, proposals and digital systems." },
  { date: "2023 — 2024", role: "Software Manager (Contract)", org: "FEYTI Medical Group", detail: "Gathered stakeholder requirements, developed PRDs for the AI Cylinder product, maintained product documentation, coordinated software interns and facilitated Agile stand-ups." }
];

function SectionHeading({ eyebrow, title, detail }) {
  return <div className="section-heading">
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {detail && <p>{detail}</p>}
  </div>;
}

function App() {
  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="nav container">
        <a className="brand" href="#home" aria-label="Kesandu Uchenyi home"><span className="brand-mark">K<span>.</span></span><span>KESANDU UCHENYI</span></a>
        <nav className="nav-links">
          <a href="#about">About</a><a href="#work">Projects</a><a href="#experience">Experience</a><a href="#contact">Contact</a><a href="/Kesandu-Uchenyi-CV.pdf" target="_blank" rel="noreferrer">Resume</a>
        </nav>
        <a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={15}/></a>
      </header>
      <main>
        <section className="hero container" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="pulse" /> OPEN TO WORK <span className="availability-dot">·</span> PRODUCT & TECHNOLOGY</div>
            <h1>Building at the<br/>intersection of <span className="gradient-text">people</span>,<br/><span className="gradient-text gradient-two">products</span> & technology.</h1>
            <p className="hero-intro">I'm Kesandu Uchenyi — a Product Manager focused on building healthtech and digital products. I solve meaningful problems by aligning user needs with business goals, turning market insights and validated ideas into valuable digital products.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17}/></a>
              <a className="button button-ghost" href="#contact">Get in touch <ArrowUpRight size={16}/></a>
            </div>
            <div className="hero-meta"><span><i className="meta-line"/></span><span className="mono">PRODUCT · SOFTWARE · ENGINEERING</span></div>
          </div>
          <div className="hero-art" aria-label="Abstract portfolio artwork">
            <div className="art-orbit orbit-a"/><div className="art-orbit orbit-b"/>
            <div className="art-core"><img src="/kess.jpg" alt="Kesandu Uchenyi" /></div>            
            <div className="float-card card-top"><span className="mini-icon violet-bg"><Layers3 size={16}/></span><span><b>Product Thinking</b><small>From problem to product</small></span></div>
            <div className="float-card card-bottom"><span className="mini-icon cyan-bg"><Code2 size={16}/></span><span><b>Technical Execution</b><small>Build · test · iterate</small></span></div>
            <div className="art-label label-one">01 / DISCOVER</div><div className="art-label label-two">02 / BUILD</div>
          </div>
          <div className="hero-scroll"><span/> SCROLL TO EXPLORE</div>
        </section>

        <section className="signal-strip">
          <div className="container signal-grid">
            <div><span className="signal-number">01</span><span>Product Discovery</span></div>
            <div><span className="signal-number">02</span><span>Product Strategy</span></div>
            <div><span className="signal-number">03</span><span>Product Planning</span></div>
            <div><span className="signal-number">04</span><span>Agile Delivery</span></div>
          </div>
        </section>

        <section className="section container" id="about">
          <SectionHeading eyebrow="GETTING TO KNOW ME" title={<>Curious by nature.<br/><span className="muted-heading">Practical by design.</span></>} detail="I enjoy turning problems into clear, useful solutions."/>
          <div className="about-grid">
            <div className="about-copy">
              <p className="lead-copy">My journey began with a B.Eng in Electrical Engineering and grew into software, and product thinking.</p>
              <p>I'm interested in understanding what people need, translating those needs into structured requirements, and working with technical teams to deliver solutions that make a measurable difference.</p>
              <p>Beyond product, I enjoy learning, collaborating with others and contributing to initiatives that create meaningful impact.</p>
              <a className="text-link" href="#contact">Let's build something useful <ArrowUpRight size={16}/></a>
            </div>
            <div className="about-panel">
              <div className="panel-top"><span className="eyebrow">MY TOOLKIT</span><span className="panel-dot">● ● ●</span></div>
              <div className="tool-group"><span className="tool-icon violet-bg"><Search size={18}/></span><div><b>Product Discovery</b><p>User Research · Market Research · Problem Identification · Idea Validation</p></div></div>
              <div className="tool-group"><span className="tool-icon cyan-bg"><Compass size={18}/></span><div><b>Product Strategy</b><p>Product Vision · Competitive Analysis · Value Proposition · Product Goals</p></div></div>
              <div className="tool-group"><span className="tool-icon orange-bg"><ListChecks size={18}/></span><div><b>Product Planning</b><p>Requirements · User Stories · User Flows · Prioritisation · Roadmapping</p></div></div>
              <div className="tool-group"><span className="tool-icon lime-bg"><Workflow size={18}/></span><div><b>Agile Delivery</b><p>Agile · Scrum · MVP Testing · Sprint Planning · Iteration</p></div></div></div>
            </div>
        </section>

        <section className="section work-section" id="work">
          <div className="container">
            <SectionHeading eyebrow="MY WORKS" title={<>Projects with a <span className="gradient-text">purpose.</span></>} detail="A selection of technical work, product thinking and community contributions."/>
            <div className="project-grid">
              {projects.map((project) => <article className={`project-card ${project.accent}`} key={project.number}>
                <div className="project-top"><span className="project-number">{project.number}</span><span className="project-arrow"><ArrowUpRight size={19}/></span></div>
                <span className="eyebrow">{project.category}</span>
                <h3>{project.title}</h3><p>{project.description}</p>
                <div className="tag-row">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
                {project.link ? <a className="project-link" href={project.link} target="_blank" rel="noreferrer">{project.linkText} <ExternalLink size={14}/></a> : <span className="project-link pending-link">{project.linkText} </span>}
              </article>)}
            </div>
          </div>
        </section>

        <section className="section container" id="experience">
          <SectionHeading eyebrow="THE JOURNEY SO FAR" title={<>Experience that connects<br/><span className="muted-heading">technology with people.</span></>} detail="A cross-disciplinary foundation built through work, research and service."/>
          <div className="timeline">
            {experience.map((item, i) => <div className="timeline-item" key={item.org}>
              <div className="timeline-date">{item.date}</div><div className="timeline-marker"><span/></div>
              <div className="timeline-content"><span className="timeline-index">0{i+1}</span><h3>{item.role}</h3><h4>{item.org}</h4><p>{item.detail}</p></div>
            </div>)}
          </div>
        </section>

        <section className="section research-section">
          <div className="container research-card">
            <div className="research-icon"><BookOpen size={25}/></div>
            <div className="research-content"><span className="eyebrow">RESEARCH & PUBLICATION</span><h2>Application of Full Stack Web Development Technology in Load Flow Analysis for Real Time Electrical Power System Management</h2><p>Co-author of research on applying full-stack web development technology to load-flow analysis for real-time electrical power-system management, presented in the IEEE PECon 2024 publication record.</p><a href="https://doi.org/10.1109/PECon62060.2024.10826692" target="_blank" rel="noreferrer" className="text-link">View publication <ArrowUpRight size={16}/></a></div>
            <div className="research-stamp">IEEE<br/><span>PECon</span><small>2024</small></div>
          </div>
        </section>

        <section className="section container contact-section" id="contact">
          <div className="contact-box">
            <div className="contact-orb"/>
            <span className="eyebrow">HAVE YOU GOT A PROJECT IN MIND?</span>
            <h2>Let's turn a good<br/><span className="gradient-text">idea into impact.</span></h2>
            <p>Let's discuss products, technology, collaboration and meaningful problems to solve.</p>
            <div className="contact-actions">
              <a className="button button-primary" href="mailto:uchenyikesanduc@gmail.com"><Mail size={16}/> Email me <ArrowUpRight size={16}/></a>
              <a className="button button-ghost" href="https://www.linkedin.com/in/kesanduuchenyi" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a>
              <a className="button button-ghost" href="https://github.com/Kessi-ux" target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container"><a className="brand" href="#home"><span className="brand-mark">K<span>.</span></span><span>KESANDU UCHENYI</span></a><span>Copyright © 2026</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);
