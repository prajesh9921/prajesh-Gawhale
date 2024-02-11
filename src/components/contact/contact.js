import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const phoneNumber = "7083367768";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_89h5o1m", "template_x6523lj", form.current, {
        publicKey: "Yaqh4RvKNiakoZba5",
      })
      .then(
        () => {
          alert("Message sent successfully");
        },
        (error) => {
          alert("Error sending message try. Please try sending email directly.", error.text);
        }
      );

    e.target.reset();
  };

  const handleClick = () => {
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      "Hi Prajesh"
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section data-section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>prajeshwork30@gmail.com</h5>
            <a href="mailto:prajeshwork30@gmail.com">Send a message</a>
          </article>

          <article className="contact_option">
            <BsLinkedin className="contact_option-icon" />
            <h4>LinkedIn</h4>
            <h5>Prajesh Gawhale</h5>
            <a
              href="https://www.linkedin.com/in/prajesh-gawhale-b0b9b3190/"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+917083367768</h5>
            <a onClick={handleClick} target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
