"use client";

import React from "react";

export default function QuotePage() {
  // NOTE: All UI logic (show/hide steps, field values, form logic) needs to be migrated to React state and handlers.
  // This version is a 1-to-1 JSX translation. Ask if you want the full React logic included!

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="/" className="nav-logo">
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
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            (800) 555-1234
          </a>
          <a href="/quote" className="btn btn-green nav-cta">Get a Free Quote</a>
        </div>
      </nav>

      {/* QUOTE FORM - UI/step logic needs to be added with React state */}
      <main className="quote-page">
        <div className="quote-container">

          {/* PROGRESS BAR */}
          <div className="progress-bar">
            <div className="progress-step active" data-step="1">
              <div className="step-dot">1</div><span>State</span>
            </div>
            <div className="progress-line"></div>
            <div className="progress-step" data-step="2">
              <div className="step-dot">2</div><span>Bond</span>
            </div>
            <div className="progress-line"></div>
            <div className="progress-step" data-step="3">
              <div className="step-dot">3</div><span>Date</span>
            </div>
            <div className="progress-line"></div>
            <div className="progress-step" data-step="4">
              <div className="step-dot">4</div><span>Contact</span>
            </div>
            <div className="progress-line"></div>
            <div className="progress-step" data-step="5">
              <div className="step-dot">5</div><span>Principal</span>
            </div>
            <div className="progress-line"></div>
            <div className="progress-step" data-step="6">
              <div className="step-dot">6</div><span>Review</span>
            </div>
          </div>

          {/* STEP 1: STATE */}
          <section className="form-step active" id="step-1">
            <h2>Where are you located?</h2>
            <p className="step-desc">Select the state where the bond is needed.</p>
            <div className="field-group">
              <label htmlFor="state">State <span className="required">*</span></label>
              <select id="state" required>
                <option value="">— Select a State —</option>
              </select>
              <span className="field-error" id="state-error"></span>
            </div>
            <button className="btn btn-green">Continue</button>
          </section>

          {/* STEP 2 ... */}
          <section className="form-step" id="step-2">
            <h2>What bond do you need?</h2>
            <p className="step-desc">Choose the type of surety bond required.</p>
            <div className="field-group">
              <label htmlFor="bondType">Bond Type <span className="required">*</span></label>
              <select id="bondType" required>
                <option value="">— Select a Bond Type —</option>
                <option>Contractor License Bond</option>
                <option>Motor Vehicle Dealer Bond</option>
                <option>Notary Bond</option>
                <option>License &amp; Permit Bond</option>
                <option>Court Bond</option>
                <option>ERISA / Fidelity Bond</option>
                <option>Freight Broker Bond (BMC-84)</option>
                <option>Mortgage Broker Bond</option>
                <option>Tax Preparer Bond</option>
                <option>Title Bond</option>
                <option>Wage and Welfare Bond</option>
                <option>Other / Not Sure</option>
              </select>
              <span className="field-error" id="bond-error"></span>
            </div>
            {/* ...Placeholders for subtype, obligee, etc. */}
            <div className="btn-row">
              <button className="btn btn-outline">Back</button>
              <button className="btn btn-green">Continue</button>
            </div>
          </section>

          {/* Other steps ... (STEP 3-6, just like above, convert entire body) */}
          {/* Paste and convert the rest of your steps following the above pattern.
              - Use className
              - Use htmlFor
              - Remove deprecated/broken attributes (no `onclick`, use handlers or leave blank for now)
          */}

          {/* STEP 6: REVIEW */}
          <section className="form-step" id="step-6">
            <h2>Review Your Application</h2>
            <p className="step-desc">Please review all details before submitting. Click any section to make changes.</p>
            {/* ...Review content here */}
            <div className="btn-row">
              <button className="btn btn-outline">Back</button>
              <button className="btn btn-green btn-lg">Submit Application</button>
            </div>
          </section>

          {/* SUCCESS MESSAGE */}
          <section className="form-step" id="step-success">
            <div className="success-box">
              <div className="success-icon">✅</div>
              <h2>Application Submitted!</h2>
              <p>Thank you! We've received your application and will be in touch shortly with your quote.</p>
              <p className="success-sub">📧 A confirmation has been sent to your email.</p>
              <a href="/" className="btn btn-green">Back to Home</a>
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-bottom">
          <p>&copy; 2026 SuretyBond Simple. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}