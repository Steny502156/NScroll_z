import React, { useState } from 'react';
import axios from 'axios';

function Contactus() {
    const [formData, setFormData] = useState({
        full_name: '',
        phone_number: '',
        email: '',
        message: ''
    });
    const [submitting, setSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setSubmitting(true);

        try {
            await axios.post('http://localhost:3000', formData);
            setSubmitSuccess(true);
            setFormData({
                full_name: '',
                phone_number: '',
                email: '',
                message: ''
            });
        } catch (err) {
            setError(err.message || 'An error occurred while submitting the form.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">Contact Us</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="mb-1">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter full Name"
                                name="full_name"
                                value={formData.full_name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className="mb-1">Phone Number</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Number"
                                name="phone_number"
                                value={formData.phone_number}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label className="mb-1">Email Id</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className="mb-1">Message</label>
                            <textarea
                                rows="3"
                                className="form-control"
                                placeholder="Enter Text"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        {error && <div className="alert alert-danger">{error}</div>}
                        {submitSuccess && <div className="alert alert-success">Form submitted successfully!</div>}
                        <div className="form-group py-3">
                            <button type="submit" className="btn btn-primary shadow w-100" disabled={submitting}>
                                {submitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contactus;
