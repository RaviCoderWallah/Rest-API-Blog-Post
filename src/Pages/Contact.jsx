const Contact = () => {
  return (
    <div className="contact-us">
      <section className="contact-hero">
        <div className="contact-center">
          <h1>Contact Us — We’d Love to Help</h1>
          <p className="contact-lead">Have a question, partnership inquiry, or need help publishing? Reach out — we reply within 24–48 hours.</p>
        </div>
      </section>

      <section className="contact-details">
        <div className="contact-center">
          <h2>Company Address & Contacts</h2>
          <p className="contact-lead">Our distributed team operates globally — here's how to reach us.</p>

          <div className="contact-grid">
            <div className="contact-card">
              <h3>Headquarters</h3>
              <p>123 Dev Avenue<br/>Suite 400<br/>San Francisco, CA 94107<br/>USA</p>
            </div>

            <div className="contact-card">
              <h3>Phone</h3>
              <p>+1 (415) 555-0132</p>
            </div>

            <div className="contact-card">
              <h3>Email</h3>
              <p>support@yourdomain.com</p>
            </div>

            <div className="contact-card">
              <h3>Office Hours</h3>
              <p>Mon — Fri: 09:00 — 18:00 (PST)</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="contact-center">
          <h2>Send us a message</h2>
          <p className="contact-lead">Fill out the form and we'll get back to you shortly.</p>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <input type="text" name="name" placeholder="Your name" required />
              <input type="email" name="email" placeholder="Your email" required />
            </div>
            <input type="text" name="subject" placeholder="Subject" />
            <textarea name="message" rows="6" placeholder="Your message" required></textarea>
            <div className="form-actions">
              <button type="submit" className="go-to-blog-page">Send Message</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;