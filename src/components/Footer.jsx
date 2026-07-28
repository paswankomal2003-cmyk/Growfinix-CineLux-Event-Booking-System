import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#050507] text-white border-t border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-6 py-14">
        
        <div className="bg-[#16161d] border border-yellow-500/20 rounded-3xl p-8 mb-12 text-center">
          <h2 className="text-3xl font-bold text-yellow-400">
            Join The Luxury Experience
          </h2>

          <p className="text-gray-400 mt-3 mb-6">
            Subscribe for premium event updates and exclusive offers.
          </p>

          <div className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-[#0b0b0f] border border-gray-700 text-white px-5 py-3 rounded-full outline-none"
            />

            <button className="bg-yellow-500 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition">
              Subscribe
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-10">
          
          <div>
            <h2 className="text-3xl font-bold text-yellow-400">
               CineLux
            </h2>

            <p className="text-gray-400 mt-4 leading-7">
              Premium event booking platform for luxury birthdays, weddings,
              concerts, galas, and corporate celebrations.
            </p>

            <div className="flex gap-4 mt-6">
              {["f", "in", "x"].map((icon) => (
                <button
                  key={icon}
                  className="w-10 h-10 rounded-full bg-[#16161d] border border-yellow-500/20 text-yellow-400 hover:bg-yellow-500 hover:text-black transition"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li><Link to="/" className="hover:text-yellow-400 transition">Home</Link></li>
              <li><Link to="/events" className="hover:text-yellow-400 transition">Events</Link></li>
              <li><Link to="/about" className="hover:text-yellow-400 transition">About</Link></li>
              <li><Link to="/booking" className="hover:text-yellow-400 transition">Booking</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-5">
              Event Categories
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Wedding</li>
              <li>Corporate</li>
              <li>Concert</li>
              <li>Festival</li>
              <li>Luxury Gala</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-5">
              Contact
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>📍 Jaipur, Rajasthan</li>
              <li>✉ support@cineluxevents.com</li>
              <li>☎ +91 98765 43210</li>
              <li>⏰ Mon - Sat, 9 AM - 7 PM</li>
            </ul>

            <button
              onClick={scrollToTop}
              className="mt-6 bg-yellow-500 text-black px-5 py-2 rounded-full font-bold hover:bg-yellow-400 transition"
            >
              Back to Top ↑
            </button>
          </div>
        </div>

        <div className="border-t border-yellow-500/20 mt-12 pt-6 text-center text-gray-500">
          © 2026 CineLux Event Booking System. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;