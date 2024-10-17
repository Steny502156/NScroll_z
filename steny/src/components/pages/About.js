import React from 'react';
import Vmc from '../pages/inc/Vmc';
function Aboutus() {
    return (
        <div>
            <section className="py-4 bg-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>About Us</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end">
                                Home / About Us
                            </h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section border-bottom">
                <div className="container">
                    <h5 className="main-heading">Our Company</h5>
                    <div className="underline"></div>
                    <p>
                        This fictional company is designed to provide a snapshot of a typical technology firm operating in today's market.
                    </p>
                    
                </div>
            </section>

            <Vmc/>
        </div>

    
    );

}

export default Aboutus;