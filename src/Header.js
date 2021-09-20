import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="logo">
            <div className="main-logo">
              <img src="logo.png" alt="fork and knife logo" />
            </div>
            <div className="logo-text">
              <h1>Delicious</h1>
                            The best food blog ever.
            </div>
          </div>
          <div className="icons">
            <img className="facebook-logo" src="fb-icon.png" alt="facebook icon" />
            <img className="twitter-logo" src="twit-icon.png" alt ="twitter logo"/>
            <img className="google-logo" src="gp-icon.png" alt="google logo" />
            <img className="insta-logo" src="insta-icon.png" alt="instagram logo" />
            <img className="flickr-logo" src="flic-icon.png" alt ="flickr logo"/>
            <img className="pinterest-logo" src="pint-icon.png" alt="pintrest logo" />
            <img className="rss-logo" src="rss-icon.png" alt="rss icon"/>
            <img className="email-logo" src="mail-icon.png" alt ="email icon"/>
          </div>

          <div className="border">
            <hr />
          </div>
          <section className="blog-title">
            <h1> Chocolate</h1>
          </section>
                    posted on a day
          <section className="print">
            <img src="print-icon.png" height="10px" width="10px" alt="print icon" /> PRINT
          </section>

        </header>
      </div>
    );
  }
}
