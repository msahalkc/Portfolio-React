import React from 'react';

const Contact = () => {
    return (
      <div className="container subContainer mt-5" id='contact'>
          <div className="contactTitle subTitle">
              Contact Me
          </div>
          <div className="contactContainer">
            <div className="contactLeft mt-5">
                <span className='contactGreeting'>
                    I've been <br />
                </span>
                <span className="contactGreeting colorGreeting">
                    waiting for you.
                </span>
                <p className='contactSubtext mt-4'>Fill in the form or <a href=""><b>Send us an email</b></a></p>
                <div className="contactDetails">
                    <div className="icon-container mt-4 ">
                        <div className="icon">
                            <i class="fa-solid fa-mobile"></i>
                        </div>
                        <div className="text">
                            <p>+91 9847 790 722</p>
                        </div>
                    </div>
                    <div className="icon-container mt-4 ">
                        <div className="icon">
                            <i class="fa-solid fa-envelope"></i>
                        </div>
                        <div className="text">
                            <p>msahalkc@gmail.com</p>
                        </div>
                    </div>
                    <div className="icon-container mt-4 ">
                        <div className="icon">
                            <i class="fa-solid fa-location-arrow"></i>
                        </div>
                        <div className="text">
                            <p>MES College of Engineering, Kuttippuram</p>
                        </div>
                    </div>
                </div>
            </div>
            <form className="contactForm mt-5">
                <div className="contactFormTitle mb-3">
                    <b>Send me a Message</b>
                </div>
                <div className="form-group">
                    <input type="text" id="name" name="name" className="form-control" required placeholder='Enter Your Name' />
                </div>
                <div className="form-group">
                    <input type="email" id="email" name="email" className="form-control" required placeholder='Enter Your Email' />
                </div>
                <div className="form-group">
                    <input type="text" id="subject" name="subject" className="form-control" required placeholder='Enter the Subject' />
                </div>
                <div className="form-group">
                    <textarea id="message" name="message" className="form-control" required placeholder='Enter you Message'></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
      </div>
    )
  }

export default Contact
  