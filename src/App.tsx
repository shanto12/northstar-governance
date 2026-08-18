import { useEffect, useState } from 'react'
import './App.css'

const Arrow = () => <span aria-hidden="true">↗</span>

const Mark = () => (
  <svg className="mark" viewBox="0 0 28 28" aria-hidden="true">
    <path d="M14 1.5 17.2 10.8 26.5 14l-9.3 3.2L14 26.5l-3.2-9.3L1.5 14l9.3-3.2L14 1.5Z" />
    <circle cx="14" cy="14" r="2.4" />
  </svg>
)

const Shield = ({ variant = 'spark' }: { variant?: 'spark' | 'layers' | 'path' }) => {
  if (variant === 'layers') return <svg viewBox="0 0 28 28" aria-hidden="true"><path d="m14 3 10 5-10 5L4 8l10-5Z" /><path d="m4 14 10 5 10-5M4 20l10 5 10-5" /></svg>
  if (variant === 'path') return <svg viewBox="0 0 28 28" aria-hidden="true"><path d="M4 23V9l7-5 6 5 7-4v18" /><path d="m4 18 7-5 6 5 7-5" /><circle cx="11" cy="13" r="2" /><circle cx="17" cy="18" r="2" /></svg>
  return <svg viewBox="0 0 28 28" aria-hidden="true"><path d="M14 3 23 7v6c0 6-3.8 10.1-9 12-5.2-1.9-9-6-9-12V7l9-4Z" /><path d="m14 8 1.4 4.1 4.1 1.4-4.1 1.4L14 19l-1.4-4.1-4.1-1.4 4.1-1.4L14 8Z" /></svg>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [demoOpen, setDemoOpen] = useState(false)

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setDemoOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="nav-wrap">
        <a className="brand" href="#" aria-label="Northstar Governance home">
          <Mark /> <span>Northstar</span>
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="main-nav">
          <span className="sr-only">Toggle navigation</span><span /><span />
        </button>
        <nav id="main-nav" className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
          <a href="#platform">Platform</a>
          <a href="#approach">Approach</a>
          <a href="#security">Security</a>
          <a href="#company">Company</a>
        </nav>
        <button className="button button-small nav-cta" onClick={() => setDemoOpen(true)}>Request a briefing <Arrow /></button>
      </header>

      <main id="main">
        <section className="hero-section">
          <div className="eyebrow reveal">AI governance, made operational <span>01</span></div>
          <div className="hero-grid">
            <div className="hero-copy">
              <h1>Build AI you can<br /><em>stand behind.</em></h1>
              <p>Northstar gives risk, legal, and technology teams one operating system to govern AI—from first use case to continuous oversight.</p>
              <div className="hero-actions">
                <button className="button" onClick={() => setDemoOpen(true)}>Explore Northstar <Arrow /></button>
                <a className="text-link" href="#platform">See the platform <span aria-hidden="true">↓</span></a>
              </div>
            </div>
            <div className="orbit-visual" aria-label="Illustration showing coordinated AI governance">
              <div className="orbit orbit-one"><i /></div>
              <div className="orbit orbit-two"><i /></div>
              <div className="orbit orbit-three"><i /></div>
              <div className="core"><Mark /></div>
              <span className="orbit-label label-risk">Risk</span>
              <span className="orbit-label label-policy">Policy</span>
              <span className="orbit-label label-evidence">Evidence</span>
            </div>
          </div>
          <div className="trust-row">
            <p>Designed for teams building with</p>
            <div><span>Generative AI</span><span>Predictive systems</span><span>Third-party models</span><span>Autonomous agents</span></div>
          </div>
        </section>

        <section className="statement-section" id="approach">
          <span className="section-index">02 / THE MANDATE</span>
          <p className="statement">AI is moving faster than traditional governance. <strong>Northstar turns principles into a living system of record</strong>—so innovation and accountability advance together.</p>
          <div className="statement-note"><span className="line" />Built for how enterprises actually work</div>
        </section>

        <section className="platform-section" id="platform">
          <div className="section-heading">
            <div><span className="section-index">03 / THE PLATFORM</span><h2>One system.<br /><em>Every decision.</em></h2></div>
            <p>Replace scattered spreadsheets and point-in-time reviews with a clear, connected view of every AI system and the decisions around it.</p>
          </div>
          <div className="feature-grid">
            <article className="feature-card">
              <div className="feature-icon"><Shield /></div><span className="card-number">01</span>
              <h3>Inventory that stays current</h3>
              <p>Map every AI use case, model, owner, vendor, and dependency in one continuously maintained registry.</p>
              <div className="mini-ui inventory-ui">
                <div className="mini-head"><span>System inventory</span><i>Live</i></div>
                <div className="system-row"><b>Customer assist</b><span className="risk medium">Medium</span></div>
                <div className="system-row"><b>Demand forecast</b><span className="risk low">Low</span></div>
                <div className="system-row"><b>Talent matching</b><span className="risk review">Review</span></div>
              </div>
            </article>
            <article className="feature-card feature-offset">
              <div className="feature-icon"><Shield variant="layers" /></div><span className="card-number">02</span>
              <h3>Risk, made actionable</h3>
              <p>Translate internal policy and global frameworks into proportional assessments, controls, and accountable workflows.</p>
              <div className="mini-ui score-ui">
                <div className="score-ring"><span>72</span><small>CONTROL<br />COVERAGE</small></div>
                <div className="score-bars"><span>Privacy <i style={{'--w': '88%'} as React.CSSProperties} /></span><span>Fairness <i style={{'--w': '64%'} as React.CSSProperties} /></span><span>Security <i style={{'--w': '76%'} as React.CSSProperties} /></span></div>
              </div>
            </article>
            <article className="feature-card">
              <div className="feature-icon"><Shield variant="path" /></div><span className="card-number">03</span>
              <h3>Evidence, always ready</h3>
              <p>Connect controls to durable evidence and preserve the reasoning behind every approval, exception, and change.</p>
              <div className="mini-ui evidence-ui">
                <div className="timeline-line" />
                <div><i>✓</i><p><b>Model card approved</b><small>Risk & compliance · Today</small></p></div>
                <div><i>✓</i><p><b>Bias evaluation attached</b><small>Model owner · Yesterday</small></p></div>
                <div><i>•</i><p><b>Quarterly review</b><small>Scheduled · Oct 14</small></p></div>
              </div>
            </article>
          </div>
        </section>

        <section className="workflow-section">
          <div className="workflow-copy">
            <span className="section-index light">04 / CONTINUOUS OVERSIGHT</span>
            <h2>Governance that moves<br /><em>at the speed of AI.</em></h2>
            <p>Bring every stakeholder into a shared operating rhythm. Northstar makes ownership visible, reviews repeatable, and emerging risk impossible to ignore.</p>
            <a className="button button-light" href="#security">See how it works <Arrow /></a>
          </div>
          <div className="workflow-rail" aria-label="Governance workflow">
            {[
              ['01', 'Discover', 'Capture use cases at the source'],
              ['02', 'Assess', 'Apply consistent, proportional risk'],
              ['03', 'Decide', 'Route clear, accountable approvals'],
              ['04', 'Monitor', 'Track controls and change over time'],
            ].map(([num, title, copy]) => <div className="workflow-step" key={num}><span>{num}</span><div><h3>{title}</h3><p>{copy}</p></div><i>↗</i></div>)}
          </div>
        </section>

        <section className="security-section" id="security">
          <div className="security-seal"><div><Mark /><span>SECURITY<br />BY DESIGN</span></div></div>
          <div className="security-copy">
            <span className="section-index">05 / TRUST BY DESIGN</span>
            <h2>Your governance data<br /><em>deserves governance, too.</em></h2>
            <p>Northstar is designed around enterprise security fundamentals: least-privilege access, traceable activity, configurable retention, and clear data boundaries.</p>
            <div className="security-points"><span>Role-based access</span><span>Audit-ready history</span><span>Encryption in transit</span><span>Data minimization</span></div>
          </div>
        </section>

        <section className="cta-section" id="company">
          <div className="eyebrow">THE CLEAR WAY FORWARD <span>06</span></div>
          <h2>Make responsible AI<br /><em>your operating advantage.</em></h2>
          <p>See how Northstar can turn your AI principles into a practice your teams can trust.</p>
          <button className="button button-large" onClick={() => setDemoOpen(true)}>Request a briefing <Arrow /></button>
          <div className="cta-orbit" aria-hidden="true"><div /><span><Mark /></span></div>
        </section>
      </main>

      <footer>
        <div className="footer-top">
          <a className="brand brand-light" href="#"><Mark /><span>Northstar</span></a>
          <p>Clarity for every AI decision.</p>
          <div><a href="#platform">Platform</a><a href="#approach">Approach</a><a href="#security">Security</a><a href="mailto:hello@northstar-governance.com">Contact</a></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Northstar Governance</span><span>Responsible systems, thoughtfully built.</span></div>
      </footer>

      {demoOpen && <div className="modal-backdrop" role="presentation" onMouseDown={() => setDemoOpen(false)}>
        <section className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onMouseDown={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={() => setDemoOpen(false)} aria-label="Close dialog">×</button>
          <span className="section-index">PRIVATE BRIEFING</span>
          <h2 id="modal-title">Start with clarity.</h2>
          <p>Tell us where your AI governance program stands. We’ll shape a focused conversation around your priorities.</p>
          <form onSubmit={(e) => { e.preventDefault(); setDemoOpen(false); }}>
            <label>Work email<input type="email" required placeholder="you@company.com" /></label>
            <label>Organization<input type="text" required placeholder="Company name" /></label>
            <button className="button" type="submit">Request briefing <Arrow /></button>
          </form>
        </section>
      </div>}
    </div>
  )
}

export default App
