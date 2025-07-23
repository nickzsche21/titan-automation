// src/App.tsx
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col items-center justify-center px-4"
      style={{
        background: "radial-gradient(circle at center, #0f0f3e, #000)",
        backgroundImage: "url('https://i.imgur.com/oYiTqum.jpg')", // galaxy bg
        backgroundSize: "cover",
        cursor: "url('https://cur.cursors-4u.net/nature/nat-10/nat920.cur'), auto",
      }}
    >
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-white drop-shadow-xl">🚀 Titan Automations</h1>
        <p className="text-lg text-gray-200">
          Automate your growth. Scale like never before.
        </p>
      </div>

      <form
        action="https://formsubmit.co/nikhil211884@gmail.com"
        method="POST"
        className="mt-10 w-full max-w-lg bg-white/10 p-8 rounded-2xl backdrop-blur-md shadow-xl space-y-4"
      >
        {/* Hidden field to CC second email */}
        <input type="hidden" name="_cc" value="titanmediaoffice@gmail.com" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://titanautomation.site/thank-you" />

        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="w-full p-3 rounded bg-white text-black placeholder-gray-600"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="w-full p-3 rounded bg-white text-black placeholder-gray-600"
        />
        <textarea
          name="message"
          required
          placeholder="Your Message"
          rows={5}
          className="w-full p-3 rounded bg-white text-black placeholder-gray-600"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded transition duration-300"
        >
          🚀 Send Inquiry
        </button>
      </form>

      <div className="mt-6 text-center text-white">
        <p>Or directly book a discovery call with us:</p>
        <a
          href="https://calendly.com/nikhil211884/30min"
          target="_blank"
          className="underline text-blue-400 hover:text-blue-600 transition"
        >
          calendly.com/nikhil211884/30min
        </a>
      </div>

      <footer className="mt-12 text-gray-400 text-sm">
        Website: <a href="https://titanautomation.site" className="underline">titanautomation.site</a> <br />
        Contact: +91 7800709475
      </footer>
    </div>
  );
}

export default App;
