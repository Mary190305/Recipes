function Contact() {
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
      console.log('Form submitted');
    };
  
    return (
      <div className="container">
        <h2 className="center-align">Contact Us</h2>
        
        <div className="row">
          <div className="col s12 m6">
            <div className="card-panel pink lighten-5">
              <h4>Get in Touch</h4>
              <p>Have questions, suggestions, or want to share your own recipes? We'd love to hear from you!</p>
              
              <div className="section">
                <h5><i className="material-icons">email</i> Email</h5>
                <p>recipes@example.com</p>
              </div>
              
              <div className="section">
                <h5><i className="material-icons">phone</i> Phone</h5>
                <p>+1 (555) 123-4567</p>
              </div>
              
              <div className="section">
                <h5><i className="material-icons">location_on</i> Address</h5>
                <p>123 Recipe Street<br />Foodville, FC 12345<br />United States</p>
              </div>
            </div>
          </div>
          
          <div className="col s12 m6">
            <div className="card-panel">
              <h4>Send Us a Message</h4>
              <form onSubmit={handleSubmit}>
                <div className="input-field">
                  <input id="name" type="text" className="validate" required />
                  <label htmlFor="name">Your Name</label>
                </div>
                
                <div className="input-field">
                  <input id="email" type="email" className="validate" required />
                  <label htmlFor="email">Your Email</label>
                </div>
                
                <div className="input-field">
                  <input id="subject" type="text" className="validate" />
                  <label htmlFor="subject">Subject</label>
                </div>
                
                <div className="input-field">
                  <textarea id="message" className="materialize-textarea" required />
                  <label htmlFor="message">Your Message</label>
                </div>
                
                <button className="btn waves-effect waves-light pink darken-1" type="submit">
                  Send Message
                  <i className="material-icons right">send</i>
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="section center-align">
          <h4>Follow Us</h4>
          <div className="social-links" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <a href="/#" className="btn-floating pink darken-1">
              <i className="material-icons">thumb_up</i> {/* Facebook alternative */}
            </a>
            <a href="/#" className="btn-floating pink darken-1">
              <i className="material-icons">flutter_dash</i> {/* Twitter alternative */}
            </a>
            <a href="/#" className="btn-floating pink darken-1">
              <i className="material-icons">photo_camera</i> {/* Instagram alternative */}
            </a>
            <a href="/#" className="btn-floating pink darken-1">
              <i className="material-icons">collections</i> {/* Pinterest alternative */}
            </a>
          </div>
        </div>
      </div>
    );
}

export {Contact};