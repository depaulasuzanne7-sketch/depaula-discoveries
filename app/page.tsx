const kitItems = [
  {
    icon: "◉",
    title: "The Explorer Passport",
    text: "A compact journal for favorite places, small discoveries, road trips, meals, and the stories you want to remember."
  },
  {
    icon: "⌁",
    title: "The Adventure Pouch",
    text: "A rugged, reusable pouch inspired by vintage surf shops, hiking journals, and well-traveled field gear."
  },
  {
    icon: "✦",
    title: "The Explorer Sticker",
    text: "A small badge for the people who believe every place has a discovery and every explorer has a story."
  },
  {
    icon: "⌛",
    title: "The Hidden Message",
    text: "A simple surprise tucked inside: Carpe Diem. Give yourself permission to tell your story."
  }
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="DePaula Discoveries home">
          <span className="brand-mark">PS</span>
          <span>
            <strong>DePaula Discoveries</strong>
            <small>by Planet Suzanne</small>
          </span>
        </a>
        <div className="nav-links">
          <a href="#story">Our Story</a>
          <a href="#kit">Explorer Kit</a>
          <a href="#join">Join</a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="eyebrow">Planet Suzanne Explorers · Founder Edition</div>
        <div className="hero-grid">
          <div>
            <h1>Find your next favorite place.</h1>
            <p className="lead">
              A joyful travel-and-discovery brand for beach roads, small towns,
              hidden gems, good food, and the stories we collect along the way.
            </p>
            <div className="actions">
              <a className="button primary" href="#kit">Explore the Founder Kit</a>
              <a className="button secondary" href="#story">Discover the Story</a>
            </div>
          </div>
          <div className="planet-card" aria-label="Planet Suzanne illustration">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="planet">
              <span>planet</span>
              <strong>suzanne</strong>
              <em>explorers</em>
            </div>
            <div className="star star-one">✦</div>
            <div className="star star-two">✦</div>
            <div className="compass">N</div>
          </div>
        </div>
      </section>

      <section className="manifesto" id="story">
        <div className="shell narrow">
          <p className="section-label">The philosophy</p>
          <h2>Collect moments. Not things.</h2>
          <p>
            DePaula Discoveries celebrates the overlooked places that become
            unforgettable: the roadside seafood stop, the vintage shop, the
            neighborhood trail, the perfect special on a handwritten menu.
          </p>
          <blockquote>
            “Every Explorer has a story. Every place has a discovery.”
          </blockquote>
        </div>
      </section>

      <section className="kit shell" id="kit">
        <div className="section-heading">
          <div>
            <p className="section-label">The first collection</p>
            <h2>The Planet Suzanne Explorer Kit</h2>
          </div>
          <p>A tiny kit for a lifetime of journeys—made for road trips, beach days, hikes, meals, and unplanned detours.</p>
        </div>

        <div className="cards">
          {kitItems.map((item) => (
            <article className="card" key={item.title}>
              <span className="card-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="hourglass">
        <div className="shell hourglass-inner">
          <div className="hourglass-icon">⌛</div>
          <div>
            <p className="section-label light">A reminder for every explorer</p>
            <h2>Give yourself permission to tell your story.</h2>
            <p>Slow down long enough to notice the details. Write them down. Share the places worth remembering.</p>
          </div>
        </div>
      </section>

      <section className="join shell" id="join">
        <div>
          <p className="section-label">Become an early explorer</p>
          <h2>Join the Founder Edition journey.</h2>
          <p>Follow the making of the first 25 Explorer Passports and discover what Planet Suzanne finds next.</p>
        </div>
        <a className="button primary" href="mailto:hello@depauladiscoveries.com?subject=Planet%20Suzanne%20Explorer">
          Say Hello
        </a>
      </section>

      <footer>
        <div className="shell footer-inner">
          <div>
            <strong>DePaula Discoveries</strong>
            <span>Powered by Planet Suzanne Explorers</span>
          </div>
          <p>Collect Moments. Not Things.</p>
        </div>
      </footer>
    </main>
  );
}
