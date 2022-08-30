import React from 'react';

const ContactForm = () => {
    return (
        <>
            <div className="reqest-demo-left">
                <div className="contact-inner-gradient">
                    <h3>How Can We Help?</h3>
                    <div className="reqest-demo-from">
                        <form id="contact-form">
                            <div className="reqest-inner-content-flex">
                                <div className="custom-input">
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" id="name" className="auto_bind" data-binding="name" placeholder="Name..." required="" />
                                </div>
                                <div className="custom-input">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="text" id="email" className="auto_bind" data-binding="email" placeholder="Email..." required="" />
                                </div>
                            </div>
                            <div className="custom-input">
                                <label htmlFor="mobile">Phone Number</label>
                                <input type="text" id="phone" className="auto_bind" data-binding="mobile" placeholder="phone..." required="" />
                            </div>
                            <div className="custom-input">
                                <label htmlFor="textarea">Message</label>
                                <textarea name="text" id="textarea" className="auto_bind" data-binding="textarea" placeholder="Enter Your Message" required=""></textarea>
                            </div>
                            <div className="custom-submit">
                                <input id='submit' type="submit" value="Send" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactForm;