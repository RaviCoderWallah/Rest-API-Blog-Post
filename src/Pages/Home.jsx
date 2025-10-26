const Home = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-center">
          <h1>Build & Ship Better Blogs — Read, Learn, Create.</h1>
          <p className="hero-lead">
            Practical tutorials, real-world examples, and step-by-step guides to help
            you level up your web development skills. Join a community of builders
            and start publishing today.
          </p>
          <p className="hero-sub">
            Browse curated posts or create your own — fast. Whether you're learning
            or shipping, we've got resources to accelerate your progress.
          </p>
          <div className="hero-actions">
            <button className="go-to-blog-page">See Latest Posts</button>
            <button className="get-started-btn">Create New Post</button>
          </div>
        </div>
      </div>
      <section className="features-section">
        <div className="features-center">
          <h2 className="features-title">Community Reviews</h2>
          <p className="features-lead">Short reviews from readers who built and shipped projects using our guides.</p>

          <div className="features-cards">
            <div className="feature-card">
              <div className="avatar">AK</div>
              <div className="card-body">
                <h3 className="card-name">Aisha Khan</h3>
                <p className="card-review">“The hands-on tutorials helped me launch my portfolio in a weekend — clear and practical.”</p>
                <div className="card-rating">★★★★☆</div>
              </div>
            </div>

            <div className="feature-card">
              <div className="avatar">LN</div>
              <div className="card-body">
                <h3 className="card-name">Liam Nguyen</h3>
                <p className="card-review">“Concise explanations and working examples — saved me hours of debugging.”</p>
                <div className="card-rating">★★★★★</div>
              </div>
            </div>

            <div className="feature-card">
              <div className="avatar">MP</div>
              <div className="card-body">
                <h3 className="card-name">Maya Patel</h3>
                <p className="card-review">“Great tips for production-ready code. Love the deployment guides.”</p>
                <div className="card-rating">★★★★☆</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;