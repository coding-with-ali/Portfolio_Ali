"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("EmailJS Error Details:", JSON.stringify(err, null, 2));
        setStatus("Failed to send message. Try again later.");
      });
  };

  return (
    <div
      id="Contact"
      className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center px-4"
      style={{ backgroundImage: "url('/contact.png')" }}
    >
      {/* Title Animation */}
      <motion.div
        className="text-center m-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-center mt-6 font-display text-[40px] sm:text-[56px] md:text-[72px] lg:text-[96px] leading-tight tracking-tight">
          <span
            className="inline-block text-[#7fe089] font-semibold mr-2"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Contact
          </span>
          <span className="text-white inline font-bold"> Us</span>
        </h1>
        <p className="text-gray-300 max-w-lg mt-2">
          If you&apos;re interested in working together, have a project in mind, or simply want to connect, feel free to reach out.
        </p>
      </motion.div>

      {/* Form Animation */}
      <motion.form
        onSubmit={sendEmail}
        className="bg-black/50 backdrop-blur-lg p-8 rounded-xl w-full max-w-lg space-y-4"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-transparent border border-gray-500 text-white outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-transparent border border-gray-500 text-white outline-none"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-transparent border border-gray-500 text-white outline-none h-32"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-3 rounded-lg transition"
        >
          Submit →
        </button>
        {status && <p className="text-sm text-center text-green-400">{status}</p>}
      </motion.form>

      {/* Contact Info Animation */}
      <motion.div
        className="mt-10 flex flex-col md:flex-row gap-6 text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 bg-black/50 p-4 rounded-lg">
          <MapPin className="text-green-400" />
          <span>Model Colony, Karachi Pakistan</span>
        </div>
        <div className="flex items-center gap-3 bg-black/50 p-4 rounded-lg">
          <Phone className="text-green-400" />
          <span>+92 335 3606220</span>
        </div>
        <div className="flex items-center gap-3 bg-black/50 p-4 rounded-lg">
          <Mail className="text-green-400" />
          <span>aliasif567gammer@gmail.com</span>
        </div>
      </motion.div>
    </div>
  );
}
