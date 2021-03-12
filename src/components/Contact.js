import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MediaQuery from "react-responsive";
export default function Contact() {
  const [name, setName] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qmwlage",
        "template_ipmt7qr",
        e.target,
        "user_yPPl4aKf5yAqWiC6gZq8t"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    toast.dark(`Thank you ${name}! We will get back to you shortly!`);
  };

  const trackName = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  return (
    <section id="contact">
      <MediaQuery minWidth={700}>
        {/* <h1>INQUIRE ABOUT A PIECE</h1>
        <Button variant="contained" >
       <MailOutlineRoundedIcon style={{ fontSize: 40 }}></MailOutlineRoundedIcon>
       </Button> */}
        <div className="form-container">
          <h2>INQUIRE</h2>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
          />
          <form onSubmit={(e) => sendEmail(e)} id="form" class="topBefore">
            <input
              onChange={(e) => trackName(e)}
              id="name"
              type="text"
              placeholder="NAME"
              name="name"
            />
            <input id="email" type="text" placeholder="E-MAIL" name="email" />
            <textarea
              id="message"
              type="text"
              placeholder="MESSAGE"
              name="message"
            ></textarea>
            <input id="submit" type="submit" value="SEND" />
          </form>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={700}>
        <div className="form-container-mobile">
          <h2>INQUIRE</h2>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
          />
          <form onSubmit={(e) => sendEmail(e)} id="form" class="topBefore">
            <input
              onChange={(e) => trackName(e)}
              id="name"
              type="text"
              placeholder="NAME"
              name="name"
            />
            <input id="email" type="text" placeholder="E-MAIL" name="email" />
            <textarea
              id="message"
              type="text"
              placeholder="MESSAGE"
              name="message"
            ></textarea>
            <input id="submit" type="submit" value="SEND" />
          </form>
        </div>
      </MediaQuery>
    </section>
  );
}
