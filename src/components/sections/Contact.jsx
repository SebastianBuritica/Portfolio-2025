import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending...' });

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus({ type: '', message: '' }), 3000);
      })
      .catch((error) => {
        setStatus({ type: 'error', message: 'Oops! Something went wrong. Please try again.' });
        setTimeout(() => setStatus({ type: '', message: '' }), 3000);
      });
  };

  const inputClasses = "w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-purple-700 focus:bg-purple-700/5";

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-12 sm:py-20">
      <RevealOnScroll>
        <div className="w-[90vw] max-w-[800px] px-4 sm:px-6 md:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-700 to-violet-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className={inputClasses}
                placeholder="Name..."
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className={inputClasses}
                placeholder="example@gmail.com"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className={inputClasses}
                placeholder="Your Message..."
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            {status.message && (
              <div className={`text-center p-2 rounded ${
                status.type === 'success' ? 'bg-green-500/20 text-green-200' :
                status.type === 'error' ? 'bg-red-500/20 text-red-200' :
                'bg-purple-500/20 text-purple-200'
              }`}>
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={status.type === 'loading'}
              className="w-full bg-purple-700 text-white py-3 px-6 rounded font-medium transition-all duration-300 
                relative overflow-hidden hover:-translate-y-0.5 hover:shadow-lg 
                hover:shadow-purple-700/20 disabled:opacity-50 disabled:hover:translate-y-0 
                disabled:hover:shadow-none"
            >
              {status.type === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};