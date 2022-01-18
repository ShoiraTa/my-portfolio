import React from 'react';
import {
  SiTelegram, SiAngellist, SiLinkedin, SiGithub, SiGmail,
} from 'react-icons/si';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const SERVICE_ID = 'service_vbdvy2h';
const TEMPLATE_ID = 'template_td0lhtj';
const USER_ID = 'user_Mpq5XwjlGhSLOWcLZU7aE';

function Form() {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully',
        });
      }, (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        });
      });
    e.target.reset();
  };

  return (
    <div id="form" className="section-form">
      <h1>Contact</h1>
      <div className="container-form">
        <div className="container-form-left">
          <p>Let&apos; s Work Together!</p>
          <form onSubmit={handleOnSubmit}>
            <div className="field">
              <label htmlFor="name">
                <input type="text" name="name" id="name" required="required" placeholder="Name*" />

              </label>
            </div>
            <div className="field">
              <label htmlFor="email">
                <input type="email" name="_replyto" id="email" required="required" placeholder="Email*" />

              </label>
            </div>
            <div className="field">
              <label htmlFor="message" className="message">
                <textarea type="textbox" name="message" id="message" required="required" placeholder="Message*" />

              </label>
            </div>
            <button type="submit" className="btn" value="send">
              <span>Send email</span>
              <i className="far fa-envelope-open" aria-hidden="true" />
            </button>
          </form>
        </div>
        <div className="container-form-right">
          <div className="logo-container">
            <p> Living, learning, & leveling up.</p>
          </div>

          <ul>
            <li>
              <a href="https://github.com/ShoiraTa" target="_blank" rel="noreferrer">
                <SiGithub />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/shoira-ta/" target="_blank" rel="noreferrer">
                <SiLinkedin />
              </a>
            </li>
            <li>
              <a href="https://angel.co/u/shoira-shakir" target="_blank" rel="noreferrer">
                <SiAngellist />
              </a>
            </li>
            <li>
              <a href="https://t.me/ShoiraT" target="_blank" rel="noreferrer">
                <SiTelegram />
              </a>
            </li>
            <li>
              <a type="submit" href="mailto:shoira.shakirovna@gmail.com" target="_blank" rel="noreferrer">
                <SiGmail />
              </a>
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Form;
