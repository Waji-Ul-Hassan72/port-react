function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-heading">
        <h2>Contact Me</h2>
        <p>
          Have a project in mind or want to work together? Feel free to get in
          touch with me.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-card">
            <h3>📧 Email</h3>
            <p>wajiulhassanbmw@gmail.com</p>
          </div>

          <div className="contact-card">
            <h3>📞 Phone</h3>
            <p>+92 306 7595159</p>
          </div>

          <div className="contact-card">
            <h3>📍 Location</h3>
            <p>Pakistan</p>
          </div>

          <div className="contact-card">
            <h3>💼 LinkedIn</h3>
            <p>linkedin.com/in/wajiulhassan</p>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Your Email" />

          <textarea
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;