import React from "react";
import MailOutlineRoundedIcon from "@material-ui/icons/MailOutlineRounded";
import Button from "@material-ui/core/Button";
import emailjs from "emailjs-com";
export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_qmwlage", "template_ipmt7qr", e.target, "user_yPPl4aKf5yAqWiC6gZq8t")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
  };

  return (
    <section id="contact">
      {/* <h1>INQUIRE ABOUT A PIECE</h1>
        <Button variant="contained" >
       <MailOutlineRoundedIcon style={{ fontSize: 40 }}></MailOutlineRoundedIcon>
       </Button> */}
      <form onSubmit={(e) => sendEmail(e)} id="form" class="topBefore">
        <input id="name" type="text" placeholder="NAME" name="name" />
        <input id="email" type="text" placeholder="E-MAIL" name="email" />
        <textarea id="message" type="text" placeholder="MESSAGE" name="message"></textarea>
        <input id="submit" type="submit" value="GO!" />
      </form>
    </section>
  );
}
