import { useState } from 'react'
import './App.css'
import './App.css'

const services = [
  { number: '01', title: 'Web Design & Development', description: 'Modern, responsive websites designed around your goals—from landing pages to complete digital experiences.', tags: ['UI/UX', 'React', 'E-commerce'] },
  { number: '02', title: 'Website Care', description: 'Reliable maintenance, updates, hosting guidance and domain setup to keep your website running smoothly.', tags: ['Maintenance', 'Hosting', 'Support'] },
  { number: '03', title: 'Digital Marketing & SEO', description: 'A stronger online presence through search optimisation, campaign planning and thoughtful digital strategy.', tags: ['SEO', 'Strategy', 'Growth'] },
  { number: '04', title: 'Branding & Graphic Design', description: 'Visual identities and creative assets that help your brand look consistent and memorable.', tags: ['Identity', 'Social Media', 'Graphics'] },
  { number: '05', title: 'Video, Motion & VFX', description: 'Engaging edits, reels, motion graphics and visual effects for content made to hold attention.', tags: ['Editing', 'Reels', 'Motion'] },
  { number: '06', title: 'Music & Artist Support', description: 'Creative coordination for music projects, distribution guidance and artist or channel setup support.', tags: ['Music', 'Distribution', 'Channels'] },
]

const processSteps = [
  ['01', 'Discover', 'We learn about your goals, audience and project requirements.'],
  ['02', 'Plan', 'We agree on scope, priorities, timeline and direction.'],
  ['03', 'Create', 'We design, develop and share progress for your feedback.'],
  ['04', 'Deliver', 'We refine, launch and help you plan what comes next.'],
]

function OrbScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5.2], fov: 42 }} dpr={[1, 1.5]}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[3, 4, 5]} intensity={2.2} color="#d9d2ff" />
      <pointLight position={[-4, -2, 1]} intensity={22} color="#5eead4" />
      <pointLight position={[3, 1, -2]} intensity={18} color="#8b5cf6" />
      <Float speed={1.5} rotationIntensity={0.45} floatIntensity={0.75}>
        <mesh rotation={[0.35, 0.4, 0]}>
          <icosahedronGeometry args={[1.45, 32]} />
          <MeshDistortMaterial
            color="#8b7cff"
            roughness={0.19}
            metalness={0.62}
            distort={0.32}
            speed={1.7}
            radius={1}
          />
        </mesh>
        <mesh scale={1.72} rotation={[0.9, 0.25, 0.3]}>
          <torusGeometry args={[1.15, 0.012, 12, 140]} />
          <meshStandardMaterial color="#8ef3df" metalness={0.7} roughness={0.25} />
        </mesh>
        <mesh scale={1.95} rotation={[0.25, 0.8, 1.15]}>
          <torusGeometry args={[1.15, 0.009, 12, 140]} />
          <meshStandardMaterial color="#b8adff" metalness={0.75} roughness={0.3} />
        </mesh>
      </Float>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.35} />
    </Canvas>
  )
}

