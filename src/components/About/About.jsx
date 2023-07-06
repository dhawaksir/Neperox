/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./about.css";

function Services() {
  let message = `There are many variations of passages of Lorem Ipsum available but the \n majority have suffered alteration in some injected humour.`;
  return (
    <section className="section-white">
      <div className="section-content">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          vestibulum enim ac urna blandit, at cursus velit dignissim. Duis
          euismod malesuada consectetur.
        </p>
      </div>
      <div>
        <h1>our mission</h1>
        <p>
          Click edit button to change this text. Lorem ipsum dolor sit amet,
          adipiscing elit. Click edit button to change this text. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
          nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
      <div>
        <h1>Extraordinary Experiences</h1>
        <p>
          Click edit button to change this text. Lorem ipsum dolor sit amet,
          adipiscing elit. Click edit button to change this text. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
          nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
      <div>
        <h1>Our Core Values</h1>
        <p>
          Click edit button to change this text. Lorem ipsum dolor sit amet,
          adipiscing elit. Click edit button to change this text. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
          nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-title">The Team Behind Pacifico</h2>

            <p className="section-subtitle">{message}</p>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img
                src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team1a.jpg"
                className="team-img"
                alt="pic"
              />
              <h3>kiran bhandari</h3>
              <div className="team-info">
                <p>Head of SEO</p>
              </div>
              <p>
                Johnathan is our co-founder and has developed search strategies
                for a variety of clients from international brands to medium
                sized businesses for over five years.
              </p>

              <ul className="team-icon">
                <li>
                  <a href="#" className="twitter">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>

                <li>
                  <a href="#" className="pinterest">
                    <i className="fa fa-pinterest"></i>
                  </a>
                </li>

                <li>
                  <a href="#" className="facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>

                <li>
                  <a href="#" className="dribble">
                    <i className="fa fa-dribbble"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img
                src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team2a.jpg"
                className="team-img"
                alt="pic"
              />

              <h3>kushal kharel</h3>

              <div className="team-info">
                <p>SEO Specialist</p>
              </div>

              <p>
                Graduating with a degree in Spanish and English, Alexandra has
                always loved writing and now she’s lucky enough to do it as part
                of her new job inside our agency.
              </p>

              <ul className="team-icon">
                <li>
                  <a href="#" className="twitter">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>

                <li>
                  <a href="#" className="pinterest">
                    <i className="fa fa-pinterest"></i>
                  </a>
                </li>

                <li>
                  <a href="#" className="facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>

                <li>
                  <a href="#" className="dribble">
                    <i className="fa fa-dribbble"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img
                src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team3a.jpg"
                className="team-img"
                alt="pic"
              />

              <h3>naman basnet</h3>

              <div className="team-info">
                <p>Marketing Manager</p>
              </div>

              <p>
                Elisa first fell in love with digital marketing at the
                university. He loves to learn, and looks forward to being part
                of this new exciting industry for many years.
              </p>

              <ul className="team-icon">
                <li>
                  <a href="#" className="twitter">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>

                <li>
                  <a href="#" className="pinterest">
                    <i className="fa fa-pinterest"></i>
                  </a>
                </li>

                <li>
                  <a href="#" className="facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>

                <li>
                  <a href="#" className="dribble">
                    <i className="fa fa-dribbble"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
