import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <section className="section footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    
                    <div className="col-md-4">
                        <h6 className="mb-0">Company Information</h6>
                        <hr/>
                        <p>
                            Products/Services: StellarTech Solutions specializes in developing cutting-edge software solutions for enterprise clients. Their flagship products include AI-powered analytics platforms, cloud computing services, and cybersecurity solutions.<br/>
                            Mission Statement: "Empowering businesses with innovative technology solutions to achieve unparalleled efficiency and growth in a rapidly evolving digital landscape."<br/>
                            Employee Count: Approximately 500 employees worldwide.<br/>
                            Financial Performance: StellarTech Solutions has shown steady revenue growth over the past decade, with a focus on expanding market reach and enhancing product offerings through strategic partnerships and continuous innovation.
                        </p>
                    </div>

                    
                    <div className="col-md-4">
                        <h6 className="mb-0">Quick Links</h6>
                        <hr/>
                        <div><Link to="/">Home</Link></div>
                        <div><Link to="/about">About</Link></div>
                        <div><Link to="/contact">Contact</Link></div>
                        <div><Link to="/">Blog</Link></div>
                    </div>

                    
                    <div className="col-md-4">
                        <h6 className="mb-0">Contact Information</h6>
                        <hr/>
                        <div><p className="text-white mb-1">#64, Bangalore Karnataka India</p></div>
                        <div><p className="text-white mb-1">+91 xxxxxxxxxx</p></div>
                        <div><p className="text-white mb-1">+91 xxxxxxxxxx</p></div>
                        <div><p className="text-white mb-1">+91 xxxxxxxxxx</p></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
