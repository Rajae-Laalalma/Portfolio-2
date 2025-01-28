import React, { useState } from "react";

const Contacts = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: false, email: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    let isValid = true;

   
    if (!formData.name.trim()) {
      setErrors((prev) => ({ ...prev, name: true }));
      isValid = false;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      setErrors((prev) => ({ ...prev, email: true }));
      isValid = false;
    }

    if (isValid) {
      
      e.target.submit();
    }
  };

  return (
    <div name="contact">
      <div id="Contact" className="w-full h-screen flex flex-col items-center bg-neutral-300">
        <div>
          <h1 className="pt-20 md:text-4xl text-xl text-blue-900 font-title font-bold flex justify-center">
            Contact
          </h1>
          <p className="flex justify-center md:text-3xl text-xl text-gray-500 py-6">
            Submit the form below to get in touch with me
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/bnllrejb"
            method="POST"
            className="flex flex-col gap-4 w-96"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className={`rounded px-2 h-12 border-2 ${
                errors.name ? "border-red-500" : "border-gray-400"
              } focus:outline-none`}
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500 text-sm">* enter your name</p>}

            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className={`rounded h-12 border-2 px-2 ${
                errors.email ? "border-red-500" : "border-gray-400"
              } focus:outline-none`}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">* enter your email</p>
            )}

            <textarea
              name="message"
              rows={10}
              placeholder="Enter your message"
              className="rounded border-2 border-gray-400 focus:outline-none px-2"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="w-32 h-10 rounded bg-violet-500 md:text-xl text-white"
              >
                Let's Talk
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;

