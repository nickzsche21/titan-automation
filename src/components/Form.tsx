import React from 'react';

const Form = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <div className="max-w-2xl w-full space-y-6 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] p-10 rounded-xl shadow-2xl border border-purple-500">
        <h1 className="text-4xl font-bold text-center text-white">Let's Automate Your Workflow</h1>
        <p className="text-center text-gray-300">
          Titan Automations by <span className="text-purple-400">Titan Media</span>
        </p>

        <form
          action="https://formsubmit.co/nikhil211884@gmail.com"
          method="POST"
          className="space-y-6"
        >
          {/* FormSubmit hidden config */}
          <input type="hidden" name="_cc" value="titanmediaoffice@gmail.com" />
          <input type="hidden" name="_next" value="https://titanautomation.site/thanks" />
          <input type="hidden" name="_captcha" value="false" />

          {/* User Inputs */}
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-purple-500 focus:outline-none"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-purple-500 focus:outline-none"
          />

          <textarea
            name="message"
            placeholder="What do you want to automate?"
            rows={5}
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-purple-500 focus:outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 text-lg font-bold bg-purple-600 hover:bg-purple-700 transition rounded-lg"
          >
            🚀 Submit & Automate
          </button>
        </form>

        <div className="text-center pt-6">
          <p className="text-sm text-gray-400">
            📞 Contact: <a href="tel:+917800709475" className="underline text-purple-400">7800709475</a>
          </p>
          <p className="text-sm text-gray-400 mt-2">
            📅 Book a Discovery Call:{" "}
            <a
              href="https://calendly.com/nikhil211884/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-purple-400"
            >
              Click here
            </a>
          </p>
        </div>
      </div>

      {/* Custom cursor */}
      <style>{`
        body {
          cursor: url('https://cur.cursors-4u.net/symbols/sym-9/sym875.cur'), auto;
        }
      `}</style>
    </div>
  );
};

export default Form;
