import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState({ sent: false, error: false });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xyl21wi",     // ✅ Service ID
        "template_rvsxw72",    // ✅ Template ID
        formRef.current,
        "ZJFxPFaeLNESyQdX8"    // ✅ Public Key
      )
      .then(
        () => {
          setStatus({ sent: true, error: false });
          formRef.current.reset();
        },
        () => {
          setStatus({ sent: false, error: true });
        }
      );
  };

  // ✅ Auto-hide notification after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus({ sent: false, error: false });
    }, 4000);

    return () => clearTimeout(timer); // Clean up
  }, [status.sent, status.error]);

  return (
    <div
      id="contact"
      className="relative py-20 px-4 sm:px-6 bg-slate-950 overflow-hidden border-t border-neutral-800"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f14_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f14_1px,transparent_1px)] bg-[size:14px_24px] z-0 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto py-6">
        <h1 className="text-center mb-16">
          <span className="inline-block border border-purple-700 rounded px-4 py-2 text-2xl sm:text-5xl font-bold tracking-wide bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 text-transparent bg-clip-text">
            Contact Me
          </span>
        </h1>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-6 bg-neutral-900/60 p-8 rounded-xl shadow-lg border border-neutral-800"
        >
          {/* Name */}
          <div>
            <label
              htmlFor="user_name"
              className="block text-sm text-teal-400 mb-2 font-medium"
            >
              Your Name
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              required
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-md bg-slate-800/80 border border-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-pink-500"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="user_email"
              className="block text-sm text-teal-400 mb-2 font-medium"
            >
              Email Address
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-md bg-slate-800/80 border border-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-pink-500"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm text-teal-400 mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              placeholder="Type your message here..."
              className="w-full px-4 py-3 rounded-md bg-slate-800/80 border border-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-pink-500 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="group cursor-pointer inline-flex items-center justify-center px-6 py-3 text-white rounded-md bg-gradient-to-r from-slate-700 via-pink-500 to-purple-800 hover:brightness-110 shadow-md shadow-pink-600/30 transition-all"
            >
              Send Message
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </button>

            {/* Notification */}
            {status.sent && (
              <p className="text-green-400 mt-4 text-sm">
                ✅ Your message has been sent successfully!
              </p>
            )}
            {status.error && (
              <p className="text-red-400 mt-4 text-sm">
                ❌ Oops! Something went wrong. Please try again later.
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