function ArrowIcon() {
  return <span aria-hidden="true" className="arrow-icon">↗</span>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState('')

  const handleDemoSubmit = (event) => {
    event.preventDefault()
    setFormStatus('This preview form is not connected yet. Backend integration is the next step.')
  }

  return (
    <div className="site-shell">
      <div className="announcement">
        <span className="status-dot" /> Creative thinking. Thoughtful digital experiences.
      </div>

      <header className="site-header">
        <a className="brand" href="#home" aria-label="Apex Tech Solution home">
          <span className="brand-mark">A<span>↗</span></span>
          <span className="brand-name">APEX <b>TECH SOLUTION</b></span>
        </a>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Our work</a>
          <a href="#process" onClick={() => setMenuOpen(false)}>Process</a>
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Let’s talk <ArrowIcon /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span /> YOUR IDEAS, BUILT FOR WHAT'S NEXT</div>
            <h1>Make your next<br /><span>big idea</span> happen.</h1>
            <p className="hero-description">We bring web, design, marketing and music projects together to help ambitious ideas find their place in the digital world.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">View our work <ArrowIcon /></a>
              <a className="button button-ghost" href="#contact">Contact us <span aria-hidden="true">→</span></a>
            </div>
            <div className="hero-note"><span className="note-line" /> Built around your vision, not a template.</div>
          </div>

          <div className="hero-art" aria-label="Animated abstract 3D artwork">
            <div className="art-glow" />
            <div className="art-grid" />
            <div className="orb-canvas orb-canvas-fallback">
  <div className="fallback-orb" />
  <div className="fallback-ring fallback-ring-one" />
  <div className="fallback-ring fallback-ring-two" />
</div>
           
            <div className="floating-card card-top"><span className="mini-icon">✳</span><span>Ideas into impact</span></div>
            <div className="floating-card card-bottom"><span className="live-dot" /><span>Design · Build · Elevate</span></div>
            <div className="art-caption">DIGITAL, WITH A HUMAN TOUCH <span>✦</span></div>
          </div>
          <div className="hero-index"><span>01</span> / 04</div>
        </section>

        <section className="intro-strip">
          <p>ONE CREATIVE PARTNER.</p>
          <p className="strip-emphasis">Many ways to move forward.</p>
          <span className="strip-star">✳</span>
        </section>

        <section className="services section-wrap" id="services">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span /> WHAT WE CAN DO</div>
              <h2>Good ideas deserve<br /> <span>great execution.</span></h2>
            </div>
            <p>From the first sketch to the final launch, we help turn your ideas into clear, useful and memorable digital work.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-card-top"><span>{service.number}</span><ArrowIcon /></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="tag-list">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="section-wrap work-inner">
            <div className="section-heading work-heading">
              <div>
                <div className="eyebrow"><span /> A GLIMPSE OF WHAT'S POSSIBLE</div>
                <h2>Work that starts<br />with <span>a purpose.</span></h2>
              </div>
              <p>Every project begins with a different challenge. This space will feature real websites, creative work and music projects as the portfolio is supplied.</p>
            </div>
            <div className="portfolio-grid">
              <article className="portfolio-card portfolio-feature">
                <div className="portfolio-visual visual-web"><span className="visual-label">WEB / DIGITAL</span><div className="mock-browser"><div className="browser-dots"><i /><i /><i /></div><div className="mock-layout"><span /><b /><b /><div /></div></div></div>
                <div className="portfolio-info"><div><span>CONCEPT PLACEHOLDER</span><h3>Digital experiences</h3></div><span className="portfolio-arrow">↗</span></div>
              </article>
              <article className="portfolio-card">
                <div className="portfolio-visual visual-creative"><span className="visual-label">DESIGN / BRAND</span><div className="creative-shape">A<span>+</span></div><div className="creative-caption">MAKE IT<br />MEAN SOMETHING</div></div>
                <div className="portfolio-info"><div><span>CONCEPT PLACEHOLDER</span><h3>Visual identities</h3></div><span className="portfolio-arrow">↗</span></div>
              </article>
              <article className="portfolio-card">
                <div className="portfolio-visual visual-motion"><span className="visual-label">VIDEO / MOTION</span><div className="play-shape">▶</div><div className="motion-bars"><i /><i /><i /><i /><i /><i /><i /></div></div>
                <div className="portfolio-info"><div><span>CONCEPT PLACEHOLDER</span><h3>Motion & storytelling</h3></div><span className="portfolio-arrow">↗</span></div>
              </article>
            </div>
            <p className="portfolio-disclaimer">Portfolio visuals above are illustrative placeholders, not claimed client projects. Real work samples and live links will be added after approval.</p>
          </div>
        </section>

        <section className="process section-wrap" id="process">
          <div className="section-heading">
            <div><div className="eyebrow"><span /> A CLEAR WAY FORWARD</div><h2>Simple process.<br /><span>Thoughtful results.</span></h2></div>
            <p>Good collaboration comes from clear expectations, open communication and room to make the work better.</p>
          </div>
          <div className="process-grid">
            {processSteps.map(([number, title, description]) => (
              <article className="process-step" key={number}>
                <div className="process-number">{number}<span>↗</span></div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div className="contact-copy">
              <div className="eyebrow"><span /> HAVE A PROJECT IN MIND?</div>
              <h2>Let's make<br /><span>something matter.</span></h2>
              <p>Tell us a little about what you’re planning. We’ll use it as a starting point for the conversation.</p>
              <a className="contact-email" href="mailto:hello@apextechsolution.com">Email us about your project <ArrowIcon /></a>
              <p className="contact-small">Replace this sample email with the agency’s verified contact details before launch.</p>
            </div>
            <form className="inquiry-form" onSubmit={handleDemoSubmit}>
              <div className="form-title"><span>PROJECT INQUIRY</span><span className="form-step">01 / START</span></div>
              <label>Name<input name="name" type="text" placeholder="Your name" required /></label>
              <div className="form-row">
                <label>Email<input name="email" type="email" placeholder="you@example.com" required /></label>
                <label>Phone<input name="phone" type="tel" placeholder="Your number" /></label>
              </div>
              <div className="form-row">
                <label>Service needed<select name="service" defaultValue="" required><option value="" disabled>Select a service</option>{services.map((service) => <option key={service.number}>{service.title}</option>)}</select></label>
                <label>Budget range<select name="budget" defaultValue=""><option value="">Choose budget</option><option>Under ₹10,000</option><option>₹10,000–₹30,000</option><option>₹30,000–₹75,000</option><option>₹75,000+</option><option>Need guidance</option></select></label>
              </div>
              <label>Tell us about your project<textarea name="details" rows="3" placeholder="What would you like to create?" required /></label>
              <button className="button button-primary form-submit" type="submit">Send inquiry <ArrowIcon /></button>
              {formStatus && <p className="form-status" role="status">{formStatus}</p>}
              <p className="form-privacy">Preview only: this form does not send or store submissions yet.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top">
          <a className="brand footer-brand" href="#home"><span className="brand-mark">A<span>↗</span></span><span className="brand-name">APEX <b>TECH SOLUTION</b></span></a>
          <p>Thoughtful digital work for ideas with somewhere to go.</p>
          <a className="back-top" href="#home">Back to top ↑</a>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Apex Tech Solution</span><span>Website preview · Brand details to be confirmed</span><div><a href="#contact">Contact</a><a href="#services">Services</a></div></div>
      </footer>
    </div>
  )
}

export default App
