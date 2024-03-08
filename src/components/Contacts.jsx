import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
// template_9qpa56z
// service_7l9dc1i
// IMFOGLXg56jsl7-mJ
const Contacts = () => {
  const formRef = useRef();
  const [Form, setForm] = useState({ name: "", email: "", message: "" });
  const [Loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...Form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_7l9dc1i",
        "template_9qpa56z",
        {
          from_name: Form.name,
          to_name: "Saral",
          from_email: Form.email,
          to_email: "saralgup.taxtc@gmail.com",
          message: Form.message,
        },
        "IMFOGLXg56jsl7-mJ"
      )
      .then(
        () => {
          setLoading(false);
          alert("Message Sent Successfully");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Message Sent Failed");
        }
      );
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadTextk}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          action=""
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={Form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={Form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-mediumk mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={Form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary text-white py-3 px-8 outline-none w-fit texxt-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {Loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

const ContactMe = SectionWrapper(Contacts, "contact");
export default ContactMe;
