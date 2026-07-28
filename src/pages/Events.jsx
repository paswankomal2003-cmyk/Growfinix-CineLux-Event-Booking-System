import { eventsData } from "../data/eventsData";
import EventCard from "../components/EventCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Events() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#0b0b0f] text-white px-8 py-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-6">
            <div className="h-[1px] w-24 md:w-52 bg-yellow-500/40"></div>

            <h1 className="text-4xl md:text-7xl font-black tracking-[8px] text-gray-200 uppercase">
              Luxury Events
            </h1>

            <div className="h-[1px] w-24 md:w-52 bg-yellow-500/40"></div>
          </div>

          <p className="text-gray-400 mt-8 text-lg max-w-3xl mx-auto">
            Discover unforgettable celebrations, luxury experiences, premium
            venues, corporate galas, concerts, festivals, networking events and
            world-class entertainment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>

        <Footer />
    </>
  );
}

export default Events;