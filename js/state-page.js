(function() {
  // Get state slug from URL: ?state=california
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('state');

  if (!slug || !STATE_DATA[slug]) {
    document.getElementById('state-content').innerHTML =
      '<div style="text-align:center;padding:100px 20px;">' +
      '<h2>State not found</h2>' +
      '<p>Please <a href="../states.html">go back</a> and select a state.</p>' +
      '</div>';
    return;
  }

  const s = STATE_DATA[slug];

  // Update page title
  document.title = s.name + ' Surety Bonds | Requirements & Free Quotes | SuretyBond Simple';

  // Build bond cards
  var bondsHtml = '';
  for (var i = 0; i < s.bonds.length; i++) {
    var b = s.bonds[i];
    bondsHtml +=
      '<div class="bond-card">' +
        '<div class="bond-card-header">' +
          '<h3>' + b.name + '</h3>' +
          '<span class="bond-amount">' + b.amount + '</span>' +
        '</div>' +
        '<p>' + b.desc + '</p>' +
        '<a href="../quote.html" class="btn btn-sm btn-blue">Get a Quote</a>' +
      '</div>';
  }

  // Build full page content
  document.getElementById('state-content').innerHTML =
    // Breadcrumb
    '<div class="breadcrumb"><div class="container">' +
      '<a href="../index.html">Home</a> &raquo; <a href="../states.html">Bonds by State</a> &raquo; <span>' + s.name + '</span>' +
    '</div></div>' +

    // Hero
    '<section class="state-hero"><div class="container">' +
      '<span class="state-badge">' + s.abbr + '</span>' +
      '<h1>' + s.name + ' Surety Bonds</h1>' +
      '<p>Everything you need to know about surety bond requirements in ' + s.name + '. Get bonded fast with competitive rates and same-day approval.</p>' +
      '<a href="../quote.html" class="btn btn-green btn-lg">Get Your Free ' + s.name + ' Bond Quote</a>' +
    '</div></section>' +

    // Quick Facts
    '<section class="state-facts"><div class="container"><div class="facts-grid">' +
      '<div class="fact-card"><span class="fact-icon">&#127963;</span><h3>State Capital</h3><p>' + s.capital + '</p></div>' +
      '<div class="fact-card"><span class="fact-icon">&#128203;</span><h3>Regulating Agency</h3><p>' + s.agency + '</p></div>' +
      '<div class="fact-card"><span class="fact-icon">&#9889;</span><h3>Approval Time</h3><p>Same Day - Most Bonds</p></div>' +
      '<div class="fact-card"><span class="fact-icon">&#128176;</span><h3>Premium Starts At</h3><p>1% of Bond Amount</p></div>' +
    '</div></div></section>' +

    // Bond Types
    '<section class="state-bonds"><div class="container">' +
      '<h2>Common Surety Bonds in ' + s.name + '</h2>' +
      '<p class="section-subtitle">Below are the most frequently required surety bonds in ' + s.name + '. Don\'t see your bond? Contact us - we can help.</p>' +
      '<div class="bond-list">' + bondsHtml + '</div>' +
    '</div></section>' +

    // How It Works
    '<section class="state-process"><div class="container">' +
      '<h2>How to Get Bonded in ' + s.name + '</h2>' +
      '<div class="process-steps">' +
        '<div class="process-step"><div class="step-number">1</div><h3>Apply Online</h3><p>Fill out our simple online application in under 5 minutes. No paperwork, no hassle.</p></div>' +
        '<div class="process-step"><div class="step-number">2</div><h3>Get Your Quote</h3><p>Receive a personalized premium quote based on your bond type, amount, and credit profile.</p></div>' +
        '<div class="process-step"><div class="step-number">3</div><h3>Get Bonded</h3><p>Once approved, your ' + s.name + ' surety bond is issued and delivered - often the same day.</p></div>' +
      '</div>' +
    '</div></section>' +

    // FAQ
    '<section class="state-faq"><div class="container">' +
      '<h2>Frequently Asked Questions - ' + s.name + ' Bonds</h2>' +
      '<div class="faq-list">' +
        '<div class="faq-item"><h3>How much does a surety bond cost in ' + s.name + '?</h3><p>Most ' + s.name + ' surety bonds cost between 1%-5% of the total bond amount. Your exact premium depends on the bond type, amount, and your credit score. Applicants with good credit often qualify for rates as low as 1%.</p></div>' +
        '<div class="faq-item"><h3>How long does it take to get a surety bond in ' + s.name + '?</h3><p>Most bonds are approved and issued within 1 business day. Many standard bonds can be issued the same day you apply.</p></div>' +
        '<div class="faq-item"><h3>Can I get a surety bond in ' + s.name + ' with bad credit?</h3><p>Yes! We work with multiple surety companies to find options for all credit types. Applicants with lower credit scores may pay a higher premium but can still get bonded.</p></div>' +
        '<div class="faq-item"><h3>What is the ' + s.agency + '?</h3><p>The ' + s.agency + ' is the state regulatory body that oversees insurance and surety bond requirements in ' + s.name + '. They set the rules for which businesses and professionals need surety bonds.</p></div>' +
      '</div>' +
    '</div></section>' +

    // CTA
    '<section class="states-cta"><div class="container">' +
      '<h2>Ready to Get Your ' + s.name + ' Surety Bond?</h2>' +
      '<p>Our experts are standing by to help you get bonded quickly at the best possible rate.</p>' +
      '<div class="states-cta-buttons">' +
        '<a href="../quote.html" class="btn btn-green">Get a Free Quote</a>' +
        '<a href="tel:+18005551234" class="btn btn-blue-outline">Call (800) 555-1234</a>' +
      '</div>' +
    '</div></section>';
})();