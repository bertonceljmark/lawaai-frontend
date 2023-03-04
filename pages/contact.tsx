import React, { useState } from "react";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Head from "next/head";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onEmailChange = (value) => {
    setEmail(value.target.value);
  };
  const onMessageChange = (value) => {
    setMessage(value.target.value);
  };
  return (
    <>
      <Head>
        <title>Contact | Lawaai</title>
        <meta name="description" content="Get in contact with Lawaai." />
        <meta name="keywords" content="lawaai, contact, email" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contact | Lawaai" />
        <meta property="og:description" content="Get in contact with Lawaai." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lawaai.club/contact" />
        <meta property="og:site_name" content="Lawaai" />
        <meta name="twitter:title" content="Contact | Lawaai" />
        <meta
          name="twitter:description"
          content="Get in contact with Lawaai."
        />
        <meta
          name="twitter:image"
          content="https://lawaai.club/images/lawaai-logo.png"
        />
        <meta name="twitter:image:alt" content="Lawaai logo" />
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Lawaai",
        "url": "https://lawaai.club",
      }
    `}
        </script>
      </Head>
      <div className="mt-[3.5rem] lg:mt-0 min-h-screen text-white">
        <div className="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
          <h1 className="text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
            Contact
          </h1>
          <div className="text-center">
            <p className="mt-2 text-lg">Get in touch</p>
          </div>
          <form
            action="https://getform.io/f/ae1b28b9-d111-4d01-a92e-eb25838832c6"
            method="POST"
            className="contact-form row"
          >
            <div className="form-field col x-50">
              <input
                value={name}
                onChange={onNameChange}
                id="name"
                className="input-text js-input"
                type="text"
                name="name"
                required
              />
              <label
                className={`label ${name && "translate-y-[-24px]"}`}
                htmlFor="name"
              >
                Name
              </label>
            </div>
            <div className="form-field col x-50">
              <input
                value={email}
                onChange={onEmailChange}
                id="email"
                className="input-text js-input"
                type="email"
                name="email"
                required
              />
              <label
                className={`label ${email && "translate-y-[-24px]"}`}
                htmlFor="email"
              >
                E-mail
              </label>
            </div>
            <div className="form-field col x-100">
              <input
                value={message}
                onChange={onMessageChange}
                id="message"
                className="input-text js-input"
                type="text"
                name="message"
                required
              />
              <label
                className={`label ${message && "translate-y-[-24px]"}`}
                htmlFor="message"
              >
                Message
              </label>
            </div>
            <div className="form-field col x-100 align-center">
              <input
                className="cursor-pointer bg-white text-lg text-[#180432] hover:bg-[#180432] hover:text-white font-bold py-3 px-6 rounded-full"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
          <div className="py-2 px-6 w-full flex items-end justify-center gap-10">
            <Link href="https://www.youtube.com/Lawaai">
              <FontAwesomeIcon
                icon={faYoutube}
                className="text-white hover:text-gray-300"
                style={{ fontSize: "3rem" }}
              />
            </Link>
            <Link href="https://www.facebook.com/LawaaiEvents">
              <FontAwesomeIcon
                icon={faFacebookF}
                className="text-white hover:text-gray-300"
                style={{ fontSize: "3rem" }}
              />
            </Link>
            <Link href="https://www.instagram.com/lawaai.events/">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-white hover:text-gray-300"
                style={{ fontSize: "3rem" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
