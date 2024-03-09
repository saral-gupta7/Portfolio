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
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...Form, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error message for the field being edited
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    let newErrors = {};
    if (!Form.name) {
      newErrors.name = "Name is required";
    }
    if (!Form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(Form.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!Form.message) {
      newErrors.message = "Message is required";
    }

    // If there are errors, do not submit the form
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    // Submit form data
    try {
      // Your form submission logic goes here
      console.log("Form submitted successfully!", Form);
      // Optionally, reset the form after successful submission
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }

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
    <div
      className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden justify-center"
      id="socials"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
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
            {errors.name && <div className="text-red-500">{errors.name}</div>}
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
            {errors.email && <div className="text-red-500">{errors.email}</div>}
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
            {errors.message && (
              <div className="text-red-500">{errors.message}</div>
            )}
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
