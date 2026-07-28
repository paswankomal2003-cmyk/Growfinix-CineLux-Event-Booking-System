import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-[#0b0b0f] text-white">
        <section className="min-h-screen px-8 py-20 flex items-center">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-yellow-400 font-semibold mb-4">
                PREMIUM EVENT BOOKING
              </p>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Book Luxury Events With Cinematic Experience
              </h1>

              <p className="text-gray-400 mt-6 text-lg max-w-xl">
                Discover and book premium birthdays, weddings, corporate galas,
                concerts, and luxury celebrations with real-time ticket booking.
              </p>

              <div className="flex gap-4 mt-8">
                <Link
                  to="/events"
                  className="bg-yellow-500 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-400"
                >
                  Explore Events
                </Link>

                <Link
                  to="/booking"
                  className="border border-yellow-500 text-yellow-400 px-8 py-3 rounded-full font-bold hover:bg-yellow-500 hover:text-black"
                >
                  Book Now
                </Link>
              </div>
            </div>

            <div className="bg-[#16161d] border border-yellow-500/20 rounded-3xl p-5 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
                alt="Luxury Event"
                className="rounded-2xl h-[420px] w-full object-cover"
              />

              <div className="mt-5">
                <h2 className="text-2xl font-bold text-yellow-400">
                  Golden Luxury Gala
                </h2>
                <p className="text-gray-400 mt-2">
                  VIP gala night with premium ambience and exclusive experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 pb-20">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              ["500+", "Events"],
              ["20K+", "Tickets Booked"],
              ["50+", "Premium Venues"],
              ["4.9", "User Rating"],
            ].map((item) => (
              <div
                key={item[1]}
                className="bg-[#16161d] p-6 rounded-2xl text-center border border-yellow-500/20"
              >
                <h3 className="text-4xl font-bold text-yellow-400">
                  {item[0]}
                </h3>
                <p className="text-gray-400 mt-2">{item[1]}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-8 pb-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-yellow-400 mb-8">
              Featured Events
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Royal Birthday Night",
                  image:
                    "https://images.unsplash.com/photo-1464349153735-7db50ed83c84",
                },
                {
                  title: "Corporate Excellence Awards",
                  image:
                    "https://images.unsplash.com/photo-1511578314322-379afb476865",
                },
                {
                  title: "Dream Wedding Reception",
                  image:
                    "https://images.unsplash.com/photo-1519741497674-611481863552",
                },
              ].map((event) => (
                <div
                  key={event.title}
                  className="bg-[#16161d] rounded-2xl overflow-hidden border border-yellow-500/20"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-64 w-full object-cover"
                  />

                  <div className="p-6">
                    <h3 className="text-2xl font-bold">{event.title}</h3>
                    <p className="text-gray-400 mt-3">
                      Premium event experience with beautiful ambience and smooth
                      booking.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-8 pb-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-yellow-400 mb-8">
              Why Choose CineLux?
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                "Secure Booking",
                "Premium Venues",
                "Real-Time Tickets",
                "Easy Event Discovery",
              ].map((title) => (
                <div
                  key={title}
                  className="bg-[#16161d] p-6 rounded-2xl border border-yellow-500/20"
                >
                  <h3 className="text-xl font-bold text-yellow-400">
                    {title}
                  </h3>
                  <p className="text-gray-400 mt-3">
                    Enjoy a smooth and reliable event booking experience.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-8 pb-20">
          <div className="max-w-7xl mx-auto bg-gradient-to-r from-yellow-500 to-yellow-300 text-black rounded-3xl p-10 text-center">
            <h2 className="text-4xl font-bold">
              Ready to plan your next premium event?
            </h2>

            <Link
              to="/booking"
              className="inline-block mt-6 bg-black text-yellow-400 px-8 py-3 rounded-full font-bold"
            >
              Start Booking
            </Link>
          </div>
        </section>
      </main>

        <Footer />
    </>
  );
}

export default Home;