import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  MoveUpRight,
  Sparkles,
  Waves,
} from "lucide-react";
import { LiquidNav } from "./components/liquid-nav";

const capabilities = [
  ["01", "Embodied AI", "Perceive, reason and respond to the physical world in real time."],
  ["02", "Adaptive motion", "Translate human intent into precise, fluid movement."],
  ["03", "Human outcomes", "Build technology around the people who depend on it."],
];

export default function Home() {
  return (
    <main>
      <LiquidNav />
      <section className="hero" id="top">
        <div className="hero-stage shell">
          <div className="hero-copy">
            <p className="eyebrow"><span className="dot mint" /> Intelligence in motion</p>
            <h1>Technology that<br /><em>moves life forward.</em></h1>
            <p>We unite physical intelligence and human-centred design to create systems that expand capability.</p>
            <a className="hero-button" href="#domains">Explore our work <ArrowDownRight size={18} /></a>
          </div>

          <a className="product-window robotics-window" href="#robotics" aria-label="Explore humanoid robotics">
            <Image src="/images/humanoid-hero.png" alt="Humanoid robot interacting with a blue spatial interface" fill priority sizes="(max-width: 760px) 84vw, 38vw" className="window-image" />
            <span className="window-sheen" />
            <span className="window-meta"><span><i className="dot blue" /> 01</span> Humanoid robotics <ArrowUpRight size={15} /></span>
          </a>
          <a className="product-window rehabilitation-window" href="#rehabilitation" aria-label="Explore rehabilitation devices">
            <Image src="/images/rehab-hero.png" alt="A person walking with a precision robotic rehabilitation exoskeleton" fill priority sizes="(max-width: 760px) 84vw, 38vw" className="window-image" />
            <span className="window-sheen" />
            <span className="window-meta"><span><i className="dot mint" /> 02</span> Rehabilitation devices <ArrowUpRight size={15} /></span>
          </a>
          <div className="stage-orbit" aria-hidden="true"><span /><span /><span /></div>
        </div>

        <div className="hero-statement shell">
          <p>01—02 / One platform</p>
          <span>Humanoid robotics + rehabilitation devices, designed with equal intent.</span>
          <a href="#domains" aria-label="Scroll to domains"><ArrowDownRight size={21} /></a>
        </div>
      </section>

      <section className="manifesto shell section-pad" id="platform">
        <p className="eyebrow dark"><Sparkles size={15} /> One intelligent platform</p>
        <div className="manifesto-copy">
          <h1>Different frontiers.<br /><em>One human instinct.</em></h1>
          <p>Whether we are teaching a humanoid to understand its environment or helping someone rediscover their stride, our work begins in the same place: a deeper understanding of motion.</p>
        </div>
        <div className="capability-grid">
          {capabilities.map(([number, title, text]) => (
            <article className="capability" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <ArrowUpRight size={19} />
            </article>
          ))}
        </div>
      </section>

      <section className="domains" id="domains">
        <article className="domain-card robotics-card" id="robotics">
          <div className="domain-number">01</div>
          <div className="domain-icon"><BrainCircuit size={25} /></div>
          <p className="eyebrow"><span className="dot blue" /> Humanoid robotics</p>
          <h2>Physical intelligence,<br /><em>without limits.</em></h2>
          <p className="domain-description">Purpose-built humanoids that can sense, learn and act in the environments where people need them most.</p>
          <ul>
            <li>Spatial perception</li>
            <li>Dexterous manipulation</li>
            <li>Autonomous task planning</li>
          </ul>
          <a className="text-link" href="#contact">Discover the platform <ArrowUpRight size={17} /></a>
          <div className="orb orb-blue" />
          <div className="robot-outline" aria-hidden="true" />
        </article>

        <article className="domain-card rehab-card" id="rehabilitation">
          <div className="domain-number">02</div>
          <div className="domain-icon"><Waves size={25} /></div>
          <p className="eyebrow dark"><span className="dot mint" /> Rehabilitation devices</p>
          <h2>Recovery that<br /><em>moves with you.</em></h2>
          <p className="domain-description">Responsive assistive systems that make therapy more personal, more measurable and more empowering.</p>
          <ul>
            <li>Adaptive gait support</li>
            <li>Live movement analytics</li>
            <li>Clinician-guided progress</li>
          </ul>
          <a className="text-link" href="#contact">Discover the devices <ArrowUpRight size={17} /></a>
          <div className="orb orb-mint" />
          <div className="gait-line" aria-hidden="true"><i /><i /><i /><i /><i /></div>
        </article>
      </section>

      <section className="connection shell section-pad">
        <div className="connection-header">
          <p className="eyebrow dark">Our shared foundation</p>
          <p>Not two separate ideas. One continuously learning system.</p>
        </div>
        <div className="system-flow" aria-label="Xibotix platform process">
          <div><span>01</span><strong>Sense</strong><small>Perception</small></div><b>→</b>
          <div><span>02</span><strong>Interpret</strong><small>Intelligence</small></div><b>→</b>
          <div><span>03</span><strong>Adapt</strong><small>Motion control</small></div><b>→</b>
          <div><span>04</span><strong>Progress</strong><small>Human outcome</small></div>
        </div>
      </section>

      <section className="closing" id="contact">
        <div className="closing-grid" />
        <p className="eyebrow"><MoveUpRight size={15} /> The next movement starts here</p>
        <h2>Let&apos;s make<br /><em>motion matter.</em></h2>
        <a className="primary-button" href="mailto:hello@xibotix.com">Start a conversation <ArrowUpRight size={18} /></a>
      </section>

      <footer className="footer shell">
        <a className="wordmark footer-mark" href="#top"><span className="wordmark-mark" />XIBOTIX</a>
        <p>Engineering a more capable world.</p>
        <p>&copy; 2026 Xibotix. Concept landing page.</p>
      </footer>
    </main>
  );
}
