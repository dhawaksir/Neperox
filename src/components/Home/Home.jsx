import React from "react";
import "./home.css"; // Import external CSS file for styling (Keep CSS in a separate file)

const Home = () => {
  return (
    <div id="home" className="landing-page">
      <header className="header">
        <h1 className="title">Welcome to NEPEROX</h1>
        <p className="description">
          Transform Your Business with Our Innovative Solutions
        </p>
      </header>

      <main className="main-content">
        <section className="features">
          <h2>Key Features</h2>
          <ul>
            <li>Boost Productivity and Efficiency</li>
            <li>Enhance Team Collaboration</li>
            <li>Streamline Workflow Processes</li>
            <li>Advanced Data Insights</li>
          </ul>
        </section>

        <section className="benefits">
          <h2>Benefits</h2>
          <ul>
            <li>Make Data-Driven Decisions</li>
            <li>Maximize Business Growth</li>
            <li>Improve Customer Satisfaction</li>
            <li>Stay Ahead of the Competition</li>
          </ul>
        </section>

        <section className="cta">
          <h2>Ready to Get Started?</h2>
          <p>
            Join thousands of businesses already using NEPEROX and unlock your
            true potential.
          </p>
          <button className="cta-button">Sign Up Now</button>
        </section>
      </main>
    </div>
  );
};

export default Home;
