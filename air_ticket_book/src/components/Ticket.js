/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from 'react';
import '../assets/css/TicketStyle.css';
import ReactToPrint from 'react-to-print';
import planeBG from "../assets/images/planebg1.jpg";
import Footer from './Footer';
import Header from './Header';
import { Link, useNavigate } from 'react-router-dom';
import { send } from 'emailjs-com';

const Ticket = () => {
  const navigate = useNavigate();
  const componentRef = useRef(null);

  const ticket = localStorage.getItem('ticket')
    ? JSON.parse(localStorage.getItem('ticket'))
    : JSON.parse(localStorage.getItem('view-ticket'));

  const passengers = ticket?.booking?.passengers || [];

  const onMail = () => {
    const msg = `Your ticket is Confirmed with number: ${ticket.ticketNumber}`;
    const src = `Source: ${ticket.booking.flight.source}`;
    const dst = `Destination: ${ticket.booking.flight.destination}`;
    const travel_date = `Travel Date: ${ticket.booking.flight.travelDate}`;

    const tosend = {
      from_name: 'Udan Airways',
      to_name: JSON.parse(localStorage.getItem('user')).fname,
      message: msg,
      source: src,
      destination: dst,
      travelDate: travel_date,
      reply_to: JSON.parse(localStorage.getItem('user')).email,
    };

    send(
      'service_enui0by',
      'template_xkbuxqd',
      tosend,
      'user_yzrYhjB6DwK4wPq69r043'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your ticket details have been emailed!');
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const onSeats = () => {
    navigate('/seats');
  };

  if (!ticket) {
    return null;
  }

  const psg_name = passengers.map((psg, index) => (
    <span key={index}>{psg.pname} <br /></span>
  ));

  const psg_age = passengers.map((psg, index) => (
    <span key={index}>{psg.age}<br /></span>
  ));

  const psg_gender = passengers.map((psg, index) => (
    <span key={index}>{psg.gender}<br /></span>
  ));

  return (
    <div className='pt-3'>
      <Header />
      <div
        className="py-5"
        style={{
          backgroundImage: `url(${planeBG})`,
          overflow: 'hidden',
          height: '700px'
        }}
      >
        <div style={{ textAlign: 'right', marginRight: '90pt', marginTop: '130pt' }}>
          <ReactToPrint
            trigger={() => (
              <a className="btn text-light bg-dark" role="button" href="#">
                Print The Ticket
              </a>
            )}
            content={() => componentRef.current}
          />
        </div>

        <div style={{ textAlign: 'right', marginRight: '110pt', marginTop: '10pt' }}>
          <button className='btn text-light bg-dark' onClick={onSeats}>
            Select Seats
          </button>
        </div>

        <div style={{ textAlign: 'right', marginRight: '95pt', marginTop: '15pt' }}>
          <button className='btn text-light bg-dark' onClick={onMail}>
            Mail My Ticket
          </button>
        </div>

        <div className="box pt-2" ref={componentRef}>
          <div className="ticket">
            <span className="airline">ATRS</span>
            <span className="boarding">Boarding : {ticket.booking.flight.source}</span>
            {/* Rest of the ticket UI */}
            <div className="content">
              <span className="jfk">{ticket.booking.flight.source}</span>
              <span className="plane">
                <svg
                  clipRule="evenodd"
                  fillRule="evenodd"
                  height="60"
                  width="60"
                  imageRendering="optimizeQuality"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  viewBox="0 0 500 500"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* SVG content for the plane icon */}
                  <svg
                    clipRule="evenodd"
                    fillRule="evenodd"
                    height="60"
                    width="60"
                    imageRendering="optimizeQuality"
                    shapeRendering="geometricPrecision"
                    textRendering="geometricPrecision"
                    viewBox="0 0 500 500"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g stroke="#222">
                      <line fill="none" strokeLinecap="round" strokeWidth="30" x1="300" x2="55" y1="390" y2="390" />
                      <path
                        d="M98 325c-9 10 10 16 25 6l311-156c24-17 35-25 42-50 2-15-46-11-78-7-15 1-34 10-42 16l-56 35 1-1-169-31c-14-3-24-5-37-1-10 5-18 10-27 18l122 72c4 3 5 7 1 9l-44 27-75-15c-10-2-18-4-28 0-8 4-14 9-20 15l74 63z"
                        fill="#222"
                        strokeLinejoin="round"
                        strokeWidth="10"
                      />
                    </g>
                  </svg>
                </svg>
              </span>
              <span className="sfo">{ticket.booking.flight.destination}</span>

              <div className="sub-content">
                <span className="watermark">BookMyFlight</span>
                <span className="name">Passenger Name<br />{psg_name}</span>
                <span className="age">Passenger Age<br />{psg_age}</span>
                <span className="gender">Passenger Gender<br />{psg_gender}</span>
                <span className="flight">Flight No.&deg;<br /><span>{ticket.booking.flight.flightNumber}</span> <br /></span>
                <span className="gate">Ticket No.&deg; <br /><span>{ticket.ticketNumber}</span></span>
                <span className="amount">Amount Paid<br /><span>₹{ticket.total_pay}</span> <br /></span>
                <span className="boardingtime">Departure Time<br /><span>{ticket.booking.flight.arrivalTime}</span></span>
                <span className="traveldate">Travel Date<br /><span>{ticket.booking.flight.travelDate}</span></span>
                <span className="departuretime">Arrival Time<br /><span>{ticket.booking.flight.departureTime}</span></span>
              </div>
            </div>
            <div className="barcode"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ticket;
