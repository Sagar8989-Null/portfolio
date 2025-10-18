import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="contact-links">
              <a href="mailto:sagarjamadar8989@gmail.com" className="contact-link">
                <span>Email</span>
              </a>
              <a href="https://github.com/Sagar8989-Null" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/sagar-jamadar-8989en?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BnMMyRx%2B5SIuuwnMz1jvOjg%3D%3D" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            {submitted && (
              <div className="form-success">
                Thank you for your message! I'll get back to you soon.
              </div>
            )}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
