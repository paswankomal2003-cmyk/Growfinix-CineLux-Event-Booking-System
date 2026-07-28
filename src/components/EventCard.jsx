import { Link } from "react-router-dom";

function EventCard({ event }) {
  return (
    <div className="bg-[#16161d] rounded-2xl overflow-hidden shadow-xl border border-yellow-500/10 hover:border-yellow-500/40 transition duration-300">

      <img
        src={event.image}
        alt={event.title}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">

        <span className="inline-block bg-yellow-500/10 text-yellow-400 px-3 py-1 rounded-full text-sm mb-3">
          {event.category}
        </span>

        <h2 className="text-2xl font-bold text-white mb-3">
          {event.title}
        </h2>

        <p className="text-gray-400 mb-4">
          {event.description}
        </p>

        <div className="space-y-2 mb-5">
          <p className="text-gray-300">
            📍 {event.location}
          </p>

          <p className="text-gray-300">
            📅 {event.date}
          </p>
        </div>

        <div className="flex justify-between items-center">

          <h3 className="text-2xl font-bold text-yellow-400">
            ₹{event.price}
          </h3>

          <Link
            to="/booking"
            className="bg-yellow-500 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-400 transition"
          >
            Book Now
          </Link>

        </div>

      </div>
    </div>
  );
}

export default EventCard;