import { useState } from "react";
import Navbar from "../components/Navbar";
import { eventsData } from "../data/eventsData";
import Footer from "../components/Footer";

function Booking() {
  const [selectedEventId, setSelectedEventId] = useState(eventsData[0]?.id || 1);
  const [tickets, setTickets] = useState(1);

  const selectedEvent =
    eventsData.find((event) => event.id === Number(selectedEventId)) ||
    eventsData[0];

  const totalPrice = selectedEvent.price * tickets;

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#0b0b0f] text-white px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-yellow-400">
            Reserve Your Luxury Experience
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Choose your premium event, select tickets, and confirm your booking
            with a smooth CineLux experience.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="bg-[#16161d] rounded-3xl overflow-hidden border border-yellow-500/20 shadow-2xl">
            <img
              src={selectedEvent.image}
              alt={selectedEvent.title}
              className="w-full h-80 object-cover"
            />

            <div className="p-8">
              <p className="text-yellow-400 font-semibold">
                {selectedEvent.category}
              </p>

              <h2 className="text-3xl font-bold mt-2">
                {selectedEvent.title}
              </h2>

              <p className="text-gray-400 mt-4">
                {selectedEvent.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-[#0b0b0f] p-4 rounded-xl">
                  <p className="text-gray-400">Location</p>
                  <h3 className="font-bold">{selectedEvent.location}</h3>
                </div>

                <div className="bg-[#0b0b0f] p-4 rounded-xl">
                  <p className="text-gray-400">Date</p>
                  <h3 className="font-bold">{selectedEvent.date}</h3>
                </div>

                <div className="bg-[#0b0b0f] p-4 rounded-xl">
                  <p className="text-gray-400">Ticket Price</p>
                  <h3 className="font-bold text-yellow-400">
                    ₹{selectedEvent.price}
                  </h3>
                </div>

                <div className="bg-[#0b0b0f] p-4 rounded-xl">
                  <p className="text-gray-400">Available Seats</p>
                  <h3 className="font-bold">Limited</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#16161d] rounded-3xl border border-yellow-500/20 p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">
              Booking Details
            </h2>

            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="bg-[#0b0b0f] border border-gray-700 p-3 rounded-xl outline-none"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-[#0b0b0f] border border-gray-700 p-3 rounded-xl outline-none"
                />
              </div>

              <input
                type="text"
                placeholder="Phone Number"
                className="bg-[#0b0b0f] border border-gray-700 p-3 rounded-xl outline-none w-full"
              />

              <select
                value={selectedEventId}
                onChange={(e) => setSelectedEventId(e.target.value)}
                className="bg-[#0b0b0f] border border-gray-700 p-3 rounded-xl outline-none w-full"
              >
                {eventsData.map((event) => (
                  <option key={event.id} value={event.id}>
                    {event.title}
                  </option>
                ))}
              </select>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="number"
                  min="1"
                  value={tickets}
                  onChange={(e) => setTickets(Number(e.target.value))}
                  className="bg-[#0b0b0f] border border-gray-700 p-3 rounded-xl outline-none"
                />

                <input
                  type="date"
                  className="bg-[#0b0b0f] border border-gray-700 p-3 rounded-xl outline-none"
                />
              </div>

              <input
                type="time"
                className="bg-[#0b0b0f] border border-gray-700 p-3 rounded-xl outline-none w-full"
              />

              <div className="bg-[#0b0b0f] rounded-2xl p-5 border border-yellow-500/20">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">
                  Price Summary
                </h3>

                <div className="flex justify-between text-gray-300 mb-2">
                  <span>Ticket Price</span>
                  <span>₹{selectedEvent.price}</span>
                </div>

                <div className="flex justify-between text-gray-300 mb-2">
                  <span>Quantity</span>
                  <span>{tickets}</span>
                </div>

                <div className="border-t border-gray-700 mt-3 pt-3 flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="text-yellow-400">₹{totalPrice}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 text-black py-3 rounded-full font-bold hover:bg-yellow-400 transition"
              >
                Confirm Booking
              </button>
            </form>

            <div className="grid grid-cols-3 gap-3 mt-6 text-center text-sm">
              <div className="bg-[#0b0b0f] p-3 rounded-xl text-gray-300">
                🔒 Secure
              </div>
              <div className="bg-[#0b0b0f] p-3 rounded-xl text-gray-300">
                ⚡ Instant
              </div>
              <div className="bg-[#0b0b0f] p-3 rounded-xl text-gray-300">
                ⭐ VIP Support
              </div>
            </div>
          </div>
        </div>
      </section>

        <Footer />
    </>
  );
}

export default Booking;