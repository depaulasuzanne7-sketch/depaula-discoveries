const discoveries = [
  {
    icon: "🍽️",
    label: "Taste",
    title: "Food Worth the Drive",
    text: "Seafood shacks, neighborhood favorites, handwritten specials, and memorable meals hiding in plain sight.",
  },
  {
    icon: "🌊",
    label: "Escape",
    title: "Coastal & Small-Town Finds",
    text: "Beach roads, charming main streets, vintage shops, and easy weekend escapes with plenty of personality.",
  },
  {
    icon: "🥾",
    label: "Explore",
    title: "Everyday Adventures",
    text: "Scenic walks, sporting events, local trails, spontaneous detours, and affordable ways to make a day memorable.",
  },
];

const explorerPromises = [
  "Personally discovered places",
  "Affordable, approachable adventures",
  "Small businesses worth supporting",
  "Stories and details worth remembering",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="shell nav">
          <a className="brand" href="#top" aria-label="DePaula Discoveries home">
            <span className="brand-mark" aria-hidden="true">PS</span>
            <span>
              <strong>DePaula Discoveries</strong>
              <small>by Planet Suzanne</small>
            </span>
          </a>

          <nav className="nav-links" aria-label="Main navigation">
            <a href="#discoveries">Discoveries</a>
            <a href="#passport">Explorer Passport</a>
            <a href="#about">About</a>
            <a className="nav-cta" href="#join">Join the Explorers</a>
          </nav>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Planet Suzanne Explorers · Founder Edition</p>
            <h1>Find Your Next <span>Favorite Place.</span></h1>
            <p className="lead">
              Discover hidden restaurants, coastal towns, local adventures, sporting events,
              and unforgettable experiences—one joyful discovery at a time.
            </p>
            <div className="actions">
              <a className="button primary" href="#discoveries">Explore Discoveries <span>→</span></a>
              <a className="button secondary" href="#passport">See the Explorer Passport</a>
            </div>
            <div className="hero-note">
              <span className="note-stars">✦ ✦ ✦</span>
              <span>Collect Moments. Not Things.</span>
            </div>
          </div>

          <div className="planet-scene" aria-label="Planet Suzanne Explorer illustration">
            <span className="sun-burst sun-one">✦</span>
            <span className="sun-burst sun-two">✦</span>
            <span className="sun-burst sun-three">✦</span>
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="planet">
              <span className="planet-kicker">planet</span>
              <strong>Suzanne</strong>
              <em>explorers</em>
              <span className="planet-wave">≈</span>
            </div>
            <div className="compass"><span>N</span><b>✦</b></div>
            <div className="postcard">
              <span>Next stop</span>
              <strong>Somewhere worth remembering</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="ticker" aria-label="Brand message">
        <div className="ticker-track">
          <span>HIDDEN GEMS</span><b>✦</b><span>GOOD FOOD</span><b>✦</b>
          <span>SMALL TOWNS</span><b>✦</b><span>OPEN ROADS</span><b>✦</b>
          <span>STORIES WORTH SHARING</span>
        </div>
      </section>

      <section className="discoveries section" id="discoveries">
        <div className="shell">
          <div className="section-heading centered">
            <p className="section-label">Start exploring</p>
            <h2>Every place has a discovery.</h2>
            <p>Planet Suzanne looks for the details that turn an ordinary outing into a story you keep telling.</p>
          </div>

          <div className="discovery-grid">
            {discoveries.map((item) => (
              <article className="discovery-card" key={item.title}>
                <div className="card-topline">
                  <span className="card-icon" aria-hidden="true">{item.icon}</span>
                  <span className="card-label">{item.label}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href="#join">Open the discovery log <span>→</span></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="why section" id="about">
        <div className="shell why-grid">
          <div className="story-card">
            <div className="story-stamp">PS</div>
            <p className="section-label light-label">Why Planet Suzanne?</p>
            <h2>The best memories rarely begin with a perfect plan.</h2>
            <p>
              They begin with a turn down an unfamiliar road, a conversation with a local,
              a special on a handwritten menu, or the decision to stay for one more sunset.
            </p>
            <blockquote>“Every Explorer has a story. Every place has a discovery.”</blockquote>
          </div>

          <div className="promise-panel">
            <p className="section-label">What you’ll find here</p>
            <h3>Warm recommendations, not harsh ratings.</h3>
            <p className="promise-intro">
              This is about celebrating places with heart and helping people notice what makes them special.
            </p>
            <ul>
              {explorerPromises.map((item) => (
                <li key={item}><span>✓</span>{item}</li>
              ))}
            </ul>
            <div className="signature">— Suzanne</div>
          </div>
        </div>
      </section>

      <section className="passport section" id="passport">
        <div className="shell passport-grid">
          <div className="passport-visual">
            <div className="passport-book">
              <div className="passport-corner">Founder Edition</div>
              <span className="passport-symbol">✦</span>
              <small>DePaula Discoveries</small>
              <h3>Planet Suzanne<br />Explorer Passport</h3>
              <div className="passport-rule" />
              <p>Collect moments.<br />Not things.</p>
              <span className="passport-number">NO. 001 / 025</span>
            </div>
            <div className="passport-tag">CARPE DIEM</div>
          </div>

          <div className="passport-copy">
            <p className="section-label">The Founder Edition</p>
            <h2>A small passport for a lifetime of discoveries.</h2>
            <p>
              The first Planet Suzanne Explorer Passports are inspired by old adventure journals,
              vintage surf shops, well-traveled field gear, and the belief that your own story is worth recording.
            </p>
            <div className="passport-features">
              <div><span>01</span><p><strong>Notice it.</strong> Capture the place, meal, person, or moment.</p></div>
              <div><span>02</span><p><strong>Remember it.</strong> Write down the little details before they disappear.</p></div>
              <div><span>03</span><p><strong>Share it.</strong> Help another Explorer find something wonderful.</p></div>
            </div>
            <a className="button primary" href="#join">Become a Founding Explorer <span>→</span></a>
          </div>
        </div>
      </section>

      <section className="mission-strip">
        <div className="shell mission-grid">
          <div>
            <p className="section-label light-label">Mission of the week</p>
            <h2>Take the scenic route.</h2>
          </div>
          <p>Choose one place you have passed a hundred times but never entered. Go in. Look around. Ask what the locals love.</p>
          <span className="mission-icon" aria-hidden="true">⌁</span>
        </div>
      </section>

      <section className="join section" id="join">
        <div className="shell join-card">
          <div>
            <p className="section-label">The journey is beginning</p>
            <h2>Join the Planet Suzanne Explorers.</h2>
            <p>Follow the making of the first 25 Explorer Passports and be among the first to discover what comes next.</p>
          </div>
          <a className="button coral" href="mailto:hello@depauladiscoveries.com">Say Hello <span>→</span></a>
        </div>
      </section>

      <footer>
        <div className="shell footer-inner">
          <div className="footer-brand">
            <span className="brand-mark small-mark">PS</span>
            <div><strong>DePaula Discoveries</strong><span>Powered by Planet Suzanne Explorers</span></div>
          </div>
          <div className="footer-motto">Collect Moments. Not Things. <span>✦</span></div>
        </div>
      </footer>
    </main>
  );
}
