export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="/" className="nav-logo">
          {/* SVG logo */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 70" className="logo-svg">
            <circle cx="28" cy="35" r="20" fill="none" stroke="#1e3a8a" strokeWidth="6"/>
            <circle cx="52" cy="35" r="20" fill="none" stroke="#2563eb" strokeWidth="6"/>
            <path d="M40 15 A20 20 0 0 1 40 55" fill="none" stroke="#1e3a8a" strokeWidth="6"/>
            <path d="M40 15 A20 20 0 0 0 40 55" fill="none" stroke="#2563eb" strokeWidth="6"/>
            <text x="82" y="24" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="700" fill="#1e3a8a">SuretyBond</text>
            <text x="82" y="44" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="400" fill="#64748b">Simple</text>
            <text x="82" y="60" fontFamily="Arial, sans-serif" fontSize="9" fill="#94a3b8" letterSpacing="1">trusted. connected. fast.</text>
          </svg>
        </a>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/quote">Get a Quote</a>
          <a href="/learn">Learn</a>
          <a href="/states">Bonds by State</a>
          <a href="/#contact">Contact</a>
        </div>
        <div className="nav-actions">
          <a href="tel:+18005551234" className="nav-phone">
            {/* Phone SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            (800) 555-1234
          </a>
          <a href="/quote" className="btn btn-green nav-cta">Get a Free Quote</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="hero">
        <div className="hero-content">
          <div className="hero-brand-name">
            <span className="hero-brand-main">SuretyBond</span>
            <span className="hero-brand-sub">Simple</span>
          </div>
          <div className="hero-logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" className="hero-logo-svg">
              <circle cx="42" cy="60" r="36" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="7"/>
              <circle cx="78" cy="60" r="36" fill="none" stroke="rgba(147,197,253,0.8)" strokeWidth="7"/>
              <path d="M60 24 A36 36 0 0 1 60 96" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="7"/>
              <path d="M60 24 A36 36 0 0 0 60 96" fill="none" stroke="rgba(147,197,253,0.8)" strokeWidth="7"/>
            </svg>
          </div>
          <h1>Surety Made Simple</h1>
          <p className="hero-sub">Fast, affordable surety bonds backed by top-rated carriers. Get bonded in minutes — not days.</p>
          <a href="/quote" className="btn btn-green btn-lg">Request a Quote</a>
        </div>
      </header>

      {/* TRUST BAR */}
      <section className="trust-bar">
        <div className="trust-item">
          <span className="trust-icon">🛡️</span>
          <div>
            <strong>A-Rated Carriers</strong>
            <p>Backed by the nation's top surety companies</p>
          </div>
        </div>
        <div className="trust-item">
          <span className="trust-icon">⚡</span>
          <div>
            <strong>Instant Approvals</strong>
            <p>Most bonds approved same day</p>
          </div>
        </div>
        <div className="trust-item">
          <span className="trust-icon">💲</span>
          <div>
            <strong>Lowest Rates</strong>
            <p>Competitive pricing guaranteed</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-it-works" id="about">
        <h2>How It Works</h2>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Select Your State</h3>
            <p>Tell us where you're located so we can find the right bond for you.</p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Choose Your Bond</h3>
            <p>Pick the surety bond type you need from our comprehensive list.</p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Get Your Quote</h3>
            <p>Submit your info and receive a fast, no-obligation quote.</p>
          </div>
        </div>
      </section>

      {/* BOND TYPES */}
      <section className="bond-types">
        <h2>Popular Bond Types</h2>
        <div className="bond-grid">
          <div className="bond-card">
            <h4>Contractor License Bonds</h4>
            <p>Required for general contractors and specialty trades in most states.</p>
          </div>
          <div className="bond-card">
            <h4>Motor Vehicle Dealer Bonds</h4>
            <p>Mandatory for auto dealers, wholesalers, and used car lots.</p>
          </div>
          <div className="bond-card">
            <h4>Notary Bonds</h4>
            <p>Protect the public against notary errors and omissions.</p>
          </div>
          <div className="bond-card">
            <h4>License & Permit Bonds</h4>
            <p>Needed for various business licenses and professional permits.</p>
          </div>
          <div className="bond-card">
            <h4>Court Bonds</h4>
            <p>Fiduciary, appeal, and injunction bonds for legal proceedings.</p>
          </div>
          <div className="bond-card">
            <h4>ERISA / Fidelity Bonds</h4>
            <p>Required for businesses managing employee benefit plans.</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <h2>Ready to Get Bonded?</h2>
        <p>It only takes a few minutes. No obligation, no hassle.</p>
        <a href="/quote" className="btn btn-green btn-lg">Start Your Free Quote</a>
      </section>

      {/* FOOTER */}
      <footer className="footer" id="contact">
        <div className="footer-content">
          <div className="footer-brand">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 70" className="logo-svg logo-footer">
              <circle cx="28" cy="35" r="20" fill="none" stroke="#ffffff" strokeWidth="6"/>
              <circle cx="52" cy="35" r="20" fill="none" stroke="#93c5fd" strokeWidth="6"/>
              <path d="M40 15 A20 20 0 0 1 40 55" fill="none" stroke="#ffffff" strokeWidth="6"/>
              <path d="M40 15 A20 20 0 0 0 40 55" fill="none" stroke="#93c5fd" strokeWidth="6"/>
              <text x="82" y="24" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="700" fill="#ffffff">SuretyBond</text>
              <text x="82" y="44" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="400" fill="#93c5fd">Simple</text>
              <text x="82" y="60" fontFamily="Arial, sans-serif" fontSize="9" fill="#64748b" letterSpacing="1">trusted. connected. fast.</text>
            </svg>
            <p>Surety Made Simple</p>
          </div>
          <div className="footer-links">
            <a href="/">Home</a>
            <a href="/quote">Get a Quote</a>
            <a href="/learn">Learn</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 SuretyBond Simple. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}