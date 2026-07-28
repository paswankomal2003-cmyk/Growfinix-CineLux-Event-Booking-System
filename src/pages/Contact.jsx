import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#0b0b0f] text-white px-6 py-10">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-yellow-400">Contact Us</h1>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Have questions about bookings, tickets, event packages, or premium
            experiences? Our team is here to help.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 rounded-3xl overflow-hidden border border-yellow-500/20 shadow-2xl">
            
            <div className="p-8 bg-[#111118]">
              <h2 className="text-3xl font-bold text-yellow-400 mb-5">
                Get in Touch
              </h2>

              <p className="text-gray-300 mb-6 leading-7">
                Whether you're planning a luxury birthday celebration, wedding,
                corporate gala, or entertainment event, we're ready to help you.
              </p>

              <div className="space-y-5">
                <div>
                  <h3 className="text-yellow-400 font-semibold">📍 Head Office</h3>
                  <p className="text-gray-300">CineLux Events</p>
                  <p className="text-gray-400">Jaipur, Rajasthan, India</p>
                </div>

                <div>
                  <h3 className="text-yellow-400 font-semibold">✉ Email Us</h3>
                  <p className="text-gray-300">support@cineluxevents.com</p>
                </div>

                <div>
                  <h3 className="text-yellow-400 font-semibold">☎ Call Us</h3>
                  <p className="text-gray-300">+91 98765 43210</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-[#1a1a22]">
              <h2 className="text-3xl font-bold text-yellow-400 mb-6">
                Send Us a Message
              </h2>

              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input className="bg-[#0b0b0f] border border-gray-700 text-white p-3 rounded-lg outline-none" placeholder="Your Name" />
                  <input className="bg-[#0b0b0f] border border-gray-700 text-white p-3 rounded-lg outline-none" placeholder="Company" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <input className="bg-[#0b0b0f] border border-gray-700 text-white p-3 rounded-lg outline-none" placeholder="Phone Number" />
                  <input className="bg-[#0b0b0f] border border-gray-700 text-white p-3 rounded-lg outline-none" placeholder="Email Address" />
                </div>

                <input className="bg-[#0b0b0f] border border-gray-700 text-white p-3 rounded-lg outline-none w-full" placeholder="Subject" />

                <textarea
                  rows="4"
                  className="bg-[#0b0b0f] border border-gray-700 text-white p-3 rounded-lg outline-none w-full resize-none"
                  placeholder="Write your message..."
                ></textarea>

                <button className="w-full bg-yellow-500 text-black py-3 rounded-full font-bold hover:bg-yellow-400">
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

        <Footer />
    </>
  );
}

export default Contact;