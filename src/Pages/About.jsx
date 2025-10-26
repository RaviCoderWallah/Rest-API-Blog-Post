const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-center">
          <h1>Our Mission: Build Better, Share Faster</h1>
          <p className="about-lead">
            We help developers, creators, and teams ship production-ready
            content by providing practical tutorials, real examples, and
            straightforward deployment guides.
          </p>
          <p className="about-sub">
            From first commit to live site — we focus on clarity, speed, and
            real-world outcomes so you can learn by doing and ship with
            confidence.
          </p>
        </div>
      </section>

      <section className="company-details">
        <div className="company-center">
          <h2>Company Details</h2>
          <p className="company-lead">A small team with a big focus on developer experience.</p>

          <div className="company-grid">
            <div className="company-card">
              <h3>Founded</h3>
              <p>2021</p>
            </div>
            <div className="company-card">
              <h3>Headquarters</h3>
              <p>Remote (Global)</p>
            </div>
            <div className="company-card">
              <h3>Team</h3>
              <p>10–25 engineers & creators</p>
            </div>
            <div className="company-card">
              <h3>Contact</h3>
              <p>hello@yourdomain.com</p>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-center">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            <details className="faq-item">
              <summary className="faq-question">How can I contribute articles?</summary>
              <p className="faq-answer">Sign up, draft your article, and follow our contribution guidelines. We review and help publish your work.</p>
            </details>

            <details className="faq-item">
              <summary className="faq-question">Do you provide deployment guides?</summary>
              <p className="faq-answer">Yes — we include step-by-step deployment guides for popular hosts and CI/CD setups in most tutorials.</p>
            </details>

            <details className="faq-item">
              <summary className="faq-question">Is there a community I can join?</summary>
              <p className="faq-answer">We maintain a small community forum and occasional meetups — subscribe to our newsletter for invites.</p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;