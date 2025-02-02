import React from 'react';
import amex from '../assets/images/amex.png';
import visa from '../assets/images/visa.png';
import mastercard from '../assets/images/mastercard.png';
import BookingService from '../services/BookingService';
import { useNavigate } from 'react-router-dom';
import planeBG from '../assets/images/planebg1.jpg';
import Footer from './Footer';
import Header from './Header';

function Payment() {
    const navigate = useNavigate();
    const service = new BookingService();

    const createTicket = async (event) => {
        event.preventDefault();
        const form = event.target;
        console.log(form);
        const formData = {
            ticketNumber: 0, // Initialize as needed
            booking_date: 0, // Initialize as needed
            total_pay: 0, // Initialize as needed
            name: form.cname.value,
        };
        console.log(formData);

        try {
            const response = await service.generateTicket(formData);
            if (response.status === 200) {
                navigate('/ticket');
            }
        } catch (error) {
            console.error('Error generating ticket:', error);
        }
    };

    return (
        <div className="pt-5">
            <Header />
            <div className="py-5" style={{ backgroundImage: `url(${planeBG})`, overflow: 'hidden', height: '800px' }}>
                <div className="row mb-4">
                    <div className="col-lg-8 mx-auto text-center"></div>
                </div>
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="card ">
                            <div className="card-header">
                                <div className="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active pt-3">
                                            <div className="container">
                                                <h4 align="center">Confirm Payment</h4>
                                                <br />

                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <span>
                                                            <h6>CREDIT/DEBIT CARD</h6>
                                                        </span>
                                                    </div>
                                                    <div className="col-lg-6 text-right" style={{ marginTop: '-5px' }}>
                                                        <img src={visa} alt="visa card " />
                                                        <img src={mastercard} alt="mastercard" />
                                                        <img src={amex} alt="amex card" />
                                                    </div>
                                                </div>
                                                <br />
                                                <form onSubmit={createTicket}>
                                                    <div className="form-group">
                                                        <label htmlFor="cc-number" className="control-label">
                                                            CARD NUMBER
                                                        </label>
                                                        <input
                                                            name="cnumber"
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="•••• •••• •••• ••••"
                                                            pattern="[0-9]{16}"
                                                            required
                                                        />
                                                    </div>

                                                    <br />

                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label htmlFor="cc-exp" className="control-label">
                                                                    CARD EXPIRY
                                                                </label>
                                                                <input
                                                                    id="cc-exp"
                                                                    type="month"
                                                                    className="form-control"
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label htmlFor="cc-cvc" className="control-label">
                                                                    CARD CVV
                                                                </label>
                                                                <input
                                                                    name="cvc"
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="•••"
                                                                    pattern="[0-9]{3}"
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <br />
                                                    <div className="form-group">
                                                        <label htmlFor="holder-name" className="control-label">
                                                            CARD HOLDER NAME
                                                        </label>
                                                        <input
                                                            name="cname"
                                                            type="text"
                                                            className="form-control"
                                                            pattern="[A-Za-z]{4,}"
                                                            required
                                                        />
                                                    </div>

                                                    <br />

                                                    <div className="card-footer">
                                                        <div className="col-md-12 text-center">
                                                            <button
                                                                type="submit"
                                                                className="subscribe btn btn-primary btn-block shadow-sm"
                                                            >
                                                                Make Payment
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Payment;
