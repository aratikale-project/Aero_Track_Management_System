import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/FeedbackStyle.css';
import planeBG from "../assets/images/planebg1.jpg";
import Footer from './Footer';
import Header from './Header';

const Feedback = () => {
  const navigate = useNavigate();

  const onFeedback = () => {
    alert('Thank you for your feedback!!');
    navigate('/');
  };

  const onCancel = () => {
    alert('Thank you!! See you Soon!!!');
    navigate('/');
  };

  return (
    <div>
      <Header />
      <div className='pt-5' style={{ backgroundImage: `url(${planeBG})`, overflow: 'hidden', height: '800px' }}>
        <div className="h-100 d-flex justify-content-center py-5">
          <div className="jumbotron my-auto display-5">
            <h3 style={{ color: 'blue' }}>Thank you for travelling with Udan Airways</h3>
            <h3 style={{ color: 'green' }}>We assure you to have <b>Safe and Happy Journey.</b></h3>
            <br></br>
            <h3>Please Rate your Experience with BookMyFlight:</h3>
            <fieldset className="rating">
  <input type="radio" id="star5" name="rating" value="5" /><label className="full" htmlFor="star5" title="Awesome - 5 stars"></label>
  <input type="radio" id="star4half" name="rating" value="4 and a half" /><label className="half" htmlFor="star4half" title="Pretty good - 4.5 stars"></label>
  <input type="radio" id="star4" name="rating" value="4" /><label className="full" htmlFor="star4" title="Pretty good - 4 stars"></label>
  <input type="radio" id="star3half" name="rating" value="3 and a half" /><label className="half" htmlFor="star3half" title="Meh - 3.5 stars"></label>
  <input type="radio" id="star3" name="rating" value="3" /><label className="full" htmlFor="star3" title="Meh - 3 stars"></label>
  <input type="radio" id="star2half" name="rating" value="2 and a half" /><label className="half" htmlFor="star2half" title="Kinda bad - 2.5 stars"></label>
  <input type="radio" id="star2" name="rating" value="2" /><label className="full" htmlFor="star2" title="Kinda bad - 2 stars"></label>
  <input type="radio" id="star1half" name="rating" value="1 and a half" /><label className="half" htmlFor="star1half" title="Meh - 1.5 stars"></label>
  <input type="radio" id="star1" name="rating" value="1" /><label className="full" htmlFor="star1" title="Sucks big time - 1 star"></label>
  <input type="radio" id="starhalf" name="rating" value="half" /><label className="half" htmlFor="starhalf" title="Sucks big time - 0.5 stars"></label>
</fieldset>

            <br></br>
            <br></br>
            <h4>Comment:</h4>
            <textarea></textarea><br />
            <button onClick={onFeedback} className="btn btn-info">Send</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={onCancel} className="btn btn-warning">Cancel</button>
          </div>
          
        </div>
      </div>
      <Footer />
      <style>

        
      </style>
    </div>
  );
};

export default Feedback;
