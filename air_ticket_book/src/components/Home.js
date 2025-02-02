
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SearchFlight from './SearchFlight';
import Carousel from 'react-bootstrap/Carousel';

import plane1 from '../assets/images/plane1.jpg';
import plane2 from '../assets/images/plane2.jpg';
import plane3 from '../assets/images/plane33.jpg';
import plane5 from '../assets/images/plane5.jpg';
import App1 from '../assets/images/App1.jpg';
import App2 from '../assets/images/App2.jpeg';
import App4 from '../assets/images/plane3.jpg';

const features = [
  {
    image: plane1,
    feature: "Memorable travel",
  },
  {
    image: plane2,
    feature: "Safe and reliable",
  },
  {
    image: plane3,
    feature: "Service at its best",
  },
  {
    image: plane5,
    feature: "Easy and Convenient",
  },
];

function Home(props) {
  const featureCard = features.map((f, index) => (
    <div key={index} className="mb-3 mr-auto ml-auto col-lg-3 col-sm-5">
      <div className="card">
        <img className="card-img-top" src={f.image} alt="feature1" />
        <div className="card-body" style={styling.card}>
          <h5 className="card-title">{f.feature}</h5>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <Header />

      <main className="mb-4 mt-5">
        {/* Corousal section */}
        <section style={styling.section_bg}>
          <SearchFlight />
        </section>

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={App1}
              width="200"
              height="350"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={App2}
              width="200"
              height="350"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={App4}
              width="200"
              height="350"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>

        <div className="home_crsl">
          <div className="container">
            <div className="owl-carousel owl-theme owl-loaded owl-drag">
              {/* Owl Carousel content */}
              <div className="owl-stage-outer"><div className="owl-stage" ><div className="owl-item cloned"><div className="item">
                <div className="car_item" src={App2} >
                  <div className="crsl_txt">
                    <h4>More Reasons to Fly Air India</h4>
                    <p>FR Points &amp; associated benefits extended till 30th Sep'24.
                      Seamless login process.</p>
                    <a className="carsl_btn" href="https://www.flydubai.com/en/book-and-manage/upgrade-to-business-class/" target="_blank">Learn More</a></div>
                </div>
              </div></div><div className="owl-item cloned"  ><div className="item">
                <div className="car_item" src={App2} alt="">
                  <div className="crsl_txt">
                    <h4>Bid. Fly. Enjoy!</h4>
                    <p>Bid upfront to enjoy travelling in our business or first className</p>
                    <a className="carsl_btn" href="/bid-upgrade/Bid-Upgrade.html">Learn More</a></div>
                </div>
              </div></div><div className="owl-item cloned"  ><div className="item">
                <div className="car_item" src={App2} alt="">
                  <div className="crsl_txt">
                    <h4>Experience Dreamliner</h4>
                    <p>State-of-the-art-flying with more entertainment and comfort</p>
                    <a className="carsl_btn" href="/787-boeing-dreamliner.htm">Learn More</a></div>
                </div>
              </div></div><div className="owl-item" ><div className="item">
                <div className="car_item" src={App2} >
                  <div className="crsl_txt">
                    <h4>Old Refund Pending?</h4>
                    <p>Get eligible refunds cleared by just filling up the form. Ticket issued by a Travel Agency will be processed directly by the Travel Agency.</p>
                    <a className="carsl_btn" href="SpecialRefundDrive.htm">Fill Form</a></div>
                </div>
              </div></div><div className="owl-item" ><div className="item">
                <div className="car_item" src={App2} alt="">
                  <div className="crsl_txt">
                    <h4>New Schedule. More Flights for You.</h4>
                    <p>Get ready for more comfort, choice, and convenience as Air India introduces the new flight schedule.</p>
                    <a className="carsl_btn" href="new-schedule-for-more-flights.htm">Learn More</a></div>
                </div>
              </div></div><div className="owl-item"  ><div className="item">
                <div className="car_item" src={App2} alt="">
                  <div className="crsl_txt">
                    <h4>Independence Day Offer</h4>
                    <p>Air India celebrates Independence Day by offering One India One Fare for travel from Gulf &amp; Middle East.</p>
                    <a className="carsl_btn" href="independenceday-special-offer.htm">Learn More</a></div>
                </div>
              </div></div><div className="owl-item"  ><div className="item">
              </div></div><div className="owl-item"  ><div className="item">
              </div></div></div></div></div>
          </div>
        </div>

        <section className="container-fluid pt-3 pb-5 section-bg">
          <div className="m-auto row">{featureCard}</div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

const styling = {
  subheading: {
    textAlign: "center",
    color: "midnightblue",
    fontFamily: "fantasy",
    padding: 20,
  },
  section_bg: {
    background: "linear-gradient(180deg, transparent, skyblue)",
  },
  card: {
    background: "midnightblue",
    color: "white",
  },
};

export default Home;
