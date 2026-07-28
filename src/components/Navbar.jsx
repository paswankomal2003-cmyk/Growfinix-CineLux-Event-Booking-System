import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#0b0b0f] border-b border-yellow-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-yellow-400"
        >
           CineLux
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-yellow-400 transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/events"
              className="hover:text-yellow-400 transition"
            >
              Events
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="hover:text-yellow-400 transition"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="hover:text-yellow-400 transition"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-3">

          <Link
            to="/login"
            className="bg-[#16161d] border border-yellow-500/30 text-white px-5 py-2 rounded-full font-medium hover:border-yellow-500 hover:text-yellow-400 transition"
          >
            Login
          </Link>

          <Link
            to="/booking"
            className="bg-yellow-500 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-400 transition"
          >
            Book Now
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;