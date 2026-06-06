export const metadata = {
  title: "About Us | Arahant Services",
  description:
    "Learn more about Arahant Services, our mission, values, and commitment to delivering reliable and professional services.",
};

export default function AboutPage() {
  return (
    <section className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="container">
          <h1>About Arahant Services</h1>
          <p>
            Delivering reliable, professional, and customer-focused services
            with integrity and excellence.
          </p>
        </div>
      </div>

      {/* Who We Are */}
      <div className="container about-section">
        <div className="content">
          <h2>Who We Are</h2>
          <p>
            Arahant Services is a trusted service provider committed to helping
            individuals and businesses achieve their goals through dependable,
            high-quality solutions. We combine expertise, transparency, and a
            customer-first approach to deliver consistent results.
          </p>
          <p>
            Our team believes in long-term relationships, ethical practices, and
            continuous improvement in everything we do.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="about-values">
        <div className="container grid">
          <div className="card">
            <h3>Our Mission</h3>
            <p>
              To provide efficient, trustworthy, and innovative services that
              empower our clients and create long-term value.
            </p>
          </div>

          <div className="card">
            <h3>Our Vision</h3>
            <p>
              To become a leading service brand recognized for quality,
              reliability, and customer satisfaction.
            </p>
          </div>

          <div className="card">
            <h3>Our Values</h3>
            <ul>
              <li>Integrity & Transparency</li>
              <li>Customer First Approach</li>
              <li>Quality & Reliability</li>
              <li>Continuous Improvement</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container about-section">
        <h2>Why Choose Arahant Services?</h2>
        <div className="grid">
          <div className="feature-card">Experienced & Professional Team</div>
          <div className="feature-card">Timely & Reliable Delivery</div>
          <div className="feature-card">Transparent Pricing</div>
          <div className="feature-card">Dedicated Customer Support</div>
        </div>
      </div>
    </section>
  );
}

