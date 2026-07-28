import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AboutEvents() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#050507] text-white px-8 py-16">
        <div className="max-w-7xl mx-auto">

          <div className="flex items-center justify-center gap-6 mb-16">
            <div className="h-[2px] w-40 bg-gray-500"></div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-widest text-gray-300">
              ABOUT THE EVENTS
            </h1>
            <div className="h-[2px] w-40 bg-gray-500"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">

            <div className="space-y-40">
              <p className="text-lg text-gray-300 max-w-md leading-7">
                We bring you a simple and premium way to explore luxury events.
                You can book
                <span className="text-yellow-400"> birthdays, weddings, galas, concerts, and corporate events </span>
                in one place.
              </p>

              <p className="text-lg text-gray-300 max-w-md leading-7">
                No need to worry about searching different venues or schedules.
                CineLux gives you everything in an organized way, so you can simply
                <span className="text-yellow-400"> enjoy the experience.</span>
              </p>
            </div>

            <div className="relative min-h-[520px]">

              <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-500"></div>

              <div className="absolute left-[48%] top-4 w-5 h-5 rounded-full bg-gray-200"></div>
              <div className="absolute left-[54%] top-2">
                <p className="text-gray-300">Step 1</p>
                <h2 className="text-2xl font-bold">Explore</h2>
              </div>

              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622"
                className="absolute left-[5%] top-8 w-36 h-24 object-cover rounded shadow-lg"
              />

              <img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
                className="absolute left-[22%] top-32 w-36 h-24 object-cover rounded shadow-lg"
              />

              <div className="absolute left-[48%] top-48 w-5 h-5 rounded-full bg-gray-200"></div>
              <div className="absolute left-[54%] top-44">
                <p className="text-gray-300">Step 2</p>
                <h2 className="text-2xl font-bold">Choose</h2>
              </div>

              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865"
                className="absolute right-[5%] top-28 w-36 h-24 object-cover rounded shadow-lg"
              />

              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552"
                className="absolute right-[18%] top-64 w-36 h-24 object-cover rounded shadow-lg"
              />

              <div className="absolute left-[48%] top-[370px] w-5 h-5 rounded-full bg-gray-200"></div>
              <div className="absolute left-[54%] top-[360px]">
                <p className="text-gray-300">Step 3</p>
                <h2 className="text-2xl font-bold">Book</h2>
              </div>

              <img
                src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a"
                className="absolute left-[8%] bottom-10 w-36 h-24 object-cover rounded shadow-lg"
              />

              <img
                src="https://images.unsplash.com/photo-1528605248644-14dd04022da1"
                className="absolute right-[10%] bottom-2 w-36 h-24 object-cover rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

       <Footer />
    </>
  );
}

export default AboutEvents;